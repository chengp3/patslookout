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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nfunction Home() {\n    const containerVariants = {\n        hide: {\n            opacity: 1\n        },\n        show: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.5\n            }\n        }\n    };\n    const item = {\n        hide: {\n            opacity: 0\n        },\n        show: {\n            opacity: 1,\n            transition: {\n                type: \"tween\",\n                ease: \"easeIn\",\n                duration: .4\n            }\n        }\n    };\n    const AnimatedText = (param)=>{\n        let { id, children, variants } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            className: \"my-4\",\n            variants: variants,\n            initial: \"hide\",\n            animate: \"show\",\n            children: children\n        }, id, false, {\n            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-xl my-10 flex flex-col items-center transition-swipe px-6 flex-grow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"content\",\n            className: \"flex flex-col w-full items-center justify-center saturate-100 drop-shadow-2xl transition-swipe\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"display sm:hidden w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.wta.org/go-hiking/hikes/mailbox-peak\",\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg\",\n                            className: \"saturate-100 drop-shadow-2xl w-1/2 my-4\",\n                            alt: \"On a clear day...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 45\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                    className: \"w-full\",\n                    variants: containerVariants,\n                    initial: \"hide\",\n                    animate: \"show\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.wta.org/go-hiking/hikes/mailbox-peak\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {\n                                src: \"https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg\",\n                                className: \"float-right saturate-100 drop-shadow-2xl w-1/4 my-4 mx-8 hidden md:block\",\n                                initial: {\n                                    opacity: 0\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    transition: {\n                                        duration: .4,\n                                        type: \"tween\",\n                                        ease: \"easeIn\",\n                                        delay: .4\n                                    }\n                                },\n                                alt: \"On a clear day...\"\n                            }, \"1\", false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"My name is Patrick \\uD83D\\uDC4B\\uD83C\\uDFFB I solve problems with software. This website is part portfolio and part workshop/lab where I host personal projects.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 32\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: 3,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"A little about me. I was born in Austin, Texas, and then discovered a love for mountains; now I currently live in Portland, OR.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 32\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Software-wise, (chronologically) I have been a financial data engineer for the SEC using Hadoop-based pipelines. I've used scikitlearn machine learning algorithms to diagnose leukemia. Lately I have been doing full stack web development for \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://www.galacticpolymath.com\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Galactic Polymath\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 319\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 276\n                                    }, this),\n                                    \". Mostly NextJS-based stuff.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 32\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: 5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"The picture above is from the summit of Mailbox Peak near Seattle, WA, and inspired the domain name for this site. That's Mount Rainier in the distance! I will incorporate a trip journal and gallery here soon.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 32\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXNDO0FBR3ZCLFNBQVNDO0lBQ3RCLE1BQU1DLG9CQUFvQjtRQUN4QkMsTUFBTTtZQUFFQyxTQUFTO1FBQUU7UUFDbkJDLE1BQU07WUFDSkQsU0FBUztZQUNURSxZQUFZO2dCQUNWQyxpQkFBaUI7WUFDbkI7UUFDRjtJQUNGO0lBQ0EsTUFBTUMsT0FBTztRQUNYTCxNQUFNO1lBQUVDLFNBQVM7UUFBRTtRQUNuQkMsTUFBTTtZQUFFRCxTQUFTO1lBQ2ZFLFlBQVk7Z0JBQ1ZHLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFPQSxNQUFNQyxlQUE0QztZQUFDLEVBQUNDLEVBQUUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUM7UUFDekUscUJBQ0UsOERBQUNmLGlEQUFNQSxDQUFDZ0IsR0FBRztZQUFVQyxXQUFVO1lBQzdCRixVQUFVQTtZQUNWRyxTQUFRO1lBQ1JDLFNBQVE7c0JBRVBMO1dBTGNEOzs7OztJQVFyQjtJQUVBLHFCQUNFLDhEQUFDTztRQUFLSCxXQUFVO2tCQUNkLDRFQUFDRDtZQUFJSCxJQUFHO1lBQVVJLFdBQVU7OzhCQUMxQiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNJO3dCQUFFQyxNQUFLO3dCQUNOTCxXQUFVO2tDQUFzQiw0RUFBQ007NEJBQUlDLEtBQUk7NEJBQ3ZDUCxXQUFVOzRCQUNWUSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUVWLDhEQUFDekIsaURBQU1BLENBQUNnQixHQUFHO29CQUFDQyxXQUFVO29CQUNwQkYsVUFBVWI7b0JBQ1ZnQixTQUFRO29CQUNSQyxTQUFROztzQ0FFUiw4REFBQ0U7NEJBQUVDLE1BQUs7c0NBQ04sNEVBQUN0QixpREFBTUEsQ0FBQ3VCLEdBQUc7Z0NBQ1RDLEtBQUk7Z0NBQ0pQLFdBQVU7Z0NBRVZDLFNBQVM7b0NBQUNkLFNBQVM7Z0NBQUM7Z0NBQ3BCZSxTQUFTO29DQUFDZixTQUFTO29DQUNqQkUsWUFBWTt3Q0FDVkssVUFBVTt3Q0FDVkYsTUFBTTt3Q0FDTkMsTUFBTTt3Q0FDTmdCLE9BQU87b0NBQ1g7Z0NBQUM7Z0NBQ0RELEtBQUk7K0JBWlU7Ozs7Ozs7Ozs7c0NBY2xCLDhEQUFDYjs0QkFBYUMsSUFBSTtzQ0FBRyw0RUFBQ2M7MENBQUU7Ozs7Ozs7Ozs7O3NDQUN4Qiw4REFBQ2Y7NEJBQWFDLElBQUk7c0NBQUcsNEVBQUNjOzBDQUFFOzs7Ozs7Ozs7OztzQ0FDeEIsOERBQUNmOzRCQUFhQyxJQUFJO3NDQUFHLDRFQUFDYzs7b0NBQUU7a0RBQWlQLDhEQUFDTjt3Q0FBRUMsTUFBSztrREFBbUMsNEVBQUNNO3NEQUFFOzs7Ozs7Ozs7OztvQ0FBeUI7Ozs7Ozs7Ozs7OztzQ0FFaFYsOERBQUNoQjs0QkFBYUMsSUFBSTtzQ0FBRyw0RUFBQ2M7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEM7S0E3RXdCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7djQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclZhcmlhbnRzID0ge1xuICAgIGhpZGU6IHsgb3BhY2l0eTogMSB9LFxuICAgIHNob3c6IHsgXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuNVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICBoaWRlOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBzaG93OiB7IG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFwidHdlZW5cIixcbiAgICAgICAgZWFzZTogXCJlYXNlSW5cIixcbiAgICAgICAgZHVyYXRpb246IC40XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJmYWNlIEFuaW1hdGVkVGV4dFByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIH1cblxuICBjb25zdCBBbmltYXRlZFRleHQ6IFJlYWN0LkZDPEFuaW1hdGVkVGV4dFByb3BzPiA9ICh7aWQsIGNoaWxkcmVuLCB2YXJpYW50c30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1vdGlvbi5kaXYga2V5PXtpZH0gY2xhc3NOYW1lPVwibXktNFwiXG4gICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgaW5pdGlhbD1cImhpZGVcIlxuICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXcteGwgbXktMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1zd2lwZSBweC02IGZsZXgtZ3Jvd1wiPlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2F0dXJhdGUtMTAwIGRyb3Atc2hhZG93LTJ4bCB0cmFuc2l0aW9uLXN3aXBlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheSBzbTpoaWRkZW4gdy1mdWxsXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lnd0YS5vcmcvZ28taGlraW5nL2hpa2VzL21haWxib3gtcGVha1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+PGltZyBzcmM9XCJodHRwczovL3BhdHNsb29rb3V0LnMzLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL21haWxib3guanBnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2F0dXJhdGUtMTAwIGRyb3Atc2hhZG93LTJ4bCB3LTEvMiBteS00XCJcbiAgICAgICAgICAgICAgYWx0PVwiT24gYSBjbGVhciBkYXkuLi5cIiAvPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lclZhcmlhbnRzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRlXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cud3RhLm9yZy9nby1oaWtpbmcvaGlrZXMvbWFpbGJveC1wZWFrXCI+XG4gICAgICAgICAgICA8bW90aW9uLmltZyBrZXk9JzEnIFxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BhdHNsb29rb3V0LnMzLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL21haWxib3guanBnXCIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHNhdHVyYXRlLTEwMCBkcm9wLXNoYWRvdy0yeGwgdy0xLzQgbXktNCBteC04XG4gICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIG1kOmJsb2NrXCJcbiAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7b3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogLjQsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJblwiLFxuICAgICAgICAgICAgICAgICAgZGVsYXk6IC40LFxuICAgICAgICAgICAgICB9fX1cbiAgICAgICAgICAgICAgYWx0PVwiT24gYSBjbGVhciBkYXkuLi5cIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0IGlkPXsyfT48cD5NeSBuYW1lIGlzIFBhdHJpY2sg8J+Ri/Cfj7sgSSBzb2x2ZSBwcm9ibGVtcyB3aXRoIHNvZnR3YXJlLiBUaGlzIHdlYnNpdGUgaXMgcGFydCBwb3J0Zm9saW8gYW5kIHBhcnQgd29ya3Nob3AvbGFiIHdoZXJlIEkgaG9zdCBwZXJzb25hbCBwcm9qZWN0cy48L3A+PC9BbmltYXRlZFRleHQ+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dCBpZD17M30+PHA+QSBsaXR0bGUgYWJvdXQgbWUuIEkgd2FzIGJvcm4gaW4gQXVzdGluLCBUZXhhcywgYW5kIHRoZW4gZGlzY292ZXJlZCBhIGxvdmUgZm9yIG1vdW50YWluczsgbm93IEkgY3VycmVudGx5IGxpdmUgaW4gUG9ydGxhbmQsIE9SLjwvcD48L0FuaW1hdGVkVGV4dD5cbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0IGlkPXs0fT48cD5Tb2Z0d2FyZS13aXNlLCAoY2hyb25vbG9naWNhbGx5KSBJIGhhdmUgYmVlbiBhIGZpbmFuY2lhbCBkYXRhIGVuZ2luZWVyIGZvciB0aGUgU0VDIHVzaW5nIEhhZG9vcC1iYXNlZCBwaXBlbGluZXMuIEkndmUgdXNlZCBzY2lraXRsZWFybiBtYWNoaW5lIGxlYXJuaW5nIGFsZ29yaXRobXMgdG8gZGlhZ25vc2UgbGV1a2VtaWEuIExhdGVseSBJIGhhdmUgYmVlbiBkb2luZyBmdWxsIHN0YWNrIHdlYiBkZXZlbG9wbWVudCBmb3IgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdhbGFjdGljcG9seW1hdGguY29tXCI+PGI+R2FsYWN0aWMgUG9seW1hdGg8L2I+PC9hPi4gTW9zdGx5IE5leHRKUy1iYXNlZCBzdHVmZi5cbiAgICAgICAgICA8L3A+PC9BbmltYXRlZFRleHQ+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dCBpZD17NX0+PHA+VGhlIHBpY3R1cmUgYWJvdmUgaXMgZnJvbSB0aGUgc3VtbWl0IG9mIE1haWxib3ggUGVhayBuZWFyIFNlYXR0bGUsIFdBLCBhbmQgaW5zcGlyZWQgdGhlIGRvbWFpbiBuYW1lIGZvciB0aGlzIHNpdGUuIFRoYXQncyBNb3VudCBSYWluaWVyIGluIHRoZSBkaXN0YW5jZSEgSSB3aWxsIGluY29ycG9yYXRlIGEgdHJpcCBqb3VybmFsIGFuZCBnYWxsZXJ5IGhlcmUgc29vbi5cbiAgICAgICAgICA8L3A+PC9BbmltYXRlZFRleHQ+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhvbWUiLCJjb250YWluZXJWYXJpYW50cyIsImhpZGUiLCJvcGFjaXR5Iiwic2hvdyIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJpdGVtIiwidHlwZSIsImVhc2UiLCJkdXJhdGlvbiIsIkFuaW1hdGVkVGV4dCIsImlkIiwiY2hpbGRyZW4iLCJ2YXJpYW50cyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJhbmltYXRlIiwibWFpbiIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiZGVsYXkiLCJwIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});