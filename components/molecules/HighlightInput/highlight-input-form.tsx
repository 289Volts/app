import { useEffect, useRef, useState } from "react";

import { FiCalendar, FiEdit2 } from "react-icons/fi";
import { format } from "date-fns";

import { HiOutlineSparkles } from "react-icons/hi";
import { RxPencil1 } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsTagFill } from "react-icons/bs";
import { useDebounce } from "rooks";
import { MdError } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiGitMerge } from "react-icons/bi";
import { VscIssues } from "react-icons/vsc";
import { A11y, Pagination } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import Button from "components/atoms/Button/button";
import Tooltip from "components/atoms/Tooltip/tooltip";

import { createHighlights } from "lib/hooks/createHighlights";
import {
  getGithubIssueDetails,
  getGithubIssueComments,
  getPullRequestCommitMessageFromUrl,
  isValidIssueUrl,
  isValidPullRequestUrl,
  getAvatarByUsername,
  generateRepoParts,
} from "lib/utils/github";

import { fetchGithubPRInfo } from "lib/hooks/fetchGithubPRInfo";
import { useToast } from "lib/hooks/useToast";
import TextInput from "components/atoms/TextInput/text-input";
import { generatePrHighlightSummaryByCommitMsg } from "lib/utils/generate-pr-highlight-summary";
import Fab from "components/atoms/Fab/fab";
import { TypeWriterTextArea } from "components/atoms/TypeWriterTextArea/type-writer-text-area";
import { fetchGithubIssueInfo } from "lib/hooks/fetchGithubIssueInfo";
import generateIssueHighlightSummary from "lib/utils/generate-issue-highlight-summary";
import { fetchDevToBlogInfo } from "lib/hooks/fetchDevToBlogInfo";
import { getBlogDetails, isValidBlogUrl } from "lib/utils/dev-to";
import generateBlogHighlightSummary from "lib/utils/generate-blog-highlight-summary";
import Search from "components/atoms/Search/search";
import useSupabaseAuth from "lib/hooks/useSupabaseAuth";
import { Calendar } from "../Calendar/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover/popover";
import GhOpenGraphImg from "../GhOpenGraphImg/gh-open-graph-img";
import DevToSocialImg from "../DevToSocialImage/dev-to-social-img";
import CardRepoList, { RepoList } from "../CardRepoList/card-repo-list";
import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../Dialog/dialog";

import "swiper/css";
import "swiper/css/pagination";

interface HighlightInputFormProps {
  refreshCallback?: Function;
}

interface AddRepoProps {
  taggedRepos: RepoList[];
  deleteTaggedRepo: (repoName: string) => void;
  showAddRepoDialog: (add: boolean) => void;
}

function AddRepo({ taggedRepos, deleteTaggedRepo, showAddRepoDialog }: AddRepoProps) {
  return (
    <div className={`flex items-center justify-between w-full gap-1 px-2 py-1 text-sm bg-white border rounded-lg h-10`}>
      <div className="flex w-full">
        <CardRepoList repoList={taggedRepos} deletable={true} onDelete={(repoName) => deleteTaggedRepo(repoName)} />
        <Tooltip content={"Add a repo"}>
          <button
            className="flex gap-1  p-1 pr-2 border-[1px] border-light-slate-6 rounded-lg text-light-slate-12 items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              showAddRepoDialog(true);
            }}
          >
            <BsTagFill className="rounded-[4px] overflow-hidden text-light-slate-11" />
            <span className={"max-w-[45px] md:max-w-[100px] truncate text-light-slate-11 text-xs"}>Add a repo</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

const HighlightInputForm = ({ refreshCallback }: HighlightInputFormProps): JSX.Element => {
  const { providerToken, user: loggedInUser } = useSupabaseAuth();
  const [isDivFocused, setIsDivFocused] = useState(false);
  const [isSummaryButtonDisabled, setIsSummaryButtonDisabled] = useState(false);
  const [isFormOpenMobile, setIsFormOpenMobile] = useState(false);
  const [addTaggedRepoFormOpen, setAddTaggedRepoFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [bodyText, setBodyText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [highlightLink, setHighlightLink] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [taggedRepoList, setTaggedRepoList] = useState<RepoList[]>([]);
  const [taggedRepoSearchTerm, setTaggedRepoSearchTerm] = useState<string>("");
  const [repoTagSuggestions, setRepoTagSuggestions] = useState<string[]>([]);
  const [tagRepoSearchLoading, setTagRepoSearchLoading] = useState<boolean>(false);
  const [errorMsg, setError] = useState("");
  const [highlightSuggestions, setHighlightSuggestions] = useState<any[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState<boolean>(false);
  const generateSummary = useRef(false);

  const fetchAllUserHighlights = async (page: number): Promise<DbHighlight[]> => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${loggedInUser?.user_metadata.user_name}/highlights?page=${page}`,
      {
        ...(providerToken
          ? {
              headers: {
                Authorization: `Bearer ${providerToken}`,
              },
            }
          : {}),
      }
    );

    if (req.ok) {
      const res = await req.json();
      if (res.meta.hasNextPage) {
        const nextPage = await fetchAllUserHighlights(page + 1);
        return [...res.data, ...nextPage];
      }
      return res.data;
    }
    return [];
  };

  const charLimit = 500;

  const [date, setDate] = useState<Date | undefined>();

  const { toast } = useToast();

  const validCharLimit = () => {
    return charCount - highlightLink.length <= charLimit;
  };

  const handleTextAreaInputChange = (value: string) => {
    setBodyText(value);
  };

  useEffect(() => {
    // disable scroll when form is open
    if (isFormOpenMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFormOpenMobile]);

  // get the user's latest pull requests and issues that don't yet have highlights associated with them
  // and suggest them to the user when they are creating a highlight.
  useEffect(() => {
    const fetchLatestIssues = async () => {
      const req = await fetch(
        `https://api.github.com/search/issues?q=author:${loggedInUser?.user_metadata.user_name}+is:issue&sort=updated&per_page=5`,
        {
          ...(providerToken
            ? {
                headers: {
                  Authorization: `Bearer ${providerToken}`,
                },
              }
            : {}),
        }
      );

      if (req.ok) {
        const res = await req.json();
        const issues = res.items.map((item: any) => ({
          title: item.title,
          url: item.html_url,
          type: "issue",
          status: item.state,
          status_reason: item.state_reason,
        }));

        return issues;
      }
    };

    const fetchLatestMergedPullRequests = async () => {
      const mergedReq = await fetch(
        `https://api.github.com/search/issues?q=author:${loggedInUser?.user_metadata.user_name}+is:pr+is:merged&sort=updated&per_page=5`,
        {
          ...(providerToken
            ? {
                headers: {
                  Authorization: `Bearer ${providerToken}`,
                },
              }
            : {}),
        }
      );

      if (mergedReq.ok) {
        const res = await mergedReq.json();
        const pullRequests = res.items.map((item: any) => ({
          title: item.title,
          url: item.html_url,
          type: "pull_request",
          status: item.state,
          status_reason: "merged",
        }));

        return pullRequests;
      }
    };

    const fetchLatestOpenPullRequests = async () => {
      const openReq = await fetch(
        `https://api.github.com/search/issues?q=author:${loggedInUser?.user_metadata.user_name}+is:pr+is:open&sort=updated&per_page=5`,
        {
          ...(providerToken
            ? {
                headers: {
                  Authorization: `Bearer ${providerToken}`,
                },
              }
            : {}),
        }
      );

      if (openReq.ok) {
        const res = await openReq.json();
        const pullRequests = res.items.map((item: any) => ({
          title: item.title,
          url: item.html_url,
          type: "pull_request",
          status: item.state,
          status_reason: "open",
        }));

        return pullRequests;
      }
    };

    const removeAlreadyHighlightedSuggestions = async (newHighlightSuggestions: any[]) => {
      // get all the highlights of the user
      const allHighlights = await fetchAllUserHighlights(1);

      // get all the urls of the highlights
      const allHighlightUrls = allHighlights.map((highlight) => highlight.url);

      // remove any suggestions that have already been highlighted
      const filteredSuggestions = newHighlightSuggestions.filter(
        (suggestion: { url: string }) => !allHighlightUrls.includes(suggestion.url)
      );

      return filteredSuggestions;
    };

    const fetchData = async () => {
      try {
        const issues = await fetchLatestIssues();
        const mergedPullRequests = await fetchLatestMergedPullRequests();
        const openPullRequests = await fetchLatestOpenPullRequests();

        const newHighlightSuggestions = [...issues, ...mergedPullRequests, ...openPullRequests];

        const unhighlightedSuggestions = await removeAlreadyHighlightedSuggestions(newHighlightSuggestions);

        // make pages of 3 suggestions
        const pages = [];
        for (let i = 0; i < unhighlightedSuggestions.length; i += 3) {
          pages.push(unhighlightedSuggestions.slice(i, i + 3));
        }
        setHighlightSuggestions(pages);
        setLoadingSuggestions(false);
      } catch (err) {
        console.log(err);
      }
    };
    setLoadingSuggestions(true);
    fetchData();
  }, [providerToken, loggedInUser]);

  // when user updates the highlight link, check if its a github link
  // if its a github link, automatically tag the repo if its not already tagged
  useEffect(() => {
    if (highlightLink && (isValidPullRequestUrl(highlightLink) || isValidIssueUrl(highlightLink))) {
      if (generateSummary.current) {
        generateSummary.current = false;
        handleGenerateHighlightSummary();
      }
      const { apiPaths } = generateRepoParts(highlightLink);
      const { repoName, orgName, issueId } = apiPaths;
      // default to the GitHub avatar if we can't find the avatar for the organization.
      const repoIcon = getAvatarByUsername(orgName ?? "github", 60);
      if (taggedRepoList.some((repo) => repo.repoName === repoName)) return;
      const newRepo = { repoName, repoOwner: orgName, repoIcon } as RepoList;
      const newTaggedRepoList = [...taggedRepoList, newRepo];
      setTaggedRepoList(newTaggedRepoList);
    }
  }, [highlightLink]);

  const handleTaggedRepoAdd = async (repoFullName: string) => {
    if (taggedRepoList.length >= 3) {
      setError("You can only tag up to 3 repos!");
      return;
    }

    if (taggedRepoList.some((repo) => `${repo.repoOwner}/${repo.repoName}` === repoFullName)) {
      setError("Repo already tagged!");
      return;
    }

    // fetch github api to check if the repo exists
    const req = await fetch(`https://api.github.com/repos/${repoFullName}`, {
      ...(providerToken
        ? {
            headers: {
              Authorization: `Bearer ${providerToken}`,
            },
          }
        : {}),
    });

    if (!req.ok) {
      setError("Repo not found!");
      return;
    }

    const [ownerName, repoName] = repoFullName.split("/");
    const repoIcon = getAvatarByUsername(ownerName, 60);
    const newTaggedRepoList = [...taggedRepoList, { repoName, repoOwner: ownerName, repoIcon }];
    setTaggedRepoList(newTaggedRepoList);
  };

  const handleTaggedRepoDelete = (repoName: string) => {
    const newTaggedRepoList = taggedRepoList.filter((repo) => repo.repoName !== repoName);
    setTaggedRepoList(newTaggedRepoList);
  };

  const handleGenerateHighlightSummary = async () => {
    if (
      !highlightLink ||
      (!isValidPullRequestUrl(highlightLink) && !isValidIssueUrl(highlightLink) && !isValidBlogUrl(highlightLink))
    ) {
      setError("Please provide a valid pull request, issue or dev.to blog link!");
      return;
    }

    setIsSummaryButtonDisabled(true);

    let summary: string | null;
    if (isValidPullRequestUrl(highlightLink)) {
      const commitMessages = await getPullRequestCommitMessageFromUrl(highlightLink);
      summary = await generatePrHighlightSummaryByCommitMsg(commitMessages);
    } else if (isValidIssueUrl(highlightLink)) {
      const { title: issueTitle, body: issueBody } = await getGithubIssueDetails(highlightLink);
      const issueComments = await getGithubIssueComments(highlightLink);
      summary = await generateIssueHighlightSummary(issueTitle, issueBody, issueComments);
    } else {
      const { title: blogTitle, markdown: blogMarkdown } = await getBlogDetails(highlightLink);
      summary = await generateBlogHighlightSummary(blogTitle, blogMarkdown);
    }

    setIsSummaryButtonDisabled(false);

    if (summary) {
      setBodyText(summary);

      setIsTyping(true);

      // Set timeout to stop typing animation
      setTimeout(() => {
        setIsTyping(false);
      }, 1000);
      setCharCount(summary.length);
    } else {
      setError("An error occured!");
    }
  };

  // Handle submit highlights
  const handlePostHighlight = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const highlight = bodyText;

    if (isValidPullRequestUrl(highlightLink) || isValidIssueUrl(highlightLink) || isValidBlogUrl(highlightLink)) {
      // generateApiPrUrl will return an object with repoName, orgName and issueId
      // it can work with both issue and pull request links
      const highlightType = isValidIssueUrl(highlightLink)
        ? "issue"
        : isValidPullRequestUrl(highlightLink)
        ? "pull_request"
        : "blog_post";
      let res: any = {};
      if (highlightType === "pull_request" || highlightType === "issue") {
        const { apiPaths } = generateRepoParts(highlightLink);
        const { repoName, orgName, issueId } = apiPaths;
        setLoading(true);
        // Api validation to check validity of github pull request link match
        res =
          highlightType === "issue"
            ? await fetchGithubIssueInfo(orgName, repoName, issueId)
            : await fetchGithubPRInfo(orgName, repoName, issueId);
      } else {
        res = await fetchDevToBlogInfo(highlightLink);
      }

      const taggedRepoFullNames = taggedRepoList.map((repo) => `${repo.repoOwner}/${repo.repoName}`);

      if (res.isError) {
        setLoading(false);

        setError("Please provide a valid pull request, issue or dev.to blog link!");
        return;
      } else {
        setLoading(true);
        const res = await createHighlights({
          highlight,
          url: highlightLink,
          shipped_at: date,
          type: highlightType,
          taggedRepos: taggedRepoFullNames,
        });

        setLoading(false);

        if (typeof res === "string") {
          setError(res);
        }

        refreshCallback && refreshCallback();
        setBodyText("");
        setHighlightLink("");
        setDate(undefined);
        setIsDivFocused(false);
        setIsFormOpenMobile(false);
        toast({ description: "Highlight Posted!", title: "Success", variant: "success" });
      }
    } else {
      setError("Please provide a valid pull request, issue or dev.to blog link!");
    }
  };

  const updateSuggestionsDebounced = useDebounce(async () => {
    setTagRepoSearchLoading(true);

    const req = await fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        `${taggedRepoSearchTerm} in:name in:repo:owner/name sort:updated`
      )}`,
      {
        ...(providerToken
          ? {
              headers: {
                Authorization: `Bearer ${providerToken}`,
              },
            }
          : {}),
      }
    );

    setTagRepoSearchLoading(false);
    if (req.ok) {
      const res = await req.json();
      const suggestions = res.items.map((item: any) => item.full_name);
      setRepoTagSuggestions(suggestions);
    }
  }, 250);

  useEffect(() => {
    setRepoTagSuggestions([]);
    if (!taggedRepoSearchTerm) return;
    updateSuggestionsDebounced();
  }, [taggedRepoSearchTerm]);

  return (
    <>
      <div className="flex flex-col flex-1 gap-4 max-sm:hidden">
        <div className="flex flex-col gap-2 p-2 overflow-hidden text-sm bg-white border rounded-lg">
          <div className="flex pr-2">
            <input
              maxLength={50}
              className="flex-1 font-normal placeholder:text-sm focus:outline-none"
              type="text"
              placeholder={"Post a highlight to show your work!"}
              id="highlight-create-input"
              onFocus={() => setIsDivFocused(true)}
            />
          </div>
        </div>
      </div>
      <Dialog
        onOpenChange={() => {
          setIsDivFocused(false);
        }}
        open={isDivFocused}
      >
        <DialogContent className="p-4 w-[33vw]" style={{ maxHeight: "80vh", overflow: "auto" }}>
          <DialogHeader>
            <DialogTitle>Post a highlight</DialogTitle>
          </DialogHeader>
          <DialogCloseButton onClick={() => setIsDivFocused(false)} />
          <form onSubmit={handlePostHighlight} className="flex flex-col gap-4 font-normal">
            {errorMsg && (
              <p className="inline-flex items-center gap-2 px-2 py-1 text-red-500 bg-red-100 border border-red-500 rounded-md w-full text-sm">
                <MdError size={20} /> {errorMsg}
              </p>
            )}
            <div className="flex flex-col gap-2 p-2 overflow-hidden text-sm bg-white border rounded-lg">
              <TypeWriterTextArea
                className={`resize-y min-h-[80px] max-h-99 font-normal placeholder:text-slate-400 text-light-slate-12 placeholder:font-normal placeholder:text-sm transition focus:outline-none rounded-lg ${
                  !isDivFocused ? "hidden" : ""
                }`}
                defaultRow={4}
                value={bodyText}
                placeholder={`Tell us about your highlight and add a link
              `}
                typewrite={isTyping}
                textContent={bodyText}
                onChangeText={(value) => {
                  handleTextAreaInputChange(value);
                  setCharCount(value.length);
                }}
                ref={textAreaRef}
              />

              <p className="flex justify-end gap-1 text-xs text-light-slate-9">
                <span className={`${!validCharLimit() && "text-red-600"}`}>
                  {!validCharLimit() ? `-${charCount - charLimit}` : charCount}
                </span>
                / <span>{charLimit}</span>
              </p>
            </div>

            <AddRepo
              taggedRepos={taggedRepoList}
              deleteTaggedRepo={handleTaggedRepoDelete}
              showAddRepoDialog={setAddTaggedRepoFormOpen}
            />

            <div className="flex">
              <div className="flex w-full gap-1 items-center">
                <Tooltip direction="top" content="Pick a date">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-2 p-2 text-base rounded-full text-light-slate-9 bg-light-slate-3">
                        <FiCalendar className="text-light-slate-11" />
                        {date && <span className="text-xs">{format(date, "PPP")}</span>}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white pointer-events-auto">
                      <Calendar
                        // block user's from selecting a future date
                        toDate={new Date()}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="border rounded-md"
                      />
                    </PopoverContent>
                  </Popover>
                </Tooltip>
                <Tooltip className="text-xs" direction="top" content="Auto-Summarize">
                  <button
                    disabled={isSummaryButtonDisabled}
                    type="button"
                    onClick={handleGenerateHighlightSummary}
                    className="p-2 rounded-full bg-light-slate-3 text-light-slate-11 disabled:cursor-not-allowed disabled:animate-pulse disabled:text-light-orange-9"
                  >
                    <HiOutlineSparkles className="text-base" />
                  </button>
                </Tooltip>
                <TextInput
                  className="text-sm shadow-none h-10 flex-none"
                  value={highlightLink}
                  handleChange={(value) => setHighlightLink(value)}
                  placeholder="Paste the URL to your PR, Issue, or Dev.to blog post."
                />
              </div>
            </div>

            {highlightLink && isDivFocused && highlightLink.includes("github") && (
              <GhOpenGraphImg className="max-sm:hidden lg:w-[33vw] md:w-[50vw]" githubLink={highlightLink} />
            )}
            {highlightLink && isDivFocused && highlightLink.includes("dev.to") && (
              <DevToSocialImg className="max-sm:hidden lg:w-[33vw] md:w-[50vw]" blogLink={highlightLink} />
            )}

            <Button
              loading={loading}
              disabled={!bodyText || !validCharLimit()}
              className="ml-auto max-sm:hidden "
              variant="primary"
            >
              Post
            </Button>

            <h1 className="text-md font-semibold text-slate-900">
              Highlight suggestions
              <span className="text-sm font-semibold text-light-slate-9 ml-2">Based on your latest activity</span>
            </h1>

            {loadingSuggestions ? (
              <div className="lg:w-[33vw] md:w-[50vw]">
                <Skeleton
                  count={3}
                  height={40}
                  style={{
                    margin: "0.5rem auto",
                  }}
                  className="w-full"
                />
              </div>
            ) : (
              <Swiper
                spaceBetween={8}
                slidesPerView={1}
                className="lg:w-[33vw] md:w-[50vw]"
                modules={[Pagination, A11y]}
                pagination={{
                  clickable: true,
                }}
                a11y={{
                  enabled: true,
                }}
              >
                {highlightSuggestions?.map((suggestionPage) => (
                  <SwiperSlide key={suggestionPage[0].url}>
                    <div className="flex flex-col gap-2 overflow-hidden text-sm w-full">
                      {suggestionPage.map(
                        (suggestion: {
                          url: string;
                          type: string;
                          status_reason: string;
                          status: string;
                          title: string;
                        }) => (
                          <div
                            key={suggestion.url}
                            className="flex items-center justify-between w-full gap-0.5 text-sm bg-white border rounded-lg p-2"
                          >
                            <div className="flex w-full gap-2">
                              {suggestion.type === "pull_request" && (
                                <BiGitMerge
                                  className={`
        text-xl
        ${suggestion.status_reason === "open" ? "text-green-600" : "text-purple-600"}
        `}
                                />
                              )}
                              {suggestion.type === "issue" && (
                                <VscIssues
                                  className={`
        text-xl
        ${
          suggestion.status === "open"
            ? "text-green-600"
            : suggestion.status_reason === "not_planned"
            ? "text-red-600"
            : "text-purple-600"
        }
      `}
                                />
                              )}
                              <p
                                className="text-light-slate-11 truncate max-w-[16rem]                         cursor-pointer hover:text-orange-600 transition"
                                onClick={() => {
                                  window.open(suggestion.url, "_blank");
                                }}
                              >
                                {suggestion.title}
                              </p>
                            </div>
                            <Tooltip className="text-xs modal-tooltip" direction="top" content="Fill content">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHighlightLink(suggestion.url);
                                }}
                                disabled={isSummaryButtonDisabled}
                                className="p-2 rounded-full hover:bg-light-slate-3 text-light-slate-11 transition"
                              >
                                <FiEdit2 className="text-xl" />
                              </button>
                            </Tooltip>

                            <Tooltip className="text-xs modal-tooltip" direction="top" content="Add and Summarize">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHighlightLink(suggestion.url);
                                  // setTitle(suggestion.title);
                                  generateSummary.current = true;
                                }}
                                disabled={isSummaryButtonDisabled}
                                className="p-2 rounded-full hover:bg-light-slate-3 text-light-slate-11 transition disabled:cursor-not-allowed disabled:animate-pulse disabled:text-light-orange-9"
                              >
                                <HiOutlineSparkles className="text-xl" />
                              </button>
                            </Tooltip>
                          </div>
                        )
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Repo Popup Form */}

      <Dialog open={addTaggedRepoFormOpen} onOpenChange={setAddTaggedRepoFormOpen}>
        <DialogContent
          className="p-2"
          style={{
            width: "33vw",
          }}
        >
          <DialogHeader>
            <DialogTitle>Add a repo</DialogTitle>
            <DialogDescription>Add a Repository to tag with this highlight.</DialogDescription>
          </DialogHeader>
          <Search
            isLoading={tagRepoSearchLoading}
            placeholder="Repository Full Name (ex: open-sauced/open-sauced)"
            className="text-sm font-normal !w-full px-2"
            name={"query"}
            suggestions={repoTagSuggestions}
            onChange={(value) => setTaggedRepoSearchTerm(value)}
            onSearch={(search) => setTaggedRepoSearchTerm(search as string)}
          />
          <DialogCloseButton onClick={() => setAddTaggedRepoFormOpen(false)} />
          <div className="flex justify-end gap-2">
            <Button variant="default" onClick={() => setAddTaggedRepoFormOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setAddTaggedRepoFormOpen(false);
                handleTaggedRepoAdd(taggedRepoSearchTerm);
              }}
              disabled={!taggedRepoSearchTerm}
            >
              Add
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Mobile popup form */}

      {isFormOpenMobile && (
        <div className="fixed left-0 right-0 z-30 h-screen py-4 transition bg-white top-24 md:hidden">
          <div className="flex items-center justify-between w-full px-2">
            <button onClick={() => setIsFormOpenMobile(false)} type="button">
              <IoClose className="text-2xl text-light-slate-10" />
            </button>
            <Button loading={loading} disabled={!bodyText || !validCharLimit()} className="py-0.5 " variant="primary">
              Post
            </Button>
          </div>
          <div className="flex flex-col gap-2 p-2 overflow-hidden text-sm bg-white ">
            <TypeWriterTextArea
              className="resize-y min-h-[80px] max-h-99 font-normal text-light-slate-11 mb-2 transition focus:outline-none rounded-lg "
              defaultRow={4}
              value={bodyText}
              placeholder={` Tell us about your highlight and add a link
            `}
              typewrite={isTyping}
              textContent={bodyText}
              onChangeText={(value) => {
                handleTextAreaInputChange(value);
                setCharCount(value.length);
              }}
              ref={textAreaRef}
            />
            <div className="flex items-center justify-between w-full">
              {date && <span className="text-xs text-light-slate-9">{format(date, "PPP")}</span>}
              <p className="flex justify-end gap-1 pb-2 ml-auto text-xs text-light-slate-9">
                <span className={`${!validCharLimit() && "text-red-600"}`}>
                  {!validCharLimit() ? `-${charCount - charLimit}` : charCount}
                </span>
                / <span>{charLimit}</span>
              </p>
            </div>

            <AddRepo
              taggedRepos={taggedRepoList}
              deleteTaggedRepo={handleTaggedRepoDelete}
              showAddRepoDialog={setAddTaggedRepoFormOpen}
            />

            <div className="flex">
              <div className="flex w-full gap-1">
                <Tooltip direction="top" content="Pick a date">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-2 p-2 text-base rounded-full text-light-slate-9 bg-light-slate-3">
                        <FiCalendar className="text-light-slate-11" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                      <Calendar
                        // block user's from selecting a future date
                        toDate={new Date()}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="border rounded-md"
                      />
                    </PopoverContent>
                  </Popover>
                </Tooltip>
                <Tooltip className="text-xs" direction="top" content="Auto-Summarize">
                  <button
                    disabled={isSummaryButtonDisabled}
                    type="button"
                    onClick={handleGenerateHighlightSummary}
                    className="p-2 rounded-full bg-light-slate-3 text-light-slate-11 disabled:cursor-not-allowed disabled:animate-pulse disabled:text-light-orange-9"
                  >
                    <HiOutlineSparkles className="text-base" />
                  </button>
                </Tooltip>
                <TextInput
                  className="text-xs"
                  value={highlightLink}
                  handleChange={(value) => setHighlightLink(value)}
                  placeholder="Paste your PR URL and get it auto-summarized!"
                />
              </div>
            </div>
            <h1 className="text-md font-semibold text-slate-900 my-2">Highlight suggestions</h1>
            <Swiper
              spaceBetween={8}
              slidesPerView={1}
              className="max-w-full"
              modules={[Pagination, A11y]}
              pagination={{
                clickable: true,
              }}
              a11y={{
                enabled: true,
              }}
            >
              {highlightSuggestions?.map((suggestionPage) => (
                <SwiperSlide key={suggestionPage[0].url}>
                  <div className="flex flex-col gap-2 overflow-hidden text-sm w-full">
                    {suggestionPage.map(
                      (suggestion: {
                        url: string;
                        type: string;
                        status_reason: string;
                        status: string;
                        title: string;
                      }) => (
                        <div
                          key={suggestion.url}
                          className="flex items-center justify-between w-full text-sm bg-white border rounded-lg p-2"
                        >
                          <div className="flex w-full gap-2">
                            {suggestion.type === "pull_request" && (
                              <BiGitMerge
                                className={`
                      text-xl
                      ${suggestion.status_reason === "open" ? "text-green-600" : "text-purple-600"}
                      `}
                              />
                            )}
                            {suggestion.type === "issue" && (
                              <VscIssues
                                className={`
                      text-xl
                      ${
                        suggestion.status === "open"
                          ? "text-green-600"
                          : suggestion.status_reason === "not_planned"
                          ? "text-red-600"
                          : "text-purple-600"
                      }
                    `}
                              />
                            )}
                            <p className="text-light-slate-11 truncate max-w-[16rem]">{suggestion.title}</p>
                          </div>
                          <Tooltip className="text-xs modal-tooltip" direction="top" content="Fill content">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setHighlightLink(suggestion.url);
                              }}
                              disabled={isSummaryButtonDisabled}
                              className="p-2 rounded-full hover:bg-light-slate-3 text-light-slate-11 transition"
                            >
                              <FiEdit2 className="text-xl" />
                            </button>
                          </Tooltip>

                          <Tooltip className="text-xs modal-tooltip" direction="top" content="Add and Summarize">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setHighlightLink(suggestion.url);
                                generateSummary.current = true;
                              }}
                              disabled={isSummaryButtonDisabled}
                              className="p-2 rounded-full hover:bg-light-slate-3 text-light-slate-11 transition disabled:cursor-not-allowed disabled:animate-pulse disabled:text-light-orange-9"
                            >
                              <HiOutlineSparkles className="text-base" />
                            </button>
                          </Tooltip>
                        </div>
                      )
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <Fab className="md:hidden">
        <div
          onClick={() => setIsFormOpenMobile(true)}
          className="p-3 mb-10 -mr-4 text-white rounded-full shadow-lg bg-light-orange-10"
          id="mobile-highlight-create-button"
        >
          <RxPencil1 className="text-3xl" />
        </div>
      </Fab>
    </>
  );
};

export default HighlightInputForm;
