(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(6545)}])},6545:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(5893),i=t(5861),a=t(9047),o=t(2630),s=t(9211),l=t(1163),c=t(7294);let d=async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2?arguments[2]:void 0;return await fetch(e,{method:n,mode:"cors",headers:null==t?void 0:t.headers,body:null==t?void 0:t.body})},u=async(e,n)=>{let t=await d(e,"POST",{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});return t.ok?await t.json():(console.warn(t.status),null)};var h=t(4345);let p=()=>{let[e,n]=(0,c.useState)(""),[t,d]=(0,c.useState)(""),[p,g]=(0,c.useState)(""),[f,m]=(0,c.useState)("");(0,l.useRouter)(),(0,c.useEffect)(()=>{m("")},[t,p]);let w=async()=>{if(t.length<8){m("Password too short");return}if(t!==p){m("Password confirmation not matching");return}console.log({username:e,password:t});let n=await u("".concat("https://shy-tan-meerkat-garb.cyclic.app","/auth/signup"),{username:e,password:t});if(null==n){console.log("Error");return}console.log("Success"),console.log(n)};return(0,r.jsx)(h.Z,{children:(0,r.jsxs)(s.Z,{direction:"column",justifyContent:"center",alignItems:"center",flexGrow:1,height:"100%",children:[(0,r.jsx)(i.Z,{variant:"h1",children:"Sign up"}),(0,r.jsx)(i.Z,{variant:"subtitle1",children:"Please, fill up your data"}),(0,r.jsxs)(s.Z,{direction:"column",justifyContent:"center",spacing:"2rem",paddingTop:"2rem",children:[(0,r.jsx)(a.Z,{required:!0,label:"Username",value:e,onChange:e=>n(e.target.value)}),(0,r.jsx)(a.Z,{required:!0,label:"Password",type:"password",value:t,onChange:e=>d(e.target.value)}),(0,r.jsx)(a.Z,{required:!0,label:"Confirm Password",type:"password",value:p,onChange:e=>g(e.target.value)}),f.length>0&&(0,r.jsx)(i.Z,{variant:"body1",color:"error",children:f}),(0,r.jsx)(o.Z,{variant:"contained",onClick:w,children:"Sign Up"})]})]})})};var g=p},4345:function(e,n,t){"use strict";var r=t(5893),i=t(6447),a=t(9008),o=t.n(a);t(7294);let s=e=>{let{children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Fast Forward"}),(0,r.jsx)("meta",{name:"description",content:"Generated with Fast Forward"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsx)(i.Z,{minHeight:"100vh",minWidth:"100%",children:(0,r.jsx)(i.Z,{maxWidth:"1200px",paddingBottom:"2.5rem",paddingTop:"1rem",paddingX:"0.5rem",flexGrow:1,sx:e=>({[e.breakpoints.up("md")]:{marginX:"auto"}}),children:n})})})]})};n.Z=s}},function(e){e.O(0,[75,47,774,888,179],function(){return e(e.s=7805)}),_N_E=e.O()}]);