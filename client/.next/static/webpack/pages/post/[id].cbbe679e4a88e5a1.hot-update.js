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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ idpost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction idpost(param) {\n    let { post } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const [post, setpost] = useState({});\n    // const [loading, setLoading] = useState(true);\n    // const [error, setError] = useState(\"\");\n    // useEffect(() => {\n    //   async function fetchpost() {\n    //     try {\n    //       const { data } = await axios.get(`${domain}/api/post/${id.query.id}`);\n    //       setpost(data);\n    //       setLoading(false);\n    //       console.log(data);\n    //     } catch (err) {\n    //       setLoading(false);\n    //       setError(err.message);\n    //     }\n    //   }\n    //   fetchpost();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            style: {\n                width: \"18rem\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Img, {\n                    variant: \"top\",\n                    alt: post.title,\n                    src: post.imgUrl\n                }, void 0, false, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title, {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Text, {\n                            children: post.detels\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"success pr-2\",\n                            onClick: ()=>router.push(\"post/\".concat(post._id)),\n                            children: \"update\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"danger pr-2\",\n                            children: \"delete\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(idpost, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDQTtBQUNKOztBQUt6QixTQUFTSyxPQUFPLEtBQU07UUFBTixFQUFDQyxJQUFJLEVBQUMsR0FBTjs7SUFDL0IsTUFBTUMsU0FBVVAsc0RBQVNBO0lBSXpCLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsMENBQTBDO0lBRTFDLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsWUFBWTtJQUVaLCtFQUErRTtJQUMvRSx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixVQUFVO0lBRVIscUJBQ0U7a0JBQ0ksNEVBQUNJLDREQUFJQTtZQUFDSSxPQUFPO2dCQUFFQyxPQUFPO1lBQVE7OzhCQUM5Qiw4REFBQ0wsZ0VBQVE7b0JBQUNPLFNBQVE7b0JBQU1DLEtBQUtOLEtBQUtPLEtBQUs7b0JBQUVDLEtBQUtSLEtBQUtTLE1BQU07Ozs7Ozs4QkFDekQsOERBQUNYLGlFQUFTOztzQ0FDUiw4REFBQ0Esa0VBQVU7c0NBQUVFLEtBQUtPLEtBQUs7Ozs7OztzQ0FDdkIsOERBQUNULGlFQUFTO3NDQUFFRSxLQUFLYSxNQUFNOzs7Ozs7c0NBQ3ZCLDhEQUFDaEIsOERBQU1BOzRCQUFDUSxTQUFROzRCQUFlUyxTQUFTLElBQU1iLE9BQU9jLElBQUksQ0FBQyxRQUFpQixPQUFUZixLQUFLZ0IsR0FBRztzQ0FBSzs7Ozs7O3NDQUMvRSw4REFBQ25CLDhEQUFNQTs0QkFBQ1EsU0FBUTtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQXZDd0JOOztRQUNSTCxrREFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9baWRdLmpzPzQ5NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgZG9tYWluIGZyb20gJy4vLi4vLi4vdXRpbHMvY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZHBvc3Qoe3Bvc3R9KSB7XHJcbmNvbnN0IHJvdXRlciA9ICB1c2VSb3V0ZXIoKVxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBbcG9zdCwgc2V0cG9zdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbi8vIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4vLyBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICBhc3luYyBmdW5jdGlvbiBmZXRjaHBvc3QoKSB7XHJcbi8vICAgICB0cnkge1xyXG4gICAgICBcclxuLy8gICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7ZG9tYWlufS9hcGkvcG9zdC8ke2lkLnF1ZXJ5LmlkfWApO1xyXG4vLyAgICAgICBzZXRwb3N0KGRhdGEpO1xyXG4vLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgZmV0Y2hwb3N0KCk7XHJcbi8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogXCIxOHJlbVwiIH19PlxyXG4gICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgYWx0PXtwb3N0LnRpdGxlfSBzcmM9e3Bvc3QuaW1nVXJsfSAvPlxyXG4gICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICA8Q2FyZC5UaXRsZT57cG9zdC50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZC5UZXh0Pntwb3N0LmRldGVsc308L0NhcmQuVGV4dD5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInN1Y2Nlc3MgcHItMlwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGBwb3N0LyR7cG9zdC5faWR9YCl9PnVwZGF0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyIHByLTJcIj5kZWxldGU8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7ZG9tYWlufS9hcGkvcG9zdC8ke2NvbnRleHQucXVlcnkuaWR9YCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IHJlcy5kYXRhLFxyXG4gICAgfVxyXG4gIH07XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDYXJkIiwiaWRwb3N0IiwicG9zdCIsInJvdXRlciIsInN0eWxlIiwid2lkdGgiLCJJbWciLCJ2YXJpYW50IiwiYWx0IiwidGl0bGUiLCJzcmMiLCJpbWdVcmwiLCJCb2R5IiwiVGl0bGUiLCJUZXh0IiwiZGV0ZWxzIiwib25DbGljayIsInB1c2giLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n"));

/***/ })

});