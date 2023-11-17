"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[1934],{21934:function(e,n,s){s.r(n),s.d(n,{default:function(){return l}});var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[n("grid-api-link",{attrs:{name:"vxe-grid"}}),e._v(" 高级表格：一个包含表单、工具栏、基础表格、分页...等全功能的组件。完全配置式，常用于低/零代码平台"),n("br")],1),n("vxe-grid",e._b({scopedSlots:e._u([{key:"toolbar_buttons",fn:function(){return[n("vxe-button",{on:{click:function(n){e.gridOptions1.align="left"}}},[e._v("居左")]),n("vxe-button",{on:{click:function(n){e.gridOptions1.align="center"}}},[e._v("居中")]),n("vxe-button",{on:{click:function(n){e.gridOptions1.align="right"}}},[e._v("居右")])]},proxy:!0}])},"vxe-grid",e.gridOptions1,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),n("p",{staticClass:"tip"},[e._v("异步获取列")]),n("vxe-grid",e._b({},"vxe-grid",e.gridOptions2,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1)],1)},t=[],i={data:function(){return{gridOptions1:{border:!0,resizable:!0,showOverflow:!0,height:300,align:"left",toolbarConfig:{slots:{buttons:"toolbar_buttons"}},columns:[{type:"seq",width:50},{field:"name",title:"Name"},{field:"sex",title:"Sex",showHeaderOverflow:!0},{field:"address",title:"Address",showOverflow:!0}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:0,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:100,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:70,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:10,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:90,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:5,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:80,address:"Shenzhen"}]},gridOptions2:{border:!0,resizable:!0,showOverflow:!0,loading:!1,height:300,columns:[],data:[]},demoCodes:['\n        <vxe-grid v-bind="gridOptions1">\n          <template #toolbar_buttons>\n            <vxe-button @click="gridOptions1.align = \'left\'">居左</vxe-button>\n            <vxe-button @click="gridOptions1.align = \'center\'">居中</vxe-button>\n            <vxe-button @click="gridOptions1.align = \'right\'">居右</vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions1: {\n                border: true,\n                resizable: true,\n                showOverflow: true,\n                height: 300,\n                align: 'left',\n                toolbarConfig: {\n                  slots: {\n                    // 自定义工具栏模板\n                    buttons: 'toolbar_buttons'\n                  }\n                },\n                columns: [\n                  { type: 'seq', width: 50 },\n                  { field: 'name', title: 'Name' },\n                  { field: 'sex', title: 'Sex', showHeaderOverflow: true },\n                  { field: 'address', title: 'Address', showOverflow: true }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 0, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 70, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 10, address: 'Shanghai' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 90, address: 'Shenzhen' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 5, address: 'Shenzhen' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 80, address: 'Shenzhen' }\n                ]\n              }\n            }\n          }\n        }\n        ",'\n        <vxe-grid v-bind="gridOptions2"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions2: {\n                border: true,\n                resizable: true,\n                showOverflow: true,\n                loading: false,\n                height: 300,\n                columns: [],\n                data: []\n              }\n            }\n          },\n          created () {\n            this.gridOptions2.loading = true\n            setTimeout(() => {\n              this.gridOptions2.loading = false\n              this.gridOptions2.columns = [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'Name' },\n                { field: 'sex', title: 'Sex', showHeaderOverflow: true },\n                { field: 'role', title: 'Role' },\n                { field: 'address', title: 'Address', showOverflow: true }\n              ]\n              this.gridOptions2.data = [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }\n              ]\n            }, 3000)\n          }\n        }\n        "]}},created:function(){var e=this;this.gridOptions2.loading=!0,setTimeout((function(){e.gridOptions2.loading=!1,e.gridOptions2.columns=[{type:"seq",width:50},{field:"name",title:"Name"},{field:"sex",title:"Sex",showHeaderOverflow:!0},{field:"role",title:"Role"},{field:"address",title:"Address",showOverflow:!0}],e.gridOptions2.data=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"}]}),3e3)}},d=i,o=s(1001),r=(0,o.Z)(d,a,t,!1,null,null,null),l=r.exports}}]);