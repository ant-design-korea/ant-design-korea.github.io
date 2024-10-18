(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["702afa58"],{"4963a8ca":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.e(t,{COLOR_IMAGES:function(){return i;},DEFAULT_COLOR:function(){return r;},PINK_COLOR:function(){return l;},PRESET_COLORS:function(){return s;},getAvatarURL:function(){return c;},getClosetColor:function(){return n;}});var o=a("6bff97df");let r="#1677FF",l="#ED4192",i=[{color:r,url:null,webp:null},{color:"#5A54F9",url:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/original",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#9E339F",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*CMCMTKV51tIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:l,url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*s5OdR6wZZIkAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#E0282E",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HE_4Qp_XfQQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F4801A",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xTG2QbottAQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F2BD27",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hbPfSbF-xPIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#00B96B",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*iM6CQ496P3oAAAAAAAAAAAAADrJ8AQ/fmt.webp"}],s=i.map(({color:e})=>e);function n(e){if(!e)return null;let t=(0,o.generateColor)(e).toRgb(),a=i.map(({color:e})=>{let a=(0,o.generateColor)(e).toRgb();return{color:e,dist:Math.sqrt((a.r-t.r)**2+(a.g-t.g)**2+(a.b-t.b)**2)};}).sort((e,t)=>e.dist-t.dist)[0];return a.dist<=33?a.color:null;}function c(e){var t;let a=n(e);return a?(null===(t=i.find(e=>e.color===a))||void 0===t?void 0:t.url)||"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*CLp0Qqc11AkAAAAAAAAAAAAAARQnAQ":null;}},"5cf5a5ca":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return A;}});var o=a("f19d2b93"),r=a("5b220c3d"),l=a("a9d1a279"),i=a("3835a2b7"),s=a("b055b5cb");let n=(0,i.createStyles)(()=>{let{carousel:e}=(0,s.getCarouselStyle)();return{carousel:e,container:(0,i.css)`
      position: relative;
    `,title:(0,i.css)`
      position: absolute;
      top: 15%;
      z-index: 1;
      width: 100%;
      text-align: center;
    `,img:(0,i.css)`
      width: 100%;
    `};}),c=[{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original",titleColor:"rgba(0,0,0,.88)"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3FkqR6XRNgoAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cSX_RbD3k9wAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MldsRZeax6EAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*vCfCSbiI_VIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BeDBTY9UnXIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Q63XTbk8YaMAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"}];var A=e=>{let{styles:t}=n(),{id:a,title:s,description:A}=e,m=(0,i.useTheme)(),[d,u]=(0,r.useState)(0);return(0,o.jsxs)("div",{className:t.container,children:[(0,o.jsxs)("div",{className:t.title,children:[(0,o.jsx)(l.Typography.Title,{id:a,level:1,style:{fontWeight:900,color:c[d].titleColor,fontFamily:`AliPuHui, ${m.fontFamily}`,fontSize:m.fontSizeHeading2},children:s}),(0,o.jsx)(l.Typography.Paragraph,{style:{marginBottom:m.marginXXL,color:c[d].titleColor},children:A})]}),(0,o.jsx)(l.Carousel,{className:t.carousel,afterChange:u,children:c.map((e,a)=>(0,o.jsx)("div",{children:(0,o.jsx)("img",{draggable:!1,src:e.imageSrc,className:t.img,alt:"carousel"})},a))})]});};},"702afa58":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return E;}});var o=a("777fffbe"),r=a("852bbaa9"),l=a("f19d2b93"),i=r._(a("5b220c3d")),s=a("32dfb157"),n=a("e22febe0"),c=a("bbdc6974"),A=a("a9d1a279"),m=a("3835a2b7"),d=a("6bff97df"),u=o._(a("600aabe0")),p=a("9c86e52a"),g=o._(a("40d543ed")),h=o._(a("7483ba91")),b=o._(a("714a8bde")),f=a("6afe185a"),x=o._(a("9f73cc0c")),y=a("b055b5cb"),j=o._(a("7e0d71f5")),v=o._(a("9f364c89")),C=a("4963a8ca"),w=o._(a("5cf5a5ca")),_=o._(a("8af9804b")),k=o._(a("994291a1"));let{Header:D,Content:S,Sider:T}=A.Layout,F=()=>null,R={themeTitle:"Flexible theme customization",themeDesc:"Ant Design 5.0 enable extendable algorithm, make custom theme easier",customizeTheme:"Customize Theme",myTheme:"My Theme",titlePrimaryColor:"Primary Color",titleBorderRadius:"Border Radius",titleCompact:"Compact",titleTheme:"Theme",default:"Default",compact:"Compact",toDef:"More",toUse:"Apply"},L=(0,m.createStyles)(({token:e,css:t,cx:a})=>{let{carousel:o}=(0,y.getCarouselStyle)(),r=t`
    overflow: hidden;
    background: rgba(240, 242, 245, 0.25);
    backdrop-filter: blur(50px);
    box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
    transition: all ${e.motionDurationSlow};
  `;return{demo:r,otherDemo:t`
      &.${a(r)} {
        backdrop-filter: blur(10px);
        background: rgba(247, 247, 247, 0.5);
      }
    `,darkDemo:t`
      &.${a(r)} {
        background: #000;
      }
    `,larkDemo:t`
      &.${a(r)} {
        // background: #f7f7f7;
        background: rgba(240, 242, 245, 0.65);
      }
    `,comicDemo:t`
      &.${a(r)} {
        // background: #ffe4e6;
        background: rgba(240, 242, 245, 0.65);
      }
    `,menu:t`
      margin-inline-start: auto;
    `,header:t`
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${e.colorSplit};
      padding-inline: ${e.paddingLG}px !important;
      height: ${1.2*e.controlHeightLG}px;
      line-height: ${1.2*e.controlHeightLG}px;
    `,headerDark:t`
      border-bottom-color: rgba(255, 255, 255, 0.1);
    `,avatar:t`
      width: ${e.controlHeight}px;
      height: ${e.controlHeight}px;
      border-radius: 100%;
      background: rgba(240, 240, 240, 0.75);
      background-size: cover;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    `,avatarDark:t`
      background: rgba(200, 200, 200, 0.3);
    `,logo:t`
      display: flex;
      align-items: center;
      column-gap: ${e.padding}px;

      h1 {
        font-weight: 400;
        font-size: ${e.fontSizeLG}px;
        line-height: 1.5;
      }
    `,logoImg:t`
      width: 30px;
      height: 30px;
      overflow: hidden;

      img {
        width: 30px;
        height: 30px;
        vertical-align: top;
      }
    `,transBg:t`
      background: transparent !important;
    `,form:t`
      width: 100%;
      margin: 0 auto;
    `,pos:t`
      position: absolute;
    `,leftTopImagePos:t`
      inset-inline-start: 0;
      top: -100px;
      height: 500px;
    `,rightBottomPos:t`
      inset-inline-end: 0;
      bottom: -100px;
      height: 287px;
    `,leftTopImage:t`
      inset-inline-start: 50%;
      transform: translate3d(-900px, 0, 0);
      top: -100px;
      height: 500px;
    `,rightBottomImage:t`
      inset-inline-end: 50%;
      transform: translate3d(750px, 0, 0);
      bottom: -100px;
      height: 287px;
    `,motion:t`
      transition: all ${e.motionDurationSlow};
    `,op1:t`
      opacity: 1;
    `,op0:t`
      opacity: 0;
    `,carousel:o};}),Q=[{key:"Design Values",label:"Design Values"},{key:"Global Styles",label:"Global Styles"},{key:"Themes",label:"Themes"},{key:"DesignPatterns",label:"Design Patterns"}],O=[{key:"Design",label:"Design",icon:(0,l.jsx)(n.FolderOutlined,{}),children:Q},{key:"Development",label:"Development",icon:(0,l.jsx)(n.FolderOutlined,{})}],P={themeType:"default",colorPrimary:"#1677FF",borderRadius:6,compact:"default"},M={default:{},dark:{borderRadius:2},lark:{colorPrimary:"#00B96B",borderRadius:4},comic:{colorPrimary:C.PINK_COLOR,borderRadius:16},v4:{...s.defaultTheme.token}},B=e=>e/255;var E=()=>{let{styles:e}=L(),{search:t}=(0,p.useLocation)(),[a,o]=i.useState(P),r=(e,t)=>{i.startTransition(()=>{o({...M[t.themeType],...t});});},{compact:m,themeType:y,colorPrimary:E,...$}=a,N="dark"!==y,[I]=A.Form.useForm(),{isMobile:z}=i.useContext(b.default),H=i.useMemo(()=>"string"==typeof E?E:E.toHexString(),[E]),J=i.useMemo(()=>{let e=[N?A.theme.defaultAlgorithm:A.theme.darkAlgorithm];return"compact"===m&&e.push(A.theme.compactAlgorithm),"v4"===y&&e.push(s.defaultAlgorithm),e;},[N,m,y]);i.useEffect(()=>{let e={...P,themeType:y,...M[y]};o(e),I.setFieldsValue(e);},[y]);let G=(0,g.default)();i.useEffect(()=>{r({},{...a,themeType:G?"dark":"default"});},[G]);let U=(0,C.getClosetColor)(H),[K,V]=i.useMemo(()=>{let e=A.theme.defaultAlgorithm({...A.theme.defaultConfig.token,colorPrimary:H});return["dark"===y?"#393F4A":U===C.DEFAULT_COLOR?"#F5F8FF":e.colorPrimaryHover,e.colorPrimaryBgHover];},[y,U,H]),X=i.useMemo(()=>{let e=(0,d.generateColor)(H).toHsb();return e.b=Math.min(e.b,.7),(0,d.generateColor)(e).toHexString();},[H]),q=i.useMemo(()=>({token:{...$,colorPrimary:H},algorithm:J,components:{Layout:N?{headerBg:"transparent",bodyBg:"transparent"}:{},Menu:N?{itemBg:"transparent",subMenuItemBg:"transparent",activeBarBorderWidth:0}:{},..."v4"===y?s.defaultTheme.components:{}}}),[$,H,J,y]),Z=(0,l.jsxs)(A.ConfigProvider,{theme:q,children:[(0,l.jsx)(F,{}),(0,l.jsx)("div",{className:(0,u.default)(e.demo,{[e.otherDemo]:N&&U!==C.DEFAULT_COLOR&&e.otherDemo,[e.darkDemo]:!N}),style:{borderRadius:a.borderRadius},children:(0,l.jsxs)(A.Layout,{className:e.transBg,children:[(0,l.jsxs)(D,{className:(0,u.default)(e.header,e.transBg,!N&&e.headerDark),children:[(0,l.jsxs)("div",{className:e.logo,children:[(0,l.jsx)("div",{className:e.logoImg,children:(0,l.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",style:{filter:U===C.DEFAULT_COLOR?void 0:function(e){let{r:t,g:a,b:o}=new c.TinyColor(e).toRgb(),r=100*B(t),l=1e4*Math.max(B(t),B(a),B(o)),i=(180*Math.atan2(Math.sqrt(3)*(B(a)-B(o)),2*B(t)-B(a)-B(o))/Math.PI+360)%360;return`invert(${r}%) sepia(100%) saturate(${l}%) hue-rotate(${i}deg)`;}(X)},alt:"antd logo"})}),(0,l.jsx)("h1",{children:"Ant Design 5.0"})]}),(0,l.jsxs)(A.Flex,{className:e.menu,gap:"middle",children:[(0,l.jsx)(n.BellOutlined,{}),(0,l.jsx)(n.QuestionCircleOutlined,{}),(0,l.jsx)("div",{className:(0,u.default)(e.avatar,{[e.avatarDark]:"dark"===y}),style:{backgroundColor:V,backgroundImage:`url(${(0,C.getAvatarURL)(U)})`}})]})]}),(0,l.jsxs)(A.Layout,{className:e.transBg,hasSider:!0,children:[(0,l.jsx)(T,{className:(0,u.default)(e.transBg),width:200,children:(0,l.jsx)(A.Menu,{mode:"inline",className:(0,u.default)(e.transBg),selectedKeys:["Themes"],openKeys:["Design"],style:{height:"100%",borderRight:0},items:O,expandIcon:!1})}),(0,l.jsxs)(A.Layout,{className:e.transBg,style:{padding:"0 24px 24px"},children:[(0,l.jsx)(A.Breadcrumb,{style:{margin:"16px 0"},items:[{title:(0,l.jsx)(n.HomeOutlined,{})},{title:"Design",menu:{items:Q}},{title:"Themes"}]}),(0,l.jsxs)(S,{children:[(0,l.jsx)(A.Typography.Title,{level:2,children:R.customizeTheme}),(0,l.jsx)(A.Card,{title:R.myTheme,extra:(0,l.jsxs)(A.Flex,{gap:"small",children:[(0,l.jsx)(h.default,{to:(0,f.getLocalizedPathname)("/theme-editor",t),children:R.toDef}),(0,l.jsx)(h.default,{type:"primary",to:(0,f.getLocalizedPathname)("/docs/react/customize-theme",t),children:R.toUse})]}),children:(0,l.jsxs)(A.Form,{form:I,initialValues:a,onValuesChange:r,labelCol:{span:3},wrapperCol:{span:21},className:e.form,children:[(0,l.jsx)(A.Form.Item,{label:R.titleTheme,name:"themeType",children:(0,l.jsx)(k.default,{})}),(0,l.jsx)(A.Form.Item,{label:R.titlePrimaryColor,name:"colorPrimary",children:(0,l.jsx)(v.default,{})}),(0,l.jsx)(A.Form.Item,{label:R.titleBorderRadius,name:"borderRadius",children:(0,l.jsx)(_.default,{})}),(0,l.jsx)(A.Form.Item,{label:R.titleCompact,name:"compact",htmlFor:"compact_default",children:(0,l.jsx)(A.Radio.Group,{options:[{label:R.default,value:"default",id:"compact_default"},{label:R.compact,value:"compact"}]})})]})})]})]})]})]})})]});return z?(0,l.jsx)(w.default,{title:R.themeTitle,description:R.themeDesc,id:"flexible"}):(0,l.jsx)(x.default,{title:R.themeTitle,titleColor:function(e,t){if(!t)return"#FFF";let a=(0,d.generateColor)(e);switch((0,C.getClosetColor)(e)){case C.DEFAULT_COLOR:case C.PINK_COLOR:case"#F2BD27":return;case"#5A54F9":case"#E0282E":return"#FFF";default:return a.toHsb().b<.7?"#FFF":void 0;}}(H,N),description:R.themeDesc,id:"flexible",background:K,decoration:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:(0,u.default)(e.motion,N&&U===C.DEFAULT_COLOR?e.op1:e.op0),children:[(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.leftTopImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/bd71b0c6-f93a-4e52-9c8a-f01a9b8fe22b.svg",alt:""}),(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.rightBottomImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/84ad805a-74cb-4916-b7ba-9cdc2bdec23a.svg",alt:""})]}),(0,l.jsxs)("div",{className:(0,u.default)(e.motion,N&&U?e.op0:e.op1),children:[(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.leftTopImagePos),src:"https://gw.alipayobjects.com/zos/bmw-prod/a213184a-f212-4afb-beec-1e8b36bb4b8a.svg",alt:""}),(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.rightBottomPos),src:"https://gw.alipayobjects.com/zos/bmw-prod/bb74a2fb-bff1-4d0d-8c2d-2ade0cd9bb0d.svg",alt:""})]}),(0,l.jsx)(j.default,{isLight:N,colorPrimary:H})]}),children:Z});};},"7e0d71f5":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return p;}});var o=a("777fffbe"),r=a("852bbaa9"),l=a("f19d2b93"),i=r._(a("5b220c3d")),s=a("3835a2b7"),n=o._(a("600aabe0")),c=a("5d9043f9"),A=a("4963a8ca");let m=(0,s.createStyles)(({token:e})=>({image:(0,s.css)`
    transition: all ${e.motionDurationSlow};
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: right top;
  `})),d=()=>({opacity:1}),u=()=>({opacity:0});var p=({colorPrimary:e,isLight:t})=>{let a=(0,i.useMemo)(()=>(0,A.getClosetColor)(e),[e]),{styles:o}=m(),[r,s]=(0,i.useState)([]);return i.default.useLayoutEffect(()=>{s([a]);},[a]),(0,l.jsx)(c.CSSMotionList,{keys:r,motionName:"transition",onEnterStart:u,onAppearStart:u,onEnterActive:d,onAppearActive:d,onLeaveStart:d,onLeaveActive:u,motionDeadline:500,children:({key:e,className:a,style:r})=>{let i=(0,n.default)(o.image,a),s=A.COLOR_IMAGES.find(t=>t.color===e);if(!s||!s.url)return null;let{opacity:c}=r||{};return(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:s.webp,type:"image/webp"}),(0,l.jsx)("source",{srcSet:s.url,type:"image/jpeg"}),(0,l.jsx)("img",{draggable:!1,className:i,style:{...r,opacity:t?c:0},src:s.url,alt:"bg"})]});}});};},"8af9804b":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return l;}});var o=a("f19d2b93"),r=a("a9d1a279"),l=({id:e,value:t,onChange:a})=>(0,o.jsxs)(r.Flex,{gap:"large",children:[(0,o.jsx)(r.InputNumber,{value:t,onChange:a,style:{width:120},min:0,formatter:e=>`${e}px`,parser:e=>null==e?void 0:e.replace("px",""),id:e}),(0,o.jsx)(r.Slider,{tooltip:{open:!1},style:{width:128},min:0,value:t,max:20,onChange:a})]});},"994291a1":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.e(t,{THEMES:function(){return n;},default:function(){return m;}});var o=a("777fffbe"),r=a("f19d2b93"),l=a("a9d1a279"),i=a("3835a2b7"),s=o._(a("600aabe0"));let n={default:"https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg",dark:"https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg",lark:"https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg",comic:"https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg",v4:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original"},c={default:"Default",dark:"Dark",lark:"Document",comic:"Blossom",v4:"V4 Theme"},A=(0,i.createStyles)(({token:e,css:t})=>({themeCard:t`
    border-radius: ${e.borderRadius}px;
    cursor: pointer;
    transition: all ${e.motionDurationSlow};
    overflow: hidden;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
    }

    img {
      vertical-align: top;
      box-shadow:
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &:focus-within,
    &:hover {
      transform: scale(1.04);
    }
  `,themeCardActive:t`
    box-shadow:
      0 0 0 1px ${e.colorBgContainer},
      0 0 0 ${2*e.controlOutlineWidth+1}px ${e.colorPrimary};
    &,
    &:hover:not(:focus-within) {
      transform: scale(1);
    }
  `}));var m=e=>{let{value:t,id:a,onChange:o}=e,{styles:i}=A();return(0,r.jsx)(l.Flex,{gap:"large",wrap:!0,children:Object.keys(n).map((e,A)=>(0,r.jsxs)(l.Flex,{vertical:!0,gap:"small",justify:"center",align:"center",children:[(0,r.jsxs)("label",{onClick:()=>null==o?void 0:o(e),className:(0,s.default)(i.themeCard,{[i.themeCardActive]:t===e}),children:[(0,r.jsx)("input",{type:"radio",name:"theme",id:0===A?a:void 0}),(0,r.jsx)("img",{src:n[e],alt:e})]}),(0,r.jsx)("span",{children:c[e]})]},e))});};},"9f364c89":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return p;}});var o=a("777fffbe"),r=a("852bbaa9"),l=a("f19d2b93"),i=r._(a("5b220c3d")),s=a("a9d1a279"),n=a("3835a2b7"),c=a("6bff97df"),A=o._(a("600aabe0")),m=a("4963a8ca");let d=(0,n.createStyles)(({token:e,css:t})=>({color:t`
    width: ${e.controlHeightLG/2}px;
    height: ${e.controlHeightLG/2}px;
    border-radius: 100%;
    cursor: pointer;
    transition: all ${e.motionDurationFast};
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
    }

    &:focus-within {
      // need ？
    }
  `,colorActive:t`
    box-shadow:
      0 0 0 1px ${e.colorBgContainer},
      0 0 0 ${2*e.controlOutlineWidth+1}px ${e.colorPrimary};
  `})),u=e=>{let{value:t,children:a,onChange:o}=e,[r,n]=(0,i.useState)(t);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{null==o||o(r);},200);return()=>clearTimeout(e);},[r]),(0,i.useEffect)(()=>{n(t);},[t]),(0,l.jsx)(s.ColorPicker,{value:r,onChange:n,presets:[{label:"PresetColors",colors:m.PRESET_COLORS}],children:a});};var p=({value:e,onChange:t,id:a})=>{let{styles:o}=d(),r=i.default.useMemo(()=>{let t=(0,c.generateColor)(e||"").toRgbString(),a=!1;return[...m.PRESET_COLORS.map(e=>{let o=(0,c.generateColor)(e).toRgbString()===t;return a=a||o,{color:e,active:o,picker:!1};}),{color:"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",picker:!0,active:!a}];},[e]);return(0,l.jsxs)(s.Flex,{gap:"large",align:"center",wrap:!0,children:[(0,l.jsx)(s.Input,{value:"string"==typeof e?e:null==e?void 0:e.toHexString(),onChange:e=>null==t?void 0:t(e.target.value),style:{width:120},id:a}),(0,l.jsx)(s.Flex,{gap:"middle",children:r.map(({color:a,active:r,picker:i})=>{let s=(0,l.jsx)("label",{className:(0,A.default)(o.color,{[o.colorActive]:r}),style:{background:a},onClick:()=>{i||null==t||t(a);},children:(0,l.jsx)("input",{type:"radio",name:i?"picker":"color","aria-label":a,tabIndex:i?-1:0,onClick:e=>e.stopPropagation()})},a);return i?(0,l.jsx)(u,{value:e||"",onChange:t,children:s},`colorpicker-${e}`):s;})})]});};}}]);