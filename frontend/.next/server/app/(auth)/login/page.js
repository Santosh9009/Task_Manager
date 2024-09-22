(()=>{var e={};e.id=665,e.ids=[665],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3928:e=>{e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},7459:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>u}),r(3272),r(5795),r(5866);var s=r(3191),a=r(8716),n=r(7922),o=r.n(n),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["(auth)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3272)),"/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(auth)/login/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5795)),"/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(auth)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(auth)/login/page.tsx"],c="/(auth)/login/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},9211:(e,t,r)=>{Promise.resolve().then(r.bind(r,422)),Promise.resolve().then(r.bind(r,4723))},9387:(e,t,r)=>{Promise.resolve().then(r.bind(r,1439))},1439:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(326),a=r(7577),n=r(4131),o=r(4097),i=r(434),l=r(5047);function u(){let{toast:e}=(0,o.pm)(),{login:t,loading:r}=(0,n.a)(),[u,d]=(0,a.useState)(""),[c,p]=(0,a.useState)(""),m=(0,l.useRouter)(),x=async r=>{r.preventDefault();let{success:s}=await t({email:u,password:c});s?(e({title:"Success",description:"Logged in successfully"}),m.replace("/")):e({title:"Error",description:"Login failed",variant:"destructive"})};return s.jsx("div",{className:"h-screen w-full bg-white flex items-center justify-center text-black",children:(0,s.jsxs)("div",{className:"bg-white p-10 rounded-lg shadow-lg max-w-lg w-full",children:[s.jsx("h2",{className:"text-3xl font-semibold mb-8 text-center text-gray-900",children:"Welcome Back"}),(0,s.jsxs)("form",{onSubmit:x,className:"space-y-6",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),s.jsx("input",{id:"email",type:"email",value:u,onChange:e=>d(e.target.value),className:"mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200",placeholder:"Enter your email",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),s.jsx("input",{id:"password",type:"password",value:c,onChange:e=>p(e.target.value),className:"mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200",placeholder:"Enter your password",required:!0})]}),s.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200",disabled:r,"aria-label":"Login button",children:r?"Logging in...":"Login"})]}),(0,s.jsxs)("div",{className:"text-center mt-5",children:["Don't have an account?"," ",s.jsx(i.default,{className:"text-blue-400 underline",href:"/signup",children:"Signup"})]})]})})}},5795:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>l});var s=r(9510),a=r(3928),n=r.n(a);r(5023);var o=r(9011),i=r(7814);let l={title:"Task Manager App",description:"A Task Management app in nextjs"};function u({children:e}){return s.jsx(o.Z,{children:s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${n().className} `,children:[e,s.jsx(i.x,{})]})})})}},3272:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(8570).createProxy)(String.raw`/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(auth)/login/page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,471,584,759],()=>r(7459));module.exports=s})();