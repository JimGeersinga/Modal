"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[459],{4170:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(4848),s=a(8453);const i={sidebar_position:4},t="Closing Programmatically",l={id:"usage/closing-programmatically",title:"Closing Programmatically",description:"While most modals will be dismissed by a user via buttons on the UI, sometimes you may want to dismiss a modal programmatically. An example of such a usecase is opening a modal with a loading spinner while data is being loaded from a UI or other long running process.",source:"@site/docs/usage/closing-programmatically.md",sourceDirName:"usage",slug:"/usage/closing-programmatically",permalink:"/Modal/usage/closing-programmatically",draft:!1,unlisted:!1,editUrl:"https://github.com/blazored/modal/tree/main/docs/docs/usage/closing-programmatically.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Returning Data",permalink:"/Modal/usage/returning-data"},next:{title:"Multiple Modals",permalink:"/Modal/usage/multiple-modals"}},r={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"closing-programmatically",children:"Closing Programmatically"}),"\n",(0,o.jsx)(n.p,{children:"While most modals will be dismissed by a user via buttons on the UI, sometimes you may want to dismiss a modal programmatically. An example of such a usecase is opening a modal with a loading spinner while data is being loaded from a UI or other long running process."}),"\n",(0,o.jsxs)(n.p,{children:["Closing a modal programmatically is done using the ",(0,o.jsx)(n.code,{children:"IModalReference.Close()"})," method. In the following example, a ",(0,o.jsx)(n.code,{children:"Spinner"})," component is shown in the modal while a long running task is being awaited. Once the long running task completes, the modal is closed programmatically."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"[CascadingParameter] IModalService Modal { get; set; } = default!;\n\nprivate async Task ShowSpinner()\n{\n    var spinnerModal = Modal.Show<Spinner>();\n\n    await MyLongRunningTask();\n\n    spinnerModal.Close();\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>l});var o=a(6540);const s={},i=o.createContext(s);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);