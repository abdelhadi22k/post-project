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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ idpost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction idpost() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const labo = router.query.id;\n    console.log(labo);\n    // const [post, setpost] = useState({});\n    // const [loading, setLoading] = useState(true);\n    // const [error, setError] = useState(\"\");\n    // useEffect(() => {\n    //   async function fetchpost() {\n    //     try {\n    //       const { data } = await axios.get(`${domain}/api/post/${labo}`);\n    //       setpost(data);\n    //       setLoading(false);\n    //       console.log(data);\n    //     } catch (err) {\n    //       setLoading(false);\n    //       setError(err.message);\n    //     }\n    //   }\n    //   fetchpost();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            style: {\n                width: \"18rem\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Img, {\n                    variant: \"top\",\n                    alt: post.title,\n                    src: post.imgUrl\n                }, void 0, false, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title, {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Text, {\n                            children: post.detels\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"success pr-2\",\n                            onClick: ()=>router.push(\"post/\".concat(post._id)),\n                            children: \"update\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"danger pr-2\",\n                            children: \"delete\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(idpost, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDQTtBQUNKOztBQUt6QixTQUFTSzs7SUFDeEIsTUFBTUMsU0FBVU4sc0RBQVNBO0lBRXpCLE1BQU1PLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ0MsRUFBRTtJQUM1QkMsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsMENBQTBDO0lBRTFDLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsWUFBWTtJQUVaLHdFQUF3RTtJQUN4RSx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixVQUFVO0lBRVIscUJBQ0U7a0JBQ0ksNEVBQUNILDREQUFJQTtZQUFDUSxPQUFPO2dCQUFFQyxPQUFPO1lBQVE7OzhCQUM5Qiw4REFBQ1QsZ0VBQVE7b0JBQUNXLFNBQVE7b0JBQU1DLEtBQUtDLEtBQUtDLEtBQUs7b0JBQUVDLEtBQUtGLEtBQUtHLE1BQU07Ozs7Ozs4QkFDekQsOERBQUNoQixpRUFBUzs7c0NBQ1IsOERBQUNBLGtFQUFVO3NDQUFFYSxLQUFLQyxLQUFLOzs7Ozs7c0NBQ3ZCLDhEQUFDZCxpRUFBUztzQ0FBRWEsS0FBS08sTUFBTTs7Ozs7O3NDQUN2Qiw4REFBQ3JCLDhEQUFNQTs0QkFBQ1ksU0FBUTs0QkFBZVUsU0FBUyxJQUFNbkIsT0FBT29CLElBQUksQ0FBQyxRQUFpQixPQUFUVCxLQUFLVSxHQUFHO3NDQUFLOzs7Ozs7c0NBQy9FLDhEQUFDeEIsOERBQU1BOzRCQUFDWSxTQUFRO3NDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBeEN3QlY7O1FBQ1JMLGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tpZF0uanM/NDk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBkb21haW4gZnJvbSAnLi8uLi8uLi91dGlscy9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkcG9zdCgpIHtcclxuY29uc3Qgcm91dGVyID0gIHVzZVJvdXRlcigpXHJcblxyXG5jb25zdCBsYWJvID0gcm91dGVyLnF1ZXJ5LmlkXHJcbmNvbnNvbGUubG9nKGxhYm8pXHJcblxyXG4vLyBjb25zdCBbcG9zdCwgc2V0cG9zdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbi8vIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4vLyBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICBhc3luYyBmdW5jdGlvbiBmZXRjaHBvc3QoKSB7XHJcbi8vICAgICB0cnkge1xyXG4gICAgICBcclxuLy8gICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7ZG9tYWlufS9hcGkvcG9zdC8ke2xhYm99YCk7XHJcbi8vICAgICAgIHNldHBvc3QoZGF0YSk7XHJcbi8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBmZXRjaHBvc3QoKTtcclxuLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCIgfX0+XHJcbiAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBhbHQ9e3Bvc3QudGl0bGV9IHNyYz17cG9zdC5pbWdVcmx9IC8+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLlRpdGxlPntwb3N0LnRpdGxlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgIDxDYXJkLlRleHQ+e3Bvc3QuZGV0ZWxzfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2VzcyBwci0yXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYHBvc3QvJHtwb3N0Ll9pZH1gKX0+dXBkYXRlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXIgcHItMlwiPmRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtkb21haW59L2FwaS9wb3N0LyR7Y29udGV4dC5xdWVyeS5pZH1gKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDogcmVzLmRhdGEsXHJcbiAgICB9XHJcbiAgfTtcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmQiLCJpZHBvc3QiLCJyb3V0ZXIiLCJsYWJvIiwicXVlcnkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsIndpZHRoIiwiSW1nIiwidmFyaWFudCIsImFsdCIsInBvc3QiLCJ0aXRsZSIsInNyYyIsImltZ1VybCIsIkJvZHkiLCJUaXRsZSIsIlRleHQiLCJkZXRlbHMiLCJvbkNsaWNrIiwicHVzaCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n"));

/***/ })

});