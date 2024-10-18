(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a2a5b19a"],{"77f99bbc":function(e,t,s){"use strict";s.d(t,"__esModule",{value:!0}),s.d(t,"default",{enumerable:!0,get:function(){return n;}});var i=s("f19d2b93"),n=e=>{let{className:t,style:s}=e;return(0,i.jsxs)("svg",{className:t,style:s,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:[(0,i.jsx)("title",{children:"Juejin logo"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})]});};},a2a5b19a:function(e,t,s){"use strict";s.d(t,"__esModule",{value:!0}),s.d(t,"default",{enumerable:!0,get:function(){return g;}});var i=s("777fffbe"),n=s("f19d2b93"),l=s("e22febe0"),a=s("a9d1a279"),r=s("3835a2b7"),o=i._(s("600aabe0")),d=i._(s("77f99bbc"));let c="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",u=(0,r.createStyles)(({token:e,css:t})=>({card:t`
    width: 100%;
    margin: ${2*e.marginMD}px 0;
    transition: all ${e.motionDurationMid};
    background-color: ${e.colorFillQuaternary};
  `,bigTitle:t`
    color: #121212;
    font-size: ${e.fontSizeLG}px;
    margin-bottom: ${e.marginLG}px;
    font-weight: ${e.fontWeightStrong};
  `,cardBody:t`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,leftCard:t`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 200px;
      overflow: hidden;
      margin-inline-end: ${e.marginLG}px;
      border-radius: ${e.borderRadiusLG}px;
    }
  `,title:t`
    color: #444;
    font-size: ${e.fontSizeLG}px;
    font-weight: ${e.fontWeightStrong};
    user-select: none;
  `,subTitle:t`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #646464;
    font-size: ${e.fontSize}px;
    font-weight: 400;
    margin-top: ${e.marginXS}px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,logo:t`
    width: 24px;
    height: 24px;
    font-size: 24px;
    &.zhihu-logo {
      color: #056de8;
    }
    &.yuque-logo {
      color: #00b96b;
    }
    &.juejin-logo {
      color: #1e80ff;
    }
  `,arrowIcon:t`
    color: #8a8f8d;
    margin: 0 ${e.marginXS}px;
    font-size: ${e.fontSizeSM}px;
  `,zlBtn:t`
    padding: 0;
    color: #646464;
  `,discussLogo:t`
    width: 16px;
    height: 16px;
    font-size: 16px;
  `})),h={bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"};var g=({zhihuLink:e,yuqueLink:t,juejinLink:s})=>{let{styles:{card:i,bigTitle:r,cardBody:g,leftCard:x,title:m,subTitle:f,logo:j,arrowIcon:p,zlBtn:b,discussLogo:v}}=u();return e||t||s?(0,n.jsxs)(a.Card,{className:i,bordered:!1,children:[(0,n.jsx)("h3",{className:r,children:h.bigTitle}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Divider,{}),(0,n.jsxs)("div",{className:g,children:[(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("img",{draggable:!1,src:c,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:m,children:"Ant Design"}),(0,n.jsxs)("div",{className:f,children:[(0,n.jsx)(l.ZhihuOutlined,{className:(0,o.default)(j,"zhihu-logo")}),(0,n.jsx)(l.RightOutlined,{className:p}),(0,n.jsx)(a.Button,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:b,type:"link",children:h.zhiHu})]})]})]}),(0,n.jsx)(a.Button,{ghost:!0,type:"primary",icon:(0,n.jsx)(l.ZhihuOutlined,{className:v}),target:"_blank",href:e,children:h.buttonText})]})]}),t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Divider,{}),(0,n.jsxs)("div",{className:g,children:[(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("img",{draggable:!1,src:c,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:m,children:"Ant Design"}),(0,n.jsxs)("div",{className:f,children:[(0,n.jsx)(l.YuqueOutlined,{className:(0,o.default)(j,"yuque-logo")}),(0,n.jsx)(l.RightOutlined,{className:p}),(0,n.jsx)(a.Button,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:b,type:"link",children:h.yuQue})]})]})]}),(0,n.jsx)(a.Button,{ghost:!0,type:"primary",icon:(0,n.jsx)(l.YuqueOutlined,{className:v}),target:"_blank",href:t,children:h.buttonText})]})]}),s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Divider,{}),(0,n.jsxs)("div",{className:g,children:[(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("img",{draggable:!1,src:c,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:m,children:"Ant Design"}),(0,n.jsxs)("div",{className:f,children:[(0,n.jsx)(d.default,{className:(0,o.default)(j,"juejin-logo")}),(0,n.jsx)(l.RightOutlined,{className:p}),(0,n.jsx)(a.Button,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:b,type:"link",children:h.junjin})]})]})]}),(0,n.jsx)(a.Button,{ghost:!0,type:"primary",icon:(0,n.jsx)(d.default,{className:v}),target:"_blank",href:s,children:h.buttonText})]})]})]}):null;};}}]);