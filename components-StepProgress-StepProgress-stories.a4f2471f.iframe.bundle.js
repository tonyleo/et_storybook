/*! For license information please see components-StepProgress-StepProgress-stories.a4f2471f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunket_storybook=self.webpackChunket_storybook||[]).push([[957],{"./stories/components/StepProgress/StepProgress.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StepProgress_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=(__webpack_require__("./stories/global-styles.scss"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),StepProgress=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./stories/components/StepProgress/StepProgress.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(StepProgress.Z,options);StepProgress.Z&&StepProgress.Z.locals&&StepProgress.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StepProgress_StepProgress_StepProgress=({stepCount,activeStep,...props})=>(0,jsx_runtime.jsxs)("div",{className:"step-progress-container",children:[(0,jsx_runtime.jsxs)("h3",{children:["Step ",(0,jsx_runtime.jsx)("span",{id:"step-progress-active-count",children:activeStep})," of ",stepCount]}),(0,jsx_runtime.jsx)("div",{className:"step-progress",children:Array.apply(0,Array(stepCount)).map((function(x,i){return(0,jsx_runtime.jsx)("div",{id:"step-progress-step-"+(i+1),className:activeStep&&activeStep>=i+1?"step complete":"step"})}))})]});StepProgress_StepProgress_StepProgress.displayName="StepProgress",StepProgress_StepProgress_StepProgress.propTypes={stepCount:prop_types_default().number,activeStep:prop_types_default().number},StepProgress_StepProgress_StepProgress.defaultProps={stepCount:5,activeStep:1},StepProgress_StepProgress_StepProgress.__docgenInfo={description:'<span className="status-badge workinprogress">Work In Progress</span>\n\nProgress indicator for steps in a progression. Example usage is in an onboarding flow.\n\nFor JS control, targets include:\n\n**Active Step Count**: #step-progress-active-count<br />\n**Active Step Block**: #step-progress-step-[STEP NUMBER]. <br />*Note: All completed steps need to have an added class of* `.complete`',methods:[],displayName:"StepProgress",props:{stepCount:{defaultValue:{value:"5",computed:!1},description:"",type:{name:"number"},required:!1},activeStep:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1}}};const StepProgress_stories={title:"Components/Step Progress",component:StepProgress_StepProgress_StepProgress,tags:["autodocs"]},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/global-styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"html{font-size:10px}body{font-size:1.6rem !important}span.status-badge{color:#fff;border-radius:.5rem;padding:.5rem 1rem .3rem;display:inline-block;font-size:1rem;font-weight:bold;text-transform:uppercase;margin-bottom:1rem}span.status-badge.stable{background-color:#447f43}span.status-badge.workinprogress{background-color:#c70505}span.status-badge.deprecated{background-color:#666}","",{version:3,sources:["webpack://./stories/global-styles.scss"],names:[],mappings:"AA8EA,KACI,cAAA,CAEJ,KACI,2BAAA,CAGJ,kBACI,UAAA,CACA,mBAAA,CACA,wBAAA,CACA,oBAAA,CACA,cAAA,CACA,gBAAA,CACA,wBAAA,CACA,kBAAA,CACA,yBACI,wBAAA,CAEJ,iCACI,wBAAA,CAEJ,6BACI,qBAAA",sourcesContent:["@function map-deep-get($map, $keys...){\n    @each $key in $keys {\n        $map: map-get($map, $key);\n    }\n    @return $map;\n}\n\n@function palette($col, $variation:'base'){\n    @return map-get(map-get($color, $col), $variation);\n}\n  \n$color: (\n    grey: (\n        light-50: #f5f5f5,\n        light-100: #e0e0e0,\n        light-200: #cccccc,\n        light-300: #adadad,\n        light-400: #999999,\n        base: #666666,\n        dark-600: #474747,\n        dark-700: #333333,\n        dark-800: #292929,\n        dark-900: #141414\n    ),\n    success: (\n        light: #B6CFB5,\n        base: #447F43,\n        dark: #102D10\n    ),\n    error: (\n        light: #F25A5A,\n        base: #C70505,\n        dark: #230101\n    )\n);\n  \n$breakpoint-size: (\n    xs: (max: 575px),\n    sm: (min: 576px,   max:767px),\n    md: (min:768px,    max:991px),\n    lg: (min: 992px,   max:1199px),\n    xl: (min: 1200px, max: 1399px),\n    xxl: (min: 1400px),\n    sm-and-lower: (max: 767px),\n    lg-and-bigger: (min: 992px)\n);\n@mixin breakpoint($size) {\n    @if $size == 'xs' {\n        @media(max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n            @content;\n        };\n    }\n    @else if $size == 'sm-and-lower' {\n        @media(max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n            @content;\n        };\n    }\n    @else if $size == 'xxl' {\n        @media(min-width: map-get(map-get($breakpoint-size, $size), 'min')) {\n            @content;\n        };\n    }\n    @else if $size == 'lg-and-bigger' {\n        @media(min-width: map-get(map-get($breakpoint-size, $size), 'min')) {\n            @content;\n        };\n    }\n    @else {\n        @media(min-width: map-get(map-get($breakpoint-size, $size), 'min') ) and (max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n            @content;\n        };\n    }\n};\n\n$headerHeight: 70px;\n$sidebarWidth: 245px;\n$sidebarMinHeight: calc(100vh - $headerHeight);\n\nhtml {\n    font-size: 10px;\n}\nbody {\n    font-size: 1.6rem !important;\n}\n\nspan.status-badge {\n    color: white;\n    border-radius: .5rem;\n    padding: .5rem 1rem .3rem;\n    display: inline-block;\n    font-size: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-bottom: 1rem;\n    &.stable {\n        background-color: #447F43;\n    }\n    &.workinprogress {\n        background-color: palette(error);\n    }\n    &.deprecated {\n        background-color: palette(grey);\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./stories/components/StepProgress/StepProgress.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".step-progress-container {\n    margin-bottom: 2rem;\n}\n.step-progress-container h3 {\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2rem;\n    margin-bottom: .5rem;\n}\n.step-progress-container .step-progress {\n    display: flex;\n    gap: .5rem;\n    width: 15rem;\n}\n.step-progress-container .step-progress .step {\n    height: .5rem;\n    flex-grow: 1;\n    border-radius: 1rem;\n    transition: all .6s ease;\n    background-color: grey;\n}\n.step-progress-container .step-progress .step.complete {\n    background-color: red;\n}","",{version:3,sources:["webpack://./stories/components/StepProgress/StepProgress.css"],names:[],mappings:"AAAA;IACI,mBAAmB;AACvB;AACA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,UAAU;IACV,YAAY;AAChB;AACA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB",sourcesContent:[".step-progress-container {\n    margin-bottom: 2rem;\n}\n.step-progress-container h3 {\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2rem;\n    margin-bottom: .5rem;\n}\n.step-progress-container .step-progress {\n    display: flex;\n    gap: .5rem;\n    width: 15rem;\n}\n.step-progress-container .step-progress .step {\n    height: .5rem;\n    flex-grow: 1;\n    border-radius: 1rem;\n    transition: all .6s ease;\n    background-color: grey;\n}\n.step-progress-container .step-progress .step.complete {\n    background-color: red;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/global-styles.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_styles_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/global-styles.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);