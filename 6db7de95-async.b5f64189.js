(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["6db7de95"],{"6db7de95":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return v;}});var s=l("777fffbe"),n=l("852bbaa9"),a=l("f19d2b93"),i=n._(l("5b220c3d")),r=l("e22febe0"),o=l("a9d1a279"),d=l("3835a2b7"),c=s._(l("600aabe0")),u=s._(l("072ab8a9")),p=s._(l("40d543ed")),x=s._(l("714a8bde")),g=l("b055b5cb");let{_InternalPanelDoNotUseOrYouWillBeFired:m}=o.Modal,{_InternalPanelDoNotUseOrYouWillBeFired:f}=o.DatePicker,{_InternalPanelDoNotUseOrYouWillBeFired:h}=o.Tour,{_InternalPanelDoNotUseOrYouWillBeFired:b}=o.FloatButton,j={yesterday:"\uC5B4\uC81C",lastWeek:"\uC9C0\uB09C\uC8FC",lastMonth:"\uC9C0\uB09C\uB2EC",lastYear:"\uC791\uB144",new:"\uC2E0\uADDC",update:"\uC5C5\uB370\uC774\uD2B8",sampleContent:"Ant Design 5.0\uC740 CSS-in-JS \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB3D9\uC801\uC774\uACE0 \uD63C\uD569\uB41C \uD14C\uB9C8 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB610\uD55C \uAD6C\uC131 \uC694\uC18C \uC218\uC900\uC758 CSS-in-JS \uC194\uB8E8\uC158\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4.",inProgress:"\uC9C4\uD589 \uC911",success:"\uC131\uACF5",taskFailed:"\uC791\uC5C5 \uC2E4\uD328",tour:"\uC571 \uC0AC\uC6A9 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC0C8\uB85C\uC6B4 \uC0AC\uC6A9\uC790 \uC704\uD55C \uAC04\uB2E8\uD55C \uAC00\uC774\uB4DC."},y=()=>{let e=(0,p.default)();return(0,d.createStyles)(({token:t})=>{let{carousel:l}=(0,g.getCarouselStyle)();return{card:(0,d.css)`
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
      `};})();},C=({title:e,node:t,type:l,index:s})=>{let n="new"===l?j.new:j.update,{styles:r}=y(),{isMobile:d}=(0,i.useContext)(x.default);return(0,a.jsxs)("div",{className:(0,c.default)(r.card,d&&r.mobileCard),children:[(0,a.jsx)("div",{className:r.cardCircle,style:{insetInlineEnd:-(s%2*20)-20,bottom:-(s%3*40)-20}}),(0,a.jsxs)(o.Flex,{align:"center",gap:"small",children:[(0,a.jsx)(o.Typography.Title,{level:4,style:{fontWeight:"normal",margin:0},children:e}),(0,a.jsx)(o.Tag,{color:"new"===l?"processing":"warning",children:n})]}),(0,a.jsx)("div",{className:r.nodeWrap,children:t})]});};var v=()=>{let{styles:e}=y(),{isMobile:t}=(0,i.useContext)(x.default),l=i.default.useMemo(()=>[{title:"Modal",type:"update",node:(0,a.jsx)(m,{title:"Ant Design 5.0",width:300,children:j.sampleContent})},{title:"DatePicker",type:"update",node:(0,a.jsx)(f,{value:(0,u.default)("2022-11-18 14:00:00"),showToday:!1,presets:t?[]:[{label:j.yesterday,value:(0,u.default)().add(-1,"d")},{label:j.lastWeek,value:(0,u.default)().add(-7,"d")},{label:j.lastMonth,value:(0,u.default)().add(-1,"month")},{label:j.lastYear,value:(0,u.default)().add(-1,"year")}]})},{title:"Progress",type:"update",node:(0,a.jsxs)(o.Flex,{gap:"small",vertical:!0,children:[(0,a.jsxs)(o.Flex,{gap:"small",align:"center",children:[(0,a.jsx)(o.Progress,{type:"circle",trailColor:"#e6f4ff",percent:60,size:14}),j.inProgress]}),(0,a.jsxs)(o.Flex,{gap:"small",align:"center",children:[(0,a.jsx)(o.Progress,{type:"circle",percent:100,size:14}),j.success]}),(0,a.jsxs)(o.Flex,{gap:"small",align:"center",children:[(0,a.jsx)(o.Progress,{type:"circle",status:"exception",percent:88,size:14}),j.taskFailed]})]})},{title:"Tour",type:"new",node:(0,a.jsx)(h,{title:"Ant Design 5.0",description:j.tour,style:{width:t?"auto":350},current:3,total:9})},{title:"FloatButton",type:"new",node:(0,a.jsxs)(o.Flex,{align:"center",gap:"large",children:[(0,a.jsx)(b,{shape:"square",items:[{icon:(0,a.jsx)(r.QuestionCircleOutlined,{})},{icon:(0,a.jsx)(r.CustomerServiceOutlined,{})},{icon:(0,a.jsx)(r.SyncOutlined,{})}]}),(0,a.jsx)(b,{backTop:!0}),(0,a.jsx)(b,{items:[{icon:(0,a.jsx)(r.QuestionCircleOutlined,{})},{icon:(0,a.jsx)(r.CustomerServiceOutlined,{})},{icon:(0,a.jsx)(r.SyncOutlined,{})}]})]})},{title:"Alert",type:"update",node:(0,a.jsx)(o.Alert,{style:{width:400},message:"Ant Design 5.0",description:j.sampleContent,closable:!0})}],[t]);return t?(0,a.jsx)("div",{className:e.mobileComponentsList,children:(0,a.jsx)(o.Carousel,{className:e.carousel,children:l.map(({title:e,node:t,type:l},s)=>(0,a.jsx)(C,{title:e,node:t,type:l,index:s},`mobile-item-${s}`))})}):(0,a.jsx)(o.Flex,{justify:"center",className:e.componentsList,children:(0,a.jsx)(o.Flex,{align:"stretch",gap:"large",children:l.map(({title:e,node:t,type:l},s)=>(0,a.jsx)(C,{title:e,node:t,type:l,index:s},`desktop-item-${s}`))})});};}}]);