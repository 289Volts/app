"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[1321],{"./components/atoms/SkeletonLoader/skeleton-wrapper.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SkeletonWrapper=function SkeletonWrapper(_ref){var classNames=_ref.classNames,count=_ref.count,width=_ref.width,height=_ref.height,radius=_ref.radius,skeletonArray=Array(count||1).fill(!0);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,skeletonArray.map((function(skeleton,index){return __jsx("div",{className:classNames||"",key:index},__jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{height:height,width:width,borderRadius:radius,count:1}))})))};SkeletonWrapper.__docgenInfo={description:"",methods:[],displayName:"SkeletonWrapper",props:{classNames:{required:!1,tsType:{name:"string"},description:""},count:{required:!1,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"number"},description:""},radius:{required:!1,tsType:{name:"number"},description:""}}},__webpack_exports__.Z=SkeletonWrapper;try{skeletonwrapper.displayName="skeletonwrapper",skeletonwrapper.__docgenInfo={description:"",displayName:"skeletonwrapper",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"]={docgenInfo:skeletonwrapper.__docgenInfo,name:"skeletonwrapper",path:"components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/title.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx"),_excluded=["children","level","weight","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Title=function Title(_ref){var children=_ref.children,_ref$level=_ref.level,level=void 0===_ref$level?1:_ref$level,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"medium":_ref$weight,className=_ref.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),TitleTag="h".concat(level);return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,null,__jsx(TitleTag,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,"font-".concat(weight))},props),children))};Title.displayName="Title",Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{level:{defaultValue:{value:"1",computed:!1},required:!1},weight:{defaultValue:{value:'"medium"',computed:!1},required:!1}}},__webpack_exports__.Z=Title;try{title.displayName="title",title.__docgenInfo={description:"",displayName:"title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"5"},{value:"3"},{value:"4"}]}},weight:{defaultValue:{value:"medium"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"thin"'},{value:'"extralight"'},{value:'"light"'},{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'},{value:'"black"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/title.tsx#title"]={docgenInfo:title.__docgenInfo,name:"title",path:"components/atoms/Typography/title.tsx#title"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["children","className","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,TypographyWrapper=function TypographyWrapper(_ref){var children=_ref.children,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?"sm":_ref$size,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper",TypographyWrapper.__docgenInfo={description:"",methods:[],displayName:"TypographyWrapper",props:{size:{defaultValue:{value:'"sm"',computed:!1},required:!1}}},__webpack_exports__.Z=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./stories/organisms/suggested-repo-list.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SuggestedRepositoriesListStory:function(){return SuggestedRepositoriesListStory},default:function(){return suggested_repo_list_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),title=__webpack_require__("./components/atoms/Typography/title.tsx"),suggested_repo=__webpack_require__("./components/molecules/SuggestedRepo/suggested-repo.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),__jsx=react.createElement,SuggestedRepositoriesList=function SuggestedRepositoriesList(_ref){var reposData=_ref.reposData,onAddRepo=_ref.onAddRepo,loadingData=_ref.loadingData,isLoading=_ref.isLoading;return __jsx("div",null,__jsx(title.Z,{className:"!text-light-slate-11 !text-sm",level:4},"Suggested Repositories:"),__jsx("div",{className:"flex flex-col gap-3 mt-6"},__jsx(react.Fragment,null,isLoading?__jsx(skeleton_wrapper.Z,{count:3,classNames:"w-3/4",height:60,radius:10}):reposData.map((function(item,index){return __jsx(suggested_repo.Z,{key:index,data:item,loadingData:loadingData,onAddRepo:onAddRepo})})))))};SuggestedRepositoriesList.displayName="SuggestedRepositoriesList",SuggestedRepositoriesList.__docgenInfo={description:"",methods:[],displayName:"SuggestedRepositoriesList",props:{reposData:{required:!0,tsType:{name:"Array",elements:[{name:"RepoCardProfileProps"}],raw:"RepoCardProfileProps[]"},description:""},onAddRepo:{required:!1,tsType:{name:"signature",type:"function",raw:"(repo: string) => void",signature:{arguments:[{name:"repo",type:{name:"string"}}],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},loadingData:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  repoName: string;\n  isLoading: boolean;\n  isAddedFromCart: boolean;\n}",signature:{properties:[{key:"repoName",value:{name:"string",required:!0}},{key:"isLoading",value:{name:"boolean",required:!0}},{key:"isAddedFromCart",value:{name:"boolean",required:!0}}]}},description:""}}};var _SuggestedRepositorie,_SuggestedRepositorie2,suggested_repo_list=SuggestedRepositoriesList;try{suggestedrepolist.displayName="suggestedrepolist",suggestedrepolist.__docgenInfo={description:"",displayName:"suggestedrepolist",props:{reposData:{defaultValue:null,description:"",name:"reposData",required:!0,type:{name:"RepoCardProfileProps[]"}},onAddRepo:{defaultValue:null,description:"",name:"onAddRepo",required:!1,type:{name:"((repo: string) => void)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingData:{defaultValue:null,description:"",name:"loadingData",required:!1,type:{name:"{ repoName: string; isLoading: boolean; isAddedFromCart: boolean; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/SuggestedRepoList/suggested-repo-list.tsx#suggestedrepolist"]={docgenInfo:suggestedrepolist.__docgenInfo,name:"suggestedrepolist",path:"components/organisms/SuggestedRepoList/suggested-repo-list.tsx#suggestedrepolist"})}catch(__react_docgen_typescript_loader_error){}var suggested_repo_list_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var suggested_repo_list_stories={title:"Design System/Organisms/SuggestedRepositoriesList"},data={avatar:"",prCount:23,repoName:"hot",issueCount:113,orgName:"open-sauced"},SuggestedRepositoriesListStory=function SuggestedRepositoriesListStory(){return suggested_repo_list_stories_jsx(suggested_repo_list,{reposData:[data,data,data]})};SuggestedRepositoriesListStory.displayName="SuggestedRepositoriesListStory",SuggestedRepositoriesListStory.parameters=_objectSpread(_objectSpread({},SuggestedRepositoriesListStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SuggestedRepositorie=SuggestedRepositoriesListStory.parameters)||void 0===_SuggestedRepositorie?void 0:_SuggestedRepositorie.docs),{},{source:_objectSpread({originalSource:"() => <SuggestedRepositoriesList reposData={[data, data, data]} />"},null===(_SuggestedRepositorie2=SuggestedRepositoriesListStory.parameters)||void 0===_SuggestedRepositorie2||null===(_SuggestedRepositorie2=_SuggestedRepositorie2.docs)||void 0===_SuggestedRepositorie2?void 0:_SuggestedRepositorie2.source)})}),SuggestedRepositoriesListStory.__docgenInfo={description:"",methods:[],displayName:"SuggestedRepositoriesListStory"}},"./node_modules/react-loading-skeleton/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Skeleton}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const SkeletonThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),defaultEnableAnimation=!0;function styleOptionsToCssProperties({baseColor:baseColor,highlightColor:highlightColor,width:width,height:height,borderRadius:borderRadius,circle:circle,direction:direction,duration:duration,enableAnimation:enableAnimation=defaultEnableAnimation}){const style={};return"rtl"===direction&&(style["--animation-direction"]="reverse"),"number"==typeof duration&&(style["--animation-duration"]=`${duration}s`),enableAnimation||(style["--pseudo-element-display"]="none"),"string"!=typeof width&&"number"!=typeof width||(style.width=width),"string"!=typeof height&&"number"!=typeof height||(style.height=height),"string"!=typeof borderRadius&&"number"!=typeof borderRadius||(style.borderRadius=borderRadius),circle&&(style.borderRadius="50%"),void 0!==baseColor&&(style["--base-color"]=baseColor),void 0!==highlightColor&&(style["--highlight-color"]=highlightColor),style}function Skeleton({count:count=1,wrapper:Wrapper,className:customClassName,containerClassName:containerClassName,containerTestId:containerTestId,circle:circle=!1,style:styleProp,...originalPropsStyleOptions}){var _a,_b,_c;const contextStyleOptions=react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext),propsStyleOptions={...originalPropsStyleOptions};for(const[key,value]of Object.entries(originalPropsStyleOptions))void 0===value&&delete propsStyleOptions[key];const styleOptions={...contextStyleOptions,...propsStyleOptions,circle:circle},style={...styleProp,...styleOptionsToCssProperties(styleOptions)};let className="react-loading-skeleton";customClassName&&(className+=` ${customClassName}`);const inline=null!==(_a=styleOptions.inline)&&void 0!==_a&&_a,elements=[],countCeil=Math.ceil(count);for(let i=0;i<countCeil;i++){let thisStyle=style;if(countCeil>count&&i===countCeil-1){const width=null!==(_b=thisStyle.width)&&void 0!==_b?_b:"100%",fractionalPart=count%1,fractionalWidth="number"==typeof width?width*fractionalPart:`calc(${width} * ${fractionalPart})`;thisStyle={...thisStyle,width:fractionalWidth}}const skeletonSpan=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:className,style:thisStyle,key:i},"‌");inline?elements.push(skeletonSpan):elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},skeletonSpan,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:containerClassName,"data-testid":containerTestId,"aria-live":"polite","aria-busy":null!==(_c=styleOptions.enableAnimation)&&void 0!==_c?_c:defaultEnableAnimation},Wrapper?elements.map(((el,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{key:i},el))):elements)}}}]);