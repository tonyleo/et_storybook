/*! For license information please see CSSGuide-mdx.dc2a3335.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunket_storybook=self.webpackChunket_storybook||[]).push([[766],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/CSSGuide.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",h3:"h3",em:"em"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"css-guide",children:"CSS Guide"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Stylesheet organization can be instrumental for getting a project up and running quickly, and making changes intuitive. Below are helpful guides for managing CSS/SCSS."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"file-directory-structure",children:"File Directory Structure"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Stylesheets can be set up with a parent file that pulls in all other stylesheets needed for the project. This serves as a table of contents for keeping CSS code organized and easy to find, with a clear heirarchy."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Example Table of Contents"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Imports\n-- Font Awesome\n-- Bootstrap\n-- Custom @font-face\n-- Variables\n\nCommon\n-- General Layout\n-- Typography\n-- Button Overrides\n-- Forms\n\nMain Sections\n-- Admin\n-- User Facing\n-- Onboarding\n\nSpecific Components\n-- Calendar\n-- Charts\n-- Navigation\n-- ...\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size-units",children:"Size Units"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Sizing units for fonts, spacing, line-height, etc can be used in rem. Rem is different than em and can provide some more predictable results. Em is a unit of measure based on it's parent, while rem is based on a root level. Both have a benefit of being flexible and a goal to make a global change can be done simply, but because em follows it's parent, it can increase complexity if it's not expected when components are nested."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Using an example of:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"body { font-size: 16px; }\nul { font-size: .75em; } *or* ul { font-size: .75rem; }\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table",{width:"100%",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"em"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"rem"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<body>            // 16px\n  <ul>            // 12px\n    <li>\n      <ul>        // 9px\n    ...\n\n"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<body>            // 16px\n  <ul>            // 12px\n    <li>\n      <ul>        // 12px\n    ...\n\n"})})})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variables",children:"Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Variables in SCSS are the powerhouse for making reuasable CSS structures. This file can store important information to the theme like font choices, base sizing, and include mixins and helpers for important functions that are reused throughout the stylesheets. Below is some useful content for this file:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{width:"200",children:"Variable"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"Description"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"Font Stack"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"$font-stack"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:["Specify the selected font and fallbacks to support. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:'$font-stack: "proxima", "Proxima Nova", "Lato", Helvetica, Arial, sans-serif;'})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"Font Size"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"$font-size"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:["A default root unit of size for font to be on the body. Recommended starting point is always ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"10px"}),". This makes it easy later. With 10px root, all sizing can be done in rem but it relates to a pixel value for ease in setup. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"16px = 1.6rem"}),". Later, changing this variable will proportiantely resize everything appropriately.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"$font-size: 10px;"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"Header Height"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"$header-height"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:["Height of the header. This does not have to be used for setting any height explicitly, but it can. It's still useful for the following variable for calculations.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"$header-height: 70px;"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"Sidebar Min Height"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"$sidebar-min-height"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td",{children:["In the case of a sidebar that should be the full height of the window - minus the header, this can be a useful variable.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"$sidebar-min-height: calc(100vh - $header-height);"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mixins-and-helpers",children:"Mixins and Helpers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The power of SCSS gives huge benefits for simplifying common tasks."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"deep-get-utility",children:"Deep Get Utility"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This allows the next several mixins to successfully navigate maps of variables."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/* deep get helper for maps */\n@function map-deep-get($map, $keys...){\n  @each $key in $keys {\n    $map: map-get($map, $key);\n  }\n  @return $map;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"color-palette",children:"Color Palette"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Setting up a color palette to be used reduces any reason to have hex code used within the application's stylesheets. This makes global changes much easier, and there's no need to reference a variable list as often."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@function palette($col, $variation:'base'){\n  @return map-get(map-get($color, $col), $variation);\n}\n\n$color: (\n  teal: (\n    light-50: #EDF2F2,\n    light-100: #A1BBBF,\n    light-300: #6D9BA2,\n    base: #456D73,\n    dark-600: #3C666C,\n    dark-700: #253E41,\n    dark-800: #192325,\n    dark-900: #121A1B\n  ),\n  grey: (\n    light-50: #FBFAF9,\n    light-100: #F6F4F3,\n    light-200: #EBE7E5,\n    light-300: #DBD5D1,\n    light-400: #C8C0BC,\n    base: #80736B,\n    dark-600: #58514D,\n    dark-700: #3F3631,\n    dark-800: #312A25,\n    dark-900: #221B17\n  ),\n  success: (\n    light: #B6CFB5,\n    base: #447F43,\n    dark: #102D10\n  ),\n  error: (\n    light: #F25A5A,\n    base: #C70505,\n    dark: #230101\n  )\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"color: palette(teal); "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"background-color: palette(grey, light-300); "})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Notes:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Do not add ' ' around colors."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"If second argument is blank, 'base' is assumed."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"breakpoint",children:"Breakpoint"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This mixin makes organizing responsive styling easy. It can be combined within the corresponding component being styled and makes the stylesheet easier to navigate. This is beneficial compared to other responsive styling strategies like a separate responsive stylesheet, which duplicates much of the necessary organization and makes finding relevant styles more difficult, or a media query block at the bottom of components that makes stylesheets more difficult to scan and read successfully."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Another added benefit is this can be set up to match the framework being used, in this case Bootstrap, so custom CSS can match behavior based on established breakpoint impacting the grid used by standard Bootstrap classes."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$breakpoint-size: (\n  xs: (max: 575px),\n  sm: (min: 576px,   max:767px),\n  md: (min:768px,    max:991px),\n  lg: (min: 992px,   max:1199px),\n  xl: (min: 1200px),\n  sm-and-lower: (max: 767px)\n);\n@mixin breakpoint($size) {\n  @if $size == 'xs' {\n    @media(max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n      @content;\n    };\n  }\n  @else if $size == 'sm-and-lower' {\n    @media(max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n      @content;\n    };\n  }\n  @else if $size == 'xl' {\n    @media(min-width: map-get(map-get($breakpoint-size, $size), 'min')) {\n      @content;\n    };\n  }\n  @else {\n    @media(min-width: map-get(map-get($breakpoint-size, $size), 'min') ) and (max-width: map-get(map-get($breakpoint-size,$size), 'max')) {\n      @content;\n    };\n  }\n};\n/* use: @include breakpoint(sm) { } */\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".card {\n    text-align: left;\n    @include breakpoint(sm) {\n        text-align: center;\n    }\n}\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);