"use strict";
exports.id = 357;
exports.ids = [357];
exports.modules = {

/***/ 9706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ StarRating)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/star-empty.svg
/* harmony default export */ const star_empty = ({"src":"/_next/static/media/star-empty.926cd23b.svg","height":13,"width":13,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/star-filled.svg
/* harmony default export */ const star_filled = ({"src":"/_next/static/media/star-filled.a05652ad.svg","height":12,"width":13,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/StarRating.js




const RATINGS = [
    1,
    2,
    3,
    4,
    5
];
function StarRating({ value =1  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: RATINGS.map((rating)=>value >= rating ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: star_filled,
                alt: "★"
            }, rating) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: star_empty,
                alt: "✩"
            }, rating))
    });
}
6;


/***/ }),

/***/ 1979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://learn.codeit.kr/api/codeitmall"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;