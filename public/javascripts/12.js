(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{332:function(t,h,i){"use strict";i.r(h),i.d(h,"Vec2",function(){return s}),i.d(h,"Rectangle",function(){return e}),i.d(h,"Randomizer",function(){return n}),i.d(h,"clamp",function(){return r});class s{constructor(t,h){arguments.length>1?(this.x=t,this.y=h):1==arguments.length&&null!=t?(this.x=0|t.x,this.y=0|t.y):(this.x=0,this.y=0)}static get(){return new s(...arguments)}static get empty(){return new s(0,0)}clone(){return new this.constructor(this.x,this.y)}add(t){let h=this.x,i=this.y;for(let t of arguments)null!=t&&(h+=t.x,i+=t.y);return new s(h,i)}sub(t){let h=this.x,i=this.y;for(let t of arguments)null!=t&&(h-=t.x,i-=t.y);return new s(h,i)}plus(t){return new s(this.x+t.x,this.y+t.y)}minus(t){return new s(this.x-t.x,this.y-t.y)}plus2(t,h){return new s(this.x+t,this.y+h)}minus2(t,h){return new s(this.x-t,this.y-h)}mul(t){return new s(this.x*t,this.y*t)}scale(t){return new s(this.x*t,this.y*t)}rotate(t){let h=Math.cos(t)*this.x-Math.sin(t)*this.y,i=Math.sin(t)*this.x+Math.cos(t)*this.y;return new s(h,i)}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y);return new s(this.x/t,this.y/t)}length(){return Math.sqrt(x**2+y**2)}distance_sq(t){let h=this.x-t.x,i=this.y-t.y;return h*h+i*i}distance(t){let h=this.x-t.x,i=this.y-t.y;return Math.sqrt(h*h+i*i)}}class e{constructor(){if(4==arguments.length)this.left=arguments[0],this.top=arguments[1],this.width=arguments[2],this.height=arguments[3];else if(2==arguments.length)this.left=arguments[0].x,this.top=arguments[0].y,this.width=arguments[1].x,this.height=arguments[1].y;else if(arguments[0]instanceof e){const t=arguments[0];this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height}else this.left=0,this.top=0,this.width=0,this.height=0}copy(t){this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height}clone(){return new e(this)}get x(){return this.left}set x(t){this.left=t}get y(){return this.top}set y(t){this.top=t}get right(){return this.left+this.width}set right(t){this.width=t-this.left}get bottom(){return this.top+this.height}set bottom(t){this.height=t-this.top}get size(){return new s(this.width,this.height)}set size(t){this.width=t.width||t.x,this.height=t.height||t.y}get center(){return new s(this.left+.5*this.width,this.top+2*this.height/3)}set center(t){let h=.5*this.width,i=2*this.height/3;this.left=t.x-h,this.top=t.y-i}setCenter(t,h){let i=.5*this.width,s=2*this.height/3;this.left=t-i,this.top=h-s}collide(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top}collide4f(t,h,i,s){return this.left<h&&this.right>t&&this.top<s&&this.bottom>i}collide4f2(t,h,i,s){const e=t-i,n=h-s,r=t+i,o=h+s;return this.left<r&&this.right>e&&this.top<o&&this.bottom>n}collide2f2x(t,h){const i=t-h,s=t+h;return this.left<s&&this.right>i}collide2f2y(t,h){const i=t-h,s=t+h;return this.top<s&&this.bottom>i}parse(t,h,i,s){this.left=t,this.top=h,this.right=i,this.bottom=s}static parse(t,h,i,s){return new e(t,h,i-t,s-h)}}class n{static nextInt(t){return Math.trunc(100*Math.random()%t)}static randInt(t,h){return Math.trunc(t+100*Math.random()%(h-t+1))}static nextBoolean(){return!(1&Math.trunc(100*Math.random()))}}function r(t,h,i){return Math.max(h,Math.min(t,i))}}}]);
//# sourceMappingURL=12.js.map