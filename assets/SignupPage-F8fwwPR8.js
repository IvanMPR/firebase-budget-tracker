import{u as x,j as e,n as o,d as p,a as f,s as g}from"./index-3doFxuJq.js";import{u as y,F as h,f as b,H as j,C as w}from"./Header-GHdvH16a.js";function v(){const{createUser:a,setIsLoading:r}=x(),{register:n,handleSubmit:i}=y();function c(t,l,s){const m=p(f,l,s);g(m,{email:t.email,uid:t.uid,entries:[]})}function u({email:t,password:l}){a(t,l).then(s=>{c(s.user,"users",s.user.uid),o.success("Account created successfully ! Please login. ")}).catch(s=>{s.code==="auth/email-already-in-use"?(o.error("📃 Email already in use. Please login. "),r(!1)):(o.error(`📃 ${s.code}`),r(!1))})}function d(t){console.log(t)}return e.jsxs("div",{className:"flex flex-col items-center justify-center bg-yellow-400 w-full m-auto mb-20  p-2 border-solid border-2 border-stone-700 rounded-2xl opacity-90 md:w-1/4 xl:w-[150%]",children:[e.jsx("h2",{className:" uppercase text-stone-700 text-lg tracking-widest p-4 font-bold text-center",children:"Create Account"}),e.jsxs("form",{onSubmit:i(u,d),className:" w-full ",children:[e.jsx("div",{className:" flex flex-col justify-center mb-2",children:e.jsx("input",{type:"email",id:"email",required:!0,placeholder:"Enter your email address",className:" w-[80%] m-auto rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 ",...n("email",{required:!0})})}),e.jsx("div",{className:" flex flex-col w-full justify-center text-left ",children:e.jsx("input",{type:"password",id:"password",required:!0,placeholder:"Type in your password",className:" w-[80%] m-auto rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 ",...n("password",{required:!0})})}),e.jsx("div",{className:"mt-5 px-1",children:e.jsxs("button",{type:"submit",className:" block w-[80%] m-auto rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",children:[e.jsx(h,{icon:b})," Sign up"]})})]})]})}function S(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx("section",{style:{backgroundImage:" url('bgd.png')",height:"calc(100vh - 4.5rem)"},className:"w-full bg-cover bg-top",children:e.jsx(w,{children:e.jsx("div",{style:{height:"calc(100vh - 4.5rem)"},className:" flex flex-col p-4  items-left justify-center",children:e.jsx("div",{children:e.jsx(v,{})})})})})]})}export{S as default};
