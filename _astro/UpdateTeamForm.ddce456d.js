import{_ as U,h as a,p as N}from"./hooks.module.7cc4e70a.js";import{c as G,d as q,a as A}from"./http.82ebf0f1.js";import{S as j}from"./Spinner.95905af5.js";import"./jwt.f0e0aa9c.js";import{U as F}from"./UploadProfilePicture.17097e6c.js";import{p as O}from"./page.c1a8a472.js";import{u as z}from"./use-team-id.3d0ab368.js";import{u as R}from"./use-outside-click.85d1a62f.js";import{u as W}from"./use-keydown.41d75069.js";import{u as E}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as L}from"./preact.module.7b19fc78.js";import{$ as _}from"./team.12f2469e.js";import{u as B}from"./index.c54070cf.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function K(h){const{onClose:o}=h,k=E(),u=U(null),n=U(null),[d,r]=a(!1),[m,i]=a(""),[p,f]=a(""),{teamId:b}=z();R(u,()=>{o()}),W("Escape",()=>{o()}),N(()=>{n.current?.focus()},[]);const x=async c=>{if(c.preventDefault(),r(!0),i(""),p.toUpperCase()!=="DELETE"){i("Verification text does not match"),r(!1);return}const{response:w,error:l}=await G(`https://api.roadmap.sh/v1-delete-team/${b}`);if(l||!w){r(!1),i(l?.message||"Something went wrong");return}k.success("Team deleted successfully"),window.location.href="/account"},y=()=>{r(!1),i(""),f(""),o()};return e(L,{children:e("div",{class:"fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:u,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h2",{class:"text-2xl font-semibold text-black",children:"Delete Team"}),e("p",{className:"text-gray-500",children:"This will permanently delete your team and all associated data."}),e("p",{class:"-mb-2 mt-3 text-base font-medium text-black",children:'Please type "delete" to confirm.'}),e("form",{onSubmit:x,children:[e("div",{className:"my-4",children:[e("input",{ref:n,type:"text",name:"delete-account",id:"delete-account",className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:'Type "delete" to confirm',required:!0,autoFocus:!0,value:p,onInput:c=>f(c.target.value)}),m&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:m})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:d,onClick:y,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:d||p.toUpperCase()!=="DELETE",className:"flex-grow cursor-pointer rounded-lg bg-red-500 py-2 text-white disabled:opacity-40",children:d?"Please wait ..":"Confirm"})]})]})]})})})})}function de(){const[h,o]=a(!1),[k,u]=a(!1),n=B(_),d=E(),[r,m]=a(""),[i,p]=a(""),[f,b]=a(""),[x,y]=a(""),[c,w]=a(""),[l,T]=a(""),[I,S]=a("");a([]),a([]);const $=["0-1","2-10","11-50","51-200","201-500","501-1000","1000+"],[s,P]=a(!1),{teamId:g}=z();N(()=>{P(!n)},[n]);const H=async t=>{if(t.preventDefault(),o(!0),!r||!l){o(!1);return}const{response:v,error:D}=await q(`https://api.roadmap.sh/v1-update-team/${g}`,{name:r,website:f,type:l,gitHubUrl:c||void 0,...l==="company"&&{teamSize:I,linkedInUrl:x||void 0}});if(D){o(!1),d.error(D.message||"Something went wrong");return}v&&(await C(),o(!1),d.success("Team updated successfully"))};async function C(){const{response:t,error:v}=await A(`https://api.roadmap.sh/v1-get-team/${g}`);if(v||!t){console.log(v);return}m(t.name),p(t.avatar||""),b(t?.links?.website||""),y(t?.links?.linkedIn||""),w(t?.links?.github||""),T(t.type),t.teamSize&&S(t.teamSize)}return N(()=>{g&&C().finally(()=>{O.set("")})},[g]),e("div",{children:[e(F,{isDisabled:s,type:"logo",avatarUrl:i?`https://dodrc8eu8m09s.cloudfront.net/avatars/${i}`:"/images/default-avatar.png",teamId:g}),e("form",{onSubmit:H,children:[e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Name"}),e("input",{type:"text",name:"name",id:"name",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"roadmap.sh",disabled:s,required:!0,value:r,onInput:t=>m(t.target.value)})]}),e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"Website"}),e("input",{type:"text",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://roadmap.sh",disabled:s,value:f,onInput:t=>b(t.target.value)})]}),l==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"linkedIn",className:"text-sm leading-none text-slate-500",children:"LinkedIn URL"}),e("input",{type:"text",name:"linkedIn",id:"linkedIn",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://linkedin.com/company/roadmapsh",disabled:s,value:x,onInput:t=>y(t.target.value)})]}),e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"gitHub",className:"text-sm leading-none text-slate-500",children:"GitHub URL"}),e("input",{type:"text",name:"gitHub",id:"gitHub",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/roadmapsh",disabled:s,value:c,onInput:t=>w(t.target.value)})]}),e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"type",className:'text-sm leading-none text-slate-500  after:text-red-400 after:content-["*"]',children:"Type"}),e("select",{name:"type",id:"type",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",disabled:s,value:l,onChange:t=>T(t.target.value),children:[e("option",{value:"",selected:!0,children:"Select type"}),e("option",{value:"company",children:"Company"}),e("option",{value:"study_group",children:"Study Group"})]})]}),l==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"team-size",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Team size"}),e("select",{name:"team-size",id:"team-size",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:l==="company",disabled:s,value:I,onChange:t=>S(t.target.value),children:[e("option",{value:"",selected:!0,children:"Select team size"}),$.map(t=>e("option",{value:t,children:[t," people"]}))]})]}),e("div",{className:"mt-4 flex w-full flex-col",children:e("button",{type:"submit",className:"inline-flex h-11 w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",disabled:s||h,children:h?e(j,{}):"Update"})})]}),!n&&e("p",{className:"mt-2 rounded-lg border border-red-300 bg-red-50 p-2 text-sm text-red-700",children:"Only team admins can update team information."}),n&&e(L,{children:[e("hr",{class:"my-8"}),k&&e(K,{onClose:()=>{u(!1)}}),e("h2",{class:"text-xl font-bold sm:text-2xl",children:"Delete Team"}),e("p",{class:"mt-2 text-gray-400",children:"Permanently delete this team and all of its resources."}),e("button",{onClick:()=>u(!0),"data-popup":"delete-team-popup",class:"font-regular mt-4 w-full rounded-lg bg-red-600 py-2 text-base text-white outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1",children:"Delete Team"})]})]})}export{de as UpdateTeamForm};
