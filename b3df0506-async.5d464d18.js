(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b3df0506"],{b3df0506:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return s;}});var l=t("f19d2b93");t("b1098fe5");var n=t("a9d1a279");let d=(0,t("3835a2b7").createStyles)(({css:e,token:a})=>{let{antCls:t}=a;return{customTable:e`
      ${t}-table {
        ${t}-table-container {
          ${t}-table-body,
          ${t}-table-content {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `};}),o=[{title:"Name",dataIndex:"name",width:150},{title:"Age",dataIndex:"age",width:150},{title:"Address",dataIndex:"address"}],r=Array.from({length:100}).map((e,a)=>({key:a,name:`Edward King ${a}`,age:32,address:`London, Park Lane no. ${a}`}));var s=()=>{let{styles:e}=d();return(0,l.jsx)(n.Table,{className:e.customTable,columns:o,dataSource:r,pagination:{pageSize:50},scroll:{y:275}});};}}]);