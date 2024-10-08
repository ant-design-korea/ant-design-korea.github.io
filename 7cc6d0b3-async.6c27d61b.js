(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["7cc6d0b3"],{"35916c6d":function(e,a,t){"use strict";var n=t("852bbaa9")._;t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return j;}});var i=t("777fffbe"),l=t("852bbaa9"),s=t("f19d2b93"),r=l._(t("5b220c3d")),o=t("a9d1a279"),d=t("3835a2b7"),c=i._(t("600aabe0")),g=t("9c86e52a"),u=i._(t("7483ba91")),b=i._(t("714a8bde")),p=l._(t("6afe185a")),m=i._(t("cd4f0a98"));let x=r.default.lazy(()=>Promise.all([t.ensure("vendors_2"),t.ensure("93fdd2ce")]).then(t.dr(n,t.bind(t,"93fdd2ce")))),f={ko:{slogan:"Help designers/developers building beautiful products more flexible and working with happiness",start:"Getting Started",designLanguage:"Design Language"}},h=()=>{let{direction:e}=r.default.useContext(o.ConfigProvider.ConfigContext),{isMobile:a}=r.default.useContext(b.default),t="rtl"===e;return(0,d.createStyles)(({token:e,css:n,cx:i})=>{let l=`0 0 4px ${e.colorBgContainer}`,s=i(n`
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

        &:hover .${s} {
          opacity: 0;
        }
      `,mask:s,typography:n`
        text-align: center;
        position: relative;
        z-index: 1;
        padding-inline: ${e.paddingXL}px;
        text-shadow: ${[,,,,,].fill(null).map(()=>l).join(", ")};

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
      `};})();};var j=e=>{let{children:a}=e,t=f.ko,{styles:n}=h(),{isMobile:i}=r.default.useContext(b.default),{search:l}=(0,g.useLocation)();return(0,s.jsxs)(m.default,{children:[(0,s.jsx)("img",{alt:"bg",src:"https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg",draggable:!1,className:(0,c.default)(n.bgImg,n.bgImgTop)}),(0,s.jsx)("img",{alt:"bg",src:"https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg",draggable:!1,className:(0,c.default)(n.bgImg,n.bgImgBottom)}),(0,s.jsxs)("div",{className:n.holder,children:[(0,s.jsx)(r.Suspense,{fallback:null,children:i?null:(0,s.jsx)("div",{className:n.block,children:(0,s.jsx)(x,{})})}),(0,s.jsx)("div",{className:n.mask}),(0,s.jsxs)(o.Typography,{className:n.typography,children:[(0,s.jsx)("h1",{children:"Ant Design 5.0"}),(0,s.jsx)("p",{children:t.slogan})]}),(0,s.jsxs)(o.Flex,{gap:"middle",className:n.btnWrap,children:[(0,s.jsx)(u.default,{size:"large",type:"primary",to:p.getLocalizedPathname("/components/overview/",l),children:t.start}),(0,s.jsx)(u.default,{size:"large",to:p.getLocalizedPathname("/docs/spec/introduce/",l),children:t.designLanguage})]}),(0,s.jsx)("div",{className:n.child,children:a})]})]});};},"7cc6d0b3":function(e,a,t){"use strict";var n=t("852bbaa9")._;t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return j;}});var i=t("777fffbe"),l=t("852bbaa9"),s=t("f19d2b93"),r=l._(t("5b220c3d")),o=t("a9d1a279"),d=t("3835a2b7"),c=i._(t("40d543ed")),g=i._(t("a014730a")),u=i._(t("9f73cc0c")),b=i._(t("35916c6d"));let p=r.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("6db7de95")]).then(t.dr(n,t.bind(t,"6db7de95")))),m=r.default.lazy(()=>Promise.all([t.ensure("vendors_2"),t.ensure("common"),t.ensure("abb8dde3")]).then(t.dr(n,t.bind(t,"abb8dde3")))),x=r.default.lazy(()=>Promise.all([t.ensure("vendors_2"),t.ensure("common"),t.ensure("702afa58")]).then(t.dr(n,t.bind(t,"702afa58")))),f=(0,d.createStyles)(()=>({image:(0,d.css)`
    position: absolute;
    inset-inline-start: 0;
    top: -50px;
    height: 160px;
  `})),h={ko:{assetsTitle:"Rich components",assetsDesc:"Practical components to meet your needs, flexible customization and expansion",designTitle:"Design and framework",designDesc:"Supporting ecology, allowing you to quickly build website applications"}};var j=()=>{let e=h.ko,{styles:a}=f(),{token:t}=o.theme.useToken(),n=(0,c.default)();return(0,s.jsxs)("section",{children:[(0,s.jsx)(b.default,{children:(0,s.jsx)(g.default,{})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.ConfigProvider,{theme:{algorithm:o.theme.defaultAlgorithm},children:(0,s.jsx)(r.Suspense,{fallback:null,children:(0,s.jsx)(x,{})})}),(0,s.jsx)(u.default,{background:t.colorBgElevated,collapse:!0,title:e.assetsTitle,description:e.assetsDesc,id:"design",children:(0,s.jsx)(r.Suspense,{fallback:null,children:(0,s.jsx)(p,{})})}),(0,s.jsx)(u.default,{title:e.designTitle,description:e.designDesc,background:n?"#393F4A":"#F5F8FF",decoration:(0,s.jsx)("img",{draggable:!1,className:a.image,src:"https://gw.alipayobjects.com/zos/bmw-prod/ba37a413-28e6-4be4-b1c5-01be1a0ebb1c.svg",alt:"bg"}),children:(0,s.jsx)(r.Suspense,{fallback:null,children:(0,s.jsx)(m,{})})})]})]});};},a014730a:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.e(a,{BannerRecommendsFallback:function(){return p;},default:function(){return m;}});var n=t("777fffbe"),i=t("852bbaa9"),l=t("f19d2b93"),s=i._(t("5b220c3d")),r=t("a9d1a279"),o=t("3835a2b7"),d=n._(t("600aabe0")),c=n._(t("714a8bde")),g=t("b055b5cb");let u=(0,o.createStyles)(({token:e,css:a,cx:t})=>{let{carousel:n}=(0,g.getCarouselStyle)(),i=a`
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
  `;return{itemBase:i,ribbon:a`
      & > .${t(i)} {
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
    `};}),b=({extra:e,index:a,icons:t,className:n})=>{let{styles:i}=u();if(!e)return(0,l.jsx)(r.Skeleton,{},a);let s=t.find(a=>a.name===e.source),o=(0,l.jsxs)("a",{href:e.href,target:"_blank",className:(0,d.default)(i.itemBase,n),rel:"noreferrer",children:[(0,l.jsx)(r.Typography.Title,{level:5,children:null==e?void 0:e.title}),(0,l.jsx)(r.Typography.Paragraph,{type:"secondary",style:{flex:"auto"},children:e.description}),(0,l.jsxs)(r.Flex,{justify:"space-between",align:"center",children:[(0,l.jsx)(r.Typography.Text,{children:e.date}),s&&(0,l.jsx)("img",{src:s.href,draggable:!1,className:i.bannerBg,alt:"banner"})]})]},null==e?void 0:e.title);return 0===a?(0,l.jsx)(r.Badge.Ribbon,{text:"HOT",color:"red",rootClassName:i.ribbon,children:o}):o;},p=()=>{let{isMobile:e}=(0,s.useContext)(c.default),{styles:a}=u(),t=[,,,].fill(1);return e?(0,l.jsx)(r.Carousel,{className:a.carousel,children:t.map((e,t)=>(0,l.jsx)("div",{className:a.itemBase,children:(0,l.jsx)(r.Skeleton,{active:!0,style:{padding:"0 24px"}})},t))}):(0,l.jsx)("div",{className:a.container,children:t.map((e,t)=>(0,l.jsx)("div",{className:a.itemBase,children:(0,l.jsx)(r.Skeleton,{active:!0})},t))});};var m=()=>{var e;let{styles:a}=u(),{isMobile:t}=s.default.useContext(c.default),n=(0,g.useSiteData)(),i=null==n?void 0:null===(e=n.extras)||void 0===e?void 0:e.ko,o=(null==n?void 0:n.icons)||[],d=i&&0!==i.length?i.slice(0,3):[,,,].fill(null);return n?t?(0,l.jsx)(r.Carousel,{className:a.carousel,children:d.map((e,t)=>(0,l.jsx)("div",{children:(0,l.jsx)(b,{extra:e,index:t,icons:o,className:a.sliderItem})},t))}):(0,l.jsx)("div",{className:a.container,children:d.map((e,t)=>(0,l.jsx)(b,{extra:e,index:t,icons:o,className:a.cardItem},t))}):(0,l.jsx)(p,{});};}}]);