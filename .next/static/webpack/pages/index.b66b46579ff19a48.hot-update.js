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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\n\n\nfunction Home() {\n    const containerVariants = {\n        hide: {\n            opacity: 0\n        },\n        show: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.1\n            }\n        }\n    };\n    const item = {\n        hide: {\n            opacity: 0\n        },\n        show: {\n            opacity: 1,\n            transition: {\n                type: \"tween\",\n                ease: \"easeIn\",\n                duration: .4\n            }\n        }\n    };\n    const AnimatedText = (param)=>{\n        let { children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            className: \"my-4\",\n            variants: item,\n            children: children\n        }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(), false, {\n            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-xl my-10 flex flex-col items-center transition-swipe px-6 flex-grow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"content\",\n            className: \"flex flex-col w-full items-center justify-center saturate-100 drop-shadow-2xl transition-swipe\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"display sm:hidden w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.wta.org/go-hiking/hikes/mailbox-peak\",\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg\",\n                            className: \"saturate-100 drop-shadow-2xl w-1/2 my-4\",\n                            alt: \"On a clear day...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 45\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                    className: \"w-full\",\n                    variants: containerVariants,\n                    initial: \"hide\",\n                    animate: \"show\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.a, {\n                            href: \"https://www.wta.org/go-hiking/hikes/mailbox-peak\",\n                            variants: item,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg\",\n                                className: \"float-right saturate-100 drop-shadow-2xl w-1/4 my-4 mx-8 hidden md:block\",\n                                alt: \"On a clear day...\"\n                            }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(), false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, \"1\", false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"My name is Patrick \\uD83D\\uDC4B\\uD83C\\uDFFB I solve problems with software. This website is part portfolio and part workshop/lab where I host personal projects.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 39\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"A little about me. I was born in Austin, Texas, and then discovered a love for mountains; now I currently live in Portland, OR.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 39\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Software-wise, (chronologically) I have been a financial data engineer for the SEC using Hadoop-based pipelines. I've used scikitlearn machine learning algorithms to diagnose leukemia. Lately I have been doing full stack web development for \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://www.galacticpolymath.com\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Galactic Polymath\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 326\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 283\n                                    }, this),\n                                    \". Mostly NextJS-based stuff.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 39\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                            id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"The picture above is from the summit of Mailbox Peak near Seattle, WA, and inspired the domain name for this site. That's Mount Rainier in the distance! I will incorporate a trip journal and gallery here soon.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 39\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/patslookout/src/pages/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVzQztBQUNIO0FBRXBCLFNBQVNHO0lBQ3RCLE1BQU1DLG9CQUFvQjtRQUN4QkMsTUFBTTtZQUFFQyxTQUFTO1FBQUU7UUFDbkJDLE1BQU07WUFDSkQsU0FBUztZQUNURSxZQUFZO2dCQUNWQyxpQkFBaUI7WUFDbkI7UUFDRjtJQUNGO0lBQ0EsTUFBTUMsT0FBTztRQUNYTCxNQUFNO1lBQUVDLFNBQVM7UUFBRTtRQUNuQkMsTUFBTTtZQUFFRCxTQUFTO1lBQ2ZFLFlBQVk7Z0JBQ1ZHLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFPQSxNQUFNQyxlQUE0QztZQUFDLEVBQUNDLFFBQVEsRUFBQztRQUMzRCxxQkFDRSw4REFBQ2YsaURBQU1BLENBQUNnQixHQUFHO1lBQWdCQyxXQUFVO1lBQ25DQyxVQUFVUjtzQkFFVEs7V0FIY2Isd0NBQU1BOzs7OztJQU0zQjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBS0YsV0FBVTtrQkFDZCw0RUFBQ0Q7WUFBSUksSUFBRztZQUFVSCxXQUFVOzs4QkFDMUIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDSTt3QkFBRUMsTUFBSzt3QkFDTkwsV0FBVTtrQ0FBc0IsNEVBQUNNOzRCQUFJQyxLQUFJOzRCQUN2Q1AsV0FBVTs0QkFDVlEsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFViw4REFBQ3pCLGlEQUFNQSxDQUFDZ0IsR0FBRztvQkFBQ0MsV0FBVTtvQkFDcEJDLFVBQVVkO29CQUNWc0IsU0FBUTtvQkFDUkMsU0FBUTs7c0NBRVIsOERBQUMzQixpREFBTUEsQ0FBQ3FCLENBQUM7NEJBQVNDLE1BQUs7NEJBQ3JCSixVQUFVUjtzQ0FFViw0RUFBQ2E7Z0NBQ0NDLEtBQUk7Z0NBQ0pQLFdBQVU7Z0NBRVZRLEtBQUk7K0JBSkl2Qix3Q0FBTUE7Ozs7OzJCQUhKOzs7OztzQ0FTZCw4REFBQ1k7NEJBQWFNLElBQUlsQix3Q0FBTUE7c0NBQUksNEVBQUMwQjswQ0FBRTs7Ozs7Ozs7Ozs7c0NBQy9CLDhEQUFDZDs0QkFBYU0sSUFBSWxCLHdDQUFNQTtzQ0FBSSw0RUFBQzBCOzBDQUFFOzs7Ozs7Ozs7OztzQ0FDL0IsOERBQUNkOzRCQUFhTSxJQUFJbEIsd0NBQU1BO3NDQUFJLDRFQUFDMEI7O29DQUFFO2tEQUFpUCw4REFBQ1A7d0NBQUVDLE1BQUs7a0RBQW1DLDRFQUFDTztzREFBRTs7Ozs7Ozs7Ozs7b0NBQXlCOzs7Ozs7Ozs7Ozs7c0NBRXZWLDhEQUFDZjs0QkFBYU0sSUFBSWxCLHdDQUFNQTtzQ0FBSSw0RUFBQzBCOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0tBckV3QnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBjb250YWluZXJWYXJpYW50cyA9IHtcbiAgICBoaWRlOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBzaG93OiB7IFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjFcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgaGlkZTogeyBvcGFjaXR5OiAwIH0sXG4gICAgc2hvdzogeyBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICAgIGVhc2U6IFwiZWFzZUluXCIsXG4gICAgICAgIGR1cmF0aW9uOiAuNFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVyZmFjZSBBbmltYXRlZFRleHRQcm9wcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB9XG5cbiAgY29uc3QgQW5pbWF0ZWRUZXh0OiBSZWFjdC5GQzxBbmltYXRlZFRleHRQcm9wcz4gPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bW90aW9uLmRpdiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJteS00XCJcbiAgICAgICAgdmFyaWFudHM9e2l0ZW19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXcteGwgbXktMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1zd2lwZSBweC02IGZsZXgtZ3Jvd1wiPlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2F0dXJhdGUtMTAwIGRyb3Atc2hhZG93LTJ4bCB0cmFuc2l0aW9uLXN3aXBlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheSBzbTpoaWRkZW4gdy1mdWxsXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lnd0YS5vcmcvZ28taGlraW5nL2hpa2VzL21haWxib3gtcGVha1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+PGltZyBzcmM9XCJodHRwczovL3BhdHNsb29rb3V0LnMzLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL21haWxib3guanBnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2F0dXJhdGUtMTAwIGRyb3Atc2hhZG93LTJ4bCB3LTEvMiBteS00XCJcbiAgICAgICAgICAgICAgYWx0PVwiT24gYSBjbGVhciBkYXkuLi5cIiAvPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lclZhcmlhbnRzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRlXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLmEga2V5PScxJyBocmVmPVwiaHR0cHM6Ly93d3cud3RhLm9yZy9nby1oaWtpbmcvaGlrZXMvbWFpbGJveC1wZWFrXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtpdGVtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcga2V5PXt1dWlkdjQoKX0gXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGF0c2xvb2tvdXQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vbWFpbGJveC5qcGdcIiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgc2F0dXJhdGUtMTAwIGRyb3Atc2hhZG93LTJ4bCB3LTEvNCBteS00IG14LThcbiAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gbWQ6YmxvY2tcIlxuICAgICAgICAgICAgICBhbHQ9XCJPbiBhIGNsZWFyIGRheS4uLlwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0IGlkPXt1dWlkdjQoKX0+PHA+TXkgbmFtZSBpcyBQYXRyaWNrIPCfkYvwn4+7IEkgc29sdmUgcHJvYmxlbXMgd2l0aCBzb2Z0d2FyZS4gVGhpcyB3ZWJzaXRlIGlzIHBhcnQgcG9ydGZvbGlvIGFuZCBwYXJ0IHdvcmtzaG9wL2xhYiB3aGVyZSBJIGhvc3QgcGVyc29uYWwgcHJvamVjdHMuPC9wPjwvQW5pbWF0ZWRUZXh0PlxuICAgICAgICAgIDxBbmltYXRlZFRleHQgaWQ9e3V1aWR2NCgpfT48cD5BIGxpdHRsZSBhYm91dCBtZS4gSSB3YXMgYm9ybiBpbiBBdXN0aW4sIFRleGFzLCBhbmQgdGhlbiBkaXNjb3ZlcmVkIGEgbG92ZSBmb3IgbW91bnRhaW5zOyBub3cgSSBjdXJyZW50bHkgbGl2ZSBpbiBQb3J0bGFuZCwgT1IuPC9wPjwvQW5pbWF0ZWRUZXh0PlxuICAgICAgICAgIDxBbmltYXRlZFRleHQgaWQ9e3V1aWR2NCgpfT48cD5Tb2Z0d2FyZS13aXNlLCAoY2hyb25vbG9naWNhbGx5KSBJIGhhdmUgYmVlbiBhIGZpbmFuY2lhbCBkYXRhIGVuZ2luZWVyIGZvciB0aGUgU0VDIHVzaW5nIEhhZG9vcC1iYXNlZCBwaXBlbGluZXMuIEkndmUgdXNlZCBzY2lraXRsZWFybiBtYWNoaW5lIGxlYXJuaW5nIGFsZ29yaXRobXMgdG8gZGlhZ25vc2UgbGV1a2VtaWEuIExhdGVseSBJIGhhdmUgYmVlbiBkb2luZyBmdWxsIHN0YWNrIHdlYiBkZXZlbG9wbWVudCBmb3IgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdhbGFjdGljcG9seW1hdGguY29tXCI+PGI+R2FsYWN0aWMgUG9seW1hdGg8L2I+PC9hPi4gTW9zdGx5IE5leHRKUy1iYXNlZCBzdHVmZi5cbiAgICAgICAgICA8L3A+PC9BbmltYXRlZFRleHQ+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dCBpZD17dXVpZHY0KCl9PjxwPlRoZSBwaWN0dXJlIGFib3ZlIGlzIGZyb20gdGhlIHN1bW1pdCBvZiBNYWlsYm94IFBlYWsgbmVhciBTZWF0dGxlLCBXQSwgYW5kIGluc3BpcmVkIHRoZSBkb21haW4gbmFtZSBmb3IgdGhpcyBzaXRlLiBUaGF0J3MgTW91bnQgUmFpbmllciBpbiB0aGUgZGlzdGFuY2UhIEkgd2lsbCBpbmNvcnBvcmF0ZSBhIHRyaXAgam91cm5hbCBhbmQgZ2FsbGVyeSBoZXJlIHNvb24uXG4gICAgICAgICAgPC9wPjwvQW5pbWF0ZWRUZXh0PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ2NCIsInV1aWR2NCIsIkhvbWUiLCJjb250YWluZXJWYXJpYW50cyIsImhpZGUiLCJvcGFjaXR5Iiwic2hvdyIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJpdGVtIiwidHlwZSIsImVhc2UiLCJkdXJhdGlvbiIsIkFuaW1hdGVkVGV4dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJtYWluIiwiaWQiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImluaXRpYWwiLCJhbmltYXRlIiwicCIsImIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});