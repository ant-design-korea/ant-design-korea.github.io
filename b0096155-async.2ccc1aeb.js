(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b0096155"],{b0096155:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return o;}});var n=t("777fffbe"),l=t("f19d2b93");t("97cf9820");var r=n._(t("5b220c3d")),u=t("a9d1a279");function d(e){let a=[255,204,199],t=[135,208,104].map((t,n)=>(t+(a[n]-t)*e).toFixed(0));return`rgb(${t.join(",")})`;}var o=()=>{let[e,a]=r.default.useState([0,10,20]),t=e[0]/100,n=e[e.length-1]/100;return(0,l.jsx)(u.Slider,{range:!0,defaultValue:e,onChange:a,styles:{track:{background:"transparent"},tracks:{background:`linear-gradient(to right, ${d(t)} 0%, ${d(n)} 100%)`}}});};}}]);