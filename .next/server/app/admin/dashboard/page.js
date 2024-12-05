(()=>{var e={};e.id=427,e.ids=[427],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},38880:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>l});var r=t(50482),a=t(69108),o=t(62563),i=t.n(o),n=t(68300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);t.d(s,c);let l=["",{children:["admin",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,94381)),"c:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\admin\\dashboard\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,82050)),"c:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,42291)),"c:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"]}],d=["c:\\Users\\sachi\\Documents\\synapse_labs\\src\\app\\admin\\dashboard\\page.tsx"],u="/admin/dashboard/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/dashboard/page",pathname:"/admin/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},21758:(e,s,t)=>{Promise.resolve().then(t.bind(t,60154))},60154:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(95344),a=t(3729),o=t(48414),i=t(81012),n=t(44669);function c(){let[e,s]=(0,a.useState)({blogPosts:0,projects:0}),[t,c]=(0,a.useState)(!0),[l,d]=(0,a.useState)(null);return((0,a.useEffect)(()=>{(async function(){try{d(null);let[e,t]=await Promise.all([(0,o.PL)((0,o.hJ)(i.db,"blogPosts")),(0,o.PL)((0,o.hJ)(i.db,"projects"))]);s({blogPosts:e.size,projects:t.size}),n.default.success("Dashboard data loaded successfully")}catch(e){d("Failed to load dashboard data. Please try again."),n.default.error("Failed to load dashboard data")}finally{c(!1)}})()},[]),t)?r.jsx("div",{className:"flex items-center justify-center h-[calc(100vh-4rem)]",children:r.jsx("div",{className:"w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"})}):l?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center h-[calc(100vh-4rem)]",children:[r.jsx("p",{className:"text-red-500 mb-4",children:l}),r.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors",children:"Retry"})]}):(0,r.jsxs)("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[r.jsx("h1",{className:"text-2xl font-bold mb-8",children:"Dashboard Overview"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{className:"bg-secondary/20 p-6 rounded-lg",children:[r.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Blog Posts"}),r.jsx("p",{className:"text-4xl font-bold text-accent",children:e.blogPosts}),r.jsx("p",{className:"text-gray-400 mt-2",children:"Total published posts"})]}),(0,r.jsxs)("div",{className:"bg-secondary/20 p-6 rounded-lg",children:[r.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Projects"}),r.jsx("p",{className:"text-4xl font-bold text-accent",children:e.projects}),r.jsx("p",{className:"text-gray-400 mt-2",children:"Total projects"})]})]}),(0,r.jsxs)("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Quick Actions"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4",children:[r.jsx("a",{href:"/admin/blog/new",className:"px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors",children:"Create New Blog Post"}),r.jsx("a",{href:"/admin/projects/new",className:"px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors",children:"Add New Project"})]})]})]})}},94381:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});let r=(0,t(86843).createProxy)(String.raw`c:\Users\sachi\Documents\synapse_labs\src\app\admin\dashboard\page.tsx`),{__esModule:a,$$typeof:o}=r,i=r.default}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,839,674,650],()=>t(38880));module.exports=r})();