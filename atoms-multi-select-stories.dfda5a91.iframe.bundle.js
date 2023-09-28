"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[6624],{"./components/molecules/Dialog/dialog.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$N:function(){return DialogTitle},Be:function(){return DialogDescription},Vq:function(){return Dialog},cZ:function(){return DialogContent},fK:function(){return DialogHeader},iK:function(){return DialogCloseButton}});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_icons_ai__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),_excluded=["className","children"],_excluded2=["className","children"],_excluded3=["className","children","onClick"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Dialog=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.fC,DialogPortal=(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.xz,function DialogPortal(_ref){var className=_ref.className,children=_ref.children,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.h_,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:"".concat(className)},props),__jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center"},children))});DialogPortal.displayName="DialogPortal",DialogPortal.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.h_.displayName;var DialogOverlay=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(_ref2.children,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2));return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",className)},props,{ref:ref}))}));DialogOverlay.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV.displayName;var DialogCloseButton=function DialogCloseButton(_ref3){var onClick=_ref3.onClick;return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.x8,{onClick:onClick,className:"absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 "},__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.oHP,{size:20}),__jsx("span",{className:"sr-only"},"Close"))};DialogCloseButton.displayName="DialogCloseButton";var DialogContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref4,ref){var className=_ref4.className,children=_ref4.children,props=(_ref4.onClick,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref4,_excluded3));return __jsx(DialogPortal,null,__jsx(DialogOverlay,null),__jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,"fixed z-50 grid w-full pb-3 gap-4 rounded-b-lg bg-light-slate-2 lg:p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 md:w-max sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0")},props),children))}));DialogContent.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY.displayName;var DialogHeader=function DialogHeader(_ref5){var className=_ref5.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref5,_excluded4);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex flex-col space-y-2 text-center sm:text-left",className)},props))};DialogHeader.displayName="DialogHeader",DialogHeader.displayName="DialogHeader";var DialogTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref6,_excluded5);return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("text-lg font-semibold text-slate-900",className)},props))})),DialogDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref7,ref){var className=_ref7.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref7,_excluded6);return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("text-sm text-slate-500",className)},props))}));DialogDescription.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk.displayName,DialogTitle.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx.displayName;var DialogFooter=function DialogFooter(_ref8){var className=_ref8.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref8,_excluded7);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",className)},props))};DialogFooter.displayName="DialogFooter",DialogFooter.displayName="DialogFooter",DialogContent.__docgenInfo={description:"",methods:[]},DialogHeader.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"},DialogTitle.__docgenInfo={description:"",methods:[]},DialogDescription.__docgenInfo={description:"",methods:[]},DialogCloseButton.__docgenInfo={description:"",methods:[],displayName:"DialogCloseButton",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{DialogHeader.displayName="DialogHeader",DialogHeader.__docgenInfo={description:"",displayName:"DialogHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/Dialog/dialog.tsx#DialogHeader"]={docgenInfo:DialogHeader.__docgenInfo,name:"DialogHeader",path:"components/molecules/Dialog/dialog.tsx#DialogHeader"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/Popover/popover.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J2:function(){return Popover},xo:function(){return PopoverTrigger},yk:function(){return PopoverContent}});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-popover/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["className","align","sideOffset"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Popover=_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.fC,PopoverTrigger=_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.xz,PopoverContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,_ref$align=_ref.align,align=void 0===_ref$align?"center":_ref$align,_ref$sideOffset=_ref.sideOffset,sideOffset=void 0===_ref$sideOffset?4:_ref$sideOffset,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.h_,{className:"w-full bg-red-300"},__jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,align:align,sideOffset:sideOffset,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className)},props)))}));PopoverContent.displayName=_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.VY.displayName,PopoverContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/Popover/popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"components/molecules/Popover/popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}try{PopoverTrigger.displayName="PopoverTrigger",PopoverTrigger.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/Popover/popover.tsx#PopoverTrigger"]={docgenInfo:PopoverTrigger.__docgenInfo,name:"PopoverTrigger",path:"components/molecules/Popover/popover.tsx#PopoverTrigger"})}catch(__react_docgen_typescript_loader_error){}try{PopoverContent.displayName="PopoverContent",PopoverContent.__docgenInfo={description:"",displayName:"PopoverContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/Popover/popover.tsx#PopoverContent"]={docgenInfo:PopoverContent.__docgenInfo,name:"PopoverContent",path:"components/molecules/Popover/popover.tsx#PopoverContent"})}catch(__react_docgen_typescript_loader_error){}},"./stories/atoms/multi-select.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return multi_select_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),io5_index_esm=__webpack_require__("./node_modules/react-icons/io5/index.esm.js"),io_index_esm=__webpack_require__("./node_modules/react-icons/io/index.esm.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),popover=__webpack_require__("./components/molecules/Popover/popover.tsx"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),dist=__webpack_require__("./node_modules/cmdk/dist/index.mjs"),bi_index_esm=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),dialog=__webpack_require__("./components/molecules/Dialog/dialog.tsx"),_excluded=["className"],_excluded2=["children"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className"],_excluded8=["className"],__jsx=react.createElement,Command=react.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(dist.mY,(0,esm_extends.Z)({ref:ref,className:(0,clsx_m.Z)("flex h-full w-full flex-col overflow-hidden rounded-md",className)},props))}));Command.displayName=dist.mY.displayName;var CommandDialog=function CommandDialog(_ref2){var children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx(dialog.Vq,props,__jsx(dialog.cZ,{className:"p-0 overflow-hidden shadow-2xl"},__jsx(Command,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"},children)))};CommandDialog.displayName="CommandDialog";var CommandInput=react.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return __jsx("div",{className:"flex items-center px-3 border-b","cmdk-input-wrapper":""},__jsx(bi_index_esm.Goc,{className:"w-4 h-4 mr-2 opacity-50 shrink-0"}),__jsx(dist.mY.Input,(0,esm_extends.Z)({ref:ref,className:(0,clsx_m.Z)("placeholder:text-foreground-muted flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",className)},props)))}));CommandInput.displayName=dist.mY.Input.displayName;var CommandList=react.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,objectWithoutProperties.Z)(_ref4,_excluded4);return __jsx(dist.mY.List,(0,esm_extends.Z)({ref:ref,className:(0,clsx_m.Z)("max-h-[300px] overflow-y-auto overflow-x-hidden",className)},props))}));CommandList.displayName=dist.mY.List.displayName;var CommandEmpty=react.forwardRef((function(props,ref){return __jsx(dist.mY.Empty,(0,esm_extends.Z)({ref:ref,className:"py-6 text-sm text-center"},props))}));CommandEmpty.displayName=dist.mY.Empty.displayName;var CommandGroup=react.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,objectWithoutProperties.Z)(_ref5,_excluded5);return __jsx(dist.mY.Group,(0,esm_extends.Z)({ref:ref,className:(0,clsx_m.Z)("overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium ",className)},props))}));CommandGroup.displayName=dist.mY.Group.displayName;var CommandSeparator=react.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,objectWithoutProperties.Z)(_ref6,_excluded6);return __jsx(dist.mY.Separator,(0,esm_extends.Z)({ref:ref,className:(0,clsx_m.Z)("-mx-1 h-px bg-border",className)},props))}));CommandSeparator.displayName=dist.mY.Separator.displayName;var CommandItem=react.forwardRef((function(_ref7,ref){var className=_ref7.className,props=(0,objectWithoutProperties.Z)(_ref7,_excluded7);return __jsx(dist.mY.Item,(0,esm_extends.Z)({ref:ref,className:(0,clsx_m.Z)("relative flex cursor-default aria-selected:bg-gray-100 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none  data-[disabled]:pointer-events-none data-[disabled]:opacity-50",className)},props))}));CommandItem.displayName=dist.mY.Item.displayName;var CommandShortcut=function CommandShortcut(_ref8){var className=_ref8.className,props=(0,objectWithoutProperties.Z)(_ref8,_excluded8);return __jsx("span",(0,esm_extends.Z)({className:(0,clsx_m.Z)("ml-auto text-xs tracking-widest text-muted-foreground",className)},props))};CommandShortcut.displayName="CommandShortcut",CommandShortcut.displayName="CommandShortcut",Command.__docgenInfo={description:"",methods:[]},CommandDialog.__docgenInfo={description:"",methods:[],displayName:"CommandDialog",composes:["DialogProps"]},CommandInput.__docgenInfo={description:"",methods:[]},CommandList.__docgenInfo={description:"",methods:[]},CommandEmpty.__docgenInfo={description:"",methods:[]},CommandGroup.__docgenInfo={description:"",methods:[]},CommandItem.__docgenInfo={description:"",methods:[]},CommandShortcut.__docgenInfo={description:"",methods:[],displayName:"CommandShortcut"},CommandSeparator.__docgenInfo={description:"",methods:[]};try{CommandShortcut.displayName="CommandShortcut",CommandShortcut.__docgenInfo={description:"",displayName:"CommandShortcut",props:{label:{defaultValue:null,description:"Accessible label for this command menu. Not shown visibly.",name:"label",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"Custom filter function for whether each command menu item should matches the given search query.\nIt should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.\nBy default, uses the `command-score` library.",name:"filter",required:!1,type:{name:"((value: string, search: string) => number)"}},value:{defaultValue:null,description:"Optional controlled state of the selected command menu item.",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"Event handler called when the selected item of the menu changes.",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},loop:{defaultValue:null,description:"Optionally set to `true` to turn on looping around when using the arrow keys.",name:"loop",required:!1,type:{name:"boolean"}},shouldFilter:{defaultValue:null,description:"Optionally set to `false` to turn off the automatic filtering and sorting.\nIf `false`, you must conditionally render valid items based on the search query yourself.",name:"shouldFilter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Cmd/command.tsx#CommandShortcut"]={docgenInfo:CommandShortcut.__docgenInfo,name:"CommandShortcut",path:"components/atoms/Cmd/command.tsx#CommandShortcut"})}catch(__react_docgen_typescript_loader_error){}var multi_select_jsx=react.createElement,MultiSelect=function MultiSelect(_ref){_ref.options,_ref.selected,_ref.handleSelect,_ref.className;var placeholder=_ref.placeholder,handleKeyDown=(_ref.handleUnSelect,_ref.handleKeyDown),inputRef=(_ref.inputPlaceholder,(0,react.useRef)(null)),_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],_useState=(0,react.useState)(""),inputValue=_useState[0],setInputValue=_useState[1],_useState2=(0,react.useState)([]),dummySelected=_useState2[0],setDummySelected=_useState2[1],dummyOptions=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"},{value:"16",label:"Option 16"},{value:"17",label:"Option 17"},{value:"18",label:"Option 18"},{value:"19",label:"Option 19"},{value:"20",label:"Option 20"}],toggleFramework=function toggleFramework(option){var _inputRef$current,isOptionSelected=dummySelected.some((function(s){return s.value===option.value}));setDummySelected(isOptionSelected?function(prev){return prev.filter((function(s){return s.value!==option.value}))}:function(prev){return[].concat((0,toConsumableArray.Z)(prev),[option])}),null==inputRef||null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.focus()};return multi_select_jsx(popover.J2,{open:open,onOpenChange:function onOpenChange(value){return setOpen(value)}},multi_select_jsx("div",{className:"max-w-xs min-w-[250px]"},multi_select_jsx(popover.xo,{asChild:!0,className:"p-1.5 border rounded-md data-[state=open]:border-orange-500  max-w-xs min-w-[250px] "},multi_select_jsx("button",{"aria-controls":"select-menu-list",role:"combobox","aria-expanded":open,className:"flex items-center justify-between text-foreground"},dummySelected.length>0?multi_select_jsx("span",{className:"truncate"},dummySelected[0].label,dummySelected.length>1?", +".concat(dummySelected.length-1):null):multi_select_jsx("span",{className:"opacity-50"},null!=placeholder?placeholder:"Select Items"),dummySelected.length>0?multi_select_jsx("button",{onClick:function onClick(e){e.preventDefault(),e.stopPropagation(),setDummySelected([])}},multi_select_jsx(io_index_esm.mpJ,{className:"text-red-600"})):multi_select_jsx(index_esm.bTu,{className:"ml-2 text-lg opacity-50 shrink-0"}))),multi_select_jsx(popover.yk,{className:"!w-full !min-w-[250px] p-0"},multi_select_jsx(Command,{loop:!0,onKeyDown:handleKeyDown,className:"w-full px-0 bg-transparent"},multi_select_jsx(CommandInput,{ref:inputRef,placeholder:null!=placeholder?placeholder:"Search Items",value:inputValue,onValueChange:setInputValue}),multi_select_jsx(CommandGroup,{className:"flex flex-col !px-0 overflow-scroll max-h-48"},open&&dummyOptions.length>0?dummyOptions.map((function(option){return multi_select_jsx(CommandItem,{key:option.value,onMouseDown:function onMouseDown(e){e.preventDefault(),e.stopPropagation()},onSelect:function onSelect(value){setInputValue(""),toggleFramework(option)},onClick:function onClick(){return toggleFramework(option)},className:(0,clsx_m.W)("!cursor-pointer flex justify-between items-center !px-1 rounded-md",dummySelected.some((function(s){return s.value===option.value}))&&"bg-gray-100")},option.label,dummySelected.some((function(s){return s.value===option.value}))&&multi_select_jsx(io5_index_esm.VQF,{className:"w-5 h-5 ml-2 text-sauced-orange shrink-0"}))})):null)))))};MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"union",raw:'"value" | "label"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"label"'}]},{name:"string"}],raw:'Record<"value" | "label", string>'}],raw:"OptionKeys[]"},description:""},selected:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"union",raw:'"value" | "label"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"label"'}]},{name:"string"}],raw:'Record<"value" | "label", string>'}],raw:"OptionKeys[]"},description:""},handleSelect:{required:!0,tsType:{name:"signature",type:"function",raw:'(value: OptionKeys["value"]) => void',signature:{arguments:[{name:"value",type:{name:'Record["value"]',raw:'OptionKeys["value"]'}}],return:{name:"void"}}},description:""},handleUnSelect:{required:!0,tsType:{name:"signature",type:"function",raw:'(option: OptionKeys["value"]) => void',signature:{arguments:[{name:"option",type:{name:'Record["value"]',raw:'OptionKeys["value"]'}}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},inputPlaceholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},handleKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{name:"e",type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}}],return:{name:"void"}}},description:""}}};var _Default$parameters,_Default$parameters2,multi_select=MultiSelect;try{multiselect.displayName="multiselect",multiselect.__docgenInfo={description:"",displayName:"multiselect",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"OptionKeys[]"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"OptionKeys[]"}},handleSelect:{defaultValue:null,description:"",name:"handleSelect",required:!0,type:{name:"(value: string) => void"}},handleUnSelect:{defaultValue:null,description:"",name:"handleUnSelect",required:!0,type:{name:"(option: string) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},inputPlaceholder:{defaultValue:null,description:"",name:"inputPlaceholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},handleKeyDown:{defaultValue:null,description:"",name:"handleKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLDivElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Select/multi-select.tsx#multiselect"]={docgenInfo:multiselect.__docgenInfo,name:"multiselect",path:"components/atoms/Select/multi-select.tsx#multiselect"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var multi_select_stories={title:"Design System/Atoms/MultiSelect",component:multi_select},selectedOptions=[{label:"React",value:"react"},{label:"Nerv",value:"nerv"},{label:"AngularJS",value:"angularjs"}],Default={args:{options:[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Angular",value:"angular"},{label:"Ember",value:"ember"},{label:"Meteor",value:"meteor"},{label:"Riot",value:"riot"},{label:"Solid",value:"solid"},{label:"Alpine",value:"alpine"},{label:"Marko",value:"marko"},{label:"Preact",value:"preact"},{label:"Inferno",value:"inferno"},{label:"Mithril",value:"mithril"},{label:"Nerv",value:"nerv"},{label:"AngularJS",value:"angularjs"},{label:"Backbone",value:"backbone"},{label:"Knockout",value:"knockout"},{label:"Polymer",value:"polymer"},{label:"Aurelia",value:"aurelia"},{label:"Ember",value:"ember"},{label:"Backbone",value:"backbone"},{label:"Knockout",value:"knockout"},{label:"Polymer",value:"polymer"},{label:"Aurelia",value:"aurelia"}],selected:selectedOptions,handleSelect:function handleSelect(value){var exists=selectedOptions.find((function(option){return option.value===value}));exists&&(selectedOptions=selectedOptions.filter((function(option){return option.value!==exists.value})))},handleUnSelect:function handleUnSelect(value){selectedOptions=selectedOptions.filter((function(option){return option.value!==value}))}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    options: [{\n      label: "React",\n      value: "react"\n    }, {\n      label: "Vue",\n      value: "vue"\n    }, {\n      label: "Svelte",\n      value: "svelte"\n    }, {\n      label: "Angular",\n      value: "angular"\n    }, {\n      label: "Ember",\n      value: "ember"\n    }, {\n      label: "Meteor",\n      value: "meteor"\n    }, {\n      label: "Riot",\n      value: "riot"\n    }, {\n      label: "Solid",\n      value: "solid"\n    }, {\n      label: "Alpine",\n      value: "alpine"\n    }, {\n      label: "Marko",\n      value: "marko"\n    }, {\n      label: "Preact",\n      value: "preact"\n    }, {\n      label: "Inferno",\n      value: "inferno"\n    }, {\n      label: "Mithril",\n      value: "mithril"\n    }, {\n      label: "Nerv",\n      value: "nerv"\n    }, {\n      label: "AngularJS",\n      value: "angularjs"\n    }, {\n      label: "Backbone",\n      value: "backbone"\n    }, {\n      label: "Knockout",\n      value: "knockout"\n    }, {\n      label: "Polymer",\n      value: "polymer"\n    }, {\n      label: "Aurelia",\n      value: "aurelia"\n    }, {\n      label: "Ember",\n      value: "ember"\n    }, {\n      label: "Backbone",\n      value: "backbone"\n    }, {\n      label: "Knockout",\n      value: "knockout"\n    }, {\n      label: "Polymer",\n      value: "polymer"\n    }, {\n      label: "Aurelia",\n      value: "aurelia"\n    }],\n    selected: selectedOptions,\n    handleSelect: value => {\n      const exists = selectedOptions.find(option => option.value === value);\n      if (exists) {\n        selectedOptions = selectedOptions.filter(option => option.value !== exists.value);\n      }\n    },\n    handleUnSelect: value => {\n      selectedOptions = selectedOptions.filter(option => option.value !== value);\n    }\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})}}]);