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

/***/ "./pages/post/postItem.js":
/*!********************************!*\
  !*** ./pages/post/postItem.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/config */ \"./utils/config.js\");\n\n\n\n\n\nfunction PostItem(param) {\n    let { post } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: el.title\n                }, void 0, false, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\postItem.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: el._id\n                }, void 0, false, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\postItem.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\postItem.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\postItem.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n} // export async function getStaticProps() {\n //   const res = await axios.get(`${domain}/api/post/`);\n //   return {\n //     props: {\n //       postDta: res.data,\n //     }\n //   };\n // }\n_c = PostItem;\nvar _c;\n$RefreshReg$(_c, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L3Bvc3RJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDQTtBQUVGO0FBRTNCLFNBQVNLLFNBQVMsS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOO0lBQy9CLHFCQUNFO2tCQUNFLDRFQUFDQzs7OEJBQ0MsOERBQUNDOzhCQUFJQyxHQUFHQyxLQUFLOzs7Ozs7OEJBQ2IsOERBQUNGOzhCQUFJQyxHQUFHRSxHQUFHOzs7Ozs7OEJBQ1gsOERBQUNDOzs7Ozs7Ozs7Ozs7QUFJVCxFQUVBLDJDQUEyQztDQUMzQyx3REFBd0Q7Q0FDeEQsYUFBYTtDQUNiLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsUUFBUTtDQUNSLE9BQU87Q0FDUCxJQUFJO0tBbkJvQlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9wb3N0SXRlbS5qcz8zM2UwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgZG9tYWluIGZyb20gXCIuLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEl0ZW0oe3Bvc3R9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPntlbC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxoMT57ZWwuX2lkfTwvaDE+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtkb21haW59L2FwaS9wb3N0L2ApO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBwb3N0RHRhOiByZXMuZGF0YSxcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiZG9tYWluIiwiUG9zdEl0ZW0iLCJwb3N0IiwiZGl2IiwiaDEiLCJlbCIsInRpdGxlIiwiX2lkIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/postItem.js\n"));

/***/ })

});