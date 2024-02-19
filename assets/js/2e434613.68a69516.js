"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[417],{1165:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=o(4848),t=o(8453);const a={sidebar_position:2},s="Animation",l={id:"styling/animation",title:"Animation",description:"By default, the modal is shown with a subtle fade in out animation. However, this can be disabled so the modal shows and hides immediately.",source:"@site/docs/styling/animation.md",sourceDirName:"styling",slug:"/styling/animation",permalink:"/Modal/styling/animation",draft:!1,unlisted:!1,editUrl:"https://github.com/blazored/modal/tree/main/docs/docs/styling/animation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Modal Style",permalink:"/Modal/styling/modal-style"},next:{title:"Custom Layout",permalink:"/Modal/styling/custom-layout"}},r={},d=[{value:"Configuring for all modals",id:"configuring-for-all-modals",level:4},{value:"Configuring for a single modal",id:"configuring-for-a-single-modal",level:4}];function c(n){const e={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"animation",children:"Animation"}),"\n",(0,i.jsx)(e.p,{children:"By default, the modal is shown with a subtle fade in out animation. However, this can be disabled so the modal shows and hides immediately."}),"\n",(0,i.jsx)(e.h4,{id:"configuring-for-all-modals",children:"Configuring for all modals"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-razor",children:'<BlazoredModal AnimationType="@ModalAnimationType.None"/>\n'})}),"\n",(0,i.jsx)(e.h4,{id:"configuring-for-a-single-modal",children:"Configuring for a single modal"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-csharp",children:'var options = new ModalOptions() \n{ \n    AnimationType = ModalAnimationType.None \n};\n\nModal.Show<Confirm>("Are you sure?", options);\n'})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>l});var i=o(6540);const t={},a=i.createContext(t);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);