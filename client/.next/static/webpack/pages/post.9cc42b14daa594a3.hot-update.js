"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./components/postItem.js":
/*!********************************!*\
  !*** ./components/postItem.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config */ \"./utils/config.js\");\n\n\n\n\n\n\n\nfunction PostItem(param) {\n    let { post } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            style: {\n                width: \"18rem\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Img, {\n                    variant: \"top\",\n                    alt: post.title,\n                    src: post.imgUrl\n                }, void 0, false, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\components\\\\postItem.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title, {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\components\\\\postItem.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Text, {\n                            children: post.detels\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\components\\\\postItem.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"success pr-2\",\n                            onClick: ()=>router.push(\"post/$post\"),\n                            children: \"update\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\components\\\\postItem.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"danger pr-2\",\n                            children: \"delete\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\components\\\\postItem.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\components\\\\postItem.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\components\\\\postItem.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = PostItem;\nvar _c;\n$RefreshReg$(_c, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNBO0FBQ0E7QUFDSjtBQUNIO0FBRXRCLFNBQVNPLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSO0lBQy9CLHFCQUNFO2tCQUNFLDRFQUFDSCw0REFBSUE7WUFBQ0ksT0FBTztnQkFBRUMsT0FBTztZQUFROzs4QkFDNUIsOERBQUNMLGdFQUFRO29CQUFDTyxTQUFRO29CQUFNQyxLQUFLTCxLQUFLTSxLQUFLO29CQUFFQyxLQUFLUCxLQUFLUSxNQUFNOzs7Ozs7OEJBQ3pELDhEQUFDWCxpRUFBUzs7c0NBQ1IsOERBQUNBLGtFQUFVO3NDQUFFRyxLQUFLTSxLQUFLOzs7Ozs7c0NBQ3ZCLDhEQUFDVCxpRUFBUztzQ0FBRUcsS0FBS1ksTUFBTTs7Ozs7O3NDQUN2Qiw4REFBQ2hCLDhEQUFNQTs0QkFBQ1EsU0FBUTs0QkFBZVMsU0FBUyxJQUFNQyxPQUFPQyxJQUFJLENBQUU7c0NBQWM7Ozs7OztzQ0FDekUsOERBQUNuQiw4REFBTUE7NEJBQUNRLFNBQVE7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEM7S0Fkd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdEl0ZW0uanM/ZjljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgZG9tYWluIGZyb20gXCIuLi91dGlscy9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RJdGVtKHsgcG9zdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCIgfX0+XHJcbiAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBhbHQ9e3Bvc3QudGl0bGV9IHNyYz17cG9zdC5pbWdVcmx9IC8+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLlRpdGxlPntwb3N0LnRpdGxlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgIDxDYXJkLlRleHQ+e3Bvc3QuZGV0ZWxzfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2VzcyBwci0yXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYHBvc3QvJHBvc3RgKX0+dXBkYXRlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXIgcHItMlwiPmRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJCdXR0b24iLCJDYXJkIiwiZG9tYWluIiwiUG9zdEl0ZW0iLCJwb3N0Iiwic3R5bGUiLCJ3aWR0aCIsIkltZyIsInZhcmlhbnQiLCJhbHQiLCJ0aXRsZSIsInNyYyIsImltZ1VybCIsIkJvZHkiLCJUaXRsZSIsIlRleHQiLCJkZXRlbHMiLCJvbkNsaWNrIiwicm91dGVyIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/postItem.js\n"));

/***/ })

});