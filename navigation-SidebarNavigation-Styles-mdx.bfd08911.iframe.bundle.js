/*! For license information please see navigation-SidebarNavigation-Styles-mdx.bfd08911.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunket_storybook=self.webpackChunket_storybook||[]).push([[302],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/navigation/SidebarNavigation/Styles.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Navigation/Sidebar Navigation/Styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"sidebar-navigation-styles",children:"Sidebar Navigation Styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"\n.sidebar-navigation {\n  width: $sidebarWidth;\n  background-color: palette(grey, light-50);                // color\n  color: palette(grey, dark-600);                           // color\n  height: 100%;\n  min-height: 100vh;\n  max-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  transition: all .2s ease;\n  position: relative;\n  .brand {\n    padding: 2rem 1.5rem;\n    flex-shrink: 1;\n    a {\n      color: palette(grey, dark-600);                       // color\n      text-decoration: none;\n    }\n  }\n  hr {\n    margin: 0;\n    border-top: 1px solid palette(grey,light-100);          // color\n  }\n  .primary-navigation {\n    flex-grow: 1;\n    min-height: 0;\n    list-style: none;\n    overflow: visible auto;\n    margin: 0;\n    padding: 0 .5rem;\n    li {\n      padding: .5rem 1rem;\n      margin-bottom: .5rem;\n      transition: all .2s ease;\n      border-radius: 1rem;\n      a {\n        text-decoration: none;\n        color: palette(grey,dark-600);                      // color\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        gap: 1rem;\n        font-weight: bold;\n        font-size: 1.4rem;\n        span:not(.badge-container, .count) {\n          flex-grow: 1;\n        }\n        i {\n          flex-shrink: 1;\n          font-size: 1.8rem;\n          &.dropdown-arrow {\n            transition: all .1s ease;\n            font-size: 1.2rem;\n            text-align: right;\n            &.spin-icon-up {\n              rotate: 180deg;\n            }\n          }\n        }\n        span.badge-container {\n          flex-grow: 1;\n          text-align: right;\n          align-items: center;\n          display: flex;\n          flex-direction: row-reverse;\n          .count {\n            transition: all .2s ease;\n            background-color: palette(grey,light-100);      // color\n            font-size: 1rem;\n            padding: .1rem .3rem;\n            border-radius: .5rem;\n          }\n        }\n      }\n      &.nav-heading {\n        text-transform: uppercase;\n        font-size: 1rem;\n        padding: 1.5rem 1.5rem 0 1rem;\n        &:hover {\n          background: none;\n        }\n      }\n      &:hover {\n        background-color: palette(grey,light-100);          // color\n        a {\n          color: palette(grey,dark-900);                    // color\n          span.badge-container {\n            .count {\n              background-color: palette(grey,light-200);    // color\n            }\n          }\n        }\n        &.sub-navigation-trigger {\n          a {\n            i.dropdown-arrow {\n              font-size: 1.6rem;\n            }\n          }\n        }\n      }\n    }\n    .sub-navigation-menu {\n      overflow: hidden;\n      max-height: 0;\n      transition: all .2s ease;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      &.show {\n        max-height: 900px;\n      }\n      li {\n        &:first-child {\n          margin-top: 1rem;\n        }\n        padding: .2rem 1rem .2rem 3.2rem;\n        a {\n          &:hover {\n            color: palette(grey, light-50);\n          }\n        }\n      }\n    }\n  }\n  .sidebar-footer {\n    position: relative;\n    > a {\n      background-color: palette(grey, light-50);            // color\n      display: flex;\n      flex-direction: row;\n      padding: 2rem 1.5rem 2rem 1rem;\n      color: palette(grey, dark-600);                       // color\n      text-decoration: none;\n      font-size: 1.2rem;\n      font-weight: bold;\n      gap: 1rem;\n      align-items: center;\n      transition: all .2s ease;\n      position: relative;\n      z-index:2;\n      span {\n        flex-grow: 1;\n        line-height: 1.4rem;\n        .useremail {\n          font-weight: normal;\n          font-size: 1rem;\n        }\n      }\n      i {\n        flex-shrink: 1;\n        font-size: 3.5rem;\n        &.dropdown-ellipsis {\n          transition: all .1s ease;\n          font-size: 1.2rem;\n          text-align: right;\n          padding-right: .3rem;\n        }\n      }\n      img.user-avatar {\n        flex-shrink: 1;\n        width: 3.5rem;\n        height: 3.5rem;\n        border-radius: 3.5rem;\n        overflow: hidden;\n      }\n      &:hover {\n        background-color: palette(grey,light-100);            // color\n        color: palette(grey,dark-900);                        // color\n        i.dropdown-ellipsis {\n          font-size: 1.6rem;\n        }\n      }\n    }\n    .sidebar-footer-menu {\n      list-style: none;\n      margin: 0;\n      padding: 1rem 0;\n      position: absolute;\n      bottom:68px;\n      left: 0;\n      background-color: white;                               // color\n      border-top: 1px solid palette(grey,light-100);         // color\n      width: 100%;\n      z-index:1;\n      bottom: 47px;\n      max-height: 0;\n      overflow: hidden;\n      transition: max-height .5s ease;\n      transition: bottom .1s linear;\n        &.show {\n          bottom: 68px;\n          max-height: 900px;\n        }\n        li {\n          padding: 0 .5rem;\n          display: flex;\n          a {\n            color: palette(grey, dark-600);                   // color\n            display: flex;\n            width: 100%;\n            text-decoration: none;\n            font-size: 1.4rem;\n            font-weight: bold;\n            padding: .75rem 1rem;\n            &:hover {\n              background-color: palette(grey, light-50);      // color\n              color: palette(grey, dark-900);                 // color\n              border-radius: 1rem;\n            }\n          }\n        }\n    }\n  }\n\n\n\n  &.dark {                                                      // dark mode overrides to colors\n    background-color: palette(grey, dark-800);                // color\n    color: palette(grey,light-200);                           // color\n    .brand {\n      a {\n        color: palette(grey, light-200);                      // color\n      }\n    }\n    hr {\n      border-top: 1px solid palette(grey,dark-600);           // color\n    }\n    .primary-navigation {\n      li:not(.nav-heading) {\n        a {\n          color: palette(grey, light-50);                     // color\n          span.badge-container {\n            .count {\n              background-color: palette(grey);                // color\n            }\n          }\n        }\n        &:hover {\n          background-color: palette(grey,dark-600);           // color\n          a {\n            color: palette(grey,light-50);                    // color\n          }\n        }\n      }\n      .sub-navigation-menu {\n        li {\n          a {\n            &:hover {\n              color: palette(grey, light-300);                // color\n            }\n          }\n        }\n      }\n    }\n    .sidebar-footer {\n      > a {\n        background-color: palette(grey, dark-800);            // color\n        color: palette(grey, light-300);                      // color\n        &:hover {\n          background-color: palette(grey, dark-700);          // color\n          color: palette(grey,light-50);                      // color\n        }\n      }\n      .sidebar-footer-menu {\n        background-color: palette(grey, dark-700);            // color\n        border-top: 1px solid palette(grey,dark-600);         // color\n          li {\n            a {\n              color: palette(grey, light-300);                // color\n              &:hover {\n                background-color: palette(grey, dark-600);    // color\n                color: palette(grey, light-50);               // color\n              }\n            }\n          }\n      }\n    }\n  }\n  @include breakpoint(sm-and-lower) {                           // narrow view for small screens\n    width: $sidebarSmallWidth;\n    .brand {\n      padding: 1.5rem;\n      text-align: center;\n    }\n    .primary-navigation {\n      li {\n        a {\n          gap: 0rem;\n          span:not(.badge-container, .count) {\n            display: none;\n          }\n          i.dropdown-arrow {\n            &:before {\n              content: '\\f142';\n            }\n            &.spin-icon-up {\n              rotate: none;\n            }\n          }\n        }\n        &.nav-heading {\n          display: none;\n        }\n        &.sub-navigation-trigger {\n          .sub-navigation-menu {\n            position: absolute;\n            top: 0;\n            left: $sidebarSmallWidth;\n            background-color: palette(grey, light-100);       // color\n            min-width: 100px;\n            li {\n              padding: .2rem 1.5rem;\n              &:first-child {\n                margin-top: .5rem;\n              }\n              a {\n                span {\n                  display: block;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    .sidebar-footer {\n      position: relative;\n      > a {\n        gap: 0rem;\n        padding: 2rem 1.5rem;\n        span {\n          display: none;\n        }\n        i {\n          font: var(--fa-font-regular);\n          font-size: 2.5rem;\n          &.dropdown-ellipsis {\n            font-size: 1.2rem;\n          }\n        }\n      }\n      .sidebar-footer-menu {\n        position: absolute;\n        bottom: 0;\n        border: none;\n        left: 70px;\n        padding: 0;\n        max-height: 0;\n        width: max-content;\n        background-color: palette(grey, light-100);           // color\n        min-width: 100px;\n        transition: all .2s ease;\n        li {\n          padding: .3rem 1.5rem;\n          &:first-child {\n            margin-top: 1rem;\n          }\n          &:last-child {\n            margin-bottom: 1rem;\n          }\n          a {\n            padding: 0;\n            &:hover {\n              background-color: transparent;                  // color\n              color: white;                                   // color\n            }\n          }\n        }\n        &.show {\n          bottom: 0;\n          max-height: 900px;\n        }\n      }\n    }\n    &.dark {                                                   // dark mode changes specific to small screens\n      .primary-navigation {\n        li {\n          &.sub-navigation-trigger {\n            .sub-navigation-menu {\n              background-color: palette(grey, dark-600);      // color\n            }\n          }\n        }\n      }\n      .sidebar-footer {\n        .sidebar-footer-menu {\n          li {\n            a {\n              &:hover {\n                background-color: transparent;                // color\n                color: white;                                 // color\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);