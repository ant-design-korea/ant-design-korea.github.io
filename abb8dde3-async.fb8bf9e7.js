(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["abb8dde3"],{abb8dde3:function(e,a,s){"use strict";s.d(a,"__esModule",{value:!0}),s.d(a,"default",{enumerable:!0,get:function(){return y;}});var t=s("777fffbe"),r=s("852bbaa9"),i=s("f19d2b93"),n=s("5b220c3d"),o=s("a9d1a279"),l=s("3835a2b7"),d=s("9c86e52a"),g=t._(s("40d543ed")),c=t._(s("0a03b273")),b=t._(s("714a8bde")),p=r._(s("6afe185a"));let m=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",key:"mobile",url:"https://mobile.ant.design/",imgScale:1.5},{img:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",key:"antv",url:"https://antv.vision/"},{img:"https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg",key:"kitchen",url:"https://kitchen.alipay.com/"}],h={values:"Design values",valuesDesc:"Certainty, Meaningfulness, Growth, Naturalness",guide:"Design guide",guideDesc:"Global style and design pattern",lib:"Components Libraries",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"Mobile UI component library",antv:"AntV",antvDesc:"New generation of data visualization solutions",kitchen:"Kitchen",kitchenDesc:"Sketch Tool set for designers"},u=()=>{let e=(0,g.default)();return(0,l.createStyles)(({token:a,css:s})=>({card:s`
      padding: ${a.paddingSM}px;
      border-radius: ${2*a.borderRadius}px;
      background: ${e?"rgba(0, 0, 0, 0.45)":a.colorBgElevated};
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.03),
        0 1px 6px -1px rgba(0, 0, 0, 0.02),
        0 2px 4px rgba(0, 0, 0, 0.02);

      img {
        width: 100%;
        vertical-align: top;
        border-radius: ${a.borderRadius}px;
      }
    `,cardMini:s`
      display: block;
      border-radius: ${2*a.borderRadius}px;
      padding: ${a.paddingMD}px ${a.paddingLG}px;
      background: ${e?"rgba(0, 0, 0, 0.25)":"rgba(0, 0, 0, 0.02)"};
      border: 1px solid ${e?"rgba(255, 255, 255, 0.45)":"rgba(0, 0, 0, 0.06)"};

      img {
        height: 48px;
      }
    `}))();};var y=()=>{let e=(0,l.useTheme)(),{styles:a}=u(),{search:s}=(0,d.useLocation)(),{isMobile:t}=(0,n.useContext)(b.default),r=t?24:8,g=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/36a89a46-4224-46e2-b838-00817f5eb364.svg",key:"values",path:p.getLocalizedPathname("/docs/spec/values/",s)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/8379430b-e328-428e-8a67-666d1dd47f7d.svg",key:"guide",path:p.getLocalizedPathname("/docs/spec/colors/",s)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg",key:"lib",path:p.getLocalizedPathname("/docs/react/introduce/",s)}];return(0,i.jsxs)(o.Row,{gutter:[e.marginXL,e.marginXL],children:[g.map(({img:s,key:t,path:n},l)=>{let d=h[t],g=h[`${t}Desc`];return(0,i.jsx)(o.Col,{span:r,children:(0,i.jsx)(c.default,{to:n,children:(0,i.jsxs)("div",{className:a.card,children:[(0,i.jsx)("img",{draggable:!1,alt:d,src:s}),(0,i.jsx)(o.Typography.Title,{level:4,style:{marginTop:e.margin,marginBottom:e.marginXS},children:d}),(0,i.jsx)(o.Typography.Paragraph,{type:"secondary",style:{margin:0},children:g})]})})},l);}),m.map(({img:s,key:t,url:n,imgScale:l=1},d)=>{let g=h[t],c=h[`${t}Desc`];return(0,i.jsx)(o.Col,{span:r,children:(0,i.jsxs)("a",{className:a.cardMini,target:"_blank",href:n,rel:"noreferrer",children:[(0,i.jsx)("img",{draggable:!1,alt:g,src:s,style:{transform:`scale(${l})`}}),(0,i.jsx)(o.Typography.Title,{level:4,style:{marginTop:e.margin,marginBottom:e.marginXS},children:g}),(0,i.jsx)(o.Typography.Paragraph,{type:"secondary",style:{margin:0},children:c})]})},d);})]});};}}]);