(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{1806:function(e,t,a){Promise.resolve().then(a.bind(a,3767))},3767:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),s=a(2265),o=a(4086),i=a(1221),n=a(5925);function l(){let[e,t]=(0,s.useState)({blogPosts:0,projects:0}),[a,l]=(0,s.useState)(!0),[c,d]=(0,s.useState)(null);return((0,s.useEffect)(()=>{(async function(){try{d(null);let[e,a]=await Promise.all([(0,o.PL)((0,o.hJ)(i.db,"blogPosts")),(0,o.PL)((0,o.hJ)(i.db,"projects"))]);t({blogPosts:e.size,projects:a.size}),n.default.success("Dashboard data loaded successfully")}catch(e){d("Failed to load dashboard data. Please try again."),n.default.error("Failed to load dashboard data")}finally{l(!1)}})()},[]),a)?(0,r.jsx)("div",{className:"flex items-center justify-center h-[calc(100vh-4rem)]",children:(0,r.jsx)("div",{className:"w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"})}):c?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center h-[calc(100vh-4rem)]",children:[(0,r.jsx)("p",{className:"text-red-500 mb-4",children:c}),(0,r.jsx)("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors",children:"Retry"})]}):(0,r.jsxs)("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-8",children:"Dashboard Overview"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{className:"bg-secondary/20 p-6 rounded-lg",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Blog Posts"}),(0,r.jsx)("p",{className:"text-4xl font-bold text-accent",children:e.blogPosts}),(0,r.jsx)("p",{className:"text-gray-400 mt-2",children:"Total published posts"})]}),(0,r.jsxs)("div",{className:"bg-secondary/20 p-6 rounded-lg",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Projects"}),(0,r.jsx)("p",{className:"text-4xl font-bold text-accent",children:e.projects}),(0,r.jsx)("p",{className:"text-gray-400 mt-2",children:"Total projects"})]})]}),(0,r.jsxs)("div",{className:"mt-8",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Quick Actions"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)("a",{href:"/admin/blog/new",className:"px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors",children:"Create New Blog Post"}),(0,r.jsx)("a",{href:"/admin/projects/new",className:"px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors",children:"Add New Project"})]})]})]})}},1221:function(e,t,a){"use strict";a.d(t,{db:function(){return l},tO:function(){return c}});var r=a(994),s=a(4086),o=a(9584),i=a(3085);let n=(0,r.ZF)({apiKey:"AIzaSyDBYalhq1w5VVxufTICoqnVlkUuJO17FyU",authDomain:"synapse-labs-ddf8b.firebaseapp.com",projectId:"synapse-labs-ddf8b",storageBucket:"synapse-labs-ddf8b.firebasestorage.app",messagingSenderId:"743584329180",appId:"1:743584329180:web:aae99ced682a986c857319"}),l=(0,s.ad)(n),c=(0,o.cF)(n);(0,i.v0)(n)},5925:function(e,t,a){"use strict";let r,s;a.r(t),a.d(t,{CheckmarkIcon:function(){return Q},ErrorIcon:function(){return J},LoaderIcon:function(){return Y},ToastBar:function(){return en},ToastIcon:function(){return et},Toaster:function(){return eu},default:function(){return ep},resolveValue:function(){return E},toast:function(){return L},useToaster:function(){return H},useToasterStore:function(){return S}});var o,i=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},h=(e,t,a,r,s)=>{var o;let i=m(e),n=f[i]||(f[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!f[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[n]=p(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&f.g?f.g:null;return a&&(f.g=f[n]),o=f[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),n},b=(e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?b(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let y,x,v,w=g.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(l),n.className=g.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),y(c,n)}return t?t(s):s}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,k=(r=0,()=>(++r).toString()),P=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},$=new Map,O=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),D({type:4,toastId:e})},1e3);$.set(e,t)},C=e=>{let t=$.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?I(e,{type:1,toast:a}):I(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?O(r):e.toasts.forEach(e=>{O(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},T=[],z={toasts:[],pausedAt:void 0},D=e=>{z=I(z,e),T.forEach(e=>{e(z)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,a]=(0,i.useState)(z);(0,i.useEffect)(()=>(T.push(a),()=>{let e=T.indexOf(a);e>-1&&T.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},F=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),_=e=>(t,a)=>{let r=F(t,e,a);return D({type:2,toast:r}),r.id},L=(e,t)=>_("blank")(e,t);L.error=_("error"),L.success=_("success"),L.loading=_("loading"),L.custom=_("custom"),L.dismiss=e=>{D({type:3,toastId:e})},L.remove=e=>D({type:4,toastId:e}),L.promise=(e,t,a)=>{let r=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(L.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{L.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var B=(e,t)=>{D({type:1,toast:{id:e,height:t}})},M=()=>{D({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:a}=S(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&D({type:6,time:Date.now()})},[a]),s=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:B,startPause:M,endPause:r,calculateOffset:s}}},U=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,V=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Y=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,Z=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Q=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,G=j("div")`
  position: absolute;
`,W=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(ee,null,t):t:"blank"===a?null:i.createElement(W,null,i.createElement(Y,{...r}),"loading"!==a&&i.createElement(G,null,"error"===a?i.createElement(J,{...r}):i.createElement(Q,{...r})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,es=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eo=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=P()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(a),er(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=i.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(et,{toast:e}),n=i.createElement(eo,{...e.ariaProps},E(e.message,e));return i.createElement(es,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,y=o,x=void 0,v=void 0;var el=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:a},s)},ec=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},ed=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:c}=H(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let o=a.position||t,n=ec(o,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(el,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ed:"",style:n},"custom"===a.type?E(a.message,a):s?s(a):i.createElement(en,{toast:a,position:o}))}))},ep=L}},function(e){e.O(0,[358,315,271,971,938,744],function(){return e(e.s=1806)}),_N_E=e.O()}]);