(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["7cc6d0b3"],{"35916c6d":function(e,a,t){"use strict";var n=t("852bbaa9")._;t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return y;}});var l=t("777fffbe"),i=t("852bbaa9"),r=t("f19d2b93"),s=i._(t("5b220c3d")),o=t("a9d1a279"),d=t("3835a2b7"),c=l._(t("600aabe0")),u=t("9c86e52a"),b=l._(t("7483ba91")),g=l._(t("714a8bde")),m=i._(t("6afe185a")),x=l._(t("cd4f0a98"));let p=s.default.lazy(()=>Promise.all([t.ensure("vendors_1"),t.ensure("93fdd2ce")]).then(t.dr(n,t.bind(t,"93fdd2ce")))),f="\uB514\uC790\uC774\uB108/\uAC1C\uBC1C\uC790\uAC00 \uC81C\uD488\uC744 \uB354 \uC720\uC5F0\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uACE0 \uB354 \uD589\uBCF5\uD558\uAC8C \uC77C\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4",h="\uC2DC\uC791\uD558\uAE30",j="\uB514\uC790\uC778 \uC5B8\uC5B4",v=()=>{let{direction:e}=s.default.useContext(o.ConfigProvider.ConfigContext),{isMobile:a}=s.default.useContext(g.default),t="rtl"===e;return(0,d.createStyles)(({token:e,css:n,cx:l})=>{let i=`0 0 4px ${e.colorBgContainer}`,r=l(n`
      position: absolute;
      inset: 0;
      backdrop-filter: blur(4px);
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
      transition: all 1s ease;
      pointer-events: none;
    `);return{holder:n`
        height: 640px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        perspective: 800px;
        /* fix safari bug by removing blur style */
        transform: translateZ(1000px);
        row-gap: ${e.marginXL}px;

        &:hover .${r} {
          opacity: 0;
        }
      `,mask:r,typography:n`
        text-align: center;
        position: relative;
        z-index: 1;
        padding-inline: ${e.paddingXL}px;
        text-shadow: ${[,,,,,].fill(null).map(()=>i).join(", ")};

        h1 {
          font-family: AliPuHui, ${e.fontFamily} !important;
          font-weight: 900 !important;
          font-size: ${2*e.fontSizeHeading2}px !important;
          line-height: ${e.lineHeightHeading2} !important;
        }

        p {
          font-size: ${e.fontSizeLG}px !important;
          font-weight: normal !important;
          margin-bottom: 0;
        }
      `,block:n`
        position: absolute;
        inset-inline-end: 0;
        top: -38px;
        transform: ${t?"rotate3d(24, 83, -45, 57deg)":"rotate3d(24, -83, 45, 57deg)"};
      `,child:n`
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        z-index: 1;
      `,btnWrap:n`
        margin-bottom: ${e.marginXL}px;
      `,bgImg:n`
        position: absolute;
        width: 240px;
      `,bgImgTop:n`
        top: 0;
        inset-inline-start: ${a?"-120px":0};
      `,bgImgBottom:n`
        bottom: 120px;
        inset-inline-end: ${a?0:"40%"};
      `};})();};var y=e=>{let{children:a}=e,{styles:t}=v(),{isMobile:n}=s.default.useContext(g.default),{search:l}=(0,u.useLocation)();return(0,r.jsxs)(x.default,{children:[(0,r.jsx)("img",{alt:"bg",src:"https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg",draggable:!1,className:(0,c.default)(t.bgImg,t.bgImgTop)}),(0,r.jsx)("img",{alt:"bg",src:"https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg",draggable:!1,className:(0,c.default)(t.bgImg,t.bgImgBottom)}),(0,r.jsxs)("div",{className:t.holder,children:[(0,r.jsx)(s.Suspense,{fallback:null,children:n?null:(0,r.jsx)("div",{className:t.block,children:(0,r.jsx)(p,{})})}),(0,r.jsx)("div",{className:t.mask}),(0,r.jsxs)(o.Typography,{className:t.typography,children:[(0,r.jsx)("h1",{children:"Ant Design 5.0"}),(0,r.jsx)("p",{children:f})]}),(0,r.jsxs)(o.Flex,{gap:"middle",className:t.btnWrap,children:[(0,r.jsx)(b.default,{size:"large",type:"primary",to:m.getLocalizedPathname("/components/overview/",l),children:h}),(0,r.jsx)(b.default,{size:"large",to:m.getLocalizedPathname("/docs/spec/introduce/",l),children:j})]}),(0,r.jsx)("div",{className:t.child,children:a})]})]});};},"7cc6d0b3":function(e,a,t){"use strict";var n=t("852bbaa9")._;t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return _;}});var l=t("777fffbe"),i=t("852bbaa9"),r=t("f19d2b93"),s=i._(t("5b220c3d")),o=t("a9d1a279"),d=t("3835a2b7"),c=l._(t("40d543ed")),u=l._(t("a014730a")),b=l._(t("9f73cc0c")),g=l._(t("35916c6d"));let m=s.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("6db7de95")]).then(t.dr(n,t.bind(t,"6db7de95")))),x=s.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("abb8dde3")]).then(t.dr(n,t.bind(t,"abb8dde3")))),p=s.default.lazy(()=>Promise.all([t.ensure("vendors_1"),t.ensure("common"),t.ensure("702afa58")]).then(t.dr(n,t.bind(t,"702afa58")))),f=(0,d.createStyles)(()=>({image:(0,d.css)`
    position: absolute;
    inset-inline-start: 0;
    top: -50px;
    height: 160px;
  `})),h="\uB2E4\uC591\uD55C \uCEF4\uD3EC\uB10C\uD2B8",j="\uC5EC\uB7EC \uAC00\uC9C0 \uC694\uAD6C\uB97C \uCDA9\uC871\uD558\uB294 \uC2E4\uC6A9\uC801\uC778 \uCEF4\uD3EC\uB10C\uD2B8, \uC720\uC5F0\uD55C \uC0AC\uC6A9\uC790 \uC815\uC758 \uBC0F \uD655\uC7A5",v="\uB514\uC790\uC778 \uBC0F \uD504\uB808\uC784\uC6CC\uD06C",y="\uB2E4\uC591\uD55C \uB3C4\uAD6C\uC640 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC9C0\uC6D0\uD558\uC5EC \uC6F9\uC0AC\uC774\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E0\uC18D\uD558\uAC8C \uAD6C\uCD95\uD560 \uC218 \uC788\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4.";var _=()=>{let{styles:e}=f(),{token:a}=o.theme.useToken(),t=(0,c.default)();return(0,r.jsxs)("section",{children:[(0,r.jsx)(g.default,{children:(0,r.jsx)(u.default,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.ConfigProvider,{theme:{algorithm:o.theme.defaultAlgorithm},children:(0,r.jsx)(s.Suspense,{fallback:null,children:(0,r.jsx)(p,{})})}),(0,r.jsx)(b.default,{background:a.colorBgElevated,collapse:!0,title:h,description:j,id:"design",children:(0,r.jsx)(s.Suspense,{fallback:null,children:(0,r.jsx)(m,{})})}),(0,r.jsx)(b.default,{title:v,description:y,background:t?"#393F4A":"#F5F8FF",decoration:(0,r.jsx)("img",{draggable:!1,className:e.image,src:"https://gw.alipayobjects.com/zos/bmw-prod/ba37a413-28e6-4be4-b1c5-01be1a0ebb1c.svg",alt:"bg"}),children:(0,r.jsx)(s.Suspense,{fallback:null,children:(0,r.jsx)(x,{})})})]})]});};},a014730a:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.e(a,{BannerRecommendsFallback:function(){return m;},default:function(){return x;}});var n=t("777fffbe"),l=t("852bbaa9"),i=t("f19d2b93"),r=l._(t("5b220c3d")),s=t("a9d1a279"),o=t("3835a2b7"),d=n._(t("600aabe0")),c=n._(t("714a8bde")),u=t("b055b5cb");let b=(0,o.createStyles)(({token:e,css:a,cx:t})=>{let{carousel:n}=(0,u.getCarouselStyle)(),l=a`
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: stretch;
    text-decoration: none;
    background: ${e.colorBgContainer};
    border: ${e.lineWidth}px solid ${e.colorBorderSecondary};
    border-radius: ${e.borderRadiusLG}px;
    transition: all ${e.motionDurationSlow};
    padding-block: ${e.paddingMD}px;
    padding-inline: ${e.paddingLG}px;
    box-sizing: border-box;
  `;return{itemBase:l,ribbon:a`
      & > .${t(l)} {
        height: 100%;
      }
    `,cardItem:a`
      &:hover {
        box-shadow: ${e.boxShadowCard};
      }
    `,sliderItem:a`
      margin: 0 ${e.margin}px;
      text-align: start;
    `,container:a`
      display: flex;
      width: 100%;
      max-width: 100%;
      margin-inline: auto;
      box-sizing: border-box;
      column-gap: ${2*e.paddingMD}px;
      align-items: stretch;
      text-align: start;
      min-height: 178px;
      > * {
        width: calc((100% - ${2*e.marginXXL}px) / 3);
      }
    `,carousel:n,bannerBg:a`
      height: ${e.fontSize}px;
    `};}),g=({extra:e,index:a,icons:t,className:n})=>{let{styles:l}=b();if(!e)return(0,i.jsx)(s.Skeleton,{},a);let r=t.find(a=>a.name===e.source),o=(0,i.jsxs)("a",{href:e.href,target:"_blank",className:(0,d.default)(l.itemBase,n),rel:"noreferrer",children:[(0,i.jsx)(s.Typography.Title,{level:5,children:null==e?void 0:e.title}),(0,i.jsx)(s.Typography.Paragraph,{type:"secondary",style:{flex:"auto"},children:e.description}),(0,i.jsxs)(s.Flex,{justify:"space-between",align:"center",children:[(0,i.jsx)(s.Typography.Text,{children:e.date}),r&&(0,i.jsx)("img",{src:r.href,draggable:!1,className:l.bannerBg,alt:"banner"})]})]},null==e?void 0:e.title);return 0===a?(0,i.jsx)(s.Badge.Ribbon,{text:"HOT",color:"red",rootClassName:l.ribbon,children:o}):o;},m=()=>{let{isMobile:e}=(0,r.useContext)(c.default),{styles:a}=b(),t=[,,,].fill(1);return e?(0,i.jsx)(s.Carousel,{className:a.carousel,children:t.map((e,t)=>(0,i.jsx)("div",{className:a.itemBase,children:(0,i.jsx)(s.Skeleton,{active:!0,style:{padding:"0 24px"}})},t))}):(0,i.jsx)("div",{className:a.container,children:t.map((e,t)=>(0,i.jsx)("div",{className:a.itemBase,children:(0,i.jsx)(s.Skeleton,{active:!0})},t))});};var x=()=>{var e;let{styles:a}=b(),{isMobile:t}=r.default.useContext(c.default),n=(0,u.useSiteData)(),l=null==n?void 0:null===(e=n.extras)||void 0===e?void 0:e.ko,o=(null==n?void 0:n.icons)||[],d=l&&0!==l.length?l.slice(0,3):[,,,].fill(null);return n?t?(0,i.jsx)(s.Carousel,{className:a.carousel,children:d.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(g,{extra:e,index:t,icons:o,className:a.sliderItem})},t))}):(0,i.jsx)("div",{className:a.container,children:d.map((e,t)=>(0,i.jsx)(g,{extra:e,index:t,icons:o,className:a.cardItem},t))}):(0,i.jsx)(m,{});};}}]);