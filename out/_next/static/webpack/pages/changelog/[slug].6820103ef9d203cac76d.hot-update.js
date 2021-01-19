webpackHotUpdate_N_E("pages/changelog/[slug]",{

/***/ "./pages/changelog/[slug].tsx":
/*!************************************!*\
  !*** ./pages/changelog/[slug].tsx ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Changelog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Markdown */ \"./components/Markdown.tsx\");\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var components_SidebarMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SidebarMenu */ \"./components/SidebarMenu.tsx\");\n/* harmony import */ var components_SidebarMenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SidebarMenuItem */ \"./components/SidebarMenuItem.tsx\");\n/* harmony import */ var components_PostMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/PostMetadata */ \"./components/PostMetadata.tsx\");\nvar _jsxFileName = \"/Users/tommoor/Projects/outline-site/pages/changelog/[slug].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar __N_SSG = true;\nfunction Changelog(_ref) {\n  var title = _ref.title,\n      date = _ref.date,\n      tag = _ref.tag,\n      content = _ref.content;\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Changelog\",\n    pageTitle: \"\".concat(title, \" \\u2013 Changelog\"),\n    background: \"#F4F7FA\",\n    hero: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"New updates and improvements to Outline.\", \" \", __jsx(\"a\", {\n      href: \"https://twitter.com/outlinewiki\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, \"Follow us on twitter\"), \" to find out when features are released.\"),\n    sidebar: __jsx(components_SidebarMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }, __jsx(components_SidebarMenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      href: \"/changelog\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, \"\\u2190 Back to all\")),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, title), __jsx(components_PostMetadata__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    tag: tag,\n    date: date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(components_Markdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    source: content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }));\n}\n_c = Changelog;\n\nvar _c;\n\n$RefreshReg$(_c, \"Changelog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhbmdlbG9nL1tzbHVnXS50c3g/MTAyYyJdLCJuYW1lcyI6WyJDaGFuZ2Vsb2ciLCJ0aXRsZSIsImRhdGUiLCJ0YWciLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxTQUFULE9BQWtEO0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUFBLE1BQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7QUFBQSxNQUFoQkMsR0FBZ0IsUUFBaEJBLEdBQWdCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQy9ELFNBQ0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyxXQURSO0FBRUUsYUFBUyxZQUFLSCxLQUFMLHNCQUZYO0FBR0UsY0FBVSxFQUFDLFNBSGI7QUFJRSxRQUFJLEVBQ0YsK0dBQzJDLEdBRDNDLEVBRUU7QUFBRyxVQUFJLEVBQUMsaUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRiw2Q0FMSjtBQVdFLFdBQU8sRUFDTCxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtFQUFEO0FBQWlCLFVBQUksRUFBQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLEtBQUwsQ0FuQkYsRUFvQkUsTUFBQywrREFBRDtBQUFVLE9BQUcsRUFBRUUsR0FBZjtBQUFvQixRQUFJLEVBQUVELElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsRUFxQkUsTUFBQywyREFBRDtBQUFVLFVBQU0sRUFBRUUsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixDQURGO0FBeUJEO0tBMUJ1QkosUyIsImZpbGUiOiIuL3BhZ2VzL2NoYW5nZWxvZy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdCwgZ2V0UG9zdHMgfSBmcm9tIFwibGliL3Bvc3RzXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcImNvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgU2lkZWJhck1lbnUgZnJvbSBcImNvbXBvbmVudHMvU2lkZWJhck1lbnVcIjtcbmltcG9ydCBTaWRlYmFyTWVudUl0ZW0gZnJvbSBcImNvbXBvbmVudHMvU2lkZWJhck1lbnVJdGVtXCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcImNvbXBvbmVudHMvUG9zdE1ldGFkYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYW5nZWxvZyh7IHRpdGxlLCBkYXRlLCB0YWcsIGNvbnRlbnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHRpdGxlPVwiQ2hhbmdlbG9nXCJcbiAgICAgIHBhZ2VUaXRsZT17YCR7dGl0bGV9IOKAkyBDaGFuZ2Vsb2dgfVxuICAgICAgYmFja2dyb3VuZD1cIiNGNEY3RkFcIlxuICAgICAgaGVybz17XG4gICAgICAgIDw+XG4gICAgICAgICAgTmV3IHVwZGF0ZXMgYW5kIGltcHJvdmVtZW50cyB0byBPdXRsaW5lLntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9vdXRsaW5ld2lraVwiPkZvbGxvdyB1cyBvbiB0d2l0dGVyPC9hPiB0b1xuICAgICAgICAgIGZpbmQgb3V0IHdoZW4gZmVhdHVyZXMgYXJlIHJlbGVhc2VkLlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIHNpZGViYXI9e1xuICAgICAgICA8U2lkZWJhck1lbnU+XG4gICAgICAgICAgPFNpZGViYXJNZW51SXRlbSBocmVmPVwiL2NoYW5nZWxvZ1wiPlxuICAgICAgICAgICAgJmxhcnI7IEJhY2sgdG8gYWxsXG4gICAgICAgICAgPC9TaWRlYmFyTWVudUl0ZW0+XG4gICAgICAgIDwvU2lkZWJhck1lbnU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgPE1ldGFkYXRhIHRhZz17dGFnfSBkYXRlPXtkYXRlfSAvPlxuICAgICAgPE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwb3N0cyA9IGdldFBvc3RzKCk7XG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiBgL2NoYW5nZWxvZy8ke3Bvc3Quc2x1Z31gKTtcblxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBwb3N0ID0gZ2V0UG9zdChgJHtjb250ZXh0LnBhcmFtcy5zbHVnfS5tZGApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC4uLnBvc3QsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/changelog/[slug].tsx\n");

/***/ })

})