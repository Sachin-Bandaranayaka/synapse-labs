(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{2161:function(e,t,a){Promise.resolve().then(a.bind(a,8917))},4930:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=a(817);a(2265);let o=r._(a(4795));function n(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){let a=o.default,r={loading:e=>{let{error:t,isLoading:a,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let s=r.loader;return a({...r,loader:()=>null!=s?s().then(n):Promise.resolve(n(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6005:function(e,t,a){"use strict";function r(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return r}}),a(6491)},4795:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let r=a(817)._(a(2265)),o=a(6005),n=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function a(e){let a=t.loading,n=r.default.createElement(a,{isLoading:!0,pastDelay:!0,error:null}),s=t.ssr?r.default.Fragment:o.NoSSR,i=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:n},r.default.createElement(s,null,r.default.createElement(i,e)))}return t.lazy=r.default.lazy(t.loader),a.displayName="LoadableComponent",a}},8917:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(7437),o=a(2265),n=a(4033),s=a(4086),i=a(9584),l=a(1221),c=a(5925),d=a(4930),u=a.n(d);a(1851);let p=u()(()=>Promise.all([a.e(70),a.e(806)]).then(a.t.bind(a,6233,23)),{loadableGenerated:{webpack:()=>[6233]},ssr:!1});function f(e){let{initialData:t,isEditing:a=!1}=e,[d,u]=(0,o.useState)((null==t?void 0:t.title)||""),[f,m]=(0,o.useState)((null==t?void 0:t.content)||""),[b,g]=(0,o.useState)((null==t?void 0:t.excerpt)||""),[y,h]=(0,o.useState)(null),[x,v]=(0,o.useState)((null==t?void 0:t.coverImage)||""),[w,j]=(0,o.useState)((null==t?void 0:t.tags)||[]),[k,N]=(0,o.useState)(""),[E,C]=(0,o.useState)(!1),O=(0,n.useRouter)(),S=e=>{j(w.filter(t=>t!==e))},I=async e=>{e.preventDefault(),C(!0);try{let e=(null==t?void 0:t.coverImage)||"";if(y){let t=(0,i.iH)(l.tO,"blog-images/".concat(Date.now(),"-").concat(y.name));await (0,i.KV)(t,y),e=await (0,i.Jt)(t)}let a=d.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,""),r={title:d,content:f,excerpt:b,coverImage:e,tags:w,slug:a,author:{name:"Admin",avatar:"/images/avatar.jpg"},publishedAt:new Date,readingTime:Math.ceil(f.split(" ").length/200)};await (0,s.ET)((0,s.hJ)(l.db,"blog-posts"),r),c.toast.success("Blog post published successfully!"),O.push("/admin/blog")}catch(e){c.toast.error("Failed to publish blog post")}finally{C(!1)}};return(0,r.jsxs)("form",{onSubmit:I,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Title"}),(0,r.jsx)("input",{type:"text",value:d,onChange:e=>u(e.target.value),required:!0,className:"w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Excerpt"}),(0,r.jsx)("textarea",{value:b,onChange:e=>g(e.target.value),required:!0,rows:3,className:"w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Cover Image"}),(0,r.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{var t;let a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(a){h(a);let e=new FileReader;e.onloadend=()=>{v(e.result)},e.readAsDataURL(a)}},className:"w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"}),x&&(0,r.jsx)("img",{src:x,alt:"Cover preview",className:"mt-2 h-48 w-full object-cover rounded-lg"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Tags"}),(0,r.jsx)("div",{className:"flex gap-2 mb-2",children:w.map(e=>(0,r.jsxs)("span",{className:"px-2 py-1 bg-accent/10 rounded-full text-accent text-sm flex items-center gap-1",children:[e,(0,r.jsx)("button",{type:"button",onClick:()=>S(e),className:"text-accent hover:text-accent/80",children:"\xd7"})]},e))}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("input",{type:"text",value:k,onChange:e=>N(e.target.value),className:"flex-1 px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent",placeholder:"Add a tag"}),(0,r.jsx)("button",{type:"button",onClick:()=>{k&&!w.includes(k)&&(j([...w,k]),N(""))},className:"px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90",children:"Add"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Content"}),(0,r.jsx)("div",{className:"prose-editor",children:(0,r.jsx)(p,{theme:"snow",value:f,onChange:m,className:"h-96 mb-12 bg-black/20 rounded-lg"})})]}),(0,r.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,r.jsx)("button",{type:"button",onClick:()=>O.back(),className:"px-6 py-2 border border-gray-700 rounded-lg hover:bg-black/20",children:"Cancel"}),(0,r.jsx)("button",{type:"submit",disabled:E,className:"px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed",children:E?"Publishing...":"Publish"})]})]})}function m(){return(0,r.jsxs)("div",{className:"max-w-4xl mx-auto py-8",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-8",children:"Create New Blog Post"}),(0,r.jsx)(f,{})]})}},1221:function(e,t,a){"use strict";a.d(t,{db:function(){return l},tO:function(){return c}});var r=a(994),o=a(4086),n=a(9584),s=a(3085);let i=(0,r.ZF)({apiKey:"AIzaSyDBYalhq1w5VVxufTICoqnVlkUuJO17FyU",authDomain:"synapse-labs-ddf8b.firebaseapp.com",projectId:"synapse-labs-ddf8b",storageBucket:"synapse-labs-ddf8b.firebasestorage.app",messagingSenderId:"743584329180",appId:"1:743584329180:web:aae99ced682a986c857319"}),l=(0,o.ad)(i),c=(0,n.cF)(i);(0,s.v0)(i)},1851:function(){},4033:function(e,t,a){e.exports=a(5313)},5925:function(e,t,a){"use strict";let r,o;a.r(t),a.d(t,{CheckmarkIcon:function(){return G},ErrorIcon:function(){return V},LoaderIcon:function(){return K},ToastBar:function(){return ei},ToastIcon:function(){return et},Toaster:function(){return eu},default:function(){return ep},resolveValue:function(){return N},toast:function(){return F},useToaster:function(){return H},useToasterStore:function(){return z}});var n,s=a(2265);let i={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let n in e){let s=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+s+";":r+="f"==n[1]?p(s,n):n+"{"+p(s,"k"==n[1]?"":t)+"}":"object"==typeof s?r+=p(s,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=s&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(n,s):n+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},b=(e,t,a,r,o)=>{var n;let s=m(e),i=f[s]||(f[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!f[i]){let t=s!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[i]=p(o?{["@keyframes "+i]:t}:t,a?"":"."+i)}let l=a&&f.g?f.g:null;return a&&(f.g=f[i]),n=f[i],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=r?n+t.data:t.data+n),i},g=(e,t,a)=>e.reduce((e,r,o)=>{let n=t[o];if(n&&n.call){let e=n(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==n?"":n)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return b(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let h,x,v,w=y.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function o(n,s){let i=Object.assign({},n),l=i.className||o.className;a.p=Object.assign({theme:x&&x()},i),a.o=/ *go\d+/.test(l),i.className=y.apply(a,r)+(l?" "+l:""),t&&(i.ref=s);let c=e;return e[0]&&(c=i.as||e,delete i.as),v&&c[0]&&v(i),h(c,i)}return t?t(o):o}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,E=(r=0,()=>(++r).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},O=new Map,S=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),D({type:4,toastId:e})},1e3);O.set(e,t)},I=e=>{let t=O.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&I(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?S(r):e.toasts.forEach(e=>{S(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},_=[],$={toasts:[],pausedAt:void 0},D=e=>{$=P($,e),_.forEach(e=>{e($)})},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,a]=(0,s.useState)($);(0,s.useEffect)(()=>(_.push(a),()=>{let e=_.indexOf(a);e>-1&&_.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},A=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||E()}),M=e=>(t,a)=>{let r=A(t,e,a);return D({type:2,toast:r}),r.id},F=(e,t)=>M("blank")(e,t);F.error=M("error"),F.success=M("success"),F.loading=M("loading"),F.custom=M("custom"),F.dismiss=e=>{D({type:3,toastId:e})},F.remove=e=>D({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(N(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(N(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var L=(e,t)=>{D({type:1,toast:{id:e,height:t}})},B=()=>{D({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:a}=z(e);(0,s.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,s.useCallback)(()=>{a&&D({type:6,time:Date.now()})},[a]),o=(0,s.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:n}=a||{},s=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),i=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<i&&e.visible).length;return s.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:L,startPause:B,endPause:r,calculateOffset:o}}},R=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
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
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,K=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,Y=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Z=w`
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

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Z} 0.2s ease-out forwards;
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
`,et=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(ee,null,t):t:"blank"===a?null:s.createElement(W,null,s.createElement(K,{...r}),"loading"!==a&&s.createElement(Q,null,"error"===a?s.createElement(V,{...r}):s.createElement(G,{...r})))},ea=e=>`
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
`,en=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,es=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(a),er(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=s.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?es(e.position||t||"top-center",e.visible):{opacity:0},n=s.createElement(et,{toast:e}),i=s.createElement(en,{...e.ariaProps},N(e.message,e));return s.createElement(eo,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:n,message:i}):s.createElement(s.Fragment,null,n,i))});n=s.createElement,p.p=void 0,h=n,x=void 0,v=void 0;var el=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let n=s.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return s.createElement("div",{ref:n,className:t,style:a},o)},ec=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},ed=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:n,containerClassName:i})=>{let{toasts:l,handlers:c}=H(a);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let n=a.position||t,i=ec(n,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return s.createElement(el,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ed:"",style:i},"custom"===a.type?N(a.message,a):o?o(a):s.createElement(ei,{toast:a,position:n}))}))},ep=F}},function(e){e.O(0,[358,315,271,606,971,938,744],function(){return e(e.s=2161)}),_N_E=e.O()}]);