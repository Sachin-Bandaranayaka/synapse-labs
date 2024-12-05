(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{4691:function(e,t,a){Promise.resolve().then(a.bind(a,1863))},1863:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),o=a(2265),s=a(7450),i=a(4033),n=a(5925);function l(){let[e,t]=(0,o.useState)(""),[a,l]=(0,o.useState)(""),[c,d]=(0,o.useState)(!1),{signIn:u}=(0,s.a)(),p=(0,i.useRouter)(),f=async t=>{t.preventDefault(),d(!0);try{await u(e,a),n.toast.success("Successfully logged in"),p.push("/admin/dashboard")}catch(e){n.toast.error("Invalid credentials")}finally{d(!1)}};return(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center px-4",children:(0,r.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{className:"mt-6 text-center text-3xl font-bold",children:"Sign in to Admin Dashboard"})}),(0,r.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:f,children:[(0,r.jsxs)("div",{className:"rounded-md shadow-sm space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),(0,r.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:e,onChange:e=>t(e.target.value),className:"appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-black/20 text-white rounded-lg focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm",placeholder:"Email address"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),(0,r.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:a,onChange:e=>l(e.target.value),className:"appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-black/20 text-white rounded-lg focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm",placeholder:"Password"})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"submit",disabled:c,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed",children:c?"Signing in...":"Sign in"})})]})]})})}},7450:function(e,t,a){"use strict";a.d(t,{a:function(){return s}}),a(7437);var r=a(2265);a(3085),a(4033),a(4086),a(1221);let o=(0,r.createContext)({}),s=()=>(0,r.useContext)(o)},1221:function(e,t,a){"use strict";a.d(t,{db:function(){return l},tO:function(){return c}});var r=a(994),o=a(4086),s=a(9584),i=a(3085);let n=(0,r.ZF)({apiKey:"AIzaSyDBYalhq1w5VVxufTICoqnVlkUuJO17FyU",authDomain:"synapse-labs-ddf8b.firebaseapp.com",projectId:"synapse-labs-ddf8b",storageBucket:"synapse-labs-ddf8b.firebasestorage.app",messagingSenderId:"743584329180",appId:"1:743584329180:web:aae99ced682a986c857319"}),l=(0,o.ad)(n),c=(0,s.cF)(n);(0,i.v0)(n)},4033:function(e,t,a){e.exports=a(5313)},5925:function(e,t,a){"use strict";let r,o;a.r(t),a.d(t,{CheckmarkIcon:function(){return G},ErrorIcon:function(){return R},LoaderIcon:function(){return Z},ToastBar:function(){return en},ToastIcon:function(){return et},Toaster:function(){return eu},default:function(){return ep},resolveValue:function(){return k},toast:function(){return M},useToaster:function(){return L},useToasterStore:function(){return P}});var s,i=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+i+";":r+="f"==s[1]?p(i,s):s+"{"+p(i,"k"==s[1]?"":t)+"}":"object"==typeof i?r+=p(i,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(s,i):s+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},g=(e,t,a,r,o)=>{var s;let i=m(e),n=f[i]||(f[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!f[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[n]=p(o?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&f.g?f.g:null;return a&&(f.g=f[n]),s=f[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=r?s+t.data:t.data+s),n},b=(e,t,a)=>e.reduce((e,r,o)=>{let s=t[o];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?b(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let y,x,v,w=h.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(l),n.className=h.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),y(c,n)}return t?t(o):o}}var E=e=>"function"==typeof e,k=(e,t)=>E(e)?e(t):e,N=(r=0,()=>(++r).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},$=new Map,I=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),T({type:4,toastId:e})},1e3);$.set(e,t)},O=e=>{let t=$.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?S(e,{type:1,toast:a}):S(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?I(r):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},z=[],D={toasts:[],pausedAt:void 0},T=e=>{D=S(D,e),z.forEach(e=>{e(D)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={})=>{let[t,a]=(0,i.useState)(D);(0,i.useEffect)(()=>(z.push(a),()=>{let e=z.indexOf(a);e>-1&&z.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},F=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||N()}),_=e=>(t,a)=>{let r=F(t,e,a);return T({type:2,toast:r}),r.id},M=(e,t)=>_("blank")(e,t);M.error=_("error"),M.success=_("success"),M.loading=_("loading"),M.custom=_("custom"),M.dismiss=e=>{T({type:3,toastId:e})},M.remove=e=>T({type:4,toastId:e}),M.promise=(e,t,a)=>{let r=M.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(M.success(k(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{M.error(k(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var q=(e,t)=>{T({type:1,toast:{id:e,height:t}})},H=()=>{T({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=P(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&T({type:6,time:Date.now()})},[a]),o=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:s}=a||{},i=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:q,startPause:H,endPause:r,calculateOffset:o}}},B=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
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
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Z=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y} 1s linear infinite;
`,J=w`
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
}`,G=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,Q=j("div")`
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
`,et=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(ee,null,t):t:"blank"===a?null:i.createElement(W,null,i.createElement(Z,{...r}),"loading"!==a&&i.createElement(Q,null,"error"===a?i.createElement(R,{...r}):i.createElement(G,{...r})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=j("div")`
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
`,es=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(a),er(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=i.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(et,{toast:e}),n=i.createElement(es,{...e.ariaProps},k(e.message,e));return i.createElement(eo,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,p.p=void 0,y=s,x=void 0,v=void 0;var el=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let s=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:s,className:t,style:a},o)},ec=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},ed=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:c}=L(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let s=a.position||t,n=ec(s,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(el,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ed:"",style:n},"custom"===a.type?k(a.message,a):o?o(a):i.createElement(en,{toast:a,position:s}))}))},ep=M}},function(e){e.O(0,[358,315,271,971,938,744],function(){return e(e.s=4691)}),_N_E=e.O()}]);