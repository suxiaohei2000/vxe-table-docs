"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[6416],{16416:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 表单-项渲染 "),t("grid-api-link",{attrs:{prop:"itemRender"}}),e._v("，查看 "),t("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer",target:"_blank"}},[e._v("示例的源码")]),t("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")]),t("br"),e._v(" 配置参数："),t("br"),e._v(" itemClassName: string | (params: { data, property, $form }) => string 表单项className"),t("br"),e._v(" itemStyle: {[name: string]: string} | (params: { data, field, $form }) => {[name: string]: string} 表单项样式"),t("br"),e._v(" itemContentClassName: string | (params: { data, property, $form }) => string 表单项内容className"),t("br"),e._v(" itemContentStyle: {[name: string]: string} | (params: { data, field, $form }) => {[name: string]: string} 表单项内容样式"),t("br"),e._v(" itemTitleClassName: string | (params: { data, property, $form }) => string 表单项标题className"),t("br"),e._v(" itemTitleStyle: {[name: string]: string} | (params: { data, field, $form }) => {[name: string]: string} 表单项标题样式"),t("br"),e._v(" renderItemTitle (h, renderOpts, params: { data, property, $form }) 表单项标题"),t("br"),e._v(" renderItemContent (h, renderOpts, params: { data, property, $form }) 表单项内容"),t("br"),e._v(" itemVisibleMethod (params: { data, property }) 表单项可视函数"),t("br"),e._v(" itemResetMethod (params: { data, property }) 表单项重置函数"),t("br")],1),t("vxe-grid",{attrs:{border:"",resizable:"",height:"400","export-config":{},"toolbar-config":{export:!0,custom:!0},"form-config":e.tableForm,"proxy-config":e.tableProxy,columns:e.tableColumn},scopedSlots:e._u([{key:"btns",fn:function(){return[t("vxe-button",{attrs:{type:"submit",content:"查询"}}),t("vxe-button",{attrs:{type:"reset",content:"重置"}})]},proxy:!0}])}),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},a=[],s=(n(60228),{data:function(){var e=this;return{tableColumn:[{type:"seq",width:50},{field:"name",title:"Name"},{field:"age",title:"Age"},{field:"sex",title:"Sex"},{field:"role",title:"Role"}],tableForm:{items:[{field:"name",title:"名称",itemRender:{name:"FormItemInput",props:{clearable:!0,placeholder:"请输入名称"}}},{field:"age",title:"年龄",itemRender:{name:"FormItemInput",props:{type:"number",clearable:!0,placeholder:"请输入年龄"}}},{slots:{default:"btns"}}]},tableProxy:{form:!0,ajax:{query:function(){return e.findList()}}},demoCodes:["\n        // 创建一个简单的表单-输入框渲染\n        VXETable.renderer.add('FormItemInput', {\n          // 项内容模板\n          renderItemContent (h, renderOpts, params) {\n            const { data, property } = params\n            const props = renderOpts.props || {}\n            return <vxe-input v-model={ data[property] } { ...{ props } }></vxe-input>\n          }\n        })\n        ",'\n        <vxe-grid\n          border\n          resizable\n          height="400"\n          :export-config="{}"\n          :toolbar-config="{export: true, custom: true}"\n          :form-config="tableForm"\n          :proxy-config="tableProxy"\n          :columns="tableColumn">\n          <template #btns>\n            <vxe-button type="submit" content="查询"></vxe-button>\n            <vxe-button type="reset" content="重置"></vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'Name' },\n                { field: 'age', title: 'Age' },\n                { field: 'sex', title: 'Sex' },\n                { field: 'role', title: 'Role' }\n              ],\n              tableForm: {\n                items: [\n                  { field: 'name', title: '名称', itemRender: { name: 'FormItemInput', props: { clearable: true, placeholder: '请输入名称' } } },\n                  { field: 'age', title: '年龄', itemRender: { name: 'FormItemInput', props: { type: 'number', clearable: true, placeholder: '请输入年龄' } } },\n                  { slots: { default: 'btns' } }\n                ]\n              },\n              tableProxy: {\n                form: true,\n                ajax: {\n                  query: () => this.findList()\n                }\n              }\n            }\n          },\n          methods: {\n            findList () {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const rest = [\n                    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n                    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },\n                    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }\n                  ]\n                  resolve(rest)\n                }, 200)\n              })\n            }\n          }\n        }\n        "]}},methods:{findList:function(){return new Promise((function(e){setTimeout((function(){var t=[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"Shenzhen"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"}];e(t)}),200)}))}}}),o=s,i=n(1001),l=(0,i.Z)(o,r,a,!1,null,null,null),d=l.exports}}]);