var je=Object.defineProperty;var ve=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var re=(e,t,s)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,le=(e,t)=>{for(var s in t||(t={}))ze.call(t,s)&&re(e,s,t[s]);if(ve)for(var s of ve(t))Ve.call(t,s)&&re(e,s,t[s]);return e};var A=(e,t,s)=>(re(e,typeof t!="symbol"?t+"":t,s),s);import{o as p,c as g,d as k,r as ee,a as o,b as S,w as L,F as B,p as R,e as U,f as j,g as ge,u as M,h,m as Xe,i as m,j as z,n as he,k as ye,t as b,l as r,q as V,s as K,v as $e,L as Ye,x as be,B as Se,y as Te,z as xe,A as Pe,C as N,D as X,E as G,G as F,T as ce,H as We,I as Ie,J as Ce,K as Ke,M as ke,N as ae,O as Ge,P as Je,Q as Qe,R as Le,S as Ze,U as Me}from"./vendor.044b2c71.js";const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}};et();var I=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s};const tt={},st={class:"mdui-drawer",id:"left-drawer"};function nt(e,t){return p(),g("div",st)}var ot=I(tt,[["render",nt]]);const ue=e=>(R("data-v-202020b9"),e=e(),U(),e),it={class:"mdui-toolbar"},rt=ue(()=>o("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[o("i",{class:"mdui-icon material-icons","mdui-drawer":"{target: '#left-drawer'}"},"menu")],-1)),lt=ue(()=>o("div",{class:"mdui-toolbar-spacer"},null,-1)),ct={class:"tab-title"},at=j("\u6211\u7684"),ut=j("\u53D1\u73B0"),dt=j("\u4E91\u6751"),_t=j("\u89C6\u9891"),pt=ue(()=>o("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[o("i",{class:"mdui-icon material-icons"},"search")],-1)),mt=k({setup(e){return(t,s)=>{const n=ee("router-link");return p(),g(B,null,[o("div",it,[rt,lt,o("div",ct,[S(n,{to:"/mine",class:"tab-title-content tab-title-mine mdui-ripple mdui-img-circle"},{default:L(()=>[at]),_:1}),S(n,{to:"/recommend",class:"tab-title-content tab-title-explore mdui-ripple mdui-img-circle"},{default:L(()=>[ut]),_:1}),S(n,{to:"/homevillage",class:"tab-title-content tab-title-village mdui-ripple mdui-img-circle"},{default:L(()=>[dt]),_:1}),S(n,{to:"/homevideo",class:"tab-title-content tab-title-video mdui-ripple mdui-img-circle"},{default:L(()=>[_t]),_:1})]),pt]),S(ot)],64)}}});var ft=I(mt,[["__scopeId","data-v-202020b9"]]);function we(e,t,s){const n=e.length;return s||(s=""),!s&&n>t&&(s="..."),e.slice(0,t)+s}function de(e){const t=[];for(let s of e)t.push(s.name);return t.join("/")}function vt(e){console.warn(e)}function Ee(e){let t=Math.floor(e/3600).toString(),s=Math.floor(e/60%60).toString(),n=Math.floor(e%60).toString();return`${parseInt(t)>0?t.padStart(2,"0")+":":""}${s.padStart(2,"0")}:${n.padStart(2,"0")}`}const gt={baseURL:"https://netease-cloud-music-api-five-ivory.vercel.app/"},te=ge.create({baseURL:gt.baseURL});function ht(e,t){return te.get(e,t)}function yt(e){te.interceptors.response.use(t=>{let s=t.data;return typeof e=="string"&&(e=[e]),typeof s=="undefined"||e.forEach(n=>{if(typeof s[n]=="undefined")return s;s=s[n]}),s})}function H(e,t,s){const n=te.interceptors.response.handlers;for(const i in n)te.interceptors.response.eject(parseInt(i));return s&&yt(s),ht(e,t)}const $t=999e3;function bt(e){return H("/playlist/detail",{params:{id:e}},"playlist")}async function St(e){const t="/playlist/track/all";return await setTimeout(()=>{}),H(t,{params:{id:e}},"songs")}function Tt(e){return H("/song/url",{params:{id:e,br:$t}},["data"])}function xt(e){const t=e.id,s="/lyric/";return e.lyric?Promise.resolve(e.lyric):H(s,{params:{id:t}},["lrc"])}function Pt(e,t){return H("/comment/music/",{params:{id:e,offset:t}},"data")}function It(e){return H("/song/detail/",{params:{ids:e}},"data")}const Y=Xe();function Ct(e){const t=M(),s=h(()=>t.state.playing),n=h(()=>t.state.duration);let i;function l(){Y.emit("onProgressStart",null)}function c(_){i=_,Y.emit("onProgressMove",_)}function a(){i>=0&&(s.value?e(i):t.commit("setCurrentTime",i)),Y.emit("onProgressEnd",null)}function u(_){const d=n.value*_/100;e(d)}return{onProgressStart:l,onProgressMove:c,onProgressEnd:a,onTeleportBar:u}}var E;(function(e){e.sequence="icon-icon_loop",e.random="icon-loop",e.loop="icon-LOOP_ONCE"})(E||(E={}));function kt(){const e=M(),t=h(()=>e.state.playMode),s=m({});let n;const i=h(()=>{let c;return t.value===E.sequence?c="\u5217\u8868\u5FAA\u73AF":t.value===E.random?c="\u968F\u673A\u64AD\u653E":c="\u5355\u66F2\u5FAA\u73AF",c});z(t,async c=>{clearTimeout(n);let a=-20,u=0;_(),a=-40,u=1,n=setTimeout(()=>{_()},100),n=setTimeout(()=>{a=-20,u=0,_()},3e3);function _(){s.value={marginTop:`${a}px`,opacity:u}}});function l(){e.dispatch("togglePlayMode")}return{playMode:t,modeTipsText:i,modeTipsStyle:s,toggleMode:l}}var Z;(function(e){e.pause="icon-pause",e.play="icon-play"})(Z||(Z={}));function Lt(){const e=m(),t=m(!1);let s=m(Z.pause);const n=M(),i=h(()=>n.state.playing),l=h(()=>n.state.playlist),c=h(()=>n.state.playMode),a=h(()=>n.getters.currentSong),u=h(()=>n.state.currentIndex),_=h(()=>n.state.currentTime),d=h(()=>n.state.onProgress);z(a,async $=>{!$||(await he(),Tt($.id).then(w=>{Array.isArray(w)&&(e.value.src=w[0].url,t.value=!1)}))}),z(i,$=>{$?(s.value=Z.pause,q(_.value)):s.value=Z.play}),z(_,$=>{$>=e.value.duration&&!d.value&&(c.value===E.loop?O():v())});function f(){const $=l.value.length;let w=u.value-1;$===0||!$||($===1&&O(),w===-1&&(w=$-1),n.commit("setCurrentIndex",w),n.dispatch("resetTime"))}function v(){const $=l.value.length;let w=u.value+1;$===0||!$||($===1&&O(),w===$-1&&(w=0),n.commit("setCurrentIndex",w),n.dispatch("resetTime"))}function C(){i.value?x():y()}function x(){n.commit("setPlaying",!1),e.value.pause()}function y(){n.commit("setPlaying",!0),e.value.play()}function O(){e.value.currentTime=0,n.commit("setCurrentTime",0),y()}function Q(){t.value||(y(),t.value=!0,n.dispatch("resetTime"),n.commit("setDuration",e.value.duration))}function D(){t.value=!0,n.dispatch("resetTime")}function W(){const $=e.value.currentTime;if(!$){vt("\u83B7\u53D6\u6B4C\u66F2\u65F6\u95F4\u5931\u8D25");return}d.value||(Y.emit("onTimeUpdated",$),n.commit("setCurrentTime",$))}function q($){e.value.currentTime=$}return{audioRef:e,playIcon:s,next:v,prev:f,togglePlay:C,pause:x,play:y,canplay:Q,error:D,dispatchCurrentTime:W,setCurrentTime:q}}function Mt(e){const{x:t}=ye(),s=M(),n=m(),i=h(()=>s.state.currentTime),l=h(()=>s.state.duration),c=h(()=>({currentTime:Ee(i.value),duration:Ee(l.value)}));let a=m(0);const u=m("scale(1)"),_=h(()=>({width:`${a.value}%`})),d=h(()=>({transform:u.value,left:`${a.value}%`})),f=m(!1);Y.on("onTimeUpdated",D=>{f.value||(a.value=Math.floor(D/l.value*100))});let v=window.innerWidth*.7,C=window.innerWidth*.15+3;function x(D){f.value=!0,s.commit("setOnProgress",!0),u.value="scale(1.5)",e("onProgressStart")}function y(){const D=Math.min(Math.max(t.value-C,0)/v*100,100);a.value=D,s.commit("setCurrentTime",D*l.value/100),e("onProgressMove",i.value)}function O(){e("onProgressEnd"),f.value=!1,u.value="scale(1)",s.commit("setOnProgress",!1)}function Q(D){const{layerX:W}=D,q=W/v*100;a.value=q,e("onTeleportBar",q)}return{rootRef:n,offsetStyle:_,offsetBtnStyle:d,serializedTime:c,onTouchStart:x,onTouchMove:y,onTouchEnd:O,teleportProgressBar:Q}}const wt=e=>(R("data-v-e7da2c38"),e=e(),U(),e),Et={class:"progress-container"},Dt={class:"time currentTime"},Ft=wt(()=>o("div",{class:"progress-bar"},null,-1)),Bt={class:"time duration"},Ot=k({emits:["onProgressStart","onProgressMove","onProgressEnd","onTeleportBar"],setup(e,{emit:t}){const{rootRef:s,offsetStyle:n,offsetBtnStyle:i,serializedTime:l,onTouchStart:c,onTouchMove:a,onTouchEnd:u,teleportProgressBar:_}=Mt(t);return(d,f)=>(p(),g("div",Et,[o("p",Dt,b(r(l).currentTime),1),o("div",{class:"progress",onClick:f[3]||(f[3]=(...v)=>r(_)&&r(_)(...v))},[Ft,o("div",{class:"progress-bar-left",style:V(r(n))},null,4),o("div",{class:"progress-bar-left-btn",style:V(r(i)),onTouchstart:f[0]||(f[0]=K((...v)=>r(c)&&r(c)(...v),["prevent"])),onTouchmove:f[1]||(f[1]=K((...v)=>r(a)&&r(a)(...v),["prevent"])),onTouchend:f[2]||(f[2]=K((...v)=>r(u)&&r(u)(...v),["prevent"]))},null,36)]),o("p",Bt,b(r(l).duration),1)]))}});var At=I(Ot,[["__scopeId","data-v-e7da2c38"]]);const De="__MUSIC__FAVORITE__";function Fe(){return $e.get(De,[])}function Rt(e){$e.set(De,e)}function Ut(e,t){let s=!1;return(t||Fe()).forEach(i=>{i.id===e.id&&(s=!0)}),s}var se;(function(e){e.favorite="icon-love1 mdui-text-color-red",e.noFavorite="icon-Love"})(se||(se={}));function Nt(){const e=M(),t=h(()=>e.state.favoriteList),s=h(()=>e.getters.currentSong),n=h(()=>{let l=se.noFavorite;return Ut(s.value,t.value)&&(l=se.favorite),l});function i(){e.dispatch("addFavorite")}return{favoriteIcon:n,toggleFavorite:i}}function Ht(){const e=M(),t=h(()=>e.state.fullScreen),s=h(()=>e.getters.currentSong);function n(){e.commit("setFullScreen",!1)}return{fullScreen:t,currentSong:s,handlerHiddenPlayer:n}}function qt(){const e=M(),t=h(()=>e.state.playing),s=m();return z(t,n=>{setTimeout(n?()=>{s.value.style.animationPlayState="running"}:()=>{s.value.style.animationPlayState="paused"},200)}),{cdRef:s}}function jt(){const e=M(),t=h(()=>e.getters.currentSong),s=h(()=>e.state.playing),n=h(()=>e.state.fullScreen),i=m(),l=m(0);z(t,async d=>{i.value&&i.value.restore();const f=await xt(d);i.value=new Ye(f.lyric,c),t.value.lyric||e.commit("addLyric",f),Y.on("onTimeUpdated",v=>{i.value.seek(v*1e3),a()}),Y.on("onProgressMove",v=>{i.value.seek(v*1e3),a()}),u()},{immediate:!0}),z(s,d=>{_(),d?u():_()},{immediate:!0});function c(d){a()}function a(){if(!n.value)return;const d=i.value.curLine,f=document.querySelector("#lyricScrollRef"),v=f.children[0].children;d>10&&!f.scroll.isScrolling?f.scroll.scrollToElement(v[d-5],1e3):d<=7&&!f.scroll.isScrolling&&f.scroll.scrollToElement(v[0],1e3)}function u(){const d=i.value;d&&d.play()}function _(){const d=i.value;d&&d.stop()}return{currentLyric:i,currentLineNum:l}}function zt(e,t,s){const n=m(null);let i;be(()=>{i=n.value=new Se(e.value,le({observeDOM:!0},t)),t.probeType&&t.probeType>0&&i.on("scroll",l=>{s("scroll",l)}),e.value.scroll=i,i.on("scrollStart",()=>{e.value.scroll.isScrolling=!0}),i.on("scrollEnd",()=>{e.value.scroll.isScrolling=!1})}),Te(()=>{i.destroy()})}const ne=k({props:{options:{default:()=>({scrollX:!1,scrollY:!0,momentum:!0,bounce:!0})},optionStyle:null},emits:["scroll"],setup(e,{emit:t}){const s=e,n=m(null),i=h(()=>{var c;return s.optionStyle?s.optionStyle:{height:`${window.innerHeight-((c=n==null?void 0:n.value)==null?void 0:c.offsetTop)}px`}});return zt(n,s.options,t),(l,c)=>(p(),g("div",{class:"scroll-wrapper",ref_key:"scrollRef",ref:n,style:V(r(i))},[xe(l.$slots,"default")],4))}}),Be=56;var Oe;(function(e){e[e.cd=0]="cd",e[e.lyric=1]="lyric"})(Oe||(Oe={}));function Vt(){const{x:e}=ye(),t=m(0);let s=0;const n=m(null),i=m(null);let l=0,c=0;function a(d){l=d.touches[0].pageX}function u(){let d=(e.value-l)/window.innerWidth;d<0?c=1+Math.min(Math.min(d,0),1):c=Math.min(Math.max(d,0),1),t.value===0&&d<0&&(c<.8&&(s=1),n.value={opacity:c},i.value={transform:`translateX(${c*100}%)`}),t.value===1&&d>0&&(c>.2&&(s=0),n.value={opacity:c},i.value={transform:`translateX(${c*100}%)`})}function _(){s===0?(t.value=0,n.value={opacity:1},i.value={transform:"translateX(100%)",transitionDuration:".3s"}):(t.value=1,n.value={opacity:0},i.value={transform:"translateX(0%)",transitionDuration:".3s"})}return{onTouchStart:a,onTouchMove:u,onTouchEnd:_,lyricStyle:i,cdStyle:n}}const Xt=["src"],Yt={class:"lyric-txt"},Wt=k({setup(e){const t=M(),s=h(()=>t.getters.currentSong),{cdRef:n}=qt(),{currentLyric:i,currentLineNum:l}=jt(),{onTouchStart:c,onTouchMove:a,onTouchEnd:u,lyricStyle:_,cdStyle:d}=Vt(),f=Pe({scrollX:!1,scrollY:!0,probeType:3}),v=h(()=>({height:`${window.innerHeight-Be-window.innerHeight*.22-75}px`}));return(C,x)=>(p(),g("div",{class:"middle",onTouchstart:x[0]||(x[0]=K((...y)=>r(c)&&r(c)(...y),["prevent"])),onTouchmove:x[1]||(x[1]=K((...y)=>r(a)&&r(a)(...y),["prevent"])),onTouchend:x[2]||(x[2]=K((...y)=>r(u)&&r(u)(...y),["prevent"]))},[o("div",{class:"cd",style:V(r(d))},[o("img",{class:"cycle",src:`${r(s).imgUrl}?param=500y500`,ref_key:"cdRef",ref:n},null,8,Xt)],4),o("div",{class:"lyric",style:V(r(_))},[r(i)?(p(),N(ne,{key:0,options:r(f),optionStyle:r(v),id:"lyricScrollRef"},{default:L(()=>[o("ul",Yt,[(p(!0),g(B,null,X(r(i).lines,(y,O)=>(p(),g("li",{class:G(["lyric-line",{"lyric-active":r(i).curLine-1===O}]),key:y},b(y.txt),3))),128))])]),_:1},8,["options","optionStyle"])):F("",!0)],4)],32))}});var Kt=I(Wt,[["__scopeId","data-v-34977590"]]);function Gt(e){function t(){const s=e.value.src||"/";window.location.href=s}return{download:t}}const J=e=>(R("data-v-24be878a"),e=e(),U(),e),Jt={class:"player"},Qt={key:0,class:"normal-player"},Zt={class:"background"},es=["src"],ts={class:"player-content"},ss={class:"mdui-toolbar"},ns=J(()=>o("i",{class:"mdui-icon material-icons iconfont icon-bottom"},null,-1)),os=[ns],is={class:"mdui-toolbar-spacer"},rs={class:"music-info"},ls={class:"music-name"},cs={class:"music-author"},as=J(()=>o("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[o("i",{class:"mdui-icon material-icons iconfont icon-share"})],-1)),us={class:"player-bottom"},ds={class:"player-bottom-icons-top"},_s=J(()=>o("i",{class:"iconfont icon-sing"},null,-1)),ps=J(()=>o("i",{class:"iconfont icon-xiaoxi"},null,-1)),ms=J(()=>o("i",{class:"iconfont icon-Moreoptionshorizon"},null,-1)),fs={class:"player-bottom-icons-bottom"},vs=J(()=>o("i",{class:"iconfont icon-bofangliebiao"},null,-1)),gs=k({setup(e){const{fullScreen:t,handlerHiddenPlayer:s,currentSong:n}=Ht(),{audioRef:i,error:l,playIcon:c,canplay:a,next:u,prev:_,togglePlay:d,pause:f,play:v,dispatchCurrentTime:C,setCurrentTime:x}=Lt(),{onProgressStart:y,onProgressMove:O,onProgressEnd:Q,onTeleportBar:D}=Ct(x),{toggleFavorite:W,favoriteIcon:q}=Nt(),{download:$}=Gt(i),{playMode:w,modeTipsText:Ne,toggleMode:fe,modeTipsStyle:He}=kt();return(ni,T)=>{const qe=ee("router-link");return p(),g("div",Jt,[S(ce,{name:"fade"},{default:L(()=>[r(t)?(p(),g("div",Qt,[o("div",Zt,[o("img",{class:"background-img",src:`${r(n).imgUrl}?param=300y300`},null,8,es)]),o("div",ts,[o("div",ss,[o("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon",onClick:T[0]||(T[0]=(...P)=>r(s)&&r(s)(...P))},os),o("div",is,[o("div",rs,[o("p",ls,b(r(n).name),1),o("p",cs,b(r(de)(r(n).artists)),1)])]),as]),S(Kt),o("div",us,[o("div",ds,[o("i",{class:G(["iconfont",r(q)]),onClick:T[1]||(T[1]=(...P)=>r(W)&&r(W)(...P))},null,2),o("i",{class:"iconfont icon-download",onClick:T[2]||(T[2]=(...P)=>r($)&&r($)(...P))}),_s,S(qe,{to:`/comment/${r(n).id}`},{default:L(()=>[ps]),_:1},8,["to"]),ms]),o("div",{class:"mode-tips",style:V(r(He))},b(r(Ne)),5),S(At,{onOnProgressStart:r(y),onOnProgressMove:r(O),onOnProgressEnd:r(Q),onOnTeleportBar:r(D)},null,8,["onOnProgressStart","onOnProgressMove","onOnProgressEnd","onOnTeleportBar"]),o("div",fs,[o("i",{class:G(["iconfont",r(w)]),onClick:T[3]||(T[3]=(...P)=>r(fe)&&r(fe)(...P))},null,2),o("i",{class:"iconfont icon-24gl-previous",onClick:T[4]||(T[4]=(...P)=>r(_)&&r(_)(...P))}),o("i",{class:G(["iconfont play-icon",r(c)]),onClick:T[5]||(T[5]=(...P)=>r(d)&&r(d)(...P))},null,2),o("i",{class:"iconfont icon-24gl-next",onClick:T[6]||(T[6]=(...P)=>r(u)&&r(u)(...P))}),vs])])])])):F("",!0)]),_:1}),o("audio",{ref_key:"audioRef",ref:i,onCanplay:T[7]||(T[7]=(...P)=>r(a)&&r(a)(...P)),onError:T[8]||(T[8]=(...P)=>r(l)&&r(l)(...P)),onTimeupdate:T[9]||(T[9]=(...P)=>r(C)&&r(C)(...P))},null,544)])}}});var hs=I(gs,[["__scopeId","data-v-24be878a"]]);const ys=k({setup(e){return(t,s)=>{const n=ee("router-view");return p(),g(B,null,[S(ft,{class:"Tab"}),S(n),S(n,{name:"transformInOut"},{default:L(({Component:i})=>[S(ce,{name:"transform"},{default:L(()=>[(p(),N(We(i)))]),_:2},1024)]),_:1}),S(hs)],64)}}}),$s={};function bs(e,t){return null}var Ss=I($s,[["render",bs]]);const Ts={};function xs(e,t){return null}var Ps=I(Ts,[["render",xs]]);const Is={};function Cs(e,t){return null}var ks=I(Is,[["render",Cs]]);function Ls(){return H("/banner",{},"banners")}function Ms(){return H("/personalized/",{params:{limit:6}},"result")}function ws(e,t){const s=m(null);let n;return be(()=>{n=s.value=new Se(e.value,le({scrollX:!0,scrollY:!1,click:!0},t))}),Te(()=>{n.destroy()}),{slider:s}}const Es={class:"slider"},Ds={class:"slider-content"},Fs=k({props:{options:null},setup(e){const t=e,s=m(null);return ws(s,t.options),(n,i)=>(p(),g("div",Es,[o("div",{class:"slider-wrapper",ref_key:"scrollRef",ref:s},[o("div",Ds,[xe(n.$slots,"default",{},void 0,!0)])],512)]))}});var _e=I(Fs,[["__scopeId","data-v-5bbde5e3"]]);const Bs={class:"banner"},Os=["href"],As=["src"],Rs=k({setup(e){const t=m({slide:!0,momentum:!0}),s=m({});return Ls().then(n=>{s.value=n}),(n,i)=>{var c;const l=Ie("loading");return Ce((p(),g("div",Bs,[s.value&&((c=s.value)==null?void 0:c.length)?(p(),N(_e,{key:0,class:"slider mdui-ripple",options:t.value},{default:L(()=>[(p(!0),g(B,null,X(s.value,a=>(p(),g("div",{class:"banner-item",key:a},[o("a",{href:a==null?void 0:a.url},[o("img",{src:a.imageUrl},null,8,As)],8,Os)]))),128))]),_:1},8,["options"])):F("",!0)])),[[l,!s.value.length]])}}});var Us=I(Rs,[["__scopeId","data-v-1740fe71"]]);const Ns=[{name:"\u6BCF\u65E5\u63A8\u8350",code:"icon-"+Hs(new Date().getDate()-1)},{name:"\u6B4C\u5355",code:"icon-musiclist"},{name:"\u6392\u884C\u699C",code:"icon-paihangbang"},{name:"\u76F4\u64AD",code:"icon-zhibo"},{name:"\u6570\u5B57\u4E13\u8F91",code:"icon-zhuanji"},{name:"\u97F3\u4E50\u7535\u53F0",code:"icon-diantai"},{name:"\u6E38\u620F\u4E13\u533A",code:"icon-game"}];function Hs(e){const t=[],s="rl";for(let n=0;n<31;n++){let i=s+n;t.push(i)}return t[e]}const qs={class:"slider-banner"},js={class:"icon-container mdui-ripple border-cycle mdui-color-red cycle"},zs={class:"icons-title"},Vs=k({setup(e){const t=m(Ns),s=m({});return(n,i)=>(p(),g("div",qs,[t.value.length?(p(),N(_e,{key:0,class:"slider",options:s.value},{default:L(()=>[(p(!0),g(B,null,X(t.value,l=>(p(),g("div",{class:"scroll-item",key:l},[o("div",js,[o("i",{class:G(["iconfont",l.code])},null,2)]),o("p",zs,b(l.name),1)]))),128))]),_:1},8,["options"])):F("",!0)]))}});var Xs=I(Vs,[["__scopeId","data-v-4e61d001"]]);const Ys={class:"list-slider-head"},Ws={class:"mdui-ripple btn"},Ks=k({props:{options:null},setup(e){return(t,s)=>(p(),g("div",Ys,[o("h2",null,b(e.options.leftName),1),o("div",Ws,b(e.options.rightName),1)]))}});var Gs=I(Ks,[["__scopeId","data-v-c69040f0"]]);const Js={class:"list-slider"},Qs={class:"list-slider-content"},Zs={class:"img-container"},en=["src"],tn={class:"name"},sn=k({setup(e){const t=m(null),s=m({scrollX:!0}),n=m({leftName:"\u63A8\u8350\u6B4C\u5355",rightName:"\u67E5\u770B\u66F4\u591A"});return Ms().then(i=>{t.value=i}),(i,l)=>{var a;const c=ee("router-link");return p(),g("div",Js,[S(Gs,{options:n.value},null,8,["options"]),o("div",Qs,[((a=t.value)==null?void 0:a.length)?(p(),N(_e,{key:0,options:s.value},{default:L(()=>[(p(!0),g(B,null,X(t.value,u=>(p(),g("div",{class:"list-slider-item",key:u.picUrl},[S(c,{to:`/musiclist/${u.id}`},{default:L(()=>[o("div",Zs,[o("img",{src:`${u.picUrl}?param=300y300`},null,8,en)]),o("div",tn,b(r(we)(u.name,12,"...")),1)]),_:2},1032,["to"])]))),128))]),_:1},8,["options"])):F("",!0)])])}}});var nn=I(sn,[["__scopeId","data-v-4afbb1e7"]]);const on={class:"recommend"},rn=k({setup(e){const t=m({click:!0,scrollY:!0}),s=()=>({height:`${window.innerHeight-Be}px`});return(n,i)=>(p(),N(Ke,null,[S(ne,{options:t.value,optionStyle:s},{default:L(()=>[o("div",on,[S(Us),S(Xs),S(nn)])]),_:1},8,["options"])],1024))}});const ln=e=>(R("data-v-1eab67f6"),e=e(),U(),e),cn={class:"song-list mdui-list"},an={class:"song-play mdui-list-item mdui-ripple"},un=ln(()=>o("div",{class:"song-play-icon"},[o("i",{class:"iconfont icon-play"})],-1)),dn={class:"song-play-collect mdui-color-red mdui-ripple"},_n={class:"song-index"},pn=["onClick"],mn={class:"song-name"},fn={class:"song-artists"},vn=k({props:{songs:null},emits:["selectPlay"],setup(e,{emit:t}){const s=e,n=M(),i=h(()=>n.state.playlistDetail);function l(c){let a=Object.create(null);a.index=c,a.list=s.songs,t("selectPlay",a)}return(c,a)=>{var u;return p(),g("div",cn,[o("div",an,[un,o("div",{class:"song-play-content",onClick:a[0]||(a[0]=_=>l(0))},"\u64AD\u653E\u5168\u90E8"),o("div",dn," + \u6536\u85CF ("+b((u=r(i))==null?void 0:u.subscribedCount)+") ",1)]),(p(!0),g(B,null,X(e.songs,(_,d)=>(p(),g("div",{class:"song mdui-list-item mdui-ripple",key:_},[o("span",_n,b(d+1),1),o("ul",{class:"song-detail mdui-list",onClick:f=>l(d)},[o("li",mn,b(_.name),1),o("li",fn,b(r(de)(_.artists))+" - "+b(_.album.name),1)],8,pn)]))),128))])}}});var gn=I(vn,[["__scopeId","data-v-1eab67f6"]]);const pe=e=>(R("data-v-07793678"),e=e(),U(),e),hn={class:"list-description"},yn={class:"background"},$n=["src"],bn={class:"content"},Sn=pe(()=>o("i",{class:"mdui-icon material-icons iconfont icon-close"},null,-1)),Tn=[Sn],xn={class:"scroll-content"},Pn={class:"content-header"},In=["src"],Cn={class:"title"},kn=pe(()=>o("div",{class:"divider"},null,-1)),Ln={class:"content-info"},Mn={class:"tags-container"},wn=pe(()=>o("p",null,"\u6807\u7B7E\uFF1A",-1)),En={class:"tags"},Dn={class:"tag"},Fn={class:"content-desc"},Bn=["innerHTML"],On=k({emits:["descClose"],setup(e,{emit:t}){const s=Pe({scrollX:!1,scrollY:!0,bounce:{top:!1}}),n=h(()=>i.state.playlistDetail),i=M();function l(){t("descClose")}function c(a){return a.replaceAll(`
`,"<br />")}return(a,u)=>(p(),g("div",hn,[o("div",yn,[o("img",{src:`${r(n).coverImgUrl}?param=300y300`},null,8,$n)]),o("div",bn,[o("div",{class:"close mdui-img-circle mdui-ripple",onClick:l},Tn),S(ne,{options:r(s)},{default:L(()=>[o("div",xn,[o("div",Pn,[o("img",{src:`${r(n).coverImgUrl}?param=500y500`},null,8,In),o("p",Cn,b(r(n).name),1)]),kn,o("div",Ln,[o("div",Mn,[wn,o("ul",En,[(p(!0),g(B,null,X(r(n).tags,_=>(p(),g("li",Dn,b(_),1))),256))])]),o("div",Fn,[o("p",{class:"desc",innerHTML:c(r(n).description)},null,8,Bn)])])])]),_:1},8,["options"])])]))}});var An=I(On,[["__scopeId","data-v-07793678"]]);class Rn{constructor(t){A(this,"id");A(this,"name");A(this,"imgUrl");A(this,"artists");A(this,"album");this.album=Nn(t.al),this.id=t.id,this.name=t.name,this.artists=t.ar,this.imgUrl=this.album.imgUrl}}class Un{constructor(t){A(this,"id");A(this,"name");A(this,"imgUrl");this.id=t.id,this.name=t.name,this.imgUrl=t.picUrl}}function Ae(e){return new Rn(e)}function Nn(e){return new Un(e)}const Hn=[{code:"icon-xiaoxi",content:""},{code:"icon-share",content:""},{code:"icon-download",content:"\u4E0B\u8F7D"},{code:"icon-select",content:"\u591A\u9009"}];function qn(){const e=M(),t=m(Hn),s=m(t.value),n=m([]),i=h(()=>e.state.playlistDetail),l=m(Object.create(null)),c=ke(),a=ae();u();function u(){var v;const f=(v=c.params)==null?void 0:v.id;if(typeof f=="undefined"){_();return}d(f)}function _(){return a.back()}function d(f){St(f).then(v=>{Array.isArray(v)&&v.forEach(C=>{n.value.push(Ae(C))})}),bt(f).then(v=>{e.dispatch("setPlaylistDetail",v),l.value=i.value.creator;const C=i.value;s.value=s.value.map((x,y)=>(y===0&&(x.content=C.commentCount),y===1&&(x.content=C.shareCount),x))})}return{songs:n,playlist:i,creator:l,resolvedIcons:s}}const oe=e=>(R("data-v-74e1b726"),e=e(),U(),e),jn={class:"mdui-toolbar tab mdui-text-color-white"},zn=oe(()=>o("i",{class:"mdui-icon material-icons iconfont icon-i-back"},null,-1)),Vn=[zn],Xn=oe(()=>o("span",{class:"mdui-typo-title"},"\u6B4C\u5355",-1)),Yn=oe(()=>o("div",{class:"mdui-toolbar-spacer"},null,-1)),Wn=oe(()=>o("a",{class:"mdui-btn mdui-btn-icon"},[o("i",{class:"mdui-icon material-icons iconfont icon-search"})],-1)),Kn=k({setup(e){const t=ae();function s(){t.back()}return(n,i)=>(p(),g("div",jn,[o("a",{class:"mdui-btn mdui-btn-icon",onClick:s},Vn),Xn,Yn,Wn]))}});var Gn=I(Kn,[["__scopeId","data-v-74e1b726"]]);function Jn(e){const t=m("400px"),s=m(330);return{bgImageStyle:h(()=>{const l=s.value;let c=0;return l<=56?c=99:c=0,l<=56?t.value="56px":t.value="400px",{paddingBottom:t.value,backgroundImage:`url(${e.value.coverImgUrl}?param=170y170)`,"z-index":c,maxHeight:"56px"}}),onScroll:l=>{he(()=>{const c=-l.y,u=document.querySelector(".song-list-ref").offsetTop-c;s.value=u})}}}const me=e=>(R("data-v-4b56747d"),e=e(),U(),e),Qn={key:0,class:"music-list"},Zn={class:"header"},eo=me(()=>o("div",{class:"background-blur"},null,-1)),to={class:"header-content"},so={class:"header-content-left"},no=["src"],oo={class:"header-content-right"},io={class:"playlist-name"},ro={class:"playlist-creator"},lo=["src"],co={class:"playlist-creator-name"},ao=me(()=>o("i",{class:"iconfont icon-right"},null,-1)),uo=me(()=>o("i",{class:"iconfont icon-right"},null,-1)),_o={class:"header-bottom",ref:"scrollRef"},po={class:"header-bottom-icon"},mo=k({setup(e){ge.get("https://autumnfish.cn/playlist/track/all?id=6990881882&limit=10&offset=10").then(v=>{console.log(v)});const{songs:t,playlist:s,creator:n,resolvedIcons:i}=qn(),{onScroll:l,bgImageStyle:c}=Jn(s),a=m({scrollY:!0,click:!0,bounce:{top:!1},probeType:3}),u=h(()=>s.value&&t.value.length),_=M(),d=m(!1);function f(v){_.dispatch("selectPlay",v)}return(v,C)=>{const x=Ie("loading");return r(t).length?Ce((p(),g("div",Qn,[r(t).length?(p(),g(B,{key:0},[S(Gn),o("div",Zn,[o("div",{class:"background",style:V(r(c))},null,4),eo,o("div",to,[o("div",so,[o("img",{class:"playlist-avatar",src:`${r(s).coverImgUrl}?param=500y500`},null,8,no)]),o("div",oo,[o("div",io,b(r(s).name),1),o("div",ro,[o("img",{class:"playlist-creator-avatar cycle",src:`${r(n).avatarUrl}?param=100y100`},null,8,lo),o("div",co,[j(b(r(n).nickname)+" ",1),ao])]),o("div",{class:"playlist-description",onClick:C[0]||(C[0]=y=>d.value=!d.value)},[j(b(r(we)(r(s).description,20))+" ",1),uo])])]),o("div",_o,[(p(!0),g(B,null,X(r(i),y=>(p(),g("div",po,[o("i",{class:G(["iconfont",y.code])},null,2),o("p",null,b(y.content),1)]))),256))],512)]),r(t).length?(p(),N(ne,{key:0,options:a.value,onScroll:r(l)},{default:L(()=>[r(t).length?(p(),N(gn,{key:0,onSelectPlay:f,onPlayAll:f,songs:r(t),class:"song-list-ref"},null,8,["songs"])):F("",!0)]),_:1},8,["options","onScroll"])):F("",!0)],64)):F("",!0),S(ce,{name:"fade"},{default:L(()=>[d.value?(p(),N(An,{key:0,onDescClose:C[1]||(C[1]=y=>d.value=!d.value)})):F("",!0)]),_:1})])),[[x,!r(u)]]):F("",!0)}}});var fo=I(mo,[["__scopeId","data-v-4b56747d"]]);const ie=e=>(R("data-v-892adc68"),e=e(),U(),e),vo={key:0,class:"comment"},go={class:"header"},ho={class:"mdui-toolbar"},yo=ie(()=>o("i",{class:"mdui-icon material-icons iconfont icon-i-back"},null,-1)),$o=[yo],bo={class:"mdui-typo-title"},So=ie(()=>o("div",{class:"mdui-toolbar-spacer"},null,-1)),To=ie(()=>o("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[o("i",{class:"mdui-icon material-icons iconfont icon-share"})],-1)),xo={class:"song-info"},Po={class:"song-info-img"},Io=["src"],Co={class:"song-info-name"},ko={class:"song-info-ar"},Lo=ie(()=>o("div",{class:"divider"},null,-1)),Mo=k({setup(e){const t=ke(),s=ae(),n=m(),i=m(),l=m(0);Ge(async()=>{const u=await c(),_=await It(t.params.id);n.value=u,i.value=Ae(_.songs[0]),n.value=Array.prototype.concat(n.value.hotComments,n.value.comments),console.log(n.value)});async function c(){return await Pt(t.params.id,l.value)}function a(){s.back()}return(u,_)=>n.value?(p(),g("div",vo,[o("div",go,[o("div",ho,[o("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon",onClick:a},$o),o("span",bo,"\u8BC4\u8BBA("+b(n.value.total)+")",1),So,To]),o("div",xo,[o("div",Po,[o("img",{src:`${i.value.imgUrl}?param=50y50`},null,8,Io)]),o("p",Co,[j(b(i.value.name)+" ",1),o("span",ko," - "+b(r(de)(i.value.artists)),1)])])]),Lo])):F("",!0)}});var wo=I(Mo,[["__scopeId","data-v-892adc68"]]);const Eo=[{path:"/",redirect:"/recommend"},{path:"/mine",component:ks},{path:"/recommend",component:rn},{path:"/homevideo",component:Ss},{path:"/homevillage",component:Ps},{path:"/musiclist/:id",components:{transformInOut:fo}},{path:"/comment/:id",components:{transformInOut:wo},beforeEnter:(e,t)=>{const s=e.params.id;if(isNaN(Number(s)))return{path:t.fullPath}}}],Do=Je({history:Qe(),routes:Eo}),Fo={playlistDetail:{},playing:!1,playlist:[],favoriteList:Fe(),currentIndex:0,currentTime:0,duration:0,fullScreen:!1,playMode:E.sequence,sequenceList:[],onProgress:!1},Bo={setPlaylistDetail(e,t){e.playlistDetail=t},setPlaying(e,t){e.playing=t},setPlaylist(e,t){e.playlist=t},setSequenceList(e,t){e.sequenceList=t},setPlayMode(e,t){e.playMode=t},setFullScreen(e,t){e.fullScreen=t},setCurrentIndex(e,t){e.currentIndex=t},setCurrentTime(e,t){e.currentTime=t},setDuration(e,t){e.duration=t},setOnProgress(e,t){e.onProgress=t},setFavoriteList(e,t){e.favoriteList=t,Rt(t)},addLyric(e,t){e.sequenceList[e.currentIndex].lyric=t}};function Oo(e,t){const{commit:s}=e;s("setPlaylistDetail",t)}function Ao(e,t){const{commit:s,state:n}=e,{list:i,index:l}=t;let c=i,a=l;n.playMode===E.random&&(c.forEach((u,_)=>{i[l].id===n.playlist[_].id&&(a=_)}),c=n.playlist),s("setPlaying",!0),s("setPlaylist",c),s("setCurrentIndex",a),s("setFullScreen",!0),s("setPlayMode",n.playMode),s("setSequenceList",i),s("setCurrentTime",0)}function Ro(e,t){const{commit:s}=e;s("setDuration",0)}function Uo(e){const{commit:t,state:s,getters:n}=e,i=n.currentSong;let l=Le.exports.cloneDeep(s.favoriteList),c=-1;l.forEach((_,d)=>{_.id===i.id&&(c=d)}),c>-1?u():a(),t("setFavoriteList",l);function a(){l.push(i)}function u(){l=l.filter((_,d)=>d!==c)}}function No(e){const{commit:t,state:s,getters:n}=e;let i=s.playMode;if(i===E.sequence){i=E.random;let l=Le.exports.shuffle(s.sequenceList),c;l.forEach((a,u)=>{a.id===n.currentSong.id&&(c=u)}),t("setPlaylist",l),t("setCurrentIndex",c)}else i===E.random?i=E.loop:(s.sequenceList.forEach((l,c)=>{l.id===n.currentSong.id&&(t("setPlaylist",s.sequenceList),t("setCurrentIndex",c))}),i=E.sequence);t("setPlayMode",i)}var Ho=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",setPlaylistDetail:Oo,selectPlay:Ao,resetTime:Ro,addFavorite:Uo,togglePlayMode:No});const qo=e=>e.playlist[e.currentIndex]||[];var jo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",currentSong:qo});const zo=!1;var Vo=Ze({state:Fo,actions:Ho,mutations:Bo,getters:jo,strict:zo,plugins:[]});function Xo(e,t){e.classList.contains(t)||e.classList.add(t)}function Yo(e,t){e.classList.remove(t)}const Wo={},Ko=e=>(R("data-v-695b31e3"),e=e(),U(),e),Go={class:"loading"},Jo=Ko(()=>o("div",{class:"mdui-spinner mdui-spinner-colorful"},null,-1)),Qo=[Jo];function Zo(e,t){return p(),g("div",Go,Qo)}var ei=I(Wo,[["render",Zo],["__scopeId","data-v-695b31e3"]]);const Re="g-relative",ti={mounted(e,t){const n=Me(ei).mount(document.createElement("div"));e.instance=n,t.value&&Ue(e)},updated(e,t){t.value!==t.oldValue&&(t.value?Ue(e):si(e))}};function Ue(e){const t=getComputedStyle(e);["relative"].indexOf(t.position)===-1&&Xo(e,Re),e.appendChild(e.instance.$el)}function si(e){Yo(e,Re),e.removeChild(e.instance.$el)}Me(ys).use(Vo).use(Do).directive("loading",ti).mount("#app");
//# sourceMappingURL=index.911fee39.js.map
