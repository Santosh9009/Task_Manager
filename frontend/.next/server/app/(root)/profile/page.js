(()=>{var e={};e.id=465,e.ids=[465],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3260:e=>{e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},7840:e=>{e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}},2316:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),t(2940),t(4349),t(5866);var s=t(3191),a=t(8716),o=t(7922),n=t.n(o),i=t(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["(root)",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2940)),"/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(root)/profile/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,4349)),"/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(root)/profile/page.tsx"],u="/(root)/profile/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(root)/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4406:(e,r,t)=>{Promise.resolve().then(t.bind(t,422)),Promise.resolve().then(t.bind(t,4723))},5367:(e,r,t)=>{Promise.resolve().then(t.bind(t,9846))},9846:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var s=t(326),a=t(7577),o=t(1664),n=t(4131),i=t(5842),l=t(2851),d=t(5047),c=t(6562),u=t(434);let p=(0,t(2881).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),x=()=>{let e=(0,i.I0)(),{logout:r,loading:t}=(0,n.a)(),x=(0,i.v9)(e=>e.auth.user),m=(0,d.useRouter)();(0,a.useEffect)(()=>{c.Z.get("token")&&!x&&e((0,l.k)())},[x,e]);let g=async()=>{try{await r(),m.push("/login")}catch(e){console.error("Logout error:",e)}};return t?s.jsx("div",{className:"text-center",children:"Loading..."}):(0,s.jsxs)("div",{className:"bg-gray-50 p-5",children:[s.jsx(u.default,{href:"/",className:"flex justify-center items-center mb-4 text-black hover:rounded-full hover:bg-gray-200 duration-200 w-10 h-10",children:s.jsx(p,{className:""})}),s.jsx("div",{className:"flex items-center justify-center min-h-screen",children:(0,s.jsxs)("div",{className:"max-w-lg w-full p-8 bg-white rounded-lg shadow-lg border border-gray-200",children:[s.jsx("h1",{className:"text-3xl font-semibold text-gray-900 mb-6 text-center",children:"Profile"}),(0,s.jsxs)("div",{className:"mb-6 border-b pb-4",children:[(0,s.jsxs)("p",{className:"text-gray-700 text-lg mb-2",children:[s.jsx("strong",{children:"Username:"})," ",x?.username]}),(0,s.jsxs)("p",{className:"text-gray-700 text-lg mb-2",children:[s.jsx("strong",{children:"Email:"})," ",x?.email]})]}),s.jsx(o.z,{onClick:g,className:"w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-md shadow-sm",children:"Logout"})]})})]})}},1664:(e,r,t)=>{"use strict";t.d(r,{d:()=>l,z:()=>d});var s=t(326),a=t(7577),o=t(4214),n=t(8671),i=t(1223);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:r,size:t,asChild:a=!1,...n},d)=>{let c=a?o.g7:"button";return s.jsx(c,{className:(0,i.cn)(l({variant:r,size:t,className:e})),ref:d,...n})});d.displayName="Button"},4349:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u,metadata:()=>c});var s=t(9510),a=t(7840),o=t.n(a),n=t(3260),i=t.n(n);t(5023);var l=t(9011),d=t(7814);let c={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return s.jsx(l.Z,{children:s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${o().variable} ${i().variable} antialiased`,children:[e,s.jsx(d.x,{})]})})})}},2940:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(8570).createProxy)(String.raw`/Users/santosh/Developer/Codes/Task_Manager/frontend/src/app/(root)/profile/page.tsx#default`)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,471,584,759],()=>t(2316));module.exports=s})();