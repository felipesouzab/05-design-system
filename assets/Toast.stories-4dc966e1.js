import{j as o}from"./jsx-runtime-6eef64cc.js";import{B as p,b as u}from"./index-703a75be.js";import{r as s}from"./index-c013ead5.js";import"./extends-98964cd2.js";import"./index-cda6679a.js";import"./_commonjsHelpers-725317a4.js";const d=m=>{const[c,r]=s.useState(!1),t=s.useRef(0);return s.useEffect(()=>()=>clearTimeout(t.current),[]),o.jsxs("div",{children:[o.jsx(p,{onClick:()=>{r(!1),window.clearTimeout(t.current),t.current=window.setTimeout(()=>r(!0),100)},children:"Agendar"}),o.jsx(u,{open:c,onOpenChange:r,...m})]})},h={title:"Form/Toast",component:d,args:{title:"Agendamento realizado",description:"Quarta-feira 13 de setembro às 16h"}},e={};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,h as default};
//# sourceMappingURL=Toast.stories-4dc966e1.js.map