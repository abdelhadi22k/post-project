"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ idpost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/config */ \"./utils/config.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import { domain } from '@/utils/config';\n\nfunction idpost() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [post, setpost] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchpost() {\n            try {\n                const routeritem = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/api/post/\").concat(routeritem.query.id));\n                setpost(data);\n                setLoading(false);\n                console.log(data);\n            } catch (err) {\n                setLoading(false);\n                setError(err.message);\n            }\n        }\n        fetchpost();\n    }, []);\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"idpost: \",\n                    router.query.id\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"idpost: \",\n                    post.title\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(idpost, \"fjnDhON8DBapk7Ygulk7VUCnNtI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUVsQjtBQUMxQiwyQ0FBMkM7QUFFRDtBQUkzQixTQUFTSzs7SUFDeEIsTUFBTUMsU0FBVU4sc0RBQVNBO0lBR3pCLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVk7WUFDYixJQUFJO2dCQUNSLE1BQU1DLGFBQWNkLHNEQUFTQTtnQkFFdkIsTUFBTSxFQUFFZSxJQUFJLEVBQUUsR0FBRyxNQUFNWixpREFBUyxDQUFDLEdBQXNCVyxPQUFuQlYscURBQU1BLEVBQUMsY0FBZ0MsT0FBcEJVLFdBQVdHLEtBQUssQ0FBQ0MsRUFBRTtnQkFDMUVWLFFBQVFPO2dCQUNSTCxXQUFXO2dCQUNYUyxRQUFRQyxHQUFHLENBQUNMO1lBQ2QsRUFBRSxPQUFPTSxLQUFLO2dCQUNaWCxXQUFXO2dCQUNYRSxTQUFTUyxJQUFJQyxPQUFPO1lBQ3RCO1FBQ0Y7UUFDQVQ7SUFDRixHQUFHLEVBQUU7SUFFSCxPQUFPSix3QkFDTCw4REFBQ2M7a0JBQUc7Ozs7O2VBQ0ZaLHNCQUNGLDhEQUFDWTtrQkFBSVo7Ozs7OzZCQUVMOzswQkFDRSw4REFBQ2E7O29CQUFHO29CQUFTbEIsT0FBT1csS0FBSyxDQUFDQyxFQUFFOzs7Ozs7OzBCQUM1Qiw4REFBQ007O29CQUFHO29CQUFTakIsS0FBS2tCLEtBQUs7Ozs7Ozs7OztBQUc3QjtHQW5Dd0JwQjs7UUFDUkwsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW2lkXS5qcz80OTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IGRvbWFpbiB9IGZyb20gJ0AvdXRpbHMvY29uZmlnJztcclxuXHJcbmltcG9ydCBkb21haW4gZnJvbSAnLi8uLi8uLi91dGlscy9jb25maWcnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZHBvc3QoKSB7XHJcbmNvbnN0IHJvdXRlciA9ICB1c2VSb3V0ZXIoKVxyXG5cclxuXHJcbmNvbnN0IFtwb3N0LCBzZXRwb3N0XSA9IHVzZVN0YXRlKHt9KTtcclxuY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbmNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNocG9zdCgpIHtcclxuICAgIHRyeSB7XHJcbmNvbnN0IHJvdXRlcml0ZW0gPSAgdXNlUm91dGVyKClcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2RvbWFpbn0vYXBpL3Bvc3QvJHtyb3V0ZXJpdGVtLnF1ZXJ5LmlkfWApO1xyXG4gICAgICBzZXRwb3N0KGRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZmV0Y2hwb3N0KCk7XHJcbn0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIGxvYWRpbmcgPyAoXHJcbiAgICA8aDI+TG9hZGluZy4uLjwvaDI+XHJcbiAgKSA6IGVycm9yID8gKFxyXG4gICAgPGgyPntlcnJvcn08L2gyPlxyXG4gICkgOiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+aWRwb3N0OiB7cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XHJcbiAgICAgIDxoMT5pZHBvc3Q6IHtwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiZG9tYWluIiwiaWRwb3N0Iiwicm91dGVyIiwicG9zdCIsInNldHBvc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaHBvc3QiLCJyb3V0ZXJpdGVtIiwiZGF0YSIsImdldCIsInF1ZXJ5IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImgyIiwiaDEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n"));

/***/ })

});