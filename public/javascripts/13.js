(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{331:function(t,e,r){"use strict";r.r(e),r.d(e,"ColorRGB",function(){return n}),r.d(e,"ColorHSV",function(){return o}),r.d(e,"_ImageFilter",function(){return a}),r.d(e,"ImageFilter",function(){return l}),r.d(e,"IGraph",function(){return u}),r.d(e,"IRenderer",function(){return c}),r.d(e,"ImageDataHelper",function(){return d});var i=r(332);class n{constructor(t=0,e=0,r=0){this.r=t,this.g=e,this.b=r}clone(){return new this.constructor(this.r,this.g,this.b)}selfAdd(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}selfSub(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}selfScale(t){return this.r*=t,this.g*=t,this.b*=t,this}static add(t,e){return new n(t.r+e.r,t.g+e.g,t.b+e.b)}static sub(t,e){return new n(t.r-e.r,t.g-e.g,t.b-e.b)}static scale(t,e){return new n(t.r*e,t.g*e,t.b*e)}toString(){return"rgb("+Math.trunc(this.r)+","+Math.trunc(this.g)+","+Math.trunc(this.b)+")"}static fromInt24(t){return new n(t>>16&255,t>>8&255,255&t)}toHSV(){let t,e,r=this.r/=255,s=this.g/=255,i=this.b/=255,h=Math.max(r,s,i),n=Math.min(r,s,i),a=h,l=h-n;if(e=0==h?0:l/h,h==n)t=0;else{switch(h){case r:t=(s-i)/l+(s<i?6:0);break;case s:t=(i-r)/l+2;break;case i:t=(r-s)/l+4}t/=6}return new o(t,e,a)}fromHsv(t,e,r){let s,i,h,n=Math.floor(6*t),o=6*t-n,a=r*(1-e),l=r*(1-o*e),u=r*(1-(1-o)*e);switch(n%6){case 0:s=r,i=u,h=a;break;case 1:s=l,i=r,h=a;break;case 2:s=a,i=r,h=u;break;case 3:s=a,i=l,h=r;break;case 4:s=u,i=a,h=r;break;case 5:s=r,i=a,h=l}this.r=255*s,this.g=255*i,this.b=255*h}static fromHsv(t,e,r){let s,i,h,o=Math.floor(6*t),a=6*t-o,l=r*(1-e),u=r*(1-a*e),c=r*(1-(1-a)*e);switch(o%6){case 0:s=r,i=c,h=l;break;case 1:s=u,i=r,h=l;break;case 2:s=l,i=r,h=c;break;case 3:s=l,i=u,h=r;break;case 4:s=c,i=l,h=r;break;case 5:s=r,i=l,h=u}return new n(255*s,255*i,255*h)}toFilter(){let{h:t,s:e,v:r}=this.toHSV();return`hue-rotate(${t*Math.PI*2}rad) saturate(${e}) brightness(${r})`}toFilterLimit(){return`hue-rotate(${360*h}deg) saturate(${Object(i.clamp)(Math.trunc(100*s),0,100)}%) brightness(${Object(i.clamp)(Math.trunc(100*v),0,100)}%)`}toFilter_HueRotate(){const{h:t,s:e,v:r}=this;return`hue-rotate(${360*t}deg)`}}class o{constructor(t=0,e=0,r=0){this.h=t,this.s=e,this.v=r}clone(){return new this.constructor(this.h,this.s,this.v)}selfAdd(t){return this.h+=t.h,this.s+=t.s,this.v+=t.v,this}selfSub(t){return this.h+=t.h,this.s+=t.s,this.v+=t.v,this}selfScale(t){return this.h*=t,this.s*=t,this.v*=t,this}static add(t,e){return new o(t.s+e.s,t.s+e.s,t.v+e.v)}static sub(t,e){return new o(t.s-e.s,t.s-e.s,t.v-e.v)}static scale(t,e){return new o(t.h*e,t.s*e,t.v*e)}toString(){const{h:t,s:e,v:r}=this;return"hsv("+t+","+e+","+r+")"}toFilter(){const{h:t,s:e,v:r}=this;return`hue-rotate(${t*Math.PI*2}rad) saturate(${e}) brightness(${r})`}toFilterLimit(){return`hue-rotate(${360*h}deg) saturate(${Object(i.clamp)(Math.trunc(100*s),0,100)}%) brightness(${Object(i.clamp)(Math.trunc(100*v),0,100)}%)`}toFilter_HueRotate(){const{h:t,s:e,v:r}=this;return`hue-rotate(${360*t}deg)`}}class a{constructor(t=0,e=100,r=100,s=100){this._hue=t,this._sat=e,this._bri=r,this._contrast=s}get hue(){return this._hue}set hue(t){this._hue=t%360,this._hue%360==0&&100==this._sat&&100==this._bri&&100==this._contrast&&this.reset()}get sat(){return this._sat}set sat(t){this._sat=Math.max(0,t),this._hue%360==0&&100==this._sat&&100==this._bri&&100==this._contrast&&this.reset()}get bri(){return this._bri}set bri(t){this._bri=Math.max(0,t),this._hue%360==0&&100==this._sat&&100==this._bri&&100==this._contrast&&this.reset()}get contrast(){return this._contrast}set contrast(t){this._contrast=Math.max(0,t),this._hue%360==0&&100==this._sat&&100==this._bri&&100==this._contrast&&this.reset()}toRgb(){return n.fromHsv(this._hue/360,this._sat/100,this._bri/100)}toString(){return`hue-rotate(${this._hue}deg) saturate(${this._sat}%) brightness(${this._bri}%) contrast(${this._contrast}%)`}}class l extends a{constructor(t=0,e=100,r=100,s=100){super(t,e,r,s),arguments.length&&(this.__proto__=a.prototype)}get hue(){return 0}set hue(t){this._hue=t%360,this.__proto__=a.prototype}get sat(){return 100}set sat(t){this._sat=Math.max(0,t),this.__proto__=a.prototype}get bri(){return 100}set bri(t){this._bri=Math.max(0,t),this.__proto__=a.prototype}get contrast(){return 100}set contrast(t){this._contrast=Math.max(0,t),this.__proto__=a.prototype}toRgb(){return new n(255,255,255)}toString(){return"none"}get isEmpty(){return!0}}a.prototype.reset=function(){this._hue=0,this._sat=100,this._bri=100,this._contrast=100,this.__proto__=l.prototype},a.prototype.set=function(t,e,r,s){t%360==0&&100==e&&100==r&&100==s?this.reset():(this.hue=t,this.sat=e,this.bri=r,this._contrast=s)};class u{constructor(t,e){let r,s;this.$promise=void 0,this._vbo=void 0,this.x=0,this.y=0,e?(e.width>0&&(r=Number(e.width)),e.height>0&&(s=Number(e.height))):(r=0,s=0),this.width=r,this.height=s,Object.defineProperty(this,"width",{configurable:!0,enumerable:!0,get:function(){return this._isLoaded_or_doload(),r},set:function(t){}}),Object.defineProperty(this,"height",{configurable:!0,enumerable:!0,get:function(){return this._isLoaded_or_doload(),s},set:function(t){}}),Object.defineProperty(this,"texture",{configurable:!0,enumerable:!0,get:function(){return this.__isLoading_or_doload(),null},set:function(t){}}),this.isLoaded=this._isLoaded_or_doload,this._url="",t&&(this.src=t)}_dispose(){this._isLoaded()&&(this._gl&&(alert("gl.deleteTexture(this.texture)"),this._gl.deleteTexture(this.texture)),this.texture=null)}draw(){throw new Error("Not Implement")}draw2(t,e){throw new Error("Not Implement")}get _engine(){throw new Error("Not Implement")}get _gl(){throw new Error("Not Implement")}get _ctx(){throw new Error("Not Implement")}get z(){return 0}set src(t){this._dispose(),this._url=t}_isLoaded(){return null!=this.texture}_isLoaded_or_doload(){return!!this.texture||(this.__loadTexture(),!1)}__isLoading_or_doload(){return null!==this.$promise||(this.__loadTexture(),!1)}__loadTexture(){if(this.$promise)return;if(""==this._url)return!1;let t=new Image;this.$promise=new Promise((e,r)=>{const s=this._engine;t.addEventListener("load",t=>{!t.target.naturalWidth||t.target.naturalHeight,this.isLoaded=this._isLoaded,delete this.width,this.width=t.target.naturalWidth,delete this.height,this.height=t.target.naturalHeight,delete this.texture,this.texture=s._handleImageLoaded(t.target,this),delete this.$promise,e(this)},!1),t.addEventListener("error",r=>{this.isLoaded=this._isLoaded,this._graph_rect&&(delete this.texture,this.texture=this._graph_rect),console.error("404: "+t.src),e(this)},!1)}),u.$all_promise.push(this.$promise),t.src=$get.imageUrl(this._url)}static async waitAllLoaded(t){let e=u.$all_promise;console.log("image loaded: "+u.$all_promise.length),u.$all_promise=[],await Promise.all(e),t&&t()}}u.$all_promise=[];class c{constructor(){this._GraphType=null,this.ctx=null,this._globalAlpha=1,this._globalAlphaStack=[],this.screen_size=new i.Vec2(0,0)}init(t){throw new Error("Not implement")}get Graph(){throw new Error("Not implement")}$swapCanvas(t){throw new Error("Not implement")}get _canvas(){throw new Error("Not implement")}_handleImageLoaded(t,e){throw new Error("Not implement")}setRotationTranslationScale(t,e,r,s,i){throw new Error("Not implement")}setTransform(t,e,r,s,i,h){throw new Error("Not implement")}loadIdentity(){throw new Error("Not implement")}pushMatrix(){throw new Error("Not implement")}popMatrix(){throw new Error("Not implement")}translate(t,e){throw new Error("Not implement")}translate3d(t,e,r){throw alert("'translate3d' is deprecated"),new Error("'translate3d' is deprecated")}scale(t,e){throw new Error("Not implement")}scale3d(t,e,r){throw alert("'scale3d' is deprecated"),new Error("'scale3d' is deprecated")}rotate(t){throw new Error("Not implement")}get color(){throw new Error("Not implement")}set color(t){throw new Error("Not implement")}Color4fv(t){throw alert("'Color4fv' is deprecated"),new Error("'Color4fv' is deprecated")}get globalAlpha(){throw new Error("Not implement")}set globalAlpha(t){throw new Error("Not implement")}pushGlobalAlpha(){throw new Error("Not implement")}popGlobalAlpha(t){throw new Error("Not implement")}clearDrawScreen(){throw new Error("Not implement")}drawGraph(t){throw new Error("Not implement")}drawGraph2(t,e,r,s){throw new Error("Not implement")}drawRect(t,e,r,s){throw 4!=arguments.length&&console.error("drawRect(x, y, w, h) need 4 param"),new Error("Not implement")}drawColoredGraph(t,e,r,s){throw new Error("Not implement")}}class d{constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d")}resize(t,e){canvas.width=t,canvas.height=e}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.height)}imageToImagedata(t){const e=this.canvas,r=this.ctx;return e.width=t.width,e.height=t.height,r.drawImage(t,0,0),r.getImageData(0,0,t.width,t.height)}imagedataToDataURL(t){const e=this.canvas,r=this.ctx;return e.width=t.width,e.height=t.height,r.putImageData(t,0,0),e.toDataURL()}imagedataToImage(t){const e=this.canvas,r=this.ctx;e.width=t.width,e.height=t.height,r.putImageData(t,0,0);let s=new Image;return s.src=e.toDataURL(),s}}},332:function(t,e,r){"use strict";r.r(e),r.d(e,"Vec2",function(){return s}),r.d(e,"Rectangle",function(){return i}),r.d(e,"Randomizer",function(){return h}),r.d(e,"clamp",function(){return n});class s{constructor(t,e){arguments.length>1?(this.x=t,this.y=e):1==arguments.length&&null!=t?(this.x=0|t.x,this.y=0|t.y):(this.x=0,this.y=0)}static get(){return new s(...arguments)}static get empty(){return new s(0,0)}clone(){return new this.constructor(this.x,this.y)}add(t){let e=this.x,r=this.y;for(let t of arguments)null!=t&&(e+=t.x,r+=t.y);return new s(e,r)}sub(t){let e=this.x,r=this.y;for(let t of arguments)null!=t&&(e-=t.x,r-=t.y);return new s(e,r)}plus(t){return new s(this.x+t.x,this.y+t.y)}minus(t){return new s(this.x-t.x,this.y-t.y)}plus2(t,e){return new s(this.x+t,this.y+e)}minus2(t,e){return new s(this.x-t,this.y-e)}mul(t){return new s(this.x*t,this.y*t)}scale(t){return new s(this.x*t,this.y*t)}rotate(t){let e=Math.cos(t)*this.x-Math.sin(t)*this.y,r=Math.sin(t)*this.x+Math.cos(t)*this.y;return new s(e,r)}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y);return new s(this.x/t,this.y/t)}length(){return Math.sqrt(x**2+y**2)}distance_sq(t){let e=this.x-t.x,r=this.y-t.y;return e*e+r*r}distance(t){let e=this.x-t.x,r=this.y-t.y;return Math.sqrt(e*e+r*r)}}class i{constructor(){if(4==arguments.length)this.left=arguments[0],this.top=arguments[1],this.width=arguments[2],this.height=arguments[3];else if(2==arguments.length)this.left=arguments[0].x,this.top=arguments[0].y,this.width=arguments[1].x,this.height=arguments[1].y;else if(arguments[0]instanceof i){const t=arguments[0];this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height}else this.left=0,this.top=0,this.width=0,this.height=0}copy(t){this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height}clone(){return new i(this)}get x(){return this.left}set x(t){this.left=t}get y(){return this.top}set y(t){this.top=t}get right(){return this.left+this.width}set right(t){this.width=t-this.left}get bottom(){return this.top+this.height}set bottom(t){this.height=t-this.top}get size(){return new s(this.width,this.height)}set size(t){this.width=t.width||t.x,this.height=t.height||t.y}get center(){return new s(this.left+.5*this.width,this.top+2*this.height/3)}set center(t){let e=.5*this.width,r=2*this.height/3;this.left=t.x-e,this.top=t.y-r}setCenter(t,e){let r=.5*this.width,s=2*this.height/3;this.left=t-r,this.top=e-s}collide(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top}collide4f(t,e,r,s){return this.left<e&&this.right>t&&this.top<s&&this.bottom>r}collide4f2(t,e,r,s){const i=t-r,h=e-s,n=t+r,o=e+s;return this.left<n&&this.right>i&&this.top<o&&this.bottom>h}collide2f2x(t,e){const r=t-e,s=t+e;return this.left<s&&this.right>r}collide2f2y(t,e){const r=t-e,s=t+e;return this.top<s&&this.bottom>r}parse(t,e,r,s){this.left=t,this.top=e,this.right=r,this.bottom=s}static parse(t,e,r,s){return new i(t,e,r-t,s-e)}}class h{static nextInt(t){return Math.trunc(100*Math.random()%t)}static randInt(t,e){return Math.trunc(t+100*Math.random()%(e-t+1))}static nextBoolean(){return!(1&Math.trunc(100*Math.random()))}}function n(t,e,r){return Math.max(e,Math.min(t,r))}}}]);
//# sourceMappingURL=13.js.map