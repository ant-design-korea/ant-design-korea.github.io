(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a22de7dc"],{"2bf44fee":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("74cf00c5");var o='import React from \'react\';\nimport { DownOutlined } from \'@ant-design/icons\';\nimport { Button, Divider, Dropdown, Space, theme } from \'antd\';\nimport type { MenuProps } from \'antd\';\n\nconst { useToken } = theme;\n\nconst items: MenuProps[\'items\'] = [\n  {\n    key: \'1\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">\n        1st menu item\n      </a>\n    ),\n  },\n  {\n    key: \'2\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">\n        2nd menu item (disabled)\n      </a>\n    ),\n    disabled: true,\n  },\n  {\n    key: \'3\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">\n        3rd menu item (disabled)\n      </a>\n    ),\n    disabled: true,\n  },\n];\n\nconst App: React.FC = () => {\n  const { token } = useToken();\n\n  const contentStyle: React.CSSProperties = {\n    backgroundColor: token.colorBgElevated,\n    borderRadius: token.borderRadiusLG,\n    boxShadow: token.boxShadowSecondary,\n  };\n\n  const menuStyle: React.CSSProperties = {\n    boxShadow: \'none\',\n  };\n\n  return (\n    <Dropdown\n      menu={{ items }}\n      dropdownRender={(menu) => (\n        <div style={contentStyle}>\n          {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}\n          <Divider style={{ margin: 0 }} />\n          <Space style={{ padding: 8 }}>\n            <Button type="primary">Click me!</Button>\n          </Space>\n        </div>\n      )}\n    >\n      <a onClick={(e) => e.preventDefault()}>\n        <Space>\n          Hover me\n          <DownOutlined />\n        </Space>\n      </a>\n    </Dropdown>\n  );\n};\n\nexport default App;\n';},"2ea0858a":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("079c47f2");var o="import React from 'react';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, theme } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    label: '1st menu item',\n    key: '1',\n  },\n  {\n    label: '2nd menu item',\n    key: '2',\n  },\n  {\n    label: '3rd menu item',\n    key: '3',\n  },\n];\n\nconst App: React.FC = () => {\n  const {\n    token: { colorBgLayout, colorTextTertiary },\n  } = theme.useToken();\n\n  return (\n    <Dropdown menu={{ items }} trigger={['contextMenu']}>\n      <div\n        style={{\n          color: colorTextTertiary,\n          background: colorBgLayout,\n          height: 200,\n          textAlign: 'center',\n          lineHeight: '200px',\n        }}\n      >\n        Right Click on here\n      </div>\n    </Dropdown>\n  );\n};\n\nexport default App;\n";},"4ceca6ac":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("6fd6fca1");var o='import React from \'react\';\nimport type { MenuProps } from \'antd\';\nimport { Button, Dropdown, Space } from \'antd\';\n\nconst items: MenuProps[\'items\'] = [\n  {\n    key: \'1\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">\n        1st menu item\n      </a>\n    ),\n  },\n  {\n    key: \'2\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">\n        2nd menu item\n      </a>\n    ),\n  },\n  {\n    key: \'3\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">\n        3rd menu item\n      </a>\n    ),\n  },\n];\n\nconst App: React.FC = () => (\n  <Space direction="vertical">\n    <Space wrap>\n      <Dropdown menu={{ items }} placement="bottomLeft" arrow>\n        <Button>bottomLeft</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="bottom" arrow>\n        <Button>bottom</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="bottomRight" arrow>\n        <Button>bottomRight</Button>\n      </Dropdown>\n    </Space>\n    <Space wrap>\n      <Dropdown menu={{ items }} placement="topLeft" arrow>\n        <Button>topLeft</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="top" arrow>\n        <Button>top</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="topRight" arrow>\n        <Button>topRight</Button>\n      </Dropdown>\n    </Space>\n  </Space>\n);\n\nexport default App;\n';},"743c8239":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("02b8fe80");var o='import React from \'react\';\nimport type { MenuProps } from \'antd\';\nimport { Button, Dropdown, Space } from \'antd\';\n\nconst items: MenuProps[\'items\'] = [\n  {\n    key: \'1\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">\n        1st menu item\n      </a>\n    ),\n  },\n  {\n    key: \'2\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">\n        2nd menu item\n      </a>\n    ),\n  },\n  {\n    key: \'3\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">\n        3rd menu item\n      </a>\n    ),\n  },\n];\n\nconst App: React.FC = () => (\n  <Space direction="vertical">\n    <Space wrap>\n      <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>\n        <Button>bottomLeft</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>\n        <Button>bottom</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>\n        <Button>bottomRight</Button>\n      </Dropdown>\n    </Space>\n    <Space wrap>\n      <Dropdown menu={{ items }} placement="topLeft" arrow={{ pointAtCenter: true }}>\n        <Button>topLeft</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }}>\n        <Button>top</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="topRight" arrow={{ pointAtCenter: true }}>\n        <Button>topRight</Button>\n      </Dropdown>\n    </Space>\n  </Space>\n);\n\nexport default App;\n';},76841470:function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("12584de4");var o="import React from 'react';\nimport { DownOutlined, SettingOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, Space } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    key: '1',\n    label: 'My Account',\n    disabled: true,\n  },\n  {\n    type: 'divider',\n  },\n  {\n    key: '2',\n    label: 'Profile',\n    extra: '\u2318P',\n  },\n  {\n    key: '3',\n    label: 'Billing',\n    extra: '\u2318B',\n  },\n  {\n    key: '4',\n    label: 'Settings',\n    icon: <SettingOutlined />,\n    extra: '\u2318S',\n  },\n];\n\nconst App: React.FC = () => (\n  <Dropdown menu={{ items }}>\n    <a onClick={(e) => e.preventDefault()}>\n      <Space>\n        Hover me\n        <DownOutlined />\n      </Space>\n    </a>\n  </Dropdown>\n);\n\nexport default App;\n";},"78b4f0f8":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("8d6ea8ed");var o="import React from 'react';\nimport { DownOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, Space, Typography } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    key: '1',\n    label: 'Item 1',\n  },\n  {\n    key: '2',\n    label: 'Item 2',\n  },\n  {\n    key: '3',\n    label: 'Item 3',\n  },\n];\n\nconst App: React.FC = () => (\n  <Dropdown\n    menu={{\n      items,\n      selectable: true,\n      defaultSelectedKeys: ['3'],\n    }}\n  >\n    <Typography.Link>\n      <Space>\n        Selectable\n        <DownOutlined />\n      </Space>\n    </Typography.Link>\n  </Dropdown>\n);\n\nexport default App;\n";},"8724f5b1":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("31a5aae3");var o="import React from 'react';\nimport { DownOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, Space } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    key: '1',\n    type: 'group',\n    label: 'Group title',\n    children: [\n      {\n        key: '1-1',\n        label: '1st menu item',\n      },\n      {\n        key: '1-2',\n        label: '2nd menu item',\n      },\n    ],\n  },\n  {\n    key: '2',\n    label: 'sub menu',\n    children: [\n      {\n        key: '2-1',\n        label: '3rd menu item',\n      },\n      {\n        key: '2-2',\n        label: '4th menu item',\n      },\n    ],\n  },\n  {\n    key: '3',\n    label: 'disabled sub menu',\n    disabled: true,\n    children: [\n      {\n        key: '3-1',\n        label: '5d menu item',\n      },\n      {\n        key: '3-2',\n        label: '6th menu item',\n      },\n    ],\n  },\n];\n\nconst App: React.FC = () => (\n  <Dropdown menu={{ items }}>\n    <a onClick={(e) => e.preventDefault()}>\n      <Space>\n        Cascading menu\n        <DownOutlined />\n      </Space>\n    </a>\n  </Dropdown>\n);\n\nexport default App;\n";},"893af73d":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("6eead573");var o="import React from 'react';\nimport { DownOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, message, Space } from 'antd';\n\nconst onClick: MenuProps['onClick'] = ({ key }) => {\n  message.info(`Click on item ${key}`);\n};\n\nconst items: MenuProps['items'] = [\n  {\n    label: '1st menu item',\n    key: '1',\n  },\n  {\n    label: '2nd menu item',\n    key: '2',\n  },\n  {\n    label: '3rd menu item',\n    key: '3',\n  },\n];\n\nconst App: React.FC = () => (\n  <Dropdown menu={{ items, onClick }}>\n    <a onClick={(e) => e.preventDefault()}>\n      <Space>\n        Hover me, Click menu item\n        <DownOutlined />\n      </Space>\n    </a>\n  </Dropdown>\n);\n\nexport default App;\n";},"8cf78974":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("0fef50f8");var o="import React, { useState } from 'react';\nimport { DownOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, Space } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    label: 'Submit and continue',\n    key: '1',\n  },\n];\n\nconst App: React.FC = () => {\n  const [loadings, setLoadings] = useState<boolean[]>([]);\n\n  const enterLoading = (index: number) => {\n    setLoadings((state) => {\n      const newLoadings = [...state];\n      newLoadings[index] = true;\n      return newLoadings;\n    });\n\n    setTimeout(() => {\n      setLoadings((state) => {\n        const newLoadings = [...state];\n        newLoadings[index] = false;\n        return newLoadings;\n      });\n    }, 6000);\n  };\n\n  return (\n    <Space direction=\"vertical\">\n      <Dropdown.Button type=\"primary\" loading menu={{ items }}>\n        Submit\n      </Dropdown.Button>\n      <Dropdown.Button type=\"primary\" size=\"small\" loading menu={{ items }}>\n        Submit\n      </Dropdown.Button>\n      <Dropdown.Button\n        type=\"primary\"\n        loading={loadings[0]}\n        menu={{ items }}\n        onClick={() => enterLoading(0)}\n      >\n        Submit\n      </Dropdown.Button>\n      <Dropdown.Button\n        icon={<DownOutlined />}\n        loading={loadings[1]}\n        menu={{ items }}\n        onClick={() => enterLoading(1)}\n      >\n        Submit\n      </Dropdown.Button>\n    </Space>\n  );\n};\n\nexport default App;\n";},"96f763d1":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("36a4159e");var o="import React from 'react';\nimport { DownOutlined, UserOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Button, Dropdown, message, Space, Tooltip } from 'antd';\n\nconst handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {\n  message.info('Click on left button.');\n  console.log('click left button', e);\n};\n\nconst handleMenuClick: MenuProps['onClick'] = (e) => {\n  message.info('Click on menu item.');\n  console.log('click', e);\n};\n\nconst items: MenuProps['items'] = [\n  {\n    label: '1st menu item',\n    key: '1',\n    icon: <UserOutlined />,\n  },\n  {\n    label: '2nd menu item',\n    key: '2',\n    icon: <UserOutlined />,\n  },\n  {\n    label: '3rd menu item',\n    key: '3',\n    icon: <UserOutlined />,\n    danger: true,\n  },\n  {\n    label: '4rd menu item',\n    key: '4',\n    icon: <UserOutlined />,\n    danger: true,\n    disabled: true,\n  },\n];\n\nconst menuProps = {\n  items,\n  onClick: handleMenuClick,\n};\n\nconst App: React.FC = () => (\n  <Space wrap>\n    <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>\n      Dropdown\n    </Dropdown.Button>\n    <Dropdown.Button menu={menuProps} placement=\"bottom\" icon={<UserOutlined />}>\n      Dropdown\n    </Dropdown.Button>\n    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>\n      Dropdown\n    </Dropdown.Button>\n    <Dropdown.Button\n      menu={menuProps}\n      buttonsRender={([leftButton, rightButton]) => [\n        <Tooltip title=\"tooltip\" key=\"leftButton\">\n          {leftButton}\n        </Tooltip>,\n        React.cloneElement(rightButton as React.ReactElement<any, string>, { loading: true }),\n      ]}\n    >\n      With Tooltip\n    </Dropdown.Button>\n    <Dropdown menu={menuProps}>\n      <Button>\n        <Space>\n          Button\n          <DownOutlined />\n        </Space>\n      </Button>\n    </Dropdown>\n    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>\n      Danger\n    </Dropdown.Button>\n  </Space>\n);\n\nexport default App;\n";},"9b043b98":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("96a8b7e7");var o='import React from \'react\';\nimport type { MenuProps } from \'antd\';\nimport { Button, Dropdown, Space } from \'antd\';\n\nconst items: MenuProps[\'items\'] = [\n  {\n    key: \'1\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">\n        1st menu item\n      </a>\n    ),\n  },\n  {\n    key: \'2\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">\n        2nd menu item\n      </a>\n    ),\n  },\n  {\n    key: \'3\',\n    label: (\n      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">\n        3rd menu item\n      </a>\n    ),\n  },\n];\n\nconst App: React.FC = () => (\n  <Space direction="vertical">\n    <Space wrap>\n      <Dropdown menu={{ items }} placement="bottomLeft">\n        <Button>bottomLeft</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="bottom">\n        <Button>bottom</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="bottomRight">\n        <Button>bottomRight</Button>\n      </Dropdown>\n    </Space>\n    <Space wrap>\n      <Dropdown menu={{ items }} placement="topLeft">\n        <Button>topLeft</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="top">\n        <Button>top</Button>\n      </Dropdown>\n      <Dropdown menu={{ items }} placement="topRight">\n        <Button>topRight</Button>\n      </Dropdown>\n    </Space>\n  </Space>\n);\n\nexport default App;\n';},a22de7dc:function(n,e,t){"use strict";var o=t("852bbaa9")._;t.d(e,"__esModule",{value:!0}),t.d(e,"demos",{enumerable:!0,get:function(){return p;}});var r=t("852bbaa9"),a=r._(t("5b220c3d"));t("b47e5499");var d=r._(t("e22febe0")),i=r._(t("a9d1a279"));let p={"dropdown-demo-basic":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("518d5f39")]).then(t.dr(o,t.bind(t,"518d5f39"))))),asset:{type:"BLOCK",id:"dropdown-demo-basic",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("ee534894").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uAE30\uBCF8",description:"\uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC785\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-extra":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("f1a7d23b")]).then(t.dr(o,t.bind(t,"f1a7d23b"))))),asset:{type:"BLOCK",id:"dropdown-demo-extra",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("76841470").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uCD94\uAC00 \uB178\uB4DC",description:"\uB2E8\uCD95\uC5B4\uAC00 \uC788\uB294 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC785\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-placement":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("e30474b6")]).then(t.dr(o,t.bind(t,"e30474b6"))))),asset:{type:"BLOCK",id:"dropdown-demo-placement",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("9b043b98").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uBC30\uCE58",description:"6\uAC1C\uC758 \uBC30\uCE58 \uC704\uCE58\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4."},context:{react:a,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-arrow":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("348fe64f")]).then(t.dr(o,t.bind(t,"348fe64f"))))),asset:{type:"BLOCK",id:"dropdown-demo-arrow",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("4ceca6ac").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uD654\uC0B4\uD45C",description:"\uD654\uC0B4\uD45C\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:a,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-item":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("804fc4ef")]).then(t.dr(o,t.bind(t,"804fc4ef"))))),asset:{type:"BLOCK",id:"dropdown-demo-item",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("e6864570").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uAE30\uD0C0 \uC694\uC18C",description:"\uAD6C\uBD84\uC120\uACFC \uBE44\uD65C\uC131\uD654\uB41C \uBA54\uB274 \uC694\uC18C"},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-arrow-center":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("c0f50d1b")]).then(t.dr(o,t.bind(t,"c0f50d1b"))))),asset:{type:"BLOCK",id:"dropdown-demo-arrow-center",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("743c8239").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uC911\uC559\uC744 \uAC00\uB9AC\uD0A4\uB294 \uD654\uC0B4\uD45C",description:"arrow \uC18D\uC131\uC744 { pointAtCenter: true }\uB85C \uC9C0\uC815\uD558\uBA74, \uD654\uC0B4\uD45C\uAC00 \uB300\uC0C1 \uC694\uC18C\uC758 \uC911\uC559\uC744 \uAC00\uB9AC\uD0A4\uAC8C \uB429\uB2C8\uB2E4."},context:{react:a,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-trigger":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("e9edb21b")]).then(t.dr(o,t.bind(t,"e9edb21b"))))),asset:{type:"BLOCK",id:"dropdown-demo-trigger",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("efaf0f60").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uD2B8\uB9AC\uAC70 \uBAA8\uB4DC",description:"\uD2B8\uB9AC\uAC70 \uBAA8\uB4DC\uC758 \uAE30\uBCF8\uAC12\uC740 hover\uC774\uBA70, click\uC73C\uB85C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-event":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("a040a548")]).then(t.dr(o,t.bind(t,"a040a548"))))),asset:{type:"BLOCK",id:"dropdown-demo-event",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("893af73d").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uD074\uB9AD \uC774\uBCA4\uD2B8",description:"\uBA54\uB274 \uC694\uC18C\uB97C \uD074\uB9AD\uD558\uBA74 \uC774\uBCA4\uD2B8\uAC00 \uD2B8\uB9AC\uAC70\uB418\uBA70, \uC694\uC18C\uC758 \uD0A4\uC5D0 \uB530\uB77C \uB2E4\uB978 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-dropdown-button":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("e6a372c7")]).then(t.dr(o,t.bind(t,"e6a372c7"))))),asset:{type:"BLOCK",id:"dropdown-demo-dropdown-button",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("96f763d1").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uAC00 \uC788\uB294 \uBC84\uD2BC",description:"\uC67C\uCABD\uC5D0\uB294 \uBC84\uD2BC\uC774 \uC788\uACE0, \uC624\uB978\uCABD\uC5D0\uB294 \uAD00\uB828\uB41C \uAE30\uB2A5\uC758 \uBA54\uB274\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uC774\uCF58 \uC18D\uC131\uC744 \uC124\uC815\uD558\uC5EC \uC624\uB978\uCABD \uC544\uC774\uCF58\uC744 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-custom-dropdown":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("a8936d6a")]).then(t.dr(o,t.bind(t,"a8936d6a"))))),asset:{type:"BLOCK",id:"dropdown-demo-custom-dropdown",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("2bf44fee").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uC0AC\uC6A9\uC790 \uC9C0\uC815 \uB4DC\uB86D\uB2E4\uC6B4",description:"dropdownRender\uB97C \uD1B5\uD574 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uC0AC\uC6A9\uC790 \uC9C0\uC815\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4. \uBA54\uB274 \uCF58\uD150\uCE20\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, Popover \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC9C1\uC811 \uC0AC\uC6A9\uD558\uC138\uC694."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-sub-menu":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("baa9e58e")]).then(t.dr(o,t.bind(t,"baa9e58e"))))),asset:{type:"BLOCK",id:"dropdown-demo-sub-menu",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("8724f5b1").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uACC4\uB2E8\uC2DD \uBA54\uB274",description:"\uBA54\uB274\uC5D0\uB294 \uC5EC\uB7EC \uB2E8\uACC4\uAC00 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-overlay-open":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("bb8c45c2")]).then(t.dr(o,t.bind(t,"bb8c45c2"))))),asset:{type:"BLOCK",id:"dropdown-demo-overlay-open",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("abdc3b37").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uBA54\uB274\uB97C \uC228\uAE30\uB294 \uBC29\uBC95",description:"\uBA54\uB274 \uC694\uC18C\uB97C \uD074\uB9AD\uD560 \uB54C \uBA54\uB274\uB97C \uB2EB\uB294 \uAC83\uC774 \uAE30\uBCF8\uAC12\uC774\uBA70, \uC774 \uAE30\uB2A5\uC740 \uB04C \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-context-menu":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("3e9387a8")]).then(t.dr(o,t.bind(t,"3e9387a8"))))),asset:{type:"BLOCK",id:"dropdown-demo-context-menu",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("2ea0858a").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uBC14\uB85C \uAC00\uAE30 \uBA54\uB274",description:"\uAE30\uBCF8 \uD2B8\uB9AC\uAC70 \uBAA8\uB4DC\uB294 hover\uC774\uBA70, contextMenu\uB85C \uD2B8\uB9AC\uAC70 \uBAA8\uB4DC\uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD31D\uC5C5 \uBA54\uB274 \uC704\uCE58\uB294 \uC624\uB978\uCABD \uD074\uB9AD \uC704\uCE58\uB97C \uB530\uB985\uB2C8\uB2E4."},context:{react:a,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-loading":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("15047c9c")]).then(t.dr(o,t.bind(t,"15047c9c"))))),asset:{type:"BLOCK",id:"dropdown-demo-loading",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("8cf78974").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uB85C\uB529",description:"Dropdown.Button\uC5D0\uC11C loading \uC18D\uC131\uC744 \uC124\uC815\uD558\uC5EC \uB85C\uB529 \uC0C1\uD0DC\uB97C \uBC84\uD2BC\uC5D0 \uCD94\uAC00\uB85C \uBCF4\uC5EC \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}},"dropdown-demo-selectable":{component:a.default.memo(a.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("ca9008a6")]).then(t.dr(o,t.bind(t,"ca9008a6"))))),asset:{type:"BLOCK",id:"dropdown-demo-selectable",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:t("78b4f0f8").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\uC120\uD0DD \uAC00\uB2A5\uD55C \uBA54\uB274",description:"menu\uC5D0\uC11C selectable \uC18D\uC131\uC744 \uAD6C\uC131\uD558\uC5EC \uC120\uD0DD \uAC00\uB2A5 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."},context:{react:a,"@ant-design/icons":d,antd:i},renderOpts:{compile:async(...n)=>(await Promise.all([t.ensure("vendors_1"),t.ensure("vendors_0"),t.ensure("d2b37e0b")]).then(t.dr(o,t.bind(t,"d2b37e0b")))).default(...n)}}};},abdc3b37:function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("769eb070");var o="import React, { useState } from 'react';\nimport { DownOutlined } from '@ant-design/icons';\nimport type { DropdownProps, MenuProps } from 'antd';\nimport { Dropdown, Space } from 'antd';\n\nconst App: React.FC = () => {\n  const [open, setOpen] = useState(false);\n\n  const handleMenuClick: MenuProps['onClick'] = (e) => {\n    if (e.key === '3') {\n      setOpen(false);\n    }\n  };\n\n  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {\n    if (info.source === 'trigger' || nextOpen) {\n      setOpen(nextOpen);\n    }\n  };\n\n  const items: MenuProps['items'] = [\n    {\n      label: 'Clicking me will not close the menu.',\n      key: '1',\n    },\n    {\n      label: 'Clicking me will not close the menu also.',\n      key: '2',\n    },\n    {\n      label: 'Clicking me will close the menu.',\n      key: '3',\n    },\n  ];\n\n  return (\n    <Dropdown\n      menu={{\n        items,\n        onClick: handleMenuClick,\n      }}\n      onOpenChange={handleOpenChange}\n      open={open}\n    >\n      <a onClick={(e) => e.preventDefault()}>\n        <Space>\n          Hover me\n          <DownOutlined />\n        </Space>\n      </a>\n    </Dropdown>\n  );\n};\n\nexport default App;\n";},e6864570:function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("6b636e9e");var o="import React from 'react';\nimport { DownOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, Space } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    label: (\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.antgroup.com\">\n        1st menu item\n      </a>\n    ),\n    key: '0',\n  },\n  {\n    label: (\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aliyun.com\">\n        2nd menu item\n      </a>\n    ),\n    key: '1',\n  },\n  {\n    type: 'divider',\n  },\n  {\n    label: '3rd menu item\uFF08disabled\uFF09',\n    key: '3',\n    disabled: true,\n  },\n];\n\nconst App: React.FC = () => (\n  <Dropdown menu={{ items }}>\n    <a onClick={(e) => e.preventDefault()}>\n      <Space>\n        Hover me\n        <DownOutlined />\n      </Space>\n    </a>\n  </Dropdown>\n);\n\nexport default App;\n";},ee534894:function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("1d907343");var o="import React from 'react';\nimport { DownOutlined, SmileOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, Space } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    key: '1',\n    label: (\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.antgroup.com\">\n        1st menu item\n      </a>\n    ),\n  },\n  {\n    key: '2',\n    label: (\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aliyun.com\">\n        2nd menu item (disabled)\n      </a>\n    ),\n    icon: <SmileOutlined />,\n    disabled: true,\n  },\n  {\n    key: '3',\n    label: (\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.luohanacademy.com\">\n        3rd menu item (disabled)\n      </a>\n    ),\n    disabled: true,\n  },\n  {\n    key: '4',\n    danger: true,\n    label: 'a danger item',\n  },\n];\n\nconst App: React.FC = () => (\n  <Dropdown menu={{ items }}>\n    <a onClick={(e) => e.preventDefault()}>\n      <Space>\n        Hover me\n        <DownOutlined />\n      </Space>\n    </a>\n  </Dropdown>\n);\n\nexport default App;\n";},efaf0f60:function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"default",{enumerable:!0,get:function(){return o;}}),t("bd86365d");var o="import React from 'react';\nimport { DownOutlined } from '@ant-design/icons';\nimport type { MenuProps } from 'antd';\nimport { Dropdown, Space } from 'antd';\n\nconst items: MenuProps['items'] = [\n  {\n    label: <a href=\"https://www.antgroup.com\">1st menu item</a>,\n    key: '0',\n  },\n  {\n    label: <a href=\"https://www.aliyun.com\">2nd menu item</a>,\n    key: '1',\n  },\n  {\n    type: 'divider',\n  },\n  {\n    label: '3rd menu item',\n    key: '3',\n  },\n];\n\nconst App: React.FC = () => (\n  <Dropdown menu={{ items }} trigger={['click']}>\n    <a onClick={(e) => e.preventDefault()}>\n      <Space>\n        Click me\n        <DownOutlined />\n      </Space>\n    </a>\n  </Dropdown>\n);\n\nexport default App;\n";}}]);