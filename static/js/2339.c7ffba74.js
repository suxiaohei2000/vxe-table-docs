"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2339],{62339:function(e,n,a){a.r(n),a.d(n,{default:function(){return r}});var t=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("反转表格，只需要将 "),n("grid-api-link",{attrs:{prop:"columns"}}),e._v(" 和 "),n("grid-api-link",{attrs:{prop:"data"}}),e._v(" 数据进行反转"),n("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])],1),n("vxe-grid",e._b({staticClass:"reverse-table"},"vxe-grid",e.gridOptions1,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1),e._m(0),n("vxe-grid",e._b({staticClass:"reverse-table"},"vxe-grid",e.gridOptions2,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),n("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1)],1)},i=[function(){var e=this,n=e._self._c;return n("p",{staticClass:"tip"},[e._v("更多方式"),n("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])])}],l=(a(50886),a(60228),a(47522),a(70560),{data:function(){return{gridOptions1:{border:!0,showHeader:!1,columns:[{field:"col1",width:100},{field:"col2"},{field:"col3"},{field:"col4"},{field:"col5"},{field:"col6"},{field:"col7"}],data:[{col1:"Name",col2:"Test1",col3:"Test2",col4:"Test3",col5:"Test4",col6:"Test5",col7:"Test6"},{col1:"Role",col2:"Develop",col3:"PM",col4:"Designer",col5:"Test",col6:"Designer",col7:"Develop"},{col1:"Sex",col2:"Man",col3:"Women",col4:"Man",col5:"Women",col6:"Man",col7:"Women"},{col1:"Age",col2:28,col3:18,col4:22,col5:30,col6:26,col7:34},{col1:"Address",col2:"Shenzhen",col3:"Guangzhou",col4:"Shanghai",col5:"Shenzhen",col6:"Shanghai",col7:"Guangzhou"}]},gridOptions2:{border:!1,showOverflow:!1,height:400,showHeader:!1,columns:[],data:[]},demoCodes:['\n        <vxe-grid class="reverse-table" v-bind="gridOptions1"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions1: {\n                border: true,\n                showHeader: false,\n                columns: [\n                  { field: 'col1', width: 100 },\n                  { field: 'col2' },\n                  { field: 'col3' },\n                  { field: 'col4' },\n                  { field: 'col5' },\n                  { field: 'col6' },\n                  { field: 'col7' }\n                ],\n                data: [\n                  { col1: 'Name', col2: 'Test1', col3: 'Test2', col4: 'Test3', col5: 'Test4', col6: 'Test5', col7: 'Test6' },\n                  { col1: 'Role', col2: 'Develop', col3: 'PM', col4: 'Designer', col5: 'Test', col6: 'Designer', col7: 'Develop' },\n                  { col1: 'Sex', col2: 'Man', col3: 'Women', col4: 'Man', col5: 'Women', col6: 'Man', col7: 'Women' },\n                  { col1: 'Age', col2: 28, col3: 18, col4: 22, col5: 30, col6: 26, col7: 34 },\n                  { col1: 'Address', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' }\n                ]\n              }\n            }\n          }\n        }\n        ","\n        .reverse-table .vxe-body--row .vxe-body--column:first-child {\n          background-color: #f8f8f9;\n        }\n        ",'\n        <vxe-grid class="reverse-table" v-bind="gridOptions2"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions2: {\n                border: false,\n                showOverflow: false,\n                height: 400,\n                showHeader: false,\n                columns: [],\n                data: []\n              }\n            }\n          },\n          created () {\n            const myColumns2 = [\n              { field: 'id', title: 'ID' },\n              { field: 'name', title: 'Name' },\n              { field: 'role', title: 'Role' },\n              { field: 'sex', title: 'Sex' },\n              { field: 'age', title: 'Age' },\n              { field: 'address', title: 'Address' },\n              { field: 'rate', title: 'Rate' },\n              { field: 'date3', title: 'Date' },\n              { field: 'updateTime', title: 'UpdateTime' },\n              { field: 'createTime', title: 'CreateTime' }\n            ]\n            const myData2 = [\n              { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2020-09-16', createTime: '2020-09-16' },\n              { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, rate: 2, address: 'Beijin', date3: '20:30', updateTime: '2019-09-16', createTime: '2020-09-16' },\n              { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, rate: 6, address: 'Shanghai', date3: '20:30', updateTime: '2020-09-16', createTime: '2021-09-16' },\n              { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2020-09-16', createTime: '2020-09-16' },\n              { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, rate: 10, address: 'Shanghai Beijin Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16' },\n              { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2018-09-16', createTime: '2020-09-16' },\n              { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, rate: 3, address: 'Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16' },\n              { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, rate: 2, address: 'Beijin Beijin Beijin', date3: '20:30', updateTime: '2017-09-16', createTime: '2020-09-16' },\n              { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: 'Man', age: 29, rate: 3, address: 'Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16' },\n              { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 50, rate: 5, address: 'Shenzhen', date3: '20:30', updateTime: '2017-09-16', createTime: '2020-09-16' }\n            ]\n            this.reverseTable2(myColumns2, myData2)\n          },\n          methods: {\n            // 反转函数\n            reverseTable2 (columns, list) {\n              const buildData = columns.map(column => {\n                const item = { col0: column.title }\n                list.forEach((row, index) => {\n                  item[`col${index + 1}`] = row[column.field]\n                })\n                return item\n              })\n              const buildColumns = [{\n                field: 'col0',\n                fixed: 'left',\n                width: 80\n              }]\n              list.forEach((item, index) => {\n                buildColumns.push({\n                  field: `col${index + 1}`,\n                  minWidth: 120\n                })\n              })\n              this.gridOptions2.data = buildData\n              this.gridOptions2.columns = buildColumns\n            }\n          }\n        }\n        ","\n        .reverse-table .vxe-body--row .vxe-body--column:first-child {\n          background-color: #f8f8f9;\n        }\n        "]}},created:function(){var e=[{field:"id",title:"ID"},{field:"name",title:"Name"},{field:"role",title:"Role"},{field:"sex",title:"Sex"},{field:"age",title:"Age"},{field:"address",title:"Address"},{field:"rate",title:"Rate"},{field:"date3",title:"Date"},{field:"updateTime",title:"UpdateTime"},{field:"createTime",title:"CreateTime"}],n=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,rate:2,address:"Shenzhen",date3:"20:30",updateTime:"2020-09-16",createTime:"2020-09-16"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,rate:2,address:"Beijin",date3:"20:30",updateTime:"2019-09-16",createTime:"2020-09-16"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,rate:6,address:"Shanghai",date3:"20:30",updateTime:"2020-09-16",createTime:"2021-09-16"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,rate:2,address:"Shenzhen",date3:"20:30",updateTime:"2020-09-16",createTime:"2020-09-16"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,rate:10,address:"Shanghai Beijin Shenzhen",date3:"20:30",updateTime:"2020-01-16",createTime:"2020-10-16"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,rate:2,address:"Shenzhen",date3:"20:30",updateTime:"2018-09-16",createTime:"2020-09-16"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,rate:3,address:"Shenzhen",date3:"20:30",updateTime:"2020-01-16",createTime:"2020-10-16"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,rate:2,address:"Beijin Beijin Beijin",date3:"20:30",updateTime:"2017-09-16",createTime:"2020-09-16"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"Man",age:29,rate:3,address:"Shenzhen",date3:"20:30",updateTime:"2020-01-16",createTime:"2020-10-16"},{id:10010,name:"Test10",nickname:"T10",role:"Develop",sex:"Man",age:50,rate:5,address:"Shenzhen",date3:"20:30",updateTime:"2017-09-16",createTime:"2020-09-16"}];this.reverseTable2(e,n)},methods:{reverseTable2:function(e,n){var a=e.map((function(e){var a={col0:e.title};return n.forEach((function(n,t){a["col".concat(t+1)]=n[e.field]})),a})),t=[{field:"col0",fixed:"left",width:80}];n.forEach((function(e,n){t.push({field:"col".concat(n+1),minWidth:120})})),this.gridOptions2.data=a,this.gridOptions2.columns=t}}}),s=l,d=a(1001),o=(0,d.Z)(s,t,i,!1,null,null,null),r=o.exports}}]);