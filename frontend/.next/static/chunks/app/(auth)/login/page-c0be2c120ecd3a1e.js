(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{7056:function(e,t,r){Promise.resolve().then(r.bind(r,3871))},3871:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r(7437),s=r(2265),n=r(7048),o=r(6763),u=r(7138),i=r(6463);function l(){let{toast:e}=(0,o.pm)(),{login:t,loading:r}=(0,n.a)(),[l,c]=(0,s.useState)(""),[d,f]=(0,s.useState)(""),h=(0,i.useRouter)(),p=async r=>{r.preventDefault();let{success:a}=await t({email:l,password:d});a?(e({title:"Success",description:"Logged in successfully"}),h.replace("/")):e({title:"Error",description:"Login failed",variant:"destructive"})};return(0,a.jsx)("div",{className:"h-screen w-full bg-white flex items-center justify-center text-black",children:(0,a.jsxs)("div",{className:"bg-white p-10 rounded-lg shadow-lg max-w-lg w-full",children:[(0,a.jsx)("h2",{className:"text-3xl font-semibold mb-8 text-center text-gray-900",children:"Welcome Back"}),(0,a.jsxs)("form",{onSubmit:p,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,a.jsx)("input",{id:"email",type:"email",value:l,onChange:e=>c(e.target.value),className:"mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200",placeholder:"Enter your email",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,a.jsx)("input",{id:"password",type:"password",value:d,onChange:e=>f(e.target.value),className:"mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200",placeholder:"Enter your password",required:!0})]}),(0,a.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200",disabled:r,"aria-label":"Login button",children:r?"Logging in...":"Login"})]}),(0,a.jsxs)("div",{className:"text-center mt-5",children:["Don't have an account?"," ",(0,a.jsx)(u.default,{className:"text-blue-400 underline",href:"/signup",children:"Signup"})]})]})})}},6763:function(e,t,r){"use strict";r.d(t,{Am:function(){return d},pm:function(){return f}});var a=r(2265);let s=0,n=new Map,o=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},u=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},i=[],l={toasts:[]};function c(e){l=u(l,e),i.forEach(e=>{e(l)})}function d(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=a.useState(l);return a.useEffect(()=>(i.push(t),()=>{let e=i.indexOf(t);e>-1&&i.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},7048:function(e,t,r){"use strict";r.d(t,{a:function(){return o}});var a=r(1444),s=r(8292),n=r(2265);let o=()=>{let e=(0,a.I0)(),{user:t,status:r,error:o}=(0,a.v9)(e=>e.auth),[u,i]=(0,n.useState)(!1),l=async t=>{i(!0);try{let r=await e((0,s.pH)(t)).unwrap();return{success:!0,user:r}}catch(e){return console.error("Login error:",e),{success:!1,error:e}}finally{i(!1)}},c=async t=>{i(!0);try{let r=await e((0,s.EL)(t)).unwrap();return{success:!0,user:r}}catch(e){return console.error("Signup error:",e),{success:!1,error:e}}finally{i(!1)}},d=async()=>{i(!0);try{return await e((0,s.TX)()).unwrap(),{success:!0}}catch(e){return console.error("Logout error:",e),{success:!1,error:e}}finally{i(!1)}};return(0,n.useEffect)(()=>{(async()=>{try{await e((0,s.k)()).unwrap()}catch(e){console.error("Fetch user error:",e)}})()},[e]),{user:t,login:l,signup:c,logout:d,status:r,error:o,loading:u}}},8292:function(e,t,r){"use strict";r.d(t,{ZP:function(){return y},k:function(){return d},pH:function(){return p},TX:function(){return m},EL:function(){return g}});var a=r(6862),s=r(2649),n=r(8472);let o="".concat("http://localhost:8000","/api/auth"),u=async e=>{let t=await n.Z.post("".concat(o,"/login"),e,{withCredentials:!0});return console.log(t.data),t.data},i=async e=>(await n.Z.post("".concat(o,"/signup"),e,{withCredentials:!0})).data,l=async()=>(await n.Z.get("".concat(o,"/me"),{withCredentials:!0})).data,c=e=>e instanceof Error?e.message:"An unknown error occurred",d=(0,a.hg)("auth/fetchCurrentUser",async(e,t)=>{let{rejectWithValue:r}=t;try{return await l()}catch(e){return r(c(e))}}),f=async(e,t)=>{let r=await e(t);if(r.token)return s.Z.set("token",r.token),r.user;throw Error("Token missing")},h=async(e,t)=>{let r=await e(t);if(r.token)return s.Z.set("token",r.token),r.user;throw Error("Token missing")},p=(0,a.hg)("auth/loginUser",async(e,t)=>{let{rejectWithValue:r}=t;try{return await h(u,e)}catch(e){return r(c(e))}}),g=(0,a.hg)("auth/signupUser",async(e,t)=>{let{rejectWithValue:r}=t;try{return await f(i,e)}catch(e){return r(c(e))}}),m=(0,a.hg)("auth/logoutUser",async(e,t)=>{let{rejectWithValue:r}=t;try{s.Z.remove("token")}catch(e){return r(c(e))}});var y=(0,a.oM)({name:"auth",initialState:{user:null,status:"idle",error:null},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,(e,t)=>{e.user=t.payload,e.status="idle"}).addCase(p.pending,e=>{e.status="loading",e.error=null}).addCase(p.fulfilled,(e,t)=>{e.user=t.payload,e.status="idle"}).addCase(p.rejected,(e,t)=>{e.status="failed",e.error=t.payload||"Login failed"}).addCase(g.pending,e=>{e.status="loading",e.error=null}).addCase(g.fulfilled,(e,t)=>{e.user=t.payload,e.status="idle"}).addCase(g.rejected,(e,t)=>{e.status="failed",e.error=t.payload||"Sign-up failed"}).addCase(m.fulfilled,e=>{e.user=null,e.status="idle",e.error=null}).addCase(m.rejected,(e,t)=>{e.status="failed",e.error=t.payload||"Logout failed"})}}).reducer}},function(e){e.O(0,[901,291,971,23,744],function(){return e(e.s=7056)}),_N_E=e.O()}]);