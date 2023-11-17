"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8833],{8833:function(e,n,s){s.r(n),s.d(n,{default:function(){return l}});var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v(" 数据代理"),n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-demo/tree/master/vxe-table-by-grid"}},[e._v("（项目示例）")]),e._v("：通过配置 "),n("grid-api-link",{attrs:{prop:"proxy-config"}}),e._v(" 参数，默认直接读取结果，响应结果应该为数组； 可以通过 "),n("grid-api-link",{attrs:{prop:"props"}}),e._v(" 修改默认值，由 "),n("grid-api-link",{attrs:{prop:"pager-config"}}),e._v(" 代理数据转换，只需要配置好数据源即可；非常简单就可以渲染一个表格，从重复写冗余的代码中解放出来"),n("br"),e._v(" 对接格式：使用 "),n("a",{staticClass:"link",attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"}},[e._v("Promise API")]),e._v(" ，任何支持 "),n("a",{staticClass:"link",attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"}},[e._v("Promise")]),e._v(" 的库都可以直接使用 ")],1),n("vxe-grid",e._b({},"vxe-grid",e.gridOptions,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},t=[],d=(s(60228),{data:function(){return{gridOptions:{border:!0,resizable:!0,height:400,proxyConfig:{ajax:{query:function(){return new Promise((function(e){setTimeout((function(){var n=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:44,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"test abc",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex2:["1","0"],num1:20,age:30,address:"Shanghai",date12:"2020-09-20",date13:""},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"1",sex2:["0"],num1:10,age:21,address:"Shenzhen",date12:"",date13:""},{id:10007,name:"Test7",nickname:"T7",role:"Develop",sex:"0",sex2:["0"],num1:5,age:29,address:"test abc",date12:"2020-01-02",date13:"2020-09-20"},{id:10008,name:"Test8",nickname:"T8",role:"PM",sex:"1",sex2:["0"],num1:2,age:35,address:"Shenzhen",date12:"",date13:""}];e(n)}),500)}))}}},columns:[{type:"checkbox",width:50},{type:"seq",width:60},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"role",title:"Role"},{field:"address",title:"Address",showOverflow:!0}]},demoCodes:['\n        <vxe-grid v-bind="gridOptions"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                border: true,\n                resizable: true,\n                height: 400,\n                proxyConfig: {\n                  ajax: {\n                    // 接收 Proise\n                    query: () => {\n                      return new Promise(resolve => {\n                        setTimeout(() => {\n                          const list = [\n                            { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n                            { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n                            { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'test abc', date12: '2020-09-10', date13: '' },\n                            { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },\n                            { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },\n                            { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },\n                            { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'test abc', date12: '2020-01-02', date13: '2020-09-20' },\n                            { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }\n                          ]\n                          resolve(list)\n                        }, 500)\n                      })\n                    }\n                  }\n                },\n                columns: [\n                  { type: 'checkbox', width: 50 },\n                  { type: 'seq', width: 60 },\n                  { field: 'name', title: 'Name' },\n                  { field: 'nickname', title: 'Nickname' },\n                  { field: 'role', title: 'Role' },\n                  { field: 'address', title: 'Address', showOverflow: true }\n                ]\n              }\n            }\n          }\n        }\n        "]}}}),i=d,r=s(1001),o=(0,r.Z)(i,a,t,!1,null,null,null),l=o.exports}}]);