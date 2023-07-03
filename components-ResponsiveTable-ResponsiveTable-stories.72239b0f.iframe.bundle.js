/*! For license information please see components-ResponsiveTable-ResponsiveTable-stories.72239b0f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunket_storybook=self.webpackChunket_storybook||[]).push([[449],{"./stories/components/ResponsiveTable/ResponsiveTable.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ResponsiveTable_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ResponsiveTable=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/components/ResponsiveTable/ResponsiveTable.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ResponsiveTable.Z,options);ResponsiveTable.Z&&ResponsiveTable.Z.locals&&ResponsiveTable.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ResponsiveTable_ResponsiveTable_ResponsiveTable=({...props})=>{const collapseColumnContent=()=>{const breakpointSizes=["xs","sm","md","lg","all"];let collapsingBreakpoints=[];const currBp=(()=>{let currentBreakpoint;return currentBreakpoint=[{size:"xs",max:575},{size:"sm",max:767},{size:"md",max:991},{size:"lg",max:1199}].filter((bp=>bp.max>=window.innerWidth)),currentBreakpoint=currentBreakpoint.length?currentBreakpoint[0].size:"all",currentBreakpoint})();for(let i=breakpointSizes.length-1;i>=0;i--){if(breakpointSizes[i]===currBp){collapsingBreakpoints.push(breakpointSizes[i]);break}collapsingBreakpoints.push(breakpointSizes[i])}let collapseString="";collapsingBreakpoints.forEach((function(x){collapseString+="[data-collapse='"+x+"'],"})),collapseString=collapseString.slice(0,-1);const collapsibleColumns=document.querySelectorAll(collapseString);let colRefs=[];if(collapsibleColumns.forEach((function(col){const column={index:Array.prototype.indexOf.call(col.parentNode.children,col),name:col.textContent};colRefs.push(column),col.classList.add("d-none")})),colRefs.length){const table=document.getElementById("table"),collapsedIndexes=colRefs.map((col=>col.index));for(let row,i=1;row=table.rows[i];i++)if(!row.classList.contains("expanded-row")){row.classList.add("expandable-parent");let collapsedContent=[];collapsedIndexes.forEach((function(i){collapsedContent.push(row.children[i].textContent),row.children[i].classList.add("d-none")}));const collapsedNames=colRefs.map((col=>col.name));let newRollContent="<td></td><td colspan='9'><div class='expanded-content'><table>";collapsedNames.forEach((function(r,i){newRollContent+="<tr><td>",newRollContent+=r,newRollContent+="</td><td>",newRollContent+=collapsedContent[i],newRollContent+="</td></tr>"})),newRollContent+="</table></td>";const tr=document.createElement("tr");tr.innerHTML=newRollContent,tr.classList.add("expanded-row"),row.parentNode.insertBefore(tr,row.nextSibling)}}};return react.useEffect((()=>{let completeFunction;window.addEventListener("resize",(function handleResize(){clearTimeout(completeFunction),completeFunction=setTimeout(collapseColumnContent,200)}))})),(0,jsx_runtime.jsxs)("table",{className:"responsive-table",id:"table",children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{}),(0,jsx_runtime.jsx)("th",{children:"First Name"}),(0,jsx_runtime.jsx)("th",{children:"Last Name"}),(0,jsx_runtime.jsx)("th",{"data-collapse":"xs",children:"Email"}),(0,jsx_runtime.jsx)("th",{"data-collapse":"sm",children:"Phone"}),(0,jsx_runtime.jsx)("th",{"data-collapse":"all",children:"Address"}),(0,jsx_runtime.jsx)("th",{"data-collapse":"lg",children:"City"}),(0,jsx_runtime.jsx)("th",{"data-collapse":"md",children:"State"}),(0,jsx_runtime.jsx)("th",{"data-collapse":"all",children:"Zip Code"}),(0,jsx_runtime.jsx)("th",{})]})}),(0,jsx_runtime.jsx)("tbody",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("i",{className:"expandable-trigger far fa-circle-plus",onClick:e=>{e.target.classList.toggle("fa-circle-plus"),e.target.classList.toggle("fa-circle-minus"),e.target.closest("tr").nextElementSibling.classList.toggle("expanded")}})}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsxs)("td",{className:"actions",children:[(0,jsx_runtime.jsx)("i",{className:"row-edit far fa-pen-to-square"}),(0,jsx_runtime.jsx)("i",{className:"row-delete far fa-trash"})]})]})})]})};ResponsiveTable_ResponsiveTable_ResponsiveTable.displayName="ResponsiveTable",ResponsiveTable_ResponsiveTable_ResponsiveTable.propTypes={},ResponsiveTable_ResponsiveTable_ResponsiveTable.defaultProps={},ResponsiveTable_ResponsiveTable_ResponsiveTable.__docgenInfo={description:'<span className="status-badge workinprogress">Work In Progress</span>\n\nControls for a table that gracefully handles responsive states.\n\nWorks by allowing table columns to be configured to collapse into a container below the row. Can be configured which columns collapse, and at what breakpoint they begin collapsing. If a row has collapsed content, an expand icon will appear on the left side of the row.\n\nThis could generate a poor UX if a table is sortable and is being sorted on a column that has been collapsed. If a column is sortable, it should be always visible for the best user experience.\n\n**Configurable via markup**\n\nCollapsing behavior is controlled through the `data-collapse` attribute on the column header `<th>`. Options follow Bootstrap breakpoints, including:\n\n`xs`, `sm`, `md`, `lg`, and `all` which would force that column content to always be collapsed.\nContent will be collapsed at all breakpoints smaller than it\'s setting. Ex, `data-collapse="sm"` will collapse that content at xs and sm breakpoints.',methods:[],displayName:"ResponsiveTable"};const ResponsiveTable_stories={title:"Components/Responsive Table",component:ResponsiveTable_ResponsiveTable_ResponsiveTable,tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Story,{})})]},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/components/ResponsiveTable/ResponsiveTable.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"html{font-size:10px}body{font-size:1.6rem !important}span.status-badge{color:#fff;border-radius:.5rem;padding:.5rem 1rem .3rem;display:inline-block;font-size:1rem;font-weight:bold;text-transform:uppercase;margin-bottom:1rem}span.status-badge.stable{background-color:#447f43}span.status-badge.workinprogress{background-color:#c70505}span.status-badge.deprecated{background-color:#666}.responsive-table{width:100%}.responsive-table thead{border-bottom:2px solid #333}.responsive-table thead th{padding:1.5rem .5rem 1rem}.responsive-table tbody tr{border-bottom:1px solid #eee}.responsive-table tbody tr td{padding:1rem .5rem}.responsive-table tbody tr td:first-child{text-align:center}.responsive-table tbody tr td.actions{text-align:right}.responsive-table tbody tr td.actions i{cursor:pointer}.responsive-table tbody tr td.actions i:not(:first-child){margin-left:2.5rem}.responsive-table .expandable-trigger{display:none;cursor:pointer}.responsive-table .expandable-parent .expandable-trigger{display:block;cursor:pointer}.responsive-table .expanded-row{background-color:rgba(0,0,0,.1);border-bottom:0}.responsive-table .expanded-row td{padding:0}.responsive-table .expanded-row.expanded{border-bottom:1px solid #eee}.responsive-table .expanded-row.expanded .expanded-content{height:auto;padding:1rem .5rem}.responsive-table .expanded-row .expanded-content{font-size:1.4rem;height:0;transition:all .3s ease;overflow:hidden;padding:0 .5rem}.responsive-table .expanded-row .expanded-content tr{border-bottom:0}.responsive-table .expanded-row .expanded-content tr td{padding:.25rem .25rem .25rem 0;font-weight:bold}.responsive-table .expanded-row .expanded-content tr td:first-child{font-weight:normal;padding-right:2rem;text-align:left}","",{version:3,sources:["webpack://./stories/global-styles.scss","webpack://./stories/components/ResponsiveTable/ResponsiveTable.scss"],names:[],mappings:"AA8EA,KACI,cAAA,CAEJ,KACI,2BAAA,CAGJ,kBACI,UAAA,CACA,mBAAA,CACA,wBAAA,CACA,oBAAA,CACA,cAAA,CACA,gBAAA,CACA,wBAAA,CACA,kBAAA,CACA,yBACI,wBAAA,CAEJ,iCACI,wBAAA,CAEJ,6BACI,qBAAA,CCnGR,kBACI,UAAA,CACA,wBACI,4BAAA,CACA,2BACI,yBAAA,CAIJ,2BACA,4BAAA,CACI,8BACI,kBAAA,CACA,0CACI,iBAAA,CAEJ,sCACI,gBAAA,CACA,wCACI,cAAA,CAEJ,0DACI,kBAAA,CAMpB,sCACI,YAAA,CACA,cAAA,CAGA,yDACI,aAAA,CACA,cAAA,CAIR,gCACI,+BAAA,CACA,eAAA,CACA,mCACI,SAAA,CAEJ,yCACI,4BAAA,CACA,2DACI,WAAA,CACA,kBAAA,CAGR,kDACI,gBAAA,CACA,QAAA,CACA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,qDACI,eAAA,CACA,wDACI,8BAAA,CACA,gBAAA,CACA,oEACI,kBAAA,CACA,kBAAA,CACA,eAAA",sourcesContent:["@function map-deep-get($map, $keys...){\n    @each $key in $keys {\n        $map: map-get($map, $key);\n    }\n    @return $map;\n}\n\n@function palette($col, $variation:'base'){\n    @return map-get(map-get($color, $col), $variation);\n}\n  \n$color: (\n    grey: (\n        light-50: #f5f5f5,\n        light-100: #e0e0e0,\n        light-200: #cccccc,\n        light-300: #adadad,\n        light-400: #999999,\n        base: #666666,\n        dark-600: #474747,\n        dark-700: #333333,\n        dark-800: #292929,\n        dark-900: #141414\n    ),\n    success: (\n        light: #B6CFB5,\n        base: #447F43,\n        dark: #102D10\n    ),\n    error: (\n        light: #F25A5A,\n        base: #C70505,\n        dark: #230101\n    )\n);\n  \n$breakpoint-size: (\n    xs: (max: 575px),\n    sm: (min: 576px,   max:767px),\n    md: (min:768px,    max:991px),\n    lg: (min: 992px,   max:1199px),\n    xl: (min: 1200px, max: 1399px),\n    xxl: (min: 1400px),\n    sm-and-lower: (max: 767px),\n    lg-and-bigger: (min: 992px)\n);\n@mixin breakpoint($size) {\n    @if $size == 'xs' {\n        @media(max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n            @content;\n        };\n    }\n    @else if $size == 'sm-and-lower' {\n        @media(max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n            @content;\n        };\n    }\n    @else if $size == 'xxl' {\n        @media(min-width: map-get(map-get($breakpoint-size, $size), 'min')) {\n            @content;\n        };\n    }\n    @else if $size == 'lg-and-bigger' {\n        @media(min-width: map-get(map-get($breakpoint-size, $size), 'min')) {\n            @content;\n        };\n    }\n    @else {\n        @media(min-width: map-get(map-get($breakpoint-size, $size), 'min') ) and (max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n            @content;\n        };\n    }\n};\n\n$headerHeight: 70px;\n$sidebarWidth: 245px;\n$sidebarMinHeight: calc(100vh - $headerHeight);\n\nhtml {\n    font-size: 10px;\n}\nbody {\n    font-size: 1.6rem !important;\n}\n\nspan.status-badge {\n    color: white;\n    border-radius: .5rem;\n    padding: .5rem 1rem .3rem;\n    display: inline-block;\n    font-size: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-bottom: 1rem;\n    &.stable {\n        background-color: #447F43;\n    }\n    &.workinprogress {\n        background-color: palette(error);\n    }\n    &.deprecated {\n        background-color: palette(grey);\n    }\n}","@import '../../global-styles';\n\n.responsive-table {\n    width: 100%;\n    thead {\n        border-bottom: 2px solid #333;\n        th {\n            padding: 1.5rem .5rem 1rem;\n        }\n    }\n    tbody {\n        tr {\n        border-bottom: 1px solid #eee;\n            td {\n                padding: 1rem .5rem;\n                &:first-child {\n                    text-align: center;\n                }\n                &.actions {\n                    text-align: right;\n                    i {\n                        cursor: pointer;\n                    }\n                    i:not(:first-child) {\n                        margin-left: 2.5rem;\n                    }\n                }\n            }\n        }\n    }\n    .expandable-trigger {\n        display: none;\n        cursor: pointer;\n    }\n    .expandable-parent {\n        .expandable-trigger {\n            display: block;\n            cursor: pointer;\n        }\n        \n    }\n    .expanded-row {\n        background-color: rgba(0,0,0,.1);\n        border-bottom: 0;\n        td {\n            padding: 0;\n        }\n        &.expanded {\n            border-bottom: 1px solid #eee;\n            .expanded-content {\n                height: auto;\n                padding: 1rem .5rem;\n            }\n        }\n        .expanded-content {\n            font-size: 1.4rem;\n            height: 0;\n            transition: all .3s ease;\n            overflow: hidden;\n            padding: 0 .5rem;\n            tr {\n                border-bottom: 0;\n                td {\n                    padding: .25rem .25rem .25rem 0;\n                    font-weight: bold;\n                    &:first-child {\n                        font-weight: normal;\n                        padding-right: 2rem;\n                        text-align: left;\n                    }\n                }\n            }\n        }\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);