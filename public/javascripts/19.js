(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{327:function(e,t,n){"use strict";n.r(t),n.d(t,"GlobalVar",function(){return r}),n.d(t,"$gv",function(){return s});n(350),n(331),n(334);var i=n(332),a=n(376);class r{constructor(){let e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);e&&(this.is_mobile=!0),this.m_is_run=!e,this.MAX_FPS=60,this.FRAME_ELAPSED=1e3/60,this.CANVAS_SCALE=32,this.m_editor_mode=!1,this.m_display_foothold=!1,this.m_display_physics_debug=!1,this.m_display_debug_info=!1,this.m_debugDraw=new a.a,this.m_display_selected_object=!1,this.m_selected_object=null,this.m_hover_object=null,this.m_viewRect=new i.Rectangle(0,-384,1366,768),this.m_is_rendering_map=!0,this.m_display_back=!0,this.m_display_front=!0,this.m_display_mapobj=!0,this.m_display_maptile=!0,this.m_display_particle_system=!0,this.m_display_skeletal_anim=!0,this.m_display_portal=!0,this.m_display_name_label=!0,this.m_display_player=!0,this.m_display_other_player=!0,this.m_display_life=!0,this.m_display_npc=!0,this.m_display_mob=!0,this.NameLabel_default_style="214",this.ChatBalloon_default_style=212,this.ChatBalloon_display_duration=5e3,this.input_keyDown={},this.input_keyUp={},this.mouse_move=0,this.mouse_x=0,this.mouse_y=0,this.mouse_dl=0,this.mouse_ul=0,this.mouse_dm=0,this.mouse_um=0,this.mouse_dr=0,this.mouse_ur=0;{let e={layeredObjects:[]};for(let t=0;t<12;++t){let n=e.layeredObjects[t]={};Object.defineProperty(n,"length",{enumerable:!1,writable:!0,value:0})}e.Update=function(t){for(let n=0;n<e.layeredObjects.length;++n){const i=e.layeredObjects[n];for(let e in i){i[e].update(t)}}},e.RenderLayer=function(t,n){const i=e.layeredObjects[n];for(let e in i){i[e].render(t)}},e.addToScene=function(t,n){if(!(Number.isSafeInteger(t)&&t in e.layeredObjects))throw new TypeError("layer");{const i=e.layeredObjects[t];n.$layer=t,n.$objectid=i.length,i[n.$objectid]=n,i.length++}},e.destroy=function(t){const n=t.$layer,i=t.$objectid,a=e.layeredObjects[n];t.destroy(),delete a[i]},this.SceneObjectMgr=e}}}const s=new r;window.$gv=s},477:function(e,t){},482:function(e,t,n){"use strict";n.r(t);n(327),n(332);var i=n(331),a=n(334),r=(n(333),n(359)),s=(n(360),n(468)),o=n.n(s),l=(n(365),n(384)),c=n(382);class d{constructor(){this.socket=null,this.charaMap={}}_findChara(e,t){let n=this.charaMap[e];n&&t.call(this,n)}_addRemoteCharaPacketListener(e,t){this.socket.on(e,(...e)=>{let n=e[0].id,i=this.charaMap[n];i&&t.call(this,i,...e)})}async connect(e){return await new Promise((t,n)=>{let i;(i=o()(e)).on("connect",()=>{this.socket=i,window.$io=this.socket;const e=i.$emit=i.emit;i.emit=function(t,n){return new Promise(function(a,r){e.call(i,t,n,function(...e){a.apply(this,e)})})},t(i)}),i.on("connect_error",e=>{i.disconnect(),n(e)})})}get $scene_map(){return window.scene_map}async login(e,t){await this.socket.emit("login",{account:"aaa",password:"aaa"})?console.info("login"):console.info("login failed")}async selectWorld(e,t){await this.socket.emit("selectWorld",{world:0,channel:0})?console.info("selectWorld"):console.info("selectWorld failed")}async selectChara(e){new l.$RequestPacket_SelectChara;let t=await this.socket.emit("selectChara",{id:123});const n=t.charaData,i=t.remoteCharacters;if(n)try{await this.$scene_map.load(n.mapId);let e=this._CreateMyCharacter(n),t=this.onEnterRemoteChara(i);await Promise.all([e,t])}catch(e){console.error(e)}else alert("selectChara: chara not exist")}async _CreateMyCharacter(e){let t=await c.app.store.dispatch("_createChara",{emplace:{id:e.id,code:e.equips_code}});this.chara=t,t._$data=t._$data||{guildId:"",partyId:""}}static async _CreateMyCharacter(e){let t=await c.app.store.dispatch("_createChara",{emplace:{id:e.id,code:e.equips_code}});return(t=t)._$data=t._$data||{guildId:"",partyId:""},t}onEnterRemoteChara(e){let t=e.map(e=>c.app.store.dispatch("_createChara",{remote_chara:{id:e.id,code:e.equips_code}}).then((...e)=>{try{this.$scene_map.controller;let t=e[0];this.charaMap[t.id]=t}catch(e){alert(err.message),console.error(err)}}));return Promise.all(t)}onRemoteChat(e,t,n){e.chatCtrl.style=t.style,e.chatCtrl.enter(t.text),app.vue.$refs.statusBar.pushChatHistory(t.type,t.style,t.text)}onRemoteCharaMove(e,t,n){e.$move(t)}onRemoteCharaAnim(e,t,n){e.$anim(t)}onRemoteCharaSkill(e,t,n){e.invokeSkill(t.skillId)}onRemoteAvatarModified(e,t,n){e.renderer.use(t.itemId)}async $test(){this.socket.on("enterRemoteChara",this.onEnterRemoteChara.bind(this)),this._addRemoteCharaPacketListener("remoteChat",this.onRemoteChat),this._addRemoteCharaPacketListener("remoteCharaMove",this.onRemoteCharaMove),this._addRemoteCharaPacketListener("remoteCharaAnim",this.onRemoteCharaAnim),this._addRemoteCharaPacketListener("remoteCharaSkill",this.onRemoteCharaSkill),this._addRemoteCharaPacketListener("remoteAvatarModified",this.onRemoteAvatarModified),await this.login("aaa","aaa"),await this.selectWorld(0,0),await this.selectChara(0)}}class _{constructor(){throw new Error("")}static PushState(e,t){if(!e)return;let n={},i="?map="+e.map_id;n.map_id=e.map_id,t&&t.renderer&&(n.chara=t.renderer._stringify(!1),i+="&chara="+n.chara),history.pushState(n,e._window_title,i),document.title=e._window_title}static PushStateString(e,t){if(!e)return;let n={},i="?map="+e;n.map_id=e,t&&(n.chara=t,i+="&chara="+n.chara),history.pushState(n,scene._window_title,i),document.title=scene._window_title}static async PopState(e){if(e){if(e.chara&&window.chara&&window.chara.renderer){let t=window.chara.renderer._stringify(!1);e.chara!=t&&window.chara.renderer._parse(e.chara)}else d._CreateMyCharacter({id:"chara_1",equips_code:e.chara});scene_map&&scene_map.map_id!=e.map_id&&await scene_map.load(e.map_id)}}}var m=n(374),h=(n(383),n(385)),p=n(373);class g{constructor(){this.url=null,this.x=0,this.y=0,this.delay=0}}class u{constructor(){this.frames=[],this.duration=0}async addFrameFromUrl(e){let t=await $get.data(e);return this.addFrame("images"+e,t.origin.x,t.origin.y,t.delay)}addFrame(e,t,n,i){if(!e)throw new TypeError;const a=this.frames.length;let r=new g;return r.url=e,r.x=0|t,r.y=0|n,r.delay=0|i,this.frames.push(r),this.duration+=r.delay,a}async load(e){let t=await $get.data(e);for(let n=0,i=t[n];i;i=t[++n]){this.addFrame(["images",e,n].join("/"),i.origin.x,i.origin.y,i.delay)}}}class y{constructor(){}static createToCSS(e,t,n){const i="Cursor"+Math.trunc(4294967295*Math.random()).toString(16),{frames:a,duration:r}=e;let s=`${t}:hover {\n`;if(s+=`cursor: url(${a[0].url}) ${a[0].x} ${a[0].y}, ${n};\n`,r){s+=`animation-name: ${i}_keyframes;\n`,s+=`animation-duration: ${r}ms;\n`,s+="animation-iteration-count: infinite;\n",s+="}\n";let e=0;s+=`@keyframes ${i}_keyframes {\n`;for(let t=0;t<a.length;++t){const i=a[t];s+=`${Math.trunc(e/r*100)}% { cursor: url(${a[t].url}) ${a[t].x} ${a[t].y}, ${n}; }\n`,e+=i.delay}s+="}\n"}else s+="}";var o=document.createElement("STYLE"),l=document.createTextNode(s);return o.id=i,o.appendChild(l),document.head.appendChild(o),o}}n.d(t,"Game",function(){return w}),p.a.addLayerBack(12),window.SCREEN_PRINTLN=function(e,t){2==arguments.length?window._SCREEN_PRINTLN.push({getText:e,getValue:t}):1==arguments.length&&window._SCREEN_PRINTLN.push(arguments[0])},window._SCREEN_PRINTLN=[];window.addEventListener("popstate",function(e){_.PopState(e.state)}),function(){let e=new u,t=e.addFrameFromUrl("/UI/Basic/Cursor/0/0").then(function(t){e.frames[t].delay=200}),n=e.addFrameFromUrl("/UI/Basic/Cursor/12/0").then(function(t){e.frames[t].delay=200});Promise.all([t,n]).then(function(){e.duration=400,y.createToCSS(e,".ui-clickable","pointer")})}(),window.onkeydown=function(e){if(e.target!=document.body)return;let t=e.key;null==t||$gv.input_keyDown[t]||(null!=$gv.input_keyDown[t]?++$gv.input_keyDown[t]:$gv.input_keyDown[t]=1),"Space"==e.code&&$("#m_is_run").click(),"F2"==e.code&&($gv.m_editor_mode=!$gv.m_editor_mode)},window.onkeyup=function(e){if(e.target!=document.body)return;let t=e.key;null!=t&&$gv.input_keyDown[t]&&($gv.input_keyDown[t]=0,$gv.input_keyUp[t]=1)},Object.defineProperty(window,"$m_is_run",{get:function(){return $("#m_is_run").attr("checked")},set:function(e){$("#m_is_run").attr("checked",!e),$("#m_is_run").click()}}),window.onmousedown=function(e){$gv.m_editor_mode&&!e.target.classList.contains("Editor")||(1==e.which?($gv.mouse_dl=1,$gv.mouse_ul=0):2==e.which?($gv.mouse_dm=1,$gv.mouse_um=0):3==e.which&&($gv.mouse_dr=1,$gv.mouse_ur=0),$gv.mouse_x=e.pageX,$gv.mouse_y=e.pageY)},window.onmouseup=function(e){$gv.m_editor_mode&&!e.target.classList.contains("Editor")||(1==e.which?($gv.mouse_dl=0,$gv.mouse_ul=1):2==e.which?($gv.mouse_dm=0,$gv.mouse_um=1):3==e.which&&($gv.mouse_dr=0,$gv.mouse_ur=1),$gv.mouse_x=e.pageX,$gv.mouse_y=e.pageY)},window.onmousemove=function(e){$gv.m_editor_mode&&!e.target.classList.contains("Editor")||($gv.mouse_x=e.pageX,$gv.mouse_y=e.pageY,$gv.mouse_move=1)};class w{constructor(){this.timer=0,this.timer_=0,this._dTimer=0,this.fps_arr=[],this.frame_s_arr=[],this.scene_map=new r.c,window.scene_map=this.scene_map,$gv.scene_map=window,scene_map.onload=function(){_.PushState(this,window.chara)},this._loop=this._loop.bind(this),document.getElementById("m_is_run").onchange=function(e){this.m_is_run=!!e.target.checked,this.m_is_run&&(requestAnimationFrame(this._loop),document.getElementById("Screenshot").innerHTML="")}.bind(this),this._$moveViewportSpeed=10}moveViewport(e){const t=this.scene_map,n=$gv.input_keyDown.z?10*this._$moveViewportSpeed:this._$moveViewportSpeed;$gv.input_keyDown.ArrowLeft>0&&($gv.m_viewRect.left-=n),$gv.input_keyDown.ArrowRight>0&&($gv.m_viewRect.left+=n),$gv.input_keyDown.ArrowUp>0&&($gv.m_viewRect.top-=n),$gv.input_keyDown.ArrowDown>0&&($gv.m_viewRect.top+=n);let{left:i,top:a,right:r,bottom:s}=t.mapBound;e&&($gv.m_viewRect.left<i&&($gv.m_viewRect.left=i),$gv.m_viewRect.right>r&&($gv.m_viewRect.left=r-$gv.m_viewRect.width),$gv.m_viewRect.top<a&&($gv.m_viewRect.top=a),$gv.m_viewRect.bottom>s&&($gv.m_viewRect.top=s-$gv.m_viewRect.height))}async _$startClient(e){if(scene_map){let t=new d;try{await t.connect(e),console.log("start client")}catch(e){return console.warn(e),console.log("start offline"),void this._$start_offline()}c.app.client=t,t.$test()}}_$start_offline(){let e,t=function(){let e=decodeURIComponent(window.location.search.substring(1)).split("&"),t={};for(let n=0;n<e.length;++n){let i=e[n].split("=");t[i[0]]=i[1]}return t}();e=t.map||window.DEFAULT_MAP_ID;let n=t.chara||"c,00002012,00012012,00026509|00026509,00034873|00034873,01051429,01072392";_.PopState({map_id:e,chara:n})}get _isMapReady(){const e=this.scene_map;return e&&e.isLoaded()}async run(){console.log("begin render"),this._loop(0)}async forceUpdateScreen(){const e=this.chara;if(e.renderer.__forceUpdate(0),this.m_is_run)return await e.renderer.waitLoaded(),void(e.renderer.__require_update=!0);await e.renderer.waitLoaded(),await e.renderer._waitFrameTexturesLoaded(),await i.IGraph.waitAllLoaded(),document.getElementById("Screenshot").innerHTML="",e.renderer.__require_update=!0,this._loop(0)}_calcFPS(e){try{if(this.timer-this.timer_>=1e3){if(this.fps_arr.length){let e=this.fps_arr.reduce(function(e,t){return e+t})/this.fps_arr.length;$gv.FPS=e,document.getElementById("FPS").innerHTML=e.toFixed(2)}if(this.frame_s_arr.length){let e=this.frame_s_arr.reduce(function(e,t){return e+t})/this.frame_s_arr.length;$gv.frameCount=e,document.getElementById("frame").innerHTML=e.toFixed(2)}this.frame_s_arr=[],this.fps_arr=[],this.timer_=this.timer}else e>0&&Number.isFinite(e)&&(this.fps_arr.push(1e3/e),this.frame_s_arr.push(e))}catch(e){document.getElementById("FPS").innerHTML="-",document.getElementById("frame").innerHTML="-",this.fps_arr=[],this.frame_s_arr=[]}}_requestNextFrame(){this.m_is_run?requestAnimationFrame(this._loop):setTimeout(function(){let e=new Image;e.src=a.engine._canvas.toDataURL(),a.engine.ctx.clearRect(0,0,a.engine.ctx.width,a.engine.ctx.height),document.getElementById("Screenshot").appendChild(e)},0)}_updateScene(e){this.chara;const t=this.charaList;this._isMapReady&&scene_map.update(e);for(let n=0;n<t.length;++n)t[n].update(e);$gv.SceneObjectMgr.Update(e),m.a.Update(e);{const e=c.app.client;if(e&&e.chara){const t=e.chara;t.$emit(window.$io),t.$recMove()}}p.a.update(e),h.a.update(e)}_renderScene(){this._isMapReady?this._render_map_ready():this._render_map_loading()}_render_map_ready(){const e=this.chara,t=this.charaList;if(a.engine.beginScene(),a.engine.loadIdentity(),a.engine.clearDrawScreen(),$gv.m_viewRect.size=a.engine.screen_size,!$gv.m_editor_mode)if(e&&e.renderer)$gv.m_viewRect.setCenter(e.renderer.x,e.renderer.y);else if(scene_map.controller.player){const e=scene_map.controller.player.getPosition(),t=Math.trunc(e.x*$gv.CANVAS_SCALE+.5),n=Math.trunc(e.y*$gv.CANVAS_SCALE+.5);$gv.m_viewRect.setCenter(t,n)}if($gv.m_editor_mode&&this.moveViewport(!1),$gv.m_is_rendering_map){scene_map.beginRender(a.engine),scene_map.renderBackground(a.engine);for(let n=0;n<scene_map.layeredObject.length;++n){if(scene_map.renderLayeredObject(a.engine,n),scene_map.renderLayeredTile(a.engine,n),scene_map.applyCamera(a.engine),$gv.m_display_other_player)for(let i=0;i<t.length;++i)t[i]!=e&&t[i].$layer==n&&t[i].render(a.engine);scene_map.renderLife(a.engine,n),$gv.m_display_player&&e&&(null!=e.$layer&&e.$layer!=n||!e.renderer||e.render(a.engine)),$gv.SceneObjectMgr.RenderLayer(a.engine,n),p.a.renderLayer(a.engine,n)}scene_map.applyCamera(a.engine);for(let e=scene_map.layeredObject.length;e<12;++e)$gv.SceneObjectMgr.RenderLayer(a.engine,e),p.a.renderLayer(a.engine,e);scene_map.endRender(a.engine)}else{for(let e=0;e<p.a.layers.length;++e)p.a.renderLayer(a.engine,e);if($gv.m_display_other_player||$gv.m_display_player){scene_map.applyCamera(a.engine);for(let n=0;n<t.length;++n)t[n]!=e&&$gv.m_display_other_player&&t[n].render(a.engine);$gv.m_display_player&&e&&e.render(a.engine),m.a.Render(a.engine)}}h.a.render(a.engine);for(let e=0;e<t.length;++e)t[e]._$drawName(a.engine);for(let e=0;e<t.length;++e)t[e]._$drawChatBalloon(a.engine);if($gv.m_is_rendering_map&&(scene_map.beginRender(a.engine),scene_map.applyCamera(a.engine),scene_map.renderPortal(a.engine),scene_map.renderFrontground(a.engine),scene_map.endRender(a.engine),scene_map.renderParticle(a.engine),scene_map.applyCamera(a.engine),m.a.Render(a.engine),a.engine.loadIdentity()),scene_map.applyCamera(a.engine),$gv.m_display_debug_info){const e=a.engine.ctx;e.beginPath(),e.fillStyle="white",e.fillRect(0,0,96,50),e.fillStyle="black",e.fillText("map origin",5,14,96),e.fillText("view-x: "+$gv.m_viewRect.x.toFixed(0),5,30,96),e.fillText("view-y: "+$gv.m_viewRect.y.toFixed(0),5,46,96)}scene_map.controller.render(a.engine),a.engine.loadIdentity(),$gv.m_display_debug_info&&this._render_debug_info(),a.engine.endScene()}_render_map_loading(){const e=a.engine.ctx,t=.5*a.engine.screen_size.x,n=.5*a.engine.screen_size.y;e.font="2em 微軟正黑體",e.textAlign="center",e.textBaseline="center",e.fillStyle="white",e.fillText("loading...",t,n),e.strokeStyle="black",e.fillText("loading...",t,n)}_render_debug_info(){if(!scene_map.controller||!scene_map.controller.player)return;const e=a.engine.ctx,t=e.textAlign,n=e.textBaseline,i=e.lineWidth;e.textBaseline="top",e.lineWidth=2.5,e.strokeStyle="#000";let r=400,s=5;for(let t of window._SCREEN_PRINTLN){const n=t.getValue(),i=t.getText();if(e.fillStyle="#FFF",e.textAlign="right",e.strokeText(i,398,s),e.fillText(i,398,s),e.textAlign="center",e.strokeText(":",r,s),e.fillText(":",r,s),e.textAlign="left",e.strokeText(n,402,s),e.fillText(n,402,s),"_val"in t){let a;t._val!=n?(a=t._val,t.__val=t._val,t._val=n):a=t.__val,a!=n&&(e.fillStyle="#0FF"),e.fillStyle="#FFF",e.textAlign="right",e.strokeText(i,598,s),e.fillText(i,598,s),e.textAlign="center",e.strokeText(":",600,s),e.fillText(":",600,s),e.textAlign="left",e.strokeText(a,602,s),e.fillText(a,602,s)}else t.__val=n,t._val=n;s+=16}e.textAlign=t,e.textBaseline=n,e.lineWidth=i}_loop(e){this.scene_map;let t=e-this.timer;this.timer=e,this._requestNextFrame(),this._calcFPS(t),this._updateScene(t),this._renderScene();for(let e in $gv.input_keyDown)$gv.input_keyDown[e]>0&&++$gv.input_keyDown[e];for(let e in $gv.input_keyUp)$gv.input_keyUp[e]=0}get chara(){return window.chara}get charaList(){return c.app.store.state.charaList}get m_is_run(){return window.m_is_run}set m_is_run(e){window.m_is_run=e}}}}]);
//# sourceMappingURL=19.js.map