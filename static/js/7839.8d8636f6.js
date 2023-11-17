"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[7839],{27839:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("数据代理简单示例")]),n("vxe-grid",{attrs:{resizable:"","keep-source":"","show-overflow":"",height:"528","filter-config":{remote:!0},"toolbar-config":e.tableToolbar,"pager-config":e.tablePage,columns:e.tableColumn,"form-config":e.tableForm,"proxy-config":e.tableProxy,"checkbox-config":{labelField:"id",highlight:!0,range:!0},"edit-rules":e.validRules,"edit-config":{trigger:"click",mode:"row",showStatus:!0}}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},i=[],l=(t(60228),t(25728),{data:function(){this.$createElement;return{validRules:{name:[{required:!0,message:"名称必须填写"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],role:[{required:!0,message:"角色必须填写"}]},sortConfig:{remote:!0},tablePage:{pageSize:15,pageSizes:[5,10,20,50,100,200,500,1e3]},tableProxy:{form:!0,sort:!0,filter:!0,ajax:{query:function(){return new Promise((function(e){setTimeout((function(){var n=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"Man",age:35,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"Man",age:35,address:"Guangzhou"},{id:100011,name:"Test11",nickname:"T11",role:"Test",sex:"Women",age:26,address:"test abc"},{id:100012,name:"Test12",nickname:"T12",role:"Develop",sex:"Man",age:34,address:"Guangzhou"},{id:100013,name:"Test13",nickname:"T13",role:"Test",sex:"Women",age:22,address:"Shenzhen"}];e(n)}),100)}))},delete:function(){return new Promise((function(e){setTimeout((function(){e({})}),100)}))},save:function(){return new Promise((function(e){setTimeout((function(){e({})}),100)}))}}},tableToolbar:{buttons:[{code:"insert_actived",name:"Add"},{code:"mark_cancel",name:"删除/取消"},{code:"save",name:"Save"}],refresh:!0,custom:!0},tableForm:{titleWidth:100,titleAlign:"right",items:[{field:"name",title:"名称",span:8,itemRender:{name:"input",attrs:{placeholder:"请输入名称"}}},{field:"role",title:"角色",span:8,itemRender:{name:"input",attrs:{placeholder:"请输入角色"}}},{field:"nickname",title:"昵称",span:8,itemRender:{name:"input",attrs:{placeholder:"请输入昵称"}}},{field:"sex",title:"性别",span:8,folding:!0,itemRender:{name:"$select",options:[{value:"0",label:"女"},{value:"1",label:"男"}],props:{placeholder:"请选择性别"}}},{field:"age",title:"年龄",span:8,folding:!0,itemRender:{name:"$input",props:{type:"number",placeholder:"请输入年龄"}}},{span:24,align:"center",collapseNode:!0,itemRender:{name:"FormItemButtonGroup"}}]},tableColumn:[{type:"seq",width:60,fixed:"left"},{type:"checkbox",title:"ID",width:140,fixed:"left"},{field:"name",title:"Name",sortable:!0,editRender:{name:"input"}},{field:"age",title:"Age",sortable:!0,editRender:{name:"input"}},{field:"type",title:"Type",slots:{default:function(e){var n=this.$createElement,t=e.row,a=e.column,i=[{value:"1",label:"成功"},{value:"2",label:"失败"},{value:"3",label:"拒接"}],l=t[a.property],r=i.find((function(e){return e.value===l}));return[n("span",{style:"color:".concat("1"===l?"green":"red")},[r?r.label:""])]}}},{field:"status",title:"Status",editRender:{name:"$select",options:[{value:"1",label:"红"},{value:"2",label:"黄"},{value:"3",label:"蓝"},{value:"4",label:"绿"},{value:"5",label:"青"}]}},{field:"sex",title:"Sex",editRender:{name:"$select",options:[{value:"0",label:"女"},{value:"1",label:"男"}]}},{field:"role",title:"Role",sortable:!0,width:200,filters:[{label:"前端开发",value:"前端"},{label:"后端开发",value:"后端"},{label:"测试",value:"测试"},{label:"程序员鼓励师",value:"程序员鼓励师"}],filterMultiple:!1,editRender:{name:"input"}},{field:"describe",title:"Describe",showOverflow:!0,editRender:{name:"input"}}],demoCodes:['\n        <vxe-grid v-bind="xGridOptions"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              xGridOptions: {\n                resizable: true,\n                showOverflow: true,\n                height: 528,\n                filterConfig: {\n                  remote: true\n                },\n                checkboxConfig: {\n                  labelField: 'id',\n                  highlight: true,\n                  range: true\n                },\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'row',\n                  showStatus: true\n                },\n                editRules: {\n                  name: [\n                    { required: true, message: '名称必须填写' },\n                    { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }\n                  ],\n                  role: [\n                    { required: true, message: '角色必须填写' }\n                  ]\n                },\n                sortConfig: {\n                  remote: true\n                },\n                pagerConfig: {\n                  pageSize: 15,\n                  pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]\n                },\n                proxyConfig: {\n                  sort: true,\n                  filter: true,\n                  ajax: {\n                    query: {\n                      url: '/api/user/page/list/{{page.pageSize}}/{{page.currentPage}}'\n                    },\n                    delete: {\n                      url: '/api/user/save'\n                    },\n                    save: {\n                      url: '/api/user/save'\n                    }\n                  }\n                },\n                toolbarConfig: {\n                  buttons: [\n                    { code: 'insert_actived', name: 'Add' },\n                    { code: 'mark_cancel', name: '删除/取消' },\n                    { code: 'save', name: 'Save' }\n                  ],\n                  refresh: true,\n                  custom: true\n                },\n                formConfig: {\n                  titleWidth: 100,\n                  titleAlign: 'right',\n                  items: [\n                    { field: 'name', title: '名称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入名称' } } },\n                    { field: 'role', title: '角色', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入角色' } } },\n                    { field: 'nickname', title: '昵称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入昵称' } } },\n                    // 表单项渲染，自动读取字典配置\n                    { field: 'sex', title: '性别', span: 8, folding: true, itemRender: { name: '$select', options: { dict: 'SEX_ALL' } } },\n                    { field: 'age', title: '年龄', span: 8, folding: true, itemRender: { name: 'input', attrs: { type: 'number', placeholder: '请输入年龄' } } },\n                    { span: 24, align: 'center', collapseNode: true, itemRender: { name: 'FormItemButtonGroup' } }\n                  ]\n                },\n                columns: [\n                  { type: 'seq', width: 60, fixed: 'left' },\n                  { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },\n                  { field: 'name', title: 'Name', sortable: true, editRender: { name: 'input' } },\n                  { field: 'age', title: 'Age', sortable: true, editRender: { name: 'input' } },\n                  // 单元格渲染，自动读取字典配置\n                  { field: 'type', title: 'Type', cellRender: { name: 'DICT', props: { code: 'OPERATE_STATUS' } } },\n                  // 单元格编辑渲染，自动读取字典配置\n                  { field: 'status', title: 'Status', editRender: { name: '$select', options: { dict: 'COLOR_STATUS' } } },\n                  // 单元格编辑渲染，自动请求异步配置\n                  { field: 'sex', title: 'Sex', sortable: true, editRender: { name: '$select', options: { url: '/api/conf/sex/list' } } },\n                  // 筛选渲染，自动请求异步配置\n                  { field: 'role', title: 'Role', sortable: true, width: 200, filters: { url: '/api/conf/role/list' }, filterMultiple: false, editRender: { name: 'input' } },\n                  { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }\n                ]\n              }\n            }\n          }\n        }\n        "]}}}),r=l,s=t(1001),o=(0,s.Z)(r,a,i,!1,null,null,null),d=o.exports}}]);