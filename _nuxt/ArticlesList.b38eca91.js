import v from"./ArticlesListItem.407e6dae.js";import k from"./ProseA.a9a20a0a.js";import w from"./ProseCodeInline.500d8503.js";import{u as g}from"./asyncData.7a8a8c47.js";import{d as A,Y as I,J as S,N as c,b as a,c as r,e as o,g as i,F as b,Z as C,E as e,w as p,p as L,i as B,q as N,$ as V,X as q,k as E}from"./entry.d0a2f2b5.js";import"./date.824a539b.js";const F=t=>(L("data-v-76b59dd1"),t=t(),B(),t),P={key:0,class:"articles-list"},T={class:"featured"},Y={class:"layout"},D={key:1,class:"tour"},J=F(()=>o("p",null,"Seems like there are no articles yet.",-1)),X=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=I(async()=>g("articles",async()=>await N(V(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=S(()=>m.value||[]);return(Z,$)=>{var d;const l=v,f=k,h=w;return(d=c(n))!=null&&d.length?(a(),r("div",P,[o("div",T,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(b,null,C(c(n).slice(1),(y,x)=>(a(),q(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",D,[J,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:p(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:p(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const O=E(X,[["__scopeId","data-v-76b59dd1"]]);export{O as default};
