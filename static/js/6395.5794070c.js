"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[6395],{56395:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"tip"},[e._v("自定义分页按钮图标")]),a("vxe-table",{attrs:{border:"","show-overflow":"",height:"400",loading:e.loading,data:e.tableData}},[a("vxe-column",{attrs:{type:"checkbox",width:"60"}}),a("vxe-column",{attrs:{type:"seq",title:"序号",width:"60"}}),a("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"address",title:"Address"}})],1),a("vxe-pager",{attrs:{border:"","icon-prev-page":"vxe-icon-arrow-left","icon-jump-prev":"vxe-icon-arrow-double-left","icon-jump-next":"vxe-icon-arrow-double-right","icon-next-page":"vxe-icon-arrow-right","icon-jump-more":"vxe-icon-ellipsis-h",loading:e.loading,"current-page":e.tablePage.currentPage,"page-size":e.tablePage.pageSize,total:e.tablePage.totalResult,layouts:["PrevPage","JumpNumber","NextPage","FullJump","Sizes","Total"]},on:{"page-change":e.handlePageChange}}),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],i={data:function(){return{loading:!1,tableData:[],tablePage:{currentPage:1,pageSize:10,totalResult:0},demoCodes:['\n        <vxe-table\n          border\n          show-overflow\n          height="400"\n          :loading="loading"\n          :data="tableData">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" title="序号" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address"></vxe-column>\n        </vxe-table>\n\n        <vxe-pager\n          border\n          icon-prev-page="vxe-icon-arrow-left"\n          icon-jump-prev="vxe-icon-arrow-double-left"\n          icon-jump-next="vxe-icon-arrow-double-right"\n          icon-next-page="vxe-icon-arrow-right"\n          icon-jump-more="vxe-icon-ellipsis-h"\n          :loading="loading"\n          :current-page="tablePage.currentPage"\n          :page-size="tablePage.pageSize"\n          :total="tablePage.totalResult"\n          :layouts="[\'PrevPage\', \'JumpNumber\', \'NextPage\', \'FullJump\', \'Sizes\', \'Total\']"\n          @page-change="handlePageChange">\n        </vxe-pager>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tablePage: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 0\n              }\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              setTimeout(() => {\n                this.loading = false\n                this.tablePage.totalResult = 10\n                this.tableData = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },\n                  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },\n                  { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }\n                ]\n              }, 300)\n            },\n            handlePageChange ({ currentPage, pageSize }) {\n              this.tablePage.currentPage = currentPage\n              this.tablePage.pageSize = pageSize\n              this.findList()\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1,e.tablePage.totalResult=10,e.tableData=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"1",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"0",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"1",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Develop",sex:"0",age:27,address:"Shanghai"},{id:10007,name:"Test7",nickname:"T7",role:"Develop",sex:"1",age:29,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"0",age:32,address:"Shanghai"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"1",age:30,address:"Shenzhen"},{id:10010,name:"Test10",nickname:"T10",role:"Develop",sex:"0",age:34,address:"Shanghai"}]}),300)},handlePageChange:function(e){var a=e.currentPage,n=e.pageSize;this.tablePage.currentPage=a,this.tablePage.pageSize=n,this.findList()}}},l=i,o=n(1001),r=(0,o.Z)(l,t,s,!1,null,null,null),d=r.exports}}]);