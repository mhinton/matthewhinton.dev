import{d,an as m,I as a,a4 as f,b as o,X as s,w as g,f as x,g as S,n as b,M as h,a6 as y,E as k,l as z}from"./entry.f76575ab.js";import H from"./ContentSlot.79e229dd.js";const C=d({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:m("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const n=e,i=a(()=>((t=n)=>`{color.${t.color}.600}`)()),l=a(()=>((t=n)=>`{color.${t.color}.500}`)()),r={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:c}=f(n,r,{_YM9_buttonPrimary:i,_A23_buttonSecondary:l});return(t,$)=>{const u=y,_=H,p=k;return o(),s(p,{class:b(["button-link",[h(c)]]),to:e.href,target:e.blank?"_blank":void 0},{default:g(()=>[e.icon?(o(),s(u,{key:0,name:e.icon},null,8,["name"])):x("",!0),S(_,{use:t.$slots.default,unwrap:"p ul li"},null,8,["use"])]),_:1},8,["to","target","class"])}}});const v=z(C,[["__scopeId","data-v-614b3880"]]);export{v as default};
