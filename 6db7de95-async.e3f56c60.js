(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["6db7de95"],{"6db7de95":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return v;}});var s=l("777fffbe"),a=l("852bbaa9"),n=l("f19d2b93"),i=a._(l("5b220c3d")),r=l("e22febe0"),o=l("a9d1a279"),d=l("3835a2b7"),c=s._(l("600aabe0")),u=s._(l("072ab8a9")),p=s._(l("40d543ed")),x=s._(l("714a8bde")),g=l("b055b5cb");let{_InternalPanelDoNotUseOrYouWillBeFired:m}=o.Modal,{_InternalPanelDoNotUseOrYouWillBeFired:h}=o.DatePicker,{_InternalPanelDoNotUseOrYouWillBeFired:f}=o.Tour,{_InternalPanelDoNotUseOrYouWillBeFired:b}=o.FloatButton,y={yesterday:"Yesterday",lastWeek:"Last Week",lastMonth:"Last Month",lastYear:"Last Year",new:"New",update:"Update",sampleContent:"Ant Design 5.0 use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.",inProgress:"In Progress",success:"Success",taskFailed:"Task Failed",tour:"A quick guide for new come user about how to use app."},j=()=>{let e=(0,p.default)();return(0,d.createStyles)(({token:t})=>{let{carousel:l}=(0,g.getCarouselStyle)();return{card:(0,d.css)`
        border-radius: ${t.borderRadius}px;
        border: 1px solid ${e?t.colorBorder:"transparent"};
        background: ${e?t.colorBgContainer:"#f5f8ff"};
        padding: ${t.paddingXL}px;
        flex: none;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        > * {
          flex: none;
        }
      `,cardCircle:(0,d.css)`
        position: absolute;
        width: 120px;
        height: 120px;
        background: #1677ff;
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.1;
      `,mobileCard:(0,d.css)`
        height: 395px;
      `,nodeWrap:(0,d.css)`
        margin-top: ${t.paddingLG}px;
        flex: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      `,carousel:l,componentsList:(0,d.css)`
        width: 100%;
        overflow: hidden;
      `,mobileComponentsList:(0,d.css)`
        margin: 0 ${t.margin}px;
      `};})();},C=({title:e,node:t,type:l,index:s})=>{let a="new"===l?y.new:y.update,{styles:r}=j(),{isMobile:d}=(0,i.useContext)(x.default);return(0,n.jsxs)("div",{className:(0,c.default)(r.card,d&&r.mobileCard),children:[(0,n.jsx)("div",{className:r.cardCircle,style:{insetInlineEnd:-(s%2*20)-20,bottom:-(s%3*40)-20}}),(0,n.jsxs)(o.Flex,{align:"center",gap:"small",children:[(0,n.jsx)(o.Typography.Title,{level:4,style:{fontWeight:"normal",margin:0},children:e}),(0,n.jsx)(o.Tag,{color:"new"===l?"processing":"warning",children:a})]}),(0,n.jsx)("div",{className:r.nodeWrap,children:t})]});};var v=()=>{let{styles:e}=j(),{isMobile:t}=(0,i.useContext)(x.default),l=i.default.useMemo(()=>[{title:"Modal",type:"update",node:(0,n.jsx)(m,{title:"Ant Design 5.0",width:300,children:y.sampleContent})},{title:"DatePicker",type:"update",node:(0,n.jsx)(h,{value:(0,u.default)("2022-11-18 14:00:00"),showToday:!1,presets:t?[]:[{label:y.yesterday,value:(0,u.default)().add(-1,"d")},{label:y.lastWeek,value:(0,u.default)().add(-7,"d")},{label:y.lastMonth,value:(0,u.default)().add(-1,"month")},{label:y.lastYear,value:(0,u.default)().add(-1,"year")}]})},{title:"Progress",type:"update",node:(0,n.jsxs)(o.Flex,{gap:"small",vertical:!0,children:[(0,n.jsxs)(o.Flex,{gap:"small",align:"center",children:[(0,n.jsx)(o.Progress,{type:"circle",trailColor:"#e6f4ff",percent:60,size:14}),y.inProgress]}),(0,n.jsxs)(o.Flex,{gap:"small",align:"center",children:[(0,n.jsx)(o.Progress,{type:"circle",percent:100,size:14}),y.success]}),(0,n.jsxs)(o.Flex,{gap:"small",align:"center",children:[(0,n.jsx)(o.Progress,{type:"circle",status:"exception",percent:88,size:14}),y.taskFailed]})]})},{title:"Tour",type:"new",node:(0,n.jsx)(f,{title:"Ant Design 5.0",description:y.tour,style:{width:t?"auto":350},current:3,total:9})},{title:"FloatButton",type:"new",node:(0,n.jsxs)(o.Flex,{align:"center",gap:"large",children:[(0,n.jsx)(b,{shape:"square",items:[{icon:(0,n.jsx)(r.QuestionCircleOutlined,{})},{icon:(0,n.jsx)(r.CustomerServiceOutlined,{})},{icon:(0,n.jsx)(r.SyncOutlined,{})}]}),(0,n.jsx)(b,{backTop:!0}),(0,n.jsx)(b,{items:[{icon:(0,n.jsx)(r.QuestionCircleOutlined,{})},{icon:(0,n.jsx)(r.CustomerServiceOutlined,{})},{icon:(0,n.jsx)(r.SyncOutlined,{})}]})]})},{title:"Alert",type:"update",node:(0,n.jsx)(o.Alert,{style:{width:400},message:"Ant Design 5.0",description:y.sampleContent,closable:!0})}],[t]);return t?(0,n.jsx)("div",{className:e.mobileComponentsList,children:(0,n.jsx)(o.Carousel,{className:e.carousel,children:l.map(({title:e,node:t,type:l},s)=>(0,n.jsx)(C,{title:e,node:t,type:l,index:s},`mobile-item-${s}`))})}):(0,n.jsx)(o.Flex,{justify:"center",className:e.componentsList,children:(0,n.jsx)(o.Flex,{align:"stretch",gap:"large",children:l.map(({title:e,node:t,type:l},s)=>(0,n.jsx)(C,{title:e,node:t,type:l,index:s},`desktop-item-${s}`))})});};}}]);