"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[9566],{59566:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});var s=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v(" 数据代理：通过配置 "),n("grid-api-link",{attrs:{prop:"proxy-config"}}),e._v(" 启用数据代理将不需要再主动发送请求，由表格代理增删改查的相关调用逻辑，只需要配好对应的接口即可自动渲染"),n("br"),e._v(" 通过配置 "),n("grid-api-link",{attrs:{prop:"pager-config"}}),e._v(" 参数开启分页功能，对于分页场景下，如果要实现分页动态序号，可以通过 "),n("table-api-link",{attrs:{prop:"seq-config"}}),e._v("={"),n("table-api-link",{attrs:{prop:"startIndex"}}),e._v("} 属性设置起始值"),n("br"),e._v(" 分页情况下则默认读取响应结果中 page.total 和 result 属性，可以通过 "),n("grid-api-link",{attrs:{prop:"props"}}),e._v(" 修改"),n("br"),e._v(" 对接格式：使用 "),n("a",{staticClass:"link",attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"}},[e._v("Promise API")]),e._v(" ，任何支持 "),n("a",{staticClass:"link",attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"}},[e._v("Promise")]),e._v(" 的库都可以直接使用 ")],1),n("vxe-grid",e._b({},"vxe-grid",e.gridOptions,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},t=[],r=(a(60228),a(89730),{data:function(){return{gridOptions:{border:!0,resizable:!0,height:530,rowId:"id",pagerConfig:{pageSize:10},checkboxConfig:{reserve:!0},proxyConfig:{seq:!0,props:{result:"result",total:"page.total"},ajax:{query:function(e){var n=e.page;return new Promise((function(e){setTimeout((function(){var a=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"Man",age:35,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"Man",age:35,address:"Guangzhou"},{id:100011,name:"Test11",nickname:"T11",role:"Test",sex:"Women",age:26,address:"test abc"},{id:100012,name:"Test12",nickname:"T12",role:"Develop",sex:"Man",age:34,address:"Guangzhou"},{id:100013,name:"Test13",nickname:"T13",role:"Test",sex:"Women",age:22,address:"Shenzhen"}];e({page:{total:a.length},result:a.slice((n.currentPage-1)*n.pageSize,n.currentPage*n.pageSize)})}),100)}))}}},columns:[{type:"checkbox",width:50},{type:"seq",width:60},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"role",title:"Role"},{field:"address",title:"Address",showOverflow:!0}]},demoCodes:['\n        <vxe-grid v-bind="gridOptions"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions: {\n              border: true,\n              resizable: true,\n              height: 530,\n              rowId: 'id',\n              pagerConfig: {\n                // 默认每页大小\n                pageSize: 10\n              },\n              checkboxConfig: {\n                // 设置复选框支持分页勾选，需要设置 rowId 行数据主键\n                reserve: true\n              },\n              proxyConfig: {\n                seq: true, // 启用动态序号代理（分页之后索引自动计算为当前页的起始序号）\n                props: {\n                  // 自定义响应结果读取的字段，例如返回结果为：{result: [], page: {total: 10}}\n                  result: 'result',\n                  total: 'page.total'\n                },\n                ajax: {\n                  // 接收 Promise\n                  query: ({ page }) => {\n                    return new Promise(resolve => {\n                      setTimeout(() => {\n                        const list = [\n                          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                          { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                          { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n                          { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                          { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },\n                          { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },\n                          { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },\n                          { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: 'Women', age: 26, address: 'test abc' },\n                          { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Man', age: 34, address: 'Guangzhou' },\n                          { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 22, address: 'Shenzhen' }\n                        ]\n                        resolve({\n                          page: {\n                            total: list.length\n                          },\n                          result: list.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize)\n                        })\n                      }, 100)\n                    })\n                  }\n                }\n              },\n              columns: [\n                { type: 'checkbox', width: 50 },\n                { type: 'seq', width: 60 },\n                { field: 'name', title: 'Name' },\n                { field: 'nickname', title: 'Nickname' },\n                { field: 'role', title: 'Role' },\n                { field: 'address', title: 'Address', showOverflow: true }\n              ]\n            }\n          }\n        }\n        "]}}}),i=r,o=a(1001),d=(0,o.Z)(i,s,t,!1,null,null,null),l=d.exports}}]);