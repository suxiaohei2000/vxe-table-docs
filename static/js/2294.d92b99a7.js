"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2294],{82294:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var s=function(){var n=this,e=n._self._c;return e("div",[e("h2",[n._v(n._s(n.$t("app.aside.nav.use")))]),n._m(0),e("pre",[n._v("    "),e("pre-code",{staticClass:"shell"},[n._v("\n      npm install babel-plugin-import -D\n    ")]),n._v("\n    "),e("div",[n._v("修改文件 .babelrc 或 babel.config.js")]),n._v("\n    "),e("pre-code",{staticClass:"javascript"},[n._v('\n      {\n        "plugins": [\n          [\n            "import",\n            {\n              "libraryName": "vxe-table",\n              "style": true // 样式是否也按需加载\n            }\n          ]\n        ]\n      }\n    ')]),n._v("\n  ")],1),e("p",{staticClass:"tip"},[n._v("最后这样按需引入模块，就可以减小体积了")]),e("pre",[n._v("    "),e("pre-code",{staticClass:"javascript"},[n._v("\n      import Vue from 'vue'\n      import XEUtils from 'xe-utils'\n      import {\n        // 全局对象\n        VXETable,\n\n        // 功能模块\n        // Filter,\n        // Menu,\n        // Edit,\n        // Export,\n        // Keyboard,\n        // Validator,\n\n        // 可选组件\n        Icon,\n        Column,\n        // Colgroup,\n        // Grid,\n        // Toolbar,\n        // Pager,\n        // Checkbox,\n        // CheckboxGroup,\n        // Radio,\n        // RadioGroup,\n        // RadioButton,\n        // Input,\n        // Textarea,\n        // Button,\n        // Modal,\n        // Tooltip,\n        // Form,\n        // FormItem,\n        // FormGather,\n        // Select,\n        // Optgroup,\n        // Option,\n        // Switch,\n        // List,\n        // Pulldown,\n\n        // 表格\n        Table\n      } from 'vxe-table'\n      import zhCN from 'vxe-table/lib/locale/lang/zh-CN'\n\n      // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：\n      VXETable.setup({\n        i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)\n      })\n\n      // 表格功能\n      // Vue.use(Filter)\n      // .use(Edit)\n      // .use(Menu)\n      // .use(Export)\n      // .use(Keyboard)\n      // .use(Validator)\n\n      // 可选组件\n      Vue.use(Icon)\n      .use(Column)\n      // .use(Colgroup)\n      // .use(Grid)\n      // .use(Toolbar)\n      // .use(Pager)\n      // .use(Checkbox)\n      // .use(CheckboxGroup)\n      // .use(Radio)\n      // .use(RadioGroup)\n      // .use(RadioButton)\n      // .use(Input)\n      // .use(Textarea)\n      // .use(Button)\n      // .use(Modal)\n      // .use(Tooltip)\n      // .use(Form)\n      // .use(FormItem)\n      // .use(FormGather)\n      // .use(Select)\n      // .use(Optgroup)\n      // .use(Option)\n      // .use(Switch)\n      // .use(List)\n      // .use(Pulldown)\n\n      // 安装表格\n      .use(Table)\n    ")]),n._v("\n  ")],1)])},o=[function(){var n=this,e=n._self._c;return e("p",{staticClass:"tip"},[n._v(" 如果您使用了 webpack，借助插件 "),e("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank"}},[n._v("babel-plugin-import")]),n._v(" 可以实现按需加载模块，减少文件体积。 ")])}],u=t(1001),a={},r=(0,u.Z)(a,s,o,!1,null,null,null),l=r.exports}}]);