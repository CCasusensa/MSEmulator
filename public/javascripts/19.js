(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/game/Animation.js":
/*!*******************************!*\
  !*** ./src/game/Animation.js ***!
  \*******************************/
/*! exports provided: AnimationBase, Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimationBase\", function() { return AnimationBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Animation; });\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ \"./src/game/math.js\");\n/* harmony import */ var _IRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IRenderer.js */ \"./src/game/IRenderer.js\");\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite.js */ \"./src/game/Sprite.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.m_draw_animation_texture_info = false;\r\n\r\nclass IAnimation {\r\n\tconstructor(raw, url) {\r\n\t\tthis._raw = null;\r\n\t\tthis._url = null;\r\n\t\t\r\n\t\tObject.defineProperties(this, {\r\n\t\t\t_raw: {\r\n\t\t\t\tvalue: raw\r\n\t\t\t},\r\n\t\t\t_url: {\r\n\t\t\t\tvalue: url\r\n\t\t\t},\r\n\t\t});\r\n\r\n\t\tthis.frame = 0;\r\n\t\tthis.time = 0;\r\n\r\n\t\t/** elapsed time */\r\n\t\tthis.delta = 0;\r\n\r\n\t\t/** @type {Sprite[]} */\r\n\t\tthis.textures = [];\r\n\t\t\r\n\t\t/** @type {boolean} */\r\n\t\tthis.is_loop = true;\r\n\t\t\r\n\t\t/** @type {boolean} */\r\n\t\tthis.is_end = false;\r\n\r\n\t\tif (!raw && !this._url) {\r\n\t\t\tdebugger;\r\n\t\t}\r\n\t}\r\n\r\n\tgetTotalTime() {\r\n\t\treturn this.textures.reduce((pv, cv) => pv + cv.delay, 0);\r\n\t}\r\n\t\r\n\tclone() {\r\n\t\tlet newAnim = new this.constructor(this._raw, this._url);\r\n\t\tnewAnim.textures = this.textures;\r\n\t\treturn newAnim;\r\n\t}\r\n\t\r\n\tload() {\r\n\t\tthrow new Error(\"Not implement\");\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {number} stamp\r\n\t */\r\n\tupdate(stamp) {\r\n\t\tthrow new Error(\"Not implement\");\r\n\t}\r\n\r\n\t/** reset frame */\r\n\t_resetFrame() {\r\n\t\tthis.frame = 0;\r\n\t\tthis.time = 0;\r\n\t}\r\n\r\n\t/** restart */\r\n\treset() {\r\n\t\tthis.frame = 0;\r\n\t\tthis.time = 0;\r\n\t\tthis.is_end = false;\r\n\t}\r\n\t\r\n\tget texture() {\r\n\t\tthrow new Error(\"Not implement\");\r\n\t}\r\n\r\n\t/**\r\n\t * remove at nextStep\r\n\t */\r\n\tdestroy() {\r\n\t\tthis.is_loop = false;//防止重複\r\n\t\tthis.is_end = true;\r\n\t}\r\n}\r\n\r\n/**\r\n * process animation\r\n */\r\nclass AnimationBase extends IAnimation {\r\n\t/**\r\n\t * @param {!any} raw\r\n\t * @param {!string} url\r\n\t */\r\n\tconstructor(raw, url) {\r\n\t\tsuper(raw, url);\r\n\t}\r\n\r\n\tload() {\r\n\t\tif (!this._raw) {\r\n\t\t\t//this._raw = await $get.data(this._url);\r\n\t\t}\r\n\r\n\t\tfor (let i = 0; i in this._raw; ++i) {\r\n\t\t\t//let url = this._url + \"/\" + i;\r\n\r\n\t\t\tlet texture = new _Sprite_js__WEBPACK_IMPORTED_MODULE_2__[\"Sprite\"](this._raw[i]);\r\n\r\n\t\t\t//texture._url = url;\r\n\r\n\t\t\tthis.textures[i] = texture;\r\n\t\t}\r\n\t\t\r\n\t\tif (this.textures[0]) {\r\n\t\t\tif (!this.textures[0].isLoaded()) {\r\n\t\t\t\tthis.textures[0].__loadTexture();\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\tisEnd() {\r\n\t\treturn this.is_end;\r\n\t}\r\n\r\n\t/**\r\n\t * aways loop\r\n\t * @param {number} stamp\r\n\t */\r\n\t_update(stamp) {\r\n\t\tconst fc = this.textures.length;\r\n\r\n\t\tif (fc > 0) {//??\r\n\t\t\tthis.time = this.time + stamp;\r\n\r\n\t\t\tif (this.time > this.texture.delay) {\r\n\t\t\t\tthis.frame = ++this.frame % fc;\r\n\t\t\t\tthis.time = 0;\r\n\t\t\t}\r\n\t\t\t//this.frame = Math.trunc(this.time / 1000) % fc;\r\n\t\t}\r\n\r\n\t\tthis.delta += stamp;\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {number} stamp\r\n\t */\r\n\tupdate(stamp) {\r\n\t\tconst fc = this.textures.length;\r\n\r\n\t\tif (fc > 0) {//??\r\n\t\t\tthis.time = this.time + stamp;\r\n\r\n\t\t\tif (this.time > this.texture.delay) {\r\n\t\t\t\tthis.frame = this.frame + 1;\r\n\t\t\t\tif (this.frame >= fc) {\r\n\t\t\t\t\tif (this.is_loop) {\r\n\t\t\t\t\t\tthis.reset();//make loop\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\t//防止錯誤\r\n\t\t\t\t\t\tthis.frame = fc - 1;//this._resetFrame();\r\n\r\n\t\t\t\t\t\tthis.is_end = true;\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tthis.time = 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tthis.delta += stamp;\r\n\t}\r\n\r\n\t/**\r\n\t * @param {IRenderer} renderer - GraphLayerRenderer\r\n\t * @param {number} x\r\n\t * @param {number} y\r\n\t */\r\n\tdraw(renderer, x, y, angle, flip) {\r\n\t\tlet texture = this.texture;\r\n\t\trenderer.drawRotaGraph(texture, x, y, angle, flip);\r\n\t}\r\n\t\r\n\tget texture() {\r\n\t\treturn this.textures[this.frame];\r\n\t}\r\n}\r\n\r\n/**\r\n * animation rendering\r\n */\r\nclass Animation extends AnimationBase {\r\n\tconstructor(raw, url) {\r\n\t\tsuper(raw, url);\r\n\r\n\t\tthis.draw = this._draw_and_preload;\r\n\t}\r\n\r\n\t/**\r\n\t * draw and load next frame\r\n\t * @param {IRenderer} renderer - GraphLayerRenderer\r\n\t * @param {number} x\r\n\t * @param {number} y\r\n\t */\r\n\t_draw_and_preload(renderer, x, y, angle, flip) {\r\n\t\tlet frame;\r\n\r\n\t\t// if current frame is not loaded then render prev frame\r\n\t\tfor (frame = this.frame; frame >= 0; --frame) {\r\n\t\t\tlet texture = this.textures[frame];\r\n\r\n\t\t\tif (texture.isLoaded()) {\r\n\t\t\t\trenderer.drawRotaGraph(texture, x, y, angle, flip);\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t//preload next frame\r\n\t\tlet texture = this.textures[++frame];\r\n\t\tif (texture) {//if frame < this.textures.length\r\n\t\t\tif (!texture.isLoaded()) {\r\n\t\t\t\ttexture.__loadTexture();\r\n\t\t\t}\r\n\t\t}\r\n\t\telse {//if all testure are loaded\r\n\t\t\tdelete this.draw;\r\n\t\t}\r\n\t}\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9BbmltYXRpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9BbmltYXRpb24uanM/YTRkNSJdLCJzb3VyY2VzQ29udGVudCI6WyLvu79cclxuaW1wb3J0IHsgVmVjMiB9IGZyb20gXCIuL21hdGguanNcIjtcclxuaW1wb3J0IHsgSUdyYXBoLCBJUmVuZGVyZXIgfSBmcm9tIFwiLi9JUmVuZGVyZXIuanNcIjtcclxuXHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZS5qc1wiO1xyXG5cclxuXHJcbndpbmRvdy5tX2RyYXdfYW5pbWF0aW9uX3RleHR1cmVfaW5mbyA9IGZhbHNlO1xyXG5cclxuY2xhc3MgSUFuaW1hdGlvbiB7XHJcblx0Y29uc3RydWN0b3IocmF3LCB1cmwpIHtcclxuXHRcdHRoaXMuX3JhdyA9IG51bGw7XHJcblx0XHR0aGlzLl91cmwgPSBudWxsO1xyXG5cdFx0XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcblx0XHRcdF9yYXc6IHtcclxuXHRcdFx0XHR2YWx1ZTogcmF3XHJcblx0XHRcdH0sXHJcblx0XHRcdF91cmw6IHtcclxuXHRcdFx0XHR2YWx1ZTogdXJsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmZyYW1lID0gMDtcclxuXHRcdHRoaXMudGltZSA9IDA7XHJcblxyXG5cdFx0LyoqIGVsYXBzZWQgdGltZSAqL1xyXG5cdFx0dGhpcy5kZWx0YSA9IDA7XHJcblxyXG5cdFx0LyoqIEB0eXBlIHtTcHJpdGVbXX0gKi9cclxuXHRcdHRoaXMudGV4dHVyZXMgPSBbXTtcclxuXHRcdFxyXG5cdFx0LyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG5cdFx0dGhpcy5pc19sb29wID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0LyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG5cdFx0dGhpcy5pc19lbmQgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoIXJhdyAmJiAhdGhpcy5fdXJsKSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0VG90YWxUaW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGV4dHVyZXMucmVkdWNlKChwdiwgY3YpID0+IHB2ICsgY3YuZGVsYXksIDApO1xyXG5cdH1cclxuXHRcclxuXHRjbG9uZSgpIHtcclxuXHRcdGxldCBuZXdBbmltID0gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5fcmF3LCB0aGlzLl91cmwpO1xyXG5cdFx0bmV3QW5pbS50ZXh0dXJlcyA9IHRoaXMudGV4dHVyZXM7XHJcblx0XHRyZXR1cm4gbmV3QW5pbTtcclxuXHR9XHJcblx0XHJcblx0bG9hZCgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRcIik7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGFtcFxyXG5cdCAqL1xyXG5cdHVwZGF0ZShzdGFtcCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudFwiKTtcclxuXHR9XHJcblxyXG5cdC8qKiByZXNldCBmcmFtZSAqL1xyXG5cdF9yZXNldEZyYW1lKCkge1xyXG5cdFx0dGhpcy5mcmFtZSA9IDA7XHJcblx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdH1cclxuXHJcblx0LyoqIHJlc3RhcnQgKi9cclxuXHRyZXNldCgpIHtcclxuXHRcdHRoaXMuZnJhbWUgPSAwO1xyXG5cdFx0dGhpcy50aW1lID0gMDtcclxuXHRcdHRoaXMuaXNfZW5kID0gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdGdldCB0ZXh0dXJlKCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudFwiKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJlbW92ZSBhdCBuZXh0U3RlcFxyXG5cdCAqL1xyXG5cdGRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLmlzX2xvb3AgPSBmYWxzZTsvL+mYsuatoumHjeikh1xyXG5cdFx0dGhpcy5pc19lbmQgPSB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHByb2Nlc3MgYW5pbWF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uQmFzZSBleHRlbmRzIElBbmltYXRpb24ge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7IWFueX0gcmF3XHJcblx0ICogQHBhcmFtIHshc3RyaW5nfSB1cmxcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihyYXcsIHVybCkge1xyXG5cdFx0c3VwZXIocmF3LCB1cmwpO1xyXG5cdH1cclxuXHJcblx0bG9hZCgpIHtcclxuXHRcdGlmICghdGhpcy5fcmF3KSB7XHJcblx0XHRcdC8vdGhpcy5fcmF3ID0gYXdhaXQgJGdldC5kYXRhKHRoaXMuX3VybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgaW4gdGhpcy5fcmF3OyArK2kpIHtcclxuXHRcdFx0Ly9sZXQgdXJsID0gdGhpcy5fdXJsICsgXCIvXCIgKyBpO1xyXG5cclxuXHRcdFx0bGV0IHRleHR1cmUgPSBuZXcgU3ByaXRlKHRoaXMuX3Jhd1tpXSk7XHJcblxyXG5cdFx0XHQvL3RleHR1cmUuX3VybCA9IHVybDtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZXNbaV0gPSB0ZXh0dXJlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAodGhpcy50ZXh0dXJlc1swXSkge1xyXG5cdFx0XHRpZiAoIXRoaXMudGV4dHVyZXNbMF0uaXNMb2FkZWQoKSkge1xyXG5cdFx0XHRcdHRoaXMudGV4dHVyZXNbMF0uX19sb2FkVGV4dHVyZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGlzRW5kKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXNfZW5kO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogYXdheXMgbG9vcFxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGFtcFxyXG5cdCAqL1xyXG5cdF91cGRhdGUoc3RhbXApIHtcclxuXHRcdGNvbnN0IGZjID0gdGhpcy50ZXh0dXJlcy5sZW5ndGg7XHJcblxyXG5cdFx0aWYgKGZjID4gMCkgey8vPz9cclxuXHRcdFx0dGhpcy50aW1lID0gdGhpcy50aW1lICsgc3RhbXA7XHJcblxyXG5cdFx0XHRpZiAodGhpcy50aW1lID4gdGhpcy50ZXh0dXJlLmRlbGF5KSB7XHJcblx0XHRcdFx0dGhpcy5mcmFtZSA9ICsrdGhpcy5mcmFtZSAlIGZjO1xyXG5cdFx0XHRcdHRoaXMudGltZSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly90aGlzLmZyYW1lID0gTWF0aC50cnVuYyh0aGlzLnRpbWUgLyAxMDAwKSAlIGZjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZGVsdGEgKz0gc3RhbXA7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGFtcFxyXG5cdCAqL1xyXG5cdHVwZGF0ZShzdGFtcCkge1xyXG5cdFx0Y29uc3QgZmMgPSB0aGlzLnRleHR1cmVzLmxlbmd0aDtcclxuXHJcblx0XHRpZiAoZmMgPiAwKSB7Ly8/P1xyXG5cdFx0XHR0aGlzLnRpbWUgPSB0aGlzLnRpbWUgKyBzdGFtcDtcclxuXHJcblx0XHRcdGlmICh0aGlzLnRpbWUgPiB0aGlzLnRleHR1cmUuZGVsYXkpIHtcclxuXHRcdFx0XHR0aGlzLmZyYW1lID0gdGhpcy5mcmFtZSArIDE7XHJcblx0XHRcdFx0aWYgKHRoaXMuZnJhbWUgPj0gZmMpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzX2xvb3ApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZXNldCgpOy8vbWFrZSBsb29wXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly/pmLLmraLpjK/oqqRcclxuXHRcdFx0XHRcdFx0dGhpcy5mcmFtZSA9IGZjIC0gMTsvL3RoaXMuX3Jlc2V0RnJhbWUoKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuaXNfZW5kID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuZGVsdGEgKz0gc3RhbXA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0lSZW5kZXJlcn0gcmVuZGVyZXIgLSBHcmFwaExheWVyUmVuZGVyZXJcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geFxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcblx0ICovXHJcblx0ZHJhdyhyZW5kZXJlciwgeCwgeSwgYW5nbGUsIGZsaXApIHtcclxuXHRcdGxldCB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlO1xyXG5cdFx0cmVuZGVyZXIuZHJhd1JvdGFHcmFwaCh0ZXh0dXJlLCB4LCB5LCBhbmdsZSwgZmxpcCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldCB0ZXh0dXJlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGV4dHVyZXNbdGhpcy5mcmFtZV07XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogYW5pbWF0aW9uIHJlbmRlcmluZ1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbkJhc2Uge1xyXG5cdGNvbnN0cnVjdG9yKHJhdywgdXJsKSB7XHJcblx0XHRzdXBlcihyYXcsIHVybCk7XHJcblxyXG5cdFx0dGhpcy5kcmF3ID0gdGhpcy5fZHJhd19hbmRfcHJlbG9hZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIGRyYXcgYW5kIGxvYWQgbmV4dCBmcmFtZVxyXG5cdCAqIEBwYXJhbSB7SVJlbmRlcmVyfSByZW5kZXJlciAtIEdyYXBoTGF5ZXJSZW5kZXJlclxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHlcclxuXHQgKi9cclxuXHRfZHJhd19hbmRfcHJlbG9hZChyZW5kZXJlciwgeCwgeSwgYW5nbGUsIGZsaXApIHtcclxuXHRcdGxldCBmcmFtZTtcclxuXHJcblx0XHQvLyBpZiBjdXJyZW50IGZyYW1lIGlzIG5vdCBsb2FkZWQgdGhlbiByZW5kZXIgcHJldiBmcmFtZVxyXG5cdFx0Zm9yIChmcmFtZSA9IHRoaXMuZnJhbWU7IGZyYW1lID49IDA7IC0tZnJhbWUpIHtcclxuXHRcdFx0bGV0IHRleHR1cmUgPSB0aGlzLnRleHR1cmVzW2ZyYW1lXTtcclxuXHJcblx0XHRcdGlmICh0ZXh0dXJlLmlzTG9hZGVkKCkpIHtcclxuXHRcdFx0XHRyZW5kZXJlci5kcmF3Um90YUdyYXBoKHRleHR1cmUsIHgsIHksIGFuZ2xlLCBmbGlwKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vcHJlbG9hZCBuZXh0IGZyYW1lXHJcblx0XHRsZXQgdGV4dHVyZSA9IHRoaXMudGV4dHVyZXNbKytmcmFtZV07XHJcblx0XHRpZiAodGV4dHVyZSkgey8vaWYgZnJhbWUgPCB0aGlzLnRleHR1cmVzLmxlbmd0aFxyXG5cdFx0XHRpZiAoIXRleHR1cmUuaXNMb2FkZWQoKSkge1xyXG5cdFx0XHRcdHRleHR1cmUuX19sb2FkVGV4dHVyZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHsvL2lmIGFsbCB0ZXN0dXJlIGFyZSBsb2FkZWRcclxuXHRcdFx0ZGVsZXRlIHRoaXMuZHJhdztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/Animation.js\n");

/***/ })

}]);