import{u as m}from"./asyncData.f875fff3.js";import{M as c,I as p,d as i,ae as u,r as l,N as n,l as d}from"./entry.40683219.js";import f from"./Ellipsis.84202082.js";import _ from"./ComponentPlaygroundData.6cbfde8b.js";import"./TabsHeader.b8e29455.js";import"./ComponentPlaygroundProps.901ff739.js";import"./ProseH4.9875e8ea.js";import"./ProseCodeInline.73a1b898.js";import"./Badge.b43a65b4.js";import"./MDCSlot.b9dab3a1.js";import"./slot.fd44a7e0.js";import"./ProseP.f96fae97.js";import"./index.f8851e3e.js";import"./ComponentPlaygroundSlots.vue.4bb69587.js";import"./ComponentPlaygroundTokens.vue.a86713d6.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-ffdff82a"]]);export{V as default};
