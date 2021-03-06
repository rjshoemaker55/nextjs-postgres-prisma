webpackHotUpdate_N_E("pages/p/[id]",{

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/rjshoemaker/Documents/code/practice/nextjs-postgres-prisma/blogr-nextjs-prisma/pages/p/[id].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nfunction publishPost(_x) {\n  return _publishPost.apply(this, arguments);\n}\n\nfunction _publishPost() {\n  _publishPost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"http://localhost:3000/api/publish/\".concat(id), {\n              method: 'PUT'\n            });\n\n          case 2:\n            _context.next = 4;\n            return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _publishPost.apply(this, arguments);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _session$user, _props$author, _props$author2;\n\n  console.log(props.id);\n\n  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_8__[\"useSession\"])(),\n      _useSession2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  if (loading) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 12\n      }\n    }, \"Authenticating...\");\n  }\n\n  var userHasValidSession = Boolean(session);\n  var postBelongsToUser = (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email) === ((_props$author = props.author) === null || _props$author === void 0 ? void 0 : _props$author.email);\n  var title = props.title;\n\n  if (!props.published) {\n    title = \"\".concat(title, \" (Draft)\");\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3440979688\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-3440979688\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"p\", {\n    className: \"jsx-3440979688\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"By \", (props === null || props === void 0 ? void 0 : (_props$author2 = props.author) === null || _props$author2 === void 0 ? void 0 : _props$author2.name) || 'Unknown author'), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    source: props.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), !props.published && userHasValidSession && postBelongsToUser && __jsx(\"button\", {\n    onClick: function onClick() {\n      return publishPost(props.id);\n    },\n    className: \"jsx-3440979688\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"Publish\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    id: \"3440979688\",\n    __self: _this\n  }, \".page.jsx-3440979688{background:white;padding:2rem;}.actions.jsx-3440979688{margin-top:2rem;}button.jsx-3440979688{background:#ececec;border:0;border-radius:0.125rem;padding:1rem 2rem;}button.jsx-3440979688+button.jsx-3440979688{margin-left:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yanNob2VtYWtlci9Eb2N1bWVudHMvY29kZS9wcmFjdGljZS9uZXh0anMtcG9zdGdyZXMtcHJpc21hL2Jsb2dyLW5leHRqcy1wcmlzbWEvcGFnZXMvcC9baWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRGtCLEFBRzRCLEFBS0QsQUFJRyxBQU9GLGdCQVZuQixDQUxlLEFBZ0JmLEVBUFcsU0FDYyxFQVR6QixxQkFVb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9yanNob2VtYWtlci9Eb2N1bWVudHMvY29kZS9wcmFjdGljZS9uZXh0anMtcG9zdGdyZXMtcHJpc21hL2Jsb2dyLW5leHRqcy1wcmlzbWEvcGFnZXMvcC9baWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QnXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBhcmFtcz8uaWQpIHx8IC0xIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlLCBlbWFpbDogdHJ1ZSB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiBwb3N0XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHVibGlzaFBvc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wdWJsaXNoLyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BVVCdcbiAgfSlcblxuICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpXG59XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMuaWQpXG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkF1dGhlbnRpY2F0aW5nLi4uPC9kaXY+XG4gIH1cbiAgY29uc3QgdXNlckhhc1ZhbGlkU2Vzc2lvbiA9IEJvb2xlYW4oc2Vzc2lvbilcblxuICBjb25zdCBwb3N0QmVsb25nc1RvVXNlciA9IHNlc3Npb24/LnVzZXI/LmVtYWlsID09PSBwcm9wcy5hdXRob3I/LmVtYWlsXG5cbiAgbGV0IHRpdGxlID0gcHJvcHMudGl0bGVcbiAgaWYgKCFwcm9wcy5wdWJsaXNoZWQpIHtcbiAgICB0aXRsZSA9IGAke3RpdGxlfSAoRHJhZnQpYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCAnVW5rbm93biBhdXRob3InfTwvcD5cblxuICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Byb3BzLmNvbnRlbnR9IC8+XG5cbiAgICAgICAgeyFwcm9wcy5wdWJsaXNoZWQgJiYgdXNlckhhc1ZhbGlkU2Vzc2lvbiAmJiBwb3N0QmVsb25nc1RvVXNlciAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwdWJsaXNoUG9zdChwcm9wcy5pZCl9PlB1Ymxpc2g8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24gKyBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl19 */\\n/*@ sourceURL=/Users/rjshoemaker/Documents/code/practice/nextjs-postgres-prisma/blogr-nextjs-prisma/pages/p/[id].tsx */\"));\n};\n\n_s(Post, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_8__[\"useSession\"]];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcC8udHN4P2Q2ZmQiXSwibmFtZXMiOlsicHVibGlzaFBvc3QiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiUm91dGVyIiwicHVzaCIsIlBvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VySGFzVmFsaWRTZXNzaW9uIiwiQm9vbGVhbiIsInBvc3RCZWxvbmdzVG9Vc2VyIiwidXNlciIsImVtYWlsIiwiYXV0aG9yIiwidGl0bGUiLCJwdWJsaXNoZWQiLCJuYW1lIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTs7U0FnQmVBLFc7Ozs7O2tNQUFmLGlCQUEyQkMsRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1FDLEtBQUssNkNBQXNDRCxFQUF0QyxHQUE0QztBQUNyREUsb0JBQU0sRUFBRTtBQUQ2QyxhQUE1QyxDQURiOztBQUFBO0FBQUE7QUFBQSxtQkFLUUMsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FMUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUUEsSUFBTUMsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUE7O0FBQzNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDTixFQUFsQjs7QUFEMkMsb0JBRWhCUyxtRUFBVSxFQUZNO0FBQUE7QUFBQSxNQUVwQ0MsT0FGb0M7QUFBQSxNQUUzQkMsT0FGMkI7O0FBRzNDLE1BQUlBLE9BQUosRUFBYTtBQUNYLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUNEOztBQUNELE1BQU1DLG1CQUFtQixHQUFHQyxPQUFPLENBQUNILE9BQUQsQ0FBbkM7QUFFQSxNQUFNSSxpQkFBaUIsR0FBRyxDQUFBSixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLDZCQUFBQSxPQUFPLENBQUVLLElBQVQsZ0VBQWVDLEtBQWYsd0JBQXlCVixLQUFLLENBQUNXLE1BQS9CLGtEQUF5QixjQUFjRCxLQUF2QyxDQUExQjtBQUVBLE1BQUlFLEtBQUssR0FBR1osS0FBSyxDQUFDWSxLQUFsQjs7QUFDQSxNQUFJLENBQUNaLEtBQUssQ0FBQ2EsU0FBWCxFQUFzQjtBQUNwQkQsU0FBSyxhQUFNQSxLQUFOLGFBQUw7QUFDRDs7QUFFRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxLQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBTyxDQUFBWixLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLDhCQUFBQSxLQUFLLENBQUVXLE1BQVAsa0VBQWVHLElBQWYsS0FBdUIsZ0JBQTlCLENBRkYsRUFJRSxNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFZCxLQUFLLENBQUNlLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQU1HLENBQUNmLEtBQUssQ0FBQ2EsU0FBUCxJQUFvQlAsbUJBQXBCLElBQTJDRSxpQkFBM0MsSUFDQztBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1mLFdBQVcsQ0FBQ08sS0FBSyxDQUFDTixFQUFQLENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosQ0FERjtBQUFBO0FBQUE7QUFBQSxrakhBREY7QUFtQ0QsQ0FsREQ7O0dBQU1LLEk7VUFFdUJJLDJEOzs7S0FGdkJKLEk7O0FBb0RTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3AvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0J1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IE51bWJlcihwYXJhbXM/LmlkKSB8fCAtMSB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgZW1haWw6IHRydWUgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogcG9zdFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hQb3N0KGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHVibGlzaC8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnXG4gIH0pXG5cbiAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQb3N0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzLmlkKVxuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKClcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZy4uLjwvZGl2PlxuICB9XG4gIGNvbnN0IHVzZXJIYXNWYWxpZFNlc3Npb24gPSBCb29sZWFuKHNlc3Npb24pXG5cbiAgY29uc3QgcG9zdEJlbG9uZ3NUb1VzZXIgPSBzZXNzaW9uPy51c2VyPy5lbWFpbCA9PT0gcHJvcHMuYXV0aG9yPy5lbWFpbFxuXG4gIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlXG4gIGlmICghcHJvcHMucHVibGlzaGVkKSB7XG4gICAgdGl0bGUgPSBgJHt0aXRsZX0gKERyYWZ0KWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPHA+Qnkge3Byb3BzPy5hdXRob3I/Lm5hbWUgfHwgJ1Vua25vd24gYXV0aG9yJ308L3A+XG5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwcm9wcy5jb250ZW50fSAvPlxuXG4gICAgICAgIHshcHJvcHMucHVibGlzaGVkICYmIHVzZXJIYXNWYWxpZFNlc3Npb24gJiYgcG9zdEJlbG9uZ3NUb1VzZXIgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaFBvc3QocHJvcHMuaWQpfT5QdWJsaXNoPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/p/[id].tsx\n");

/***/ })

})