(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["abb8dde3"],{abb8dde3:function(a,e,r){"use strict";r.d(e,"__esModule",{value:!0}),r.d(e,"default",{enumerable:!0,get:function(){return y;}});var t=r("777fffbe"),s=r("852bbaa9"),i=r("f19d2b93"),d=r("5b220c3d"),l=r("a9d1a279"),o=r("3835a2b7"),n=r("9c86e52a"),c=t._(r("40d543ed")),g=t._(r("0a03b273")),p=t._(r("714a8bde")),b=s._(r("6afe185a"));let m=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",key:"mobile",url:"https://mobile.ant.design/",imgScale:1.5},{img:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",key:"antv",url:"https://antv.vision/"},{img:"https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg",key:"kitchen",url:"https://kitchen.alipay.com/"}],h={values:"\uB514\uC790\uC778 \uAC00\uCE58",valuesDesc:"\uD655\uC2E0, \uC758\uBBF8, \uC131\uC7A5, \uC790\uC5F0",guide:"\uB514\uC790\uC778 \uAC00\uC774\uB4DC",guideDesc:"\uC804\uC5ED \uC2A4\uD0C0\uC77C \uBC0F \uB514\uC790\uC778 \uD328\uD134",lib:"\uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"\uBAA8\uBC14\uC77C UI \uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC",antv:"AntV",antvDesc:"\uB370\uC774\uD130 \uC2DC\uAC01\uD654 \uC194\uB8E8\uC158\uC758 \uC0C8\uB85C\uC6B4 \uC138\uB300",kitchen:"Kitchen",kitchenDesc:"\uB514\uC790\uC774\uB108\uB97C \uC704\uD55C Sketch \uB3C4\uAD6C \uC138\uD2B8"},u=()=>{let a=(0,c.default)();return(0,o.createStyles)(({token:e,css:r})=>({card:r`
      padding: ${e.paddingSM}px;
      border-radius: ${2*e.borderRadius}px;
      background: ${a?"rgba(0, 0, 0, 0.45)":e.colorBgElevated};
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.03),
        0 1px 6px -1px rgba(0, 0, 0, 0.02),
        0 2px 4px rgba(0, 0, 0, 0.02);

      img {
        width: 100%;
        vertical-align: top;
        border-radius: ${e.borderRadius}px;
      }
    `,cardMini:r`
      display: block;
      border-radius: ${2*e.borderRadius}px;
      padding: ${e.paddingMD}px ${e.paddingLG}px;
      background: ${a?"rgba(0, 0, 0, 0.25)":"rgba(0, 0, 0, 0.02)"};
      border: 1px solid ${a?"rgba(255, 255, 255, 0.45)":"rgba(0, 0, 0, 0.06)"};

      img {
        height: 48px;
      }
    `}))();};var y=()=>{let a=(0,o.useTheme)(),{styles:e}=u(),{search:r}=(0,n.useLocation)(),{isMobile:t}=(0,d.useContext)(p.default),s=t?24:8,c=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/36a89a46-4224-46e2-b838-00817f5eb364.svg",key:"values",path:b.getLocalizedPathname("/docs/spec/values/",r)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/8379430b-e328-428e-8a67-666d1dd47f7d.svg",key:"guide",path:b.getLocalizedPathname("/docs/spec/colors/",r)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg",key:"lib",path:b.getLocalizedPathname("/docs/react/introduce/",r)}];return(0,i.jsxs)(l.Row,{gutter:[a.marginXL,a.marginXL],children:[c.map(({img:r,key:t,path:d},o)=>{let n=h[t],c=h[`${t}Desc`];return(0,i.jsx)(l.Col,{span:s,children:(0,i.jsx)(g.default,{to:d,children:(0,i.jsxs)("div",{className:e.card,children:[(0,i.jsx)("img",{draggable:!1,alt:n,src:r}),(0,i.jsx)(l.Typography.Title,{level:4,style:{marginTop:a.margin,marginBottom:a.marginXS},children:n}),(0,i.jsx)(l.Typography.Paragraph,{type:"secondary",style:{margin:0},children:c})]})})},o);}),m.map(({img:r,key:t,url:d,imgScale:o=1},n)=>{let c=h[t],g=h[`${t}Desc`];return(0,i.jsx)(l.Col,{span:s,children:(0,i.jsxs)("a",{className:e.cardMini,target:"_blank",href:d,rel:"noreferrer",children:[(0,i.jsx)("img",{draggable:!1,alt:c,src:r,style:{transform:`scale(${o})`}}),(0,i.jsx)(l.Typography.Title,{level:4,style:{marginTop:a.margin,marginBottom:a.marginXS},children:c}),(0,i.jsx)(l.Typography.Paragraph,{type:"secondary",style:{margin:0},children:g})]})},n);})]});};}}]);