(()=>{var e={};e.id=869,e.ids=[869],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},66201:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>u});var r=s(50482),a=s(69108),l=s(62563),n=s.n(l),o=s(68300),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);s.d(t,i);let u=["",{children:["admin",{children:["blog",{children:["new",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,29730)),"C:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\admin\\blog\\new\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,82050)),"C:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,42291)),"C:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\admin\\blog\\new\\page.tsx"],d="/admin/blog/new/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/blog/new/page",pathname:"/admin/blog/new",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},45352:(e,t,s)=>{Promise.resolve().then(s.bind(s,90250))},53267:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let r=s(22098);s(3729);let a=r._(s(60546));function l(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){let s=a.default,r={loading:e=>{let{error:t,isLoading:s,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let n=r.loader;return s({...r,loader:()=>null!=n?n().then(l):Promise.resolve(l(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},91868:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return a}});let r=s(61462);function a(e){let{children:t}=e;return(0,r.throwWithNoSSR)(),t}},60546:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=s(22098)._(s(3729)),a=s(91868),l=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function s(e){let s=t.loading,l=r.default.createElement(s,{isLoading:!0,pastDelay:!0,error:null}),n=t.ssr?r.default.Fragment:a.NoSSR,o=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:l},r.default.createElement(n,null,r.default.createElement(o,e)))}return t.lazy=r.default.lazy(t.loader),s.displayName="LoadableComponent",s}},90250:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var r=s(95344),a=s(3729),l=s(22254),n=s(48414),o=s(73424),i=s(81012),u=s(44669),c=s(53267),d=s.n(c);s(24221);let p=d()(async()=>{},{loadableGenerated:{modules:["C:\\Users\\sachi\\Documents\\synapse_labs\\src\\components\\admin\\BlogEditor.tsx -> react-quill"]},ssr:!1});function m({initialData:e,isEditing:t=!1}){let[s,c]=(0,a.useState)(e?.title||""),[d,m]=(0,a.useState)(e?.content||""),[x,b]=(0,a.useState)(e?.excerpt||""),[g,f]=(0,a.useState)(null),[h,y]=(0,a.useState)(e?.coverImage||""),[v,j]=(0,a.useState)(e?.tags||[]),[_,q]=(0,a.useState)(""),[w,N]=(0,a.useState)(!1),P=(0,l.useRouter)(),C=e=>{j(v.filter(t=>t!==e))},k=async t=>{t.preventDefault(),N(!0);try{let t=e?.coverImage||"";if(g){let e=(0,o.iH)(i.tO,`blog-images/${Date.now()}-${g.name}`);await (0,o.KV)(e,g),t=await (0,o.Jt)(e)}let r=s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,""),a={title:s,content:d,excerpt:x,coverImage:t,tags:v,slug:r,author:{name:"Admin",avatar:"/images/avatar.jpg"},publishedAt:new Date,readingTime:Math.ceil(d.split(" ").length/200)};await (0,n.ET)((0,n.hJ)(i.db,"blog-posts"),a),u.toast.success("Blog post published successfully!"),P.push("/admin/blog")}catch(e){u.toast.error("Failed to publish blog post")}finally{N(!1)}};return(0,r.jsxs)("form",{onSubmit:k,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Title"}),r.jsx("input",{type:"text",value:s,onChange:e=>c(e.target.value),required:!0,className:"w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Excerpt"}),r.jsx("textarea",{value:x,onChange:e=>b(e.target.value),required:!0,rows:3,className:"w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Cover Image"}),r.jsx("input",{type:"file",accept:"image/*",onChange:e=>{let t=e.target.files?.[0];if(t){f(t);let e=new FileReader;e.onloadend=()=>{y(e.result)},e.readAsDataURL(t)}},className:"w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"}),h&&r.jsx("img",{src:h,alt:"Cover preview",className:"mt-2 h-48 w-full object-cover rounded-lg"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Tags"}),r.jsx("div",{className:"flex gap-2 mb-2",children:v.map(e=>(0,r.jsxs)("span",{className:"px-2 py-1 bg-accent/10 rounded-full text-accent text-sm flex items-center gap-1",children:[e,r.jsx("button",{type:"button",onClick:()=>C(e),className:"text-accent hover:text-accent/80",children:"\xd7"})]},e))}),(0,r.jsxs)("div",{className:"flex gap-2",children:[r.jsx("input",{type:"text",value:_,onChange:e=>q(e.target.value),className:"flex-1 px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent",placeholder:"Add a tag"}),r.jsx("button",{type:"button",onClick:()=>{_&&!v.includes(_)&&(j([...v,_]),q(""))},className:"px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90",children:"Add"})]})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Content"}),r.jsx("div",{className:"prose-editor",children:r.jsx(p,{theme:"snow",value:d,onChange:m,className:"h-96 mb-12 bg-black/20 rounded-lg"})})]}),(0,r.jsxs)("div",{className:"flex justify-end gap-4",children:[r.jsx("button",{type:"button",onClick:()=>P.back(),className:"px-6 py-2 border border-gray-700 rounded-lg hover:bg-black/20",children:"Cancel"}),r.jsx("button",{type:"submit",disabled:w,className:"px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed",children:w?"Publishing...":"Publish"})]})]})}function x(){return(0,r.jsxs)("div",{className:"max-w-4xl mx-auto py-8",children:[r.jsx("h1",{className:"text-2xl font-bold mb-8",children:"Create New Blog Post"}),r.jsx(m,{})]})}},29730:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>a,default:()=>n});let r=(0,s(86843).createProxy)(String.raw`C:\Users\sachi\Documents\synapse_labs\src\app\admin\blog\new\page.tsx`),{__esModule:a,$$typeof:l}=r,n=r.default},24221:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,839,674,947],()=>s(66201));module.exports=r})();