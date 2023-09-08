"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3423,8423],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _extends}})},"./node_modules/@radix-ui/primitive/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented:checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}__webpack_require__.d(__webpack_exports__,{M:function(){return $e42e1063c40fb3ef$export$b9ecd428b558ff10}})},"./node_modules/@radix-ui/react-compose-refs/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:function(){return $6ed0406888f73fc4$export$43e446d32b3d21af},e:function(){return $6ed0406888f73fc4$export$c7b2cbe3552a0d05}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/@radix-ui/react-context/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:function(){return $c512c27ab02ef895$export$50c7b4e9d9f19c1},k:function(){return $c512c27ab02ef895$export$fd42f52fd3ae1109}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);function Provider(props){const{children:children,...context}=props,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value:value},children)}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope:scope,children:children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value:value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope:useScope,scopeName:scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/@radix-ui/react-switch/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{fC:function(){return $6be4966fd9bbc698$export$be92b6f5f03c0fe9},bU:function(){return $6be4966fd9bbc698$export$6521433ed15a34db}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.module.js"),dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.module.js"),react_context_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.module.js"),react_use_controllable_state_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js"),react_use_previous_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.module.js"),react_use_size_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.module.js");__webpack_require__("./node_modules/react-dom/index.js");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children:children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children:children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:(0,dist_index_module.F)(forwardedRef,children.ref)}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children:children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild:asChild,...primitiveProps}=props,Comp=asChild?$5e63c961fc1ce211$export$8c6ed5c666ac1360:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,(0,esm_extends.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,react_context_dist_index_module.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch:__scopeSwitch,name:name,checked:checkedProp,defaultChecked:defaultChecked,required:required,disabled:disabled,value:value="on",onCheckedChange:onCheckedChange,...switchProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,dist_index_module.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist_index_module.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked:checked,disabled:disabled},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button,(0,esm_extends.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled:disabled,value:value},switchProps,{ref:composedRefs,onClick:(0,index_module.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name:name,value:value,checked:checked,required:required,disabled:disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch:__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control:control,checked:checked,bubbles:bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist_index_module.D)(checked),controlSize=(0,react_use_size_dist_index_module.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles:bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref:ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106},"./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return $b1b2314f5f9a1d84$export$25bec8c6f54ee79a}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}},"./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return $71cd76cc60e0454e$export$6f32135080cb4c3}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop:prop,defaultProp:defaultProp,onChange:onChange=(()=>{})}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp:defaultProp,onChange:onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp:defaultProp,onChange:onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:function(){return $9f79659886946c16$export$e5c5a5f917a5871c}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},"./node_modules/@radix-ui/react-use-previous/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return $010c2913dbd2fe3d$export$5cae361ad82dce8b}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value:value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return $db6c3485150b8e66$export$1ab7ae714698c4b8}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width:width,height:height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./components/atoms/ToggleSwitch/toggle-switch.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ToggleSwitch=function ToggleSwitch(_ref){var name=_ref.name,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,handleToggle=_ref.handleToggle,_ref$size=_ref.size,size=void 0===_ref$size?"base":_ref$size,classNames=_ref.classNames;return __jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__.fC,{defaultChecked:!0,checked:checked,onClick:function onClick(){return handleToggle()},id:name,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(classNames,checked&&"!bg-light-orange-10 justify-end","flex rounded-2xl p-[2px] transition overflow-hidden bg-light-slate-8","lg"===size?"w-14 h-[30px]":"base"===size?"w-11 h-6":"sm"===size?"w-7 h-4":"")},__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__.bU,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("bg-white block rounded-2xl  h-full w-1/2")}))};ToggleSwitch.displayName="ToggleSwitch",ToggleSwitch.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"base"',computed:!1},required:!1,tsType:{name:"union",raw:'"sm" | "lg" | "base"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"base"'}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},handleToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},classNames:{required:!1,tsType:{name:"string"},description:""}}},__webpack_exports__.Z=ToggleSwitch;try{toggleswitch.displayName="toggleswitch",toggleswitch.__docgenInfo={description:"",displayName:"toggleswitch",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},handleToggle:{defaultValue:null,description:"",name:"handleToggle",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ToggleSwitch/toggle-switch.tsx#toggleswitch"]={docgenInfo:toggleswitch.__docgenInfo,name:"toggleswitch",path:"components/atoms/ToggleSwitch/toggle-switch.tsx#toggleswitch"})}catch(__react_docgen_typescript_loader_error){}},"./stories/atoms/toggle-switch.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:function(){return Custom},Default:function(){return Default},Large:function(){return Large},Small:function(){return Small}});var _Default$parameters,_Default$parameters2,_Small$parameters,_Small$parameters2,_Large$parameters,_Large$parameters2,_Custom$parameters,_Custom$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_atoms_ToggleSwitch_toggle_switch__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/ToggleSwitch/toggle-switch.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/Atoms/ToggleSwitch"};var ToggleSwitchTemplate=function ToggleSwitchTemplate(args){return __jsx(components_atoms_ToggleSwitch_toggle_switch__WEBPACK_IMPORTED_MODULE_2__.Z,args)};ToggleSwitchTemplate.displayName="ToggleSwitchTemplate";var Default=ToggleSwitchTemplate.bind({}),Small=ToggleSwitchTemplate.bind({}),Large=ToggleSwitchTemplate.bind({}),Custom=ToggleSwitchTemplate.bind({});Default.args={name:"test",checked:!1,size:"base"},Small.args={name:"test",checked:!1,size:"sm"},Large.args={name:"test",checked:!1,size:"lg"},Custom.args={name:"test",checked:!1,classNames:"w-8 h-4"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ToggleSwitch {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Small.parameters=_objectSpread(_objectSpread({},Small.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ToggleSwitch {...args} />"},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2=_Small$parameters2.docs)||void 0===_Small$parameters2?void 0:_Small$parameters2.source)})}),Large.parameters=_objectSpread(_objectSpread({},Large.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ToggleSwitch {...args} />"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2=_Large$parameters2.docs)||void 0===_Large$parameters2?void 0:_Large$parameters2.source)})}),Custom.parameters=_objectSpread(_objectSpread({},Custom.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Custom$parameters=Custom.parameters)||void 0===_Custom$parameters?void 0:_Custom$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ToggleSwitch {...args} />"},null===(_Custom$parameters2=Custom.parameters)||void 0===_Custom$parameters2||null===(_Custom$parameters2=_Custom$parameters2.docs)||void 0===_Custom$parameters2?void 0:_Custom$parameters2.source)})})},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.Z=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);