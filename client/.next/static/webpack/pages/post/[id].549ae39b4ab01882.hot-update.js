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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ idpost; },\n/* harmony export */   getServer: function() { return /* binding */ getServer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/config */ \"./utils/config.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import { domain } from '@/utils/config';\n\nfunction idpost() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [post, setpost] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchpost() {\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/api/post/\").concat(id.query.id));\n                setpost(data);\n                setLoading(false);\n                console.log(data);\n            } catch (err) {\n                setLoading(false);\n                setError(err.message);\n            }\n        }\n        fetchpost();\n    }, []);\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"idpost: \",\n                    router.query.id\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"idpost: \",\n                    post.title\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(idpost, \"fjnDhON8DBapk7Ygulk7VUCnNtI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\nasync function getServer(context) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/api/post/\"));\n    return {\n        props: {\n            postDta: res.data\n        }\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFFbEI7QUFDMUIsMkNBQTJDO0FBRUQ7QUFJM0IsU0FBU0s7O0lBQ3hCLE1BQU1DLFNBQVVOLHNEQUFTQTtJQUl6QixNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSLGVBQWVZO1lBQ2IsSUFBSTtnQkFFRixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1YLGlEQUFTLENBQUMsR0FBc0JhLE9BQW5CWixxREFBTUEsRUFBQyxjQUF3QixPQUFaWSxHQUFHQyxLQUFLLENBQUNELEVBQUU7Z0JBQ2xFUixRQUFRTTtnQkFDUkosV0FBVztnQkFDWFEsUUFBUUMsR0FBRyxDQUFDTDtZQUNkLEVBQUUsT0FBT00sS0FBSztnQkFDWlYsV0FBVztnQkFDWEUsU0FBU1EsSUFBSUMsT0FBTztZQUN0QjtRQUNGO1FBQ0FSO0lBQ0YsR0FBRyxFQUFFO0lBRUgsT0FBT0osd0JBQ0wsOERBQUNhO2tCQUFHOzs7OztlQUNGWCxzQkFDRiw4REFBQ1c7a0JBQUlYOzs7Ozs2QkFFTDs7MEJBQ0UsOERBQUNZOztvQkFBRztvQkFBU2pCLE9BQU9XLEtBQUssQ0FBQ0QsRUFBRTs7Ozs7OzswQkFDNUIsOERBQUNPOztvQkFBRztvQkFBU2hCLEtBQUtpQixLQUFLOzs7Ozs7Ozs7QUFHN0I7R0FuQ3dCbkI7O1FBQ1JMLGtEQUFTQTs7O0FBcUNsQixlQUFleUIsVUFBVUMsT0FBTztJQUNyQyxNQUFNQyxNQUFNLE1BQU14QixpREFBUyxDQUFDLEdBQVUsT0FBUEMscURBQU1BLEVBQUM7SUFDdEMsT0FBTztRQUNMd0IsT0FBTztZQUNMQyxTQUFTRixJQUFJYixJQUFJO1FBQ25CO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tpZF0uanM/NDk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgeyBkb21haW4gfSBmcm9tICdAL3V0aWxzL2NvbmZpZyc7XHJcblxyXG5pbXBvcnQgZG9tYWluIGZyb20gJy4vLi4vLi4vdXRpbHMvY29uZmlnJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRwb3N0KCkge1xyXG5jb25zdCByb3V0ZXIgPSAgdXNlUm91dGVyKClcclxuXHJcblxyXG5cclxuY29uc3QgW3Bvc3QsIHNldHBvc3RdID0gdXNlU3RhdGUoe30pO1xyXG5jb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hwb3N0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2RvbWFpbn0vYXBpL3Bvc3QvJHtpZC5xdWVyeS5pZH1gKTtcclxuICAgICAgc2V0cG9zdChkYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZldGNocG9zdCgpO1xyXG59LCBbXSk7XHJcblxyXG4gIHJldHVybiBsb2FkaW5nID8gKFxyXG4gICAgPGgyPkxvYWRpbmcuLi48L2gyPlxyXG4gICkgOiBlcnJvciA/IChcclxuICAgIDxoMj57ZXJyb3J9PC9oMj5cclxuICApIDogKFxyXG4gICAgPD5cclxuICAgICAgPGgxPmlkcG9zdDoge3JvdXRlci5xdWVyeS5pZH08L2gxPlxyXG4gICAgICA8aDE+aWRwb3N0OiB7cG9zdC50aXRsZX08L2gxPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXIoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtkb21haW59L2FwaS9wb3N0L2ApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0RHRhOiByZXMuZGF0YSxcclxuICAgIH1cclxuICB9O1xyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJkb21haW4iLCJpZHBvc3QiLCJyb3V0ZXIiLCJwb3N0Iiwic2V0cG9zdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNocG9zdCIsImRhdGEiLCJnZXQiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImVyciIsIm1lc3NhZ2UiLCJoMiIsImgxIiwidGl0bGUiLCJnZXRTZXJ2ZXIiLCJjb250ZXh0IiwicmVzIiwicHJvcHMiLCJwb3N0RHRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n"));

/***/ })

});