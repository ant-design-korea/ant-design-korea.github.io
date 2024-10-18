(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["d5e46957"],{"109558d4":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("e4022d1e");var t='import React from \'react\';\nimport { Avatar, Badge, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <Space size="middle">\n    <Badge size="default" count={5}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n    <Badge size="small" count={5}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n  </Space>\n);\n\nexport default App;\n';},"3065f103":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("d6205eeb");var t="import React from 'react';\nimport { Avatar, Badge } from 'antd';\n\nimport SemanticPreview from '../../../.dumi/components/SemanticPreview';\n\nconst locales = {\n  cn: {\n    root: '\u6839\u8282\u70B9',\n    indicator: '\u6307\u793A\u5668\u8282\u70B9',\n  },\n  en: {\n    root: 'Root element',\n    indicator: 'Indicator element',\n  },\n  ko: {\n    root: 'Root element',\n    indicator: 'Indicator element',\n  },\n};\n\nconst App: React.FC = () => {\n  const locale = locales.ko;\n  return (\n    <SemanticPreview\n      semantics={[\n        { name: 'root', desc: locale.root, version: '5.7.0' },\n        { name: 'indicator', desc: locale.indicator, version: '5.7.0' },\n      ]}\n    >\n      <Badge count={5}>\n        <Avatar shape=\"square\" size=\"large\" />\n      </Badge>\n    </SemanticPreview>\n  );\n};\n\nexport default App;\n";},"32a0f233":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("3a061bab");var t='import React, { useState } from \'react\';\nimport { MinusOutlined, PlusOutlined, QuestionOutlined } from \'@ant-design/icons\';\nimport { Avatar, Badge, Button, Space, Switch } from \'antd\';\n\nconst ButtonGroup = Button.Group;\n\nconst App: React.FC = () => {\n  const [count, setCount] = useState(5);\n  const [show, setShow] = useState(true);\n\n  const increase = () => {\n    setCount(count + 1);\n  };\n\n  const decline = () => {\n    let newCount = count - 1;\n    if (newCount < 0) {\n      newCount = 0;\n    }\n    setCount(newCount);\n  };\n\n  const random = () => {\n    const newCount = Math.floor(Math.random() * 100);\n    setCount(newCount);\n  };\n\n  const onChange = (checked: boolean) => {\n    setShow(checked);\n  };\n\n  return (\n    <Space direction="vertical">\n      <Space size="large">\n        <Badge count={count}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n        <ButtonGroup>\n          <Button onClick={decline} icon={<MinusOutlined />} />\n          <Button onClick={increase} icon={<PlusOutlined />} />\n          <Button onClick={random} icon={<QuestionOutlined />} />\n        </ButtonGroup>\n      </Space>\n      <Space size="large">\n        <Badge dot={show}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n        <Switch onChange={onChange} checked={show} />\n      </Space>\n    </Space>\n  );\n};\n\nexport default App;\n';},"3a1b1b85":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("0f29991d");var t="import React, { useState } from 'react';\nimport { ClockCircleOutlined } from '@ant-design/icons';\nimport { Badge, Space, Switch } from 'antd';\n\nconst App: React.FC = () => {\n  const [show, setShow] = useState(true);\n\n  return (\n    <Space>\n      <Switch checked={show} onChange={() => setShow(!show)} />\n      <Badge count={show ? 11 : 0} showZero color=\"#faad14\" />\n      <Badge count={show ? 25 : 0} />\n      <Badge count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0} />\n      <Badge\n        className=\"site-badge-count-109\"\n        count={show ? 109 : 0}\n        style={{ backgroundColor: '#52c41a' }}\n      />\n    </Space>\n  );\n};\n\nexport default App;\n";},"442e37f6":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("83def3bd");var t='import React from \'react\';\nimport { ClockCircleOutlined } from \'@ant-design/icons\';\nimport { Avatar, Badge, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <Space size="middle">\n    <Badge count={5}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n    <Badge count={0} showZero>\n      <Avatar shape="square" size="large" />\n    </Badge>\n    <Badge count={<ClockCircleOutlined style={{ color: \'#f5222d\' }} />}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n  </Space>\n);\n\nexport default App;\n';},"5149e5f4":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("c7280243");var t='import React from \'react\';\nimport { Badge, Card, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <Space direction="vertical" style={{ width: \'100%\' }}>\n    <Badge.Ribbon text="\u5566\u5566\u5566\u5566">\n      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="purple">\n      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5">\n      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5" placement="start">\n      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5" placement="end">\n      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>\n    </Badge.Ribbon>\n  </Space>\n);\n\nexport default App;\n';},"537f5e32":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("624d091e");var t='import React from \'react\';\nimport { Avatar, Badge } from \'antd\';\n\nconst App: React.FC = () => (\n  <a href="#">\n    <Badge count={5}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n  </a>\n);\n\nexport default App;\n';},"6bfa51a6":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("d24392bd");var t="import React from 'react';\nimport { Badge, Space } from 'antd';\n\nconst colors = [\n  'pink',\n  'red',\n  'yellow',\n  'orange',\n  'cyan',\n  'green',\n  'blue',\n  'purple',\n  'geekblue',\n  'magenta',\n  'volcano',\n  'gold',\n  'lime',\n];\n\nconst AvatarItem = ({ color }: { color: string }) => (\n  <div\n    style={{\n      width: 90,\n      height: 90,\n      lineHeight: '90px',\n      background: '#ccc',\n      textAlign: 'center',\n    }}\n  >\n    {color}\n  </div>\n);\n\nconst App: React.FC = () => (\n  <>\n    <Space wrap size={['large', 'middle']}>\n      {colors.map((color) => (\n        <Badge color={color} count={44} key={color}>\n          <AvatarItem color={color} />\n        </Badge>\n      ))}\n    </Space>\n    <Space wrap size={['large', 'middle']}>\n      {colors.map((color) => (\n        <Badge status=\"processing\" color={color} text=\"loading\" key={color} />\n      ))}\n    </Space>\n  </>\n);\n\nexport default App;\n";},"744c418e":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("11710614");var t='import React from \'react\';\nimport { Badge, Card, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <Space direction="vertical" size="middle" style={{ width: \'100%\' }}>\n    <Badge.Ribbon text="Hippies">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="Hippies" color="pink">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="Hippies" color="red">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="Hippies" color="cyan">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="Hippies" color="green">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="Hippies" color="purple">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="Hippies" color="volcano">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n    <Badge.Ribbon text="Hippies" color="magenta">\n      <Card title="Pushes open the window" size="small">\n        and raises the spyglass.\n      </Card>\n    </Badge.Ribbon>\n  </Space>\n);\n\nexport default App;\n';},"7c350a51":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("35601abe");var t='import React from \'react\';\nimport { Avatar, Badge, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <Space size="large">\n    <Badge count={99}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n    <Badge count={100}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n    <Badge count={99} overflowCount={10}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n    <Badge count={1000} overflowCount={999}>\n      <Avatar shape="square" size="large" />\n    </Badge>\n  </Space>\n);\n\nexport default App;\n';},"8c703eb8":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("06697b1c");var t='import React from \'react\';\nimport { Badge, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <>\n    <Space>\n      <Badge status="success" />\n      <Badge status="error" />\n      <Badge status="default" />\n      <Badge status="processing" />\n      <Badge status="warning" />\n    </Space>\n    <br />\n    <Space direction="vertical">\n      <Badge status="success" text="Success" />\n      <Badge status="error" text="Error" />\n      <Badge status="default" text="Default" />\n      <Badge status="processing" text="Processing" />\n      <Badge status="warning" text="Warning" />\n    </Space>\n  </>\n);\n\nexport default App;\n';},"9240dee0":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("236bead4");var t='import React from \'react\';\nimport { NotificationOutlined } from \'@ant-design/icons\';\nimport { Avatar, Badge, ConfigProvider, Space } from \'antd\';\n\n/** Test usage. Do not use in your production. */\nexport default () => (\n  <ConfigProvider\n    theme={{\n      components: {\n        Badge: {\n          indicatorHeight: 24,\n          indicatorHeightSM: 18,\n          dotSize: 4,\n          textFontWeight: \'bold\',\n          statusSize: 8,\n        },\n      },\n    }}\n  >\n    <Space direction="vertical">\n      <Badge count={5}>\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge count={26} />\n      <Badge dot>\n        <NotificationOutlined />\n      </Badge>\n      <Badge status="success" text="Success" />\n      <Badge size="small" count={0} showZero />\n    </Space>\n  </ConfigProvider>\n);\n';},"998ad620":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("84029d4f");var t="import React from 'react';\nimport { Avatar, Badge } from 'antd';\n\nconst App: React.FC = () => (\n  <Badge count={5} offset={[10, 10]}>\n    <Avatar shape=\"square\" size=\"large\" />\n  </Badge>\n);\n\nexport default App;\n";},"9afa3ca0":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("3c04ace0");var t="import React from 'react';\nimport { NotificationOutlined } from '@ant-design/icons';\nimport { Badge, Space } from 'antd';\n\nconst App: React.FC = () => (\n  <Space>\n    <Badge dot>\n      <NotificationOutlined style={{ fontSize: 16 }} />\n    </Badge>\n    <Badge dot>\n      <a href=\"#\">Link something</a>\n    </Badge>\n  </Space>\n);\n\nexport default App;\n";},b1528252:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("cb917cce");var t='import React from \'react\';\nimport { Avatar, Badge, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <Space size="middle" wrap>\n    <Space size="middle" wrap>\n      <Badge count={5} status="success">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge count={5} status="warning">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge count={5} color="blue">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge count={5} color="#fa541c">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge dot status="success">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge dot status="warning">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge dot status="processing">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge dot color="blue">\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge dot color="#fa541c">\n        <Avatar shape="square" size="large" />\n      </Badge>\n    </Space>\n\n    <Space size="middle" wrap>\n      <Badge count={0} showZero />\n      <Badge count={0} showZero color="blue" />\n      <Badge count={0} showZero color="#f0f" />\n      <Badge count={0} showZero>\n        <Avatar shape="square" size="large" />\n      </Badge>\n      <Badge count={0} showZero color="blue">\n        <Avatar shape="square" size="large" />\n      </Badge>\n    </Space>\n  </Space>\n);\n\nexport default App;\n';},ba45390e:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("1b8afa9d");var t="import React from 'react';\nimport { Badge, Divider, Space } from 'antd';\n\nconst colors = [\n  'pink',\n  'red',\n  'yellow',\n  'orange',\n  'cyan',\n  'green',\n  'blue',\n  'purple',\n  'geekblue',\n  'magenta',\n  'volcano',\n  'gold',\n  'lime',\n];\n\nconst App: React.FC = () => (\n  <>\n    <Divider orientation=\"left\">Presets</Divider>\n    <Space direction=\"vertical\">\n      {colors.map((color) => (\n        <Badge key={color} color={color} text={color} />\n      ))}\n    </Space>\n    <Divider orientation=\"left\">Custom</Divider>\n    <Space direction=\"vertical\">\n      <Badge color=\"#f50\" text=\"#f50\" />\n      <Badge color=\"rgb(45, 183, 245)\" text=\"rgb(45, 183, 245)\" />\n      <Badge color=\"hsl(102, 53%, 61%)\" text=\"hsl(102, 53%, 61%)\" />\n      <Badge color=\"hwb(205 6% 9%)\" text=\"hwb(205 6% 9%)\" />\n    </Space>\n  </>\n);\n\nexport default App;\n";},d5e46957:function(e,n,a){"use strict";var t=a("852bbaa9")._;a.d(n,"__esModule",{value:!0}),a.d(n,"demos",{enumerable:!0,get:function(){return u;}});var d=a("852bbaa9"),o=d._(a("5b220c3d"));a("2b78a8cb");var r=d._(a("e22febe0")),s=d._(a("a9d1a279")),i=d._(a("1164364c")),c=d._(a("3835a2b7")),l=d._(a("600aabe0"));let u={"badge-demo-basic":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("995c1745")]).then(a.dr(t,a.bind(a,"995c1745"))))),asset:{type:"BLOCK",id:"badge-demo-basic",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("442e37f6").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Basic",description:"\uAE30\uBCF8\uC801\uC778 \uC0AC\uC6A9. \uBC30\uC9C0\uB294 count\uAC00 0\uC77C \uB54C \uC228\uACA8\uC9C0\uC9C0\uB9CC, showZero \uB97C \uD1B5\uD574 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:o,"@ant-design/icons":r,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-no-wrapper":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("f7c57507")]).then(a.dr(t,a.bind(a,"f7c57507"))))),asset:{type:"BLOCK",id:"badge-demo-no-wrapper",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("3a1b1b85").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Standalone",description:"\uC5B4\uB5A0\uD55C \uC694\uC18C\uB3C4 \uAC10\uC2F8\uC9C0 \uC54A\uACE0 \uB3C5\uB9BD\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uBA70 \uB9DE\uCDA4\uD615 \uC5F0\uCD9C\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n> \uC624\uB978\uCABD \uC0C1\uB2E8\uC758 \uBC30\uC9C0\uB294 \uBE68\uAC04\uC0C9\uC73C\uB85C \uD55C\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:o,"@ant-design/icons":r,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-overflow":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("bce60f4b")]).then(a.dr(t,a.bind(a,"bce60f4b"))))),asset:{type:"BLOCK",id:"badge-demo-overflow",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("7c350a51").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Overflow Count",description:"overflowCount\uBCF4\uB2E4 \uCE74\uC6B4\uD2B8\uAC00 \uD074 \uACBD\uC6B0 ${overflowCount}+\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAE30\uBCF8 overflowCount\uAC12\uC740 99\uC785\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-dot":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("643adadd")]).then(a.dr(t,a.bind(a,"643adadd"))))),asset:{type:"BLOCK",id:"badge-demo-dot",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("9afa3ca0").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Red badge",description:"\uD2B9\uC815 \uCE74\uC6B4\uD2B8 \uC5C6\uC774 \uBE68\uAC04\uC0C9 \uBC30\uC9C0\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uCE74\uC6B4\uD2B8\uAC00 0\uC774\uBA74 \uC810\uC774 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."},context:{react:o,"@ant-design/icons":r,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-change":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("0e6613e9")]).then(a.dr(t,a.bind(a,"0e6613e9"))))),asset:{type:"BLOCK",id:"badge-demo-change",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("32a0f233").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Dynamic",description:"\uCE74\uC6B4\uD2B8\uAC00 \uBCC0\uACBD\uB418\uBA74 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4."},context:{react:o,"@ant-design/icons":r,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-link":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("23a7e102")]).then(a.dr(t,a.bind(a,"23a7e102"))))),asset:{type:"BLOCK",id:"badge-demo-link",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("537f5e32").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Clickable",description:"\uBC30\uC9C0\uB97C \uD1B5\uD574 \uB9C1\uD06C\uB420 \uC218 \uC788\uB3C4\uB85D a\uD0DC\uADF8\uB85C \uAC10\uC300 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-offset":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("01a21bff")]).then(a.dr(t,a.bind(a,"01a21bff"))))),asset:{type:"BLOCK",id:"badge-demo-offset",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("998ad620").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Offset",description:"\uBC30\uC9C0 \uB3C4\uD2B8\uC758 \uC624\uD504\uC14B\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uC704\uCE58\uC758 \uC67C\uCABD\uACFC \uC704\uCABD\uC5D0\uC11C \uC0C1\uD0DC \uB3C4\uD2B8\uC758 \uC624\uD504\uC14B\uC744 \uB098\uD0C0\uB0B4\uB294 [left, top]\uD615\uC2DD\uC785\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-size":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("bdfea811")]).then(a.dr(t,a.bind(a,"bdfea811"))))),asset:{type:"BLOCK",id:"badge-demo-size",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("109558d4").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Size",description:"\uC22B\uC790 \uBC30\uC9C0\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-status":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("5ddb14b9")]).then(a.dr(t,a.bind(a,"5ddb14b9"))))),asset:{type:"BLOCK",id:"badge-demo-status",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("8c703eb8").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Status",description:"\uC0C1\uD0DC\uAC00 \uD3EC\uD568\uB41C \uB3C5\uB9BD\uD615 \uBC30\uC9C0."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-colorful":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("92954dfb")]).then(a.dr(t,a.bind(a,"92954dfb"))))),asset:{type:"BLOCK",id:"badge-demo-colorful",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("ba45390e").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Colorful Badge",description:"\uB2E4\uC591\uD55C \uC0C1\uD669\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC0C9\uC0C1\uC758 \uBC30\uC9C0 \uC2A4\uD0C0\uC77C\uC774 \uC124\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC0C9\uC0C1\uC744 \uC704\uD574 \uD5E5\uC2A4 \uC0C9\uC0C1 \uBB38\uC790\uC5F4\uB85C \uC124\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-ribbon":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("b89cba8a")]).then(a.dr(t,a.bind(a,"b89cba8a"))))),asset:{type:"BLOCK",id:"badge-demo-ribbon",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("744c418e").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Ribbon",description:"\uB9AC\uBCF8 \uBC30\uC9C0\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-ribbon-debug":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("56158cdc")]).then(a.dr(t,a.bind(a,"56158cdc"))))),asset:{type:"BLOCK",id:"badge-demo-ribbon-debug",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("5149e5f4").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Ribbon Debug",description:"Buggy!"},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-mix":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("e410d597")]).then(a.dr(t,a.bind(a,"e410d597"))))),asset:{type:"BLOCK",id:"badge-demo-mix",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("b1528252").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Mixed usage",description:"\uC0AC\uC6A9\uC790 \uC9C0\uC815 status/color\uC640 \uD568\uAED8 count/dot \uC0AC\uC6A9."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-title":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("45e92bbf")]).then(a.dr(t,a.bind(a,"45e92bbf"))))),asset:{type:"BLOCK",id:"badge-demo-title",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("e246be8b").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Title",description:"\uCEE4\uC11C\uAC00 \uC62C\uB77C\uAC14\uC744 \uB54C \uBC30\uC9C0\uAC00 count \uB300\uC2E0 title\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-colorful-with-count-debug":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("8bace5cc")]).then(a.dr(t,a.bind(a,"8bace5cc"))))),asset:{type:"BLOCK",id:"badge-demo-colorful-with-count-debug",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("6bfa51a6").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Colorful Badge support count Debug",description:"Colorful badge \uC0AC\uC6A9 \uC2DC count\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4."},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-component-token":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("a69582bb")]).then(a.dr(t,a.bind(a,"a69582bb"))))),asset:{type:"BLOCK",id:"badge-demo-component-token",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("9240dee0").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"Component Token",description:"Component Token \uB514\uBC84\uADF8"},context:{react:o,"@ant-design/icons":r,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"badge-demo-_semantic":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("d65dbf6b")]).then(a.dr(t,a.bind(a,"d65dbf6b"))))),asset:{type:"BLOCK",id:"badge-demo-_semantic",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:a("3065f103").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"},"../../../.dumi/components/SemanticPreview.tsx":{type:"FILE",value:a("57938cf4").default},"antd-style":{type:"NPM",value:"3.7.0"},classnames:{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},context:{"../../../.dumi/components/SemanticPreview.tsx":i,react:o,antd:s,"/home/runner/work/ant-design/ant-design/.dumi/components/SemanticPreview.tsx":i,"antd-style":c,classnames:l},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}}};},e246be8b:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("b64fae25");var t='import React from \'react\';\nimport { Avatar, Badge, Space } from \'antd\';\n\nconst App: React.FC = () => (\n  <Space size="large">\n    <Badge count={5} title="Custom hover text">\n      <Avatar shape="square" size="large" />\n    </Badge>\n    <Badge count={-5} title="Negative">\n      <Avatar shape="square" size="large" />\n    </Badge>\n  </Space>\n);\n\nexport default App;\n';}}]);