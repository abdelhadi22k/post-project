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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ idpost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/config */ \"./utils/config.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction idpost(param) {\n    let { post } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imgUrl, setImgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [detels, setDetels] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const update = async (event)=>{\n        event.preventDefault();\n        const post = {\n            title,\n            imgUrl,\n            detels\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/api/post/addpost\"), post);\n            alert(\"post add successfully\");\n            setTitle(\"\");\n            setImgUrl(\"\");\n            setDetels(\"\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: {\n                    width: \"18rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Img, {\n                        variant: \"top\",\n                        alt: post.title,\n                        src: post.imgUrl\n                    }, void 0, false, {\n                        fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Body, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Title, {\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Text, {\n                                children: post.detels\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"success pr-2\",\n                                onClick: ()=>router.push(\"post/\".concat(post._id)),\n                                children: \"update\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"danger pr-2\",\n                                children: \"delete\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                            children: \"Disabled fieldset example\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3 row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    name: \"title\",\n                                    className: \"form-control\",\n                                    placeholder: \"title\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3 row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: imgUrl,\n                                    onChange: (e)=>setImgUrl(e.target.value),\n                                    name: \"imgUrl\",\n                                    className: \"form-control\",\n                                    placeholder: \"imgUrl\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3 row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: detels,\n                                    onChange: (e)=>setDetels(e.target.value),\n                                    name: \"detels\",\n                                    className: \"form-control\",\n                                    placeholder: \"detels\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-check\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-check-label\",\n                                    for: \"disabledFieldsetCheck\",\n                                    children: \"Can't check this\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addPost,\n                            className: \"btn btn-primary\",\n                            children: \"update\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\cv\\\\web site 4\\\\project 4\\\\client\\\\pages\\\\post\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(idpost, \"yFTlCZbRUbPTaxZYiOAzRKETuGU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTcUI7NEJBQVNkLFdBQVU7c0NBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hFO0dBbEd3QmhDOztRQUNSUCxrREFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9baWRdLmpzPzQ5NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgZG9tYWluIGZyb20gJy4vLi4vLi4vdXRpbHMvY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZHBvc3Qoe3Bvc3R9KSB7XHJcbmNvbnN0IHJvdXRlciA9ICB1c2VSb3V0ZXIoKVxyXG5jb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5jb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbmNvbnN0IFtkZXRlbHMsIHNldERldGVsc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbmNvbnN0IHVwZGF0ZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcG9zdCA9IHtcclxuICAgIHRpdGxlLGltZ1VybCxkZXRlbHNcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7ZG9tYWlufS9hcGkvcG9zdC9hZGRwb3N0YCxwb3N0KVxyXG4gICAgYWxlcnQoJ3Bvc3QgYWRkIHN1Y2Nlc3NmdWxseScpXHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgc2V0SW1nVXJsKFwiXCIpO1xyXG4gICBzZXREZXRlbHMoXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCIgfX0+XHJcbiAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBhbHQ9e3Bvc3QudGl0bGV9IHNyYz17cG9zdC5pbWdVcmx9IC8+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLlRpdGxlPntwb3N0LnRpdGxlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgIDxDYXJkLlRleHQ+e3Bvc3QuZGV0ZWxzfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2VzcyBwci0yXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYHBvc3QvJHtwb3N0Ll9pZH1gKX0+dXBkYXRlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXIgcHItMlwiPmRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICA8bGVnZW5kPkRpc2FibGVkIGZpZWxkc2V0IGV4YW1wbGU8L2xlZ2VuZD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWdVcmwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImltZ1VybFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbWdVcmxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXRlbHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERldGVscyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGV0ZWxzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRldGVsc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImRpc2FibGVkRmllbGRzZXRDaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgQ2FuJ3QgY2hlY2sgdGhpc1xyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFBvc3R9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB1cGRhdGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtkb21haW59L2FwaS9wb3N0LyR7Y29udGV4dC5xdWVyeS5pZH1gKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDogcmVzLmRhdGEsXHJcbiAgICB9XHJcbiAgfTtcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmQiLCJheGlvcyIsImRvbWFpbiIsImlkcG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiaW1nVXJsIiwic2V0SW1nVXJsIiwiZGV0ZWxzIiwic2V0RGV0ZWxzIiwidXBkYXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJ3aWR0aCIsIkltZyIsInZhcmlhbnQiLCJhbHQiLCJzcmMiLCJCb2R5IiwiVGl0bGUiLCJUZXh0Iiwib25DbGljayIsInB1c2giLCJfaWQiLCJmb3JtIiwiZmllbGRzZXQiLCJsZWdlbmQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJyIiwidGV4dGFyZWEiLCJsYWJlbCIsImZvciIsImJ1dHRvbiIsImFkZFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n"));

/***/ })

});