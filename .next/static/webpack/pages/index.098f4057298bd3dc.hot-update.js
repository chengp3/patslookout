"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\n\n\nfunction Home() {\n    const containerVariants = {\n        hide: {\n            opacity: 1\n        },\n        show: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.5\n            }\n        }\n    };\n    const item = {\n        hide: {\n            opacity: 0,\n            x: \"50vw\"\n        },\n        show: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                type: \"tween\",\n                ease: \"easeIn\",\n                duration: .2\n            }\n        }\n    };\n    const AnimatedText = (param)=>{\n        let { id, children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            className: \"my-4\",\n            variants: item,\n            initial: \"hide\",\n            animate: \"show\",\n            children: children\n        }, id, false, {\n            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-xl my-10 flex flex-col items-center transition-swipe px-6 flex-grow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"content\",\n            className: \"flex flex-col w-full items-center justify-center saturate-100 drop-shadow-2xl transition-swipe\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"display sm:hidden w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.wta.org/go-hiking/hikes/mailbox-peak\",\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg\",\n                            className: \"saturate-100 drop-shadow-2xl w-1/2 my-4\",\n                            alt: \"On a clear day...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 45\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                    className: \"w-full\",\n                    variants: containerVariants,\n                    initial: \"hide\",\n                    animate: \"show\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.wta.org/go-hiking/hikes/mailbox-peak\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {\n                                src: \"https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg\",\n                                className: \"float-right saturate-100 drop-shadow-2xl w-1/4 my-4 mx-8 hidden md:block\",\n                                variants: item,\n                                initial: \"hide\",\n                                animate: \"show\",\n                                alt: \"On a clear day...\"\n                            }, \"1\", false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 70\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"My name is Patrick \\uD83D\\uDC4B\\uD83C\\uDFFB I solve problems with software. This website is part portfolio and part workshop/lab where I host personal projects.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 39\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"A little about me. I was born in Austin, Texas, and then discovered a love for mountains; now I currently live in Portland, OR.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 39\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 mb-4\",\n                            children: [\n                                \"Software-wise, (chronologically) I have been a financial data engineer for the SEC using Hadoop-based pipelines. I've used scikitlearn machine learning algorithms to diagnose leukemia. Lately I have been doing full stack web development for \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.galacticpolymath.com\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Galactic Polymath\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 320\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 277\n                                }, this),\n                                \". Mostly NextJS-based stuff.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 mb-4\",\n                            children: \"The picture above is from the summit of Mailbox Peak near Seattle, WA, and inspired the domain name for this site. That's Mount Rainier in the distance! I will incorporate a trip journal and gallery here soon.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVzQztBQUNIO0FBUXBCLFNBQVNHO0lBQ3RCLE1BQU1DLG9CQUFvQjtRQUN4QkMsTUFBTTtZQUFFQyxTQUFTO1FBQUU7UUFDbkJDLE1BQU07WUFDSkQsU0FBUztZQUNURSxZQUFZO2dCQUNWQyxpQkFBaUI7WUFDbkI7UUFDRjtJQUNGO0lBQ0EsTUFBTUMsT0FBTztRQUNYTCxNQUFNO1lBQUVDLFNBQVM7WUFBR0ssR0FBRztRQUFPO1FBQzlCSixNQUFNO1lBQUVELFNBQVM7WUFBR0ssR0FBRztZQUNyQkgsWUFBWTtnQkFDVkksTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkMsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQU9BLE1BQU1DLGVBQTRDO1lBQUMsRUFBQ0MsRUFBRSxFQUFFQyxRQUFRLEVBQUM7UUFDL0QscUJBQ0UsOERBQUNqQixpREFBTUEsQ0FBQ2tCLEdBQUc7WUFBVUMsV0FBVTtZQUM3QkMsVUFBVVY7WUFDVlcsU0FBUTtZQUNSQyxTQUFRO3NCQUVQTDtXQUxjRDs7Ozs7SUFRckI7SUFFQSxxQkFDRSw4REFBQ087UUFBS0osV0FBVTtrQkFDZCw0RUFBQ0Q7WUFBSUYsSUFBRztZQUFVRyxXQUFVOzs4QkFDMUIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDSzt3QkFBRUMsTUFBSzt3QkFDTk4sV0FBVTtrQ0FBc0IsNEVBQUNPOzRCQUFJQyxLQUFJOzRCQUN2Q1IsV0FBVTs0QkFDVlMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFViw4REFBQzVCLGlEQUFNQSxDQUFDa0IsR0FBRztvQkFBQ0MsV0FBVTtvQkFDcEJDLFVBQVVoQjtvQkFDVmlCLFNBQVE7b0JBQ1JDLFNBQVE7O3NDQUVSLDhEQUFDRTs0QkFBRUMsTUFBSztzQ0FBbUQsNEVBQUN6QixpREFBTUEsQ0FBQzBCLEdBQUc7Z0NBQ3BFQyxLQUFJO2dDQUNKUixXQUFVO2dDQUVWQyxVQUFVVjtnQ0FDVlcsU0FBUTtnQ0FDUkMsU0FBUTtnQ0FDUk0sS0FBSTsrQkFQcUU7Ozs7Ozs7Ozs7c0NBUTNFLDhEQUFDYjs0QkFBYUMsSUFBSWQsd0NBQU1BO3NDQUFJLDRFQUFDMkI7MENBQUU7Ozs7Ozs7Ozs7O3NDQUMvQiw4REFBQ2Q7NEJBQWFDLElBQUlkLHdDQUFNQTtzQ0FBSSw0RUFBQzJCOzBDQUFFOzs7Ozs7Ozs7OztzQ0FDL0IsOERBQUNBOzRCQUFFVixXQUFVOztnQ0FBWTs4Q0FBaVAsOERBQUNLO29DQUFFQyxNQUFLOzhDQUFtQyw0RUFBQ0s7a0RBQUU7Ozs7Ozs7Ozs7O2dDQUF5Qjs7Ozs7OztzQ0FFalYsOERBQUNEOzRCQUFFVixXQUFVO3NDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQztLQXRFd0JoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxudHlwZSBJbWFnZURhdGEgPSB7XG4gIGZpbGVuYW1lOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRhZ3M6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY29udGFpbmVyVmFyaWFudHMgPSB7XG4gICAgaGlkZTogeyBvcGFjaXR5OiAxIH0sXG4gICAgc2hvdzogeyBcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC41XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBpdGVtID0ge1xuICAgIGhpZGU6IHsgb3BhY2l0eTogMCwgeDogJzUwdncnIH0sXG4gICAgc2hvdzogeyBvcGFjaXR5OiAxLCB4OiAwLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICAgIGVhc2U6IFwiZWFzZUluXCIsXG4gICAgICAgIGR1cmF0aW9uOiAuMlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVyZmFjZSBBbmltYXRlZFRleHRQcm9wcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB9XG5cbiAgY29uc3QgQW5pbWF0ZWRUZXh0OiBSZWFjdC5GQzxBbmltYXRlZFRleHRQcm9wcz4gPSAoe2lkLCBjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1vdGlvbi5kaXYga2V5PXtpZH0gY2xhc3NOYW1lPVwibXktNFwiXG4gICAgICAgIHZhcmlhbnRzPXtpdGVtfVxuICAgICAgICBpbml0aWFsPVwiaGlkZVwiXG4gICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy14bCBteS0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLXN3aXBlIHB4LTYgZmxleC1ncm93XCI+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzYXR1cmF0ZS0xMDAgZHJvcC1zaGFkb3ctMnhsIHRyYW5zaXRpb24tc3dpcGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5IHNtOmhpZGRlbiB3LWZ1bGxcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cud3RhLm9yZy9nby1oaWtpbmcvaGlrZXMvbWFpbGJveC1wZWFrXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj48aW1nIHNyYz1cImh0dHBzOi8vcGF0c2xvb2tvdXQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vbWFpbGJveC5qcGdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzYXR1cmF0ZS0xMDAgZHJvcC1zaGFkb3ctMnhsIHctMS8yIG15LTRcIlxuICAgICAgICAgICAgICBhbHQ9XCJPbiBhIGNsZWFyIGRheS4uLlwiIC8+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyVmFyaWFudHN9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGVcIlxuICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy53dGEub3JnL2dvLWhpa2luZy9oaWtlcy9tYWlsYm94LXBlYWtcIj48bW90aW9uLmltZyBrZXk9JzEnIFxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wYXRzbG9va291dC5zMy51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9tYWlsYm94LmpwZ1wiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgc2F0dXJhdGUtMTAwIGRyb3Atc2hhZG93LTJ4bCB3LTEvNCBteS00IG14LThcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuIG1kOmJsb2NrXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtpdGVtfVxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGVcIlxuICAgICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxuICAgICAgICAgICAgYWx0PVwiT24gYSBjbGVhciBkYXkuLi5cIiAvPjwvYT5cbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0IGlkPXt1dWlkdjQoKX0+PHA+TXkgbmFtZSBpcyBQYXRyaWNrIPCfkYvwn4+7IEkgc29sdmUgcHJvYmxlbXMgd2l0aCBzb2Z0d2FyZS4gVGhpcyB3ZWJzaXRlIGlzIHBhcnQgcG9ydGZvbGlvIGFuZCBwYXJ0IHdvcmtzaG9wL2xhYiB3aGVyZSBJIGhvc3QgcGVyc29uYWwgcHJvamVjdHMuPC9wPjwvQW5pbWF0ZWRUZXh0PlxuICAgICAgICAgIDxBbmltYXRlZFRleHQgaWQ9e3V1aWR2NCgpfT48cD5BIGxpdHRsZSBhYm91dCBtZS4gSSB3YXMgYm9ybiBpbiBBdXN0aW4sIFRleGFzLCBhbmQgdGhlbiBkaXNjb3ZlcmVkIGEgbG92ZSBmb3IgbW91bnRhaW5zOyBub3cgSSBjdXJyZW50bHkgbGl2ZSBpbiBQb3J0bGFuZCwgT1IuPC9wPjwvQW5pbWF0ZWRUZXh0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgbWItNFwiPlNvZnR3YXJlLXdpc2UsIChjaHJvbm9sb2dpY2FsbHkpIEkgaGF2ZSBiZWVuIGEgZmluYW5jaWFsIGRhdGEgZW5naW5lZXIgZm9yIHRoZSBTRUMgdXNpbmcgSGFkb29wLWJhc2VkIHBpcGVsaW5lcy4gSSd2ZSB1c2VkIHNjaWtpdGxlYXJuIG1hY2hpbmUgbGVhcm5pbmcgYWxnb3JpdGhtcyB0byBkaWFnbm9zZSBsZXVrZW1pYS4gTGF0ZWx5IEkgaGF2ZSBiZWVuIGRvaW5nIGZ1bGwgc3RhY2sgd2ViIGRldmVsb3BtZW50IGZvciA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2FsYWN0aWNwb2x5bWF0aC5jb21cIj48Yj5HYWxhY3RpYyBQb2x5bWF0aDwvYj48L2E+LiBNb3N0bHkgTmV4dEpTLWJhc2VkIHN0dWZmLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5UaGUgcGljdHVyZSBhYm92ZSBpcyBmcm9tIHRoZSBzdW1taXQgb2YgTWFpbGJveCBQZWFrIG5lYXIgU2VhdHRsZSwgV0EsIGFuZCBpbnNwaXJlZCB0aGUgZG9tYWluIG5hbWUgZm9yIHRoaXMgc2l0ZS4gVGhhdCdzIE1vdW50IFJhaW5pZXIgaW4gdGhlIGRpc3RhbmNlISBJIHdpbGwgaW5jb3Jwb3JhdGUgYSB0cmlwIGpvdXJuYWwgYW5kIGdhbGxlcnkgaGVyZSBzb29uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwidjQiLCJ1dWlkdjQiLCJIb21lIiwiY29udGFpbmVyVmFyaWFudHMiLCJoaWRlIiwib3BhY2l0eSIsInNob3ciLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiaXRlbSIsIngiLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwiQW5pbWF0ZWRUZXh0IiwiaWQiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJtYWluIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});