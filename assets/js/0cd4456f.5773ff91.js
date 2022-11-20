"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[593],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4561:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const l={sidebar_position:1},a="Modal Style",i={unversionedId:"styling/modal-style",id:"styling/modal-style",title:"Modal Style",description:"If you want to change to default look of the modal you can pass in your own CSS classes which will replace the default style classes that are applied. This allows you complete control over the look of the modal.",source:"@site/docs/styling/modal-style.md",sourceDirName:"styling",slug:"/styling/modal-style",permalink:"/Modal/styling/modal-style",draft:!1,editUrl:"https://github.com/blazored/modal/tree/main/docs/docs/styling/modal-style.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Styling",permalink:"/Modal/category/styling"},next:{title:"Animation",permalink:"/Modal/styling/animation"}},s={},c=[{value:"Configuring for all modals",id:"configuring-for-all-modals",level:4},{value:"Configuring for a single modal",id:"configuring-for-a-single-modal",level:4}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modal-style"},"Modal Style"),(0,r.kt)("p",null,"If you want to change to default look of the modal you can pass in your own CSS classes which will replace the default style classes that are applied. This allows you complete control over the look of the modal. "),(0,r.kt)("h4",{id:"configuring-for-all-modals"},"Configuring for all modals"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-razor"},'<BlazoredModal Class="my-custom-modal-class" />\n')),(0,r.kt)("h4",{id:"configuring-for-a-single-modal"},"Configuring for a single modal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var options = new ModalOptions() \n{ \n    Class = "my-custom-modal-class" \n};\n\nModal.Show<Confirm>("Are you sure?", options);\n')))}d.isMDXComponent=!0}}]);