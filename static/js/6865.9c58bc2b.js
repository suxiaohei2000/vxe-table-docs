"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[6865],{66865:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("vxe-table",{attrs:{"max-height":"600",loading:e.loading,data:e.tableData,"sort-config":{remote:!0},"tree-config":{children:"children"}},on:{"sort-change":e.sortChangeEvent}},[t("vxe-column",{attrs:{field:"id",title:"ID",width:"80"}}),t("vxe-column",{attrs:{field:"name",title:"名称","tree-node":""}}),t("vxe-column",{attrs:{field:"size",title:"大小",width:"140"}}),t("vxe-column",{attrs:{field:"type",title:"类型",width:"140"}}),t("vxe-column",{attrs:{field:"date",title:"修改日期",width:"260",sortable:""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},i=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"tip"},[e._v(" 实现树结构深层排序"),t("br")])}],d=n(38478),r=n.n(d),s={data:function(){return{filterName:"",loading:!1,originData:[{id:1e3,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:1005,parentId:1e3,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:1e3,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:20045,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:null,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:24330,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:20045,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"}],tableData:[],demoCodes:['\n        <vxe-table\n          max-height="600"\n          :loading="loading"\n          :data="tableData"\n          :sort-config="{remote: true}"\n          :tree-config="{children: \'children\'}"\n          @sort-change="sortChangeEvent">\n          <vxe-column field="id" title="ID" width="80"></vxe-column>\n          <vxe-column field="name" title="名称" tree-node></vxe-column>\n          <vxe-column field="size" title="大小" width="140"></vxe-column>\n          <vxe-column field="type" title="类型" width="140"></vxe-column>\n          <vxe-column field="date" title="修改日期" width="260" sortable></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              loading: false,\n              originData: [\n                { id: 1000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 1005, parentId: 1000, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 1000, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: null, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 24330, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 20045, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }\n              ],\n              tableData: []\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            // 模拟后台接口\n            findList (order) {\n              this.loading = true\n              setTimeout(() => {\n                this.loading = false\n                // 将有关联的列表转成树结构\n                if (order === 'asc') {\n                  this.tableData = XEUtils.toArrayTree(this.originData, { key: 'id', parentKey: 'parentId', sortKey: 'date', reverse: false })\n                } else if (order === 'desc') {\n                  this.tableData = XEUtils.toArrayTree(this.originData, { key: 'id', parentKey: 'parentId', sortKey: 'date', reverse: true })\n                } else {\n                  this.tableData = XEUtils.toArrayTree(this.originData, { key: 'id', parentKey: 'parentId' })\n                }\n              }, 300)\n            },\n            sortChangeEvent ({ column, property, order }) {\n              this.findList(order)\n            }\n        }"]}},created:function(){this.findList()},methods:{findList:function(e){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1,t.tableData="asc"===e?r().toArrayTree(t.originData,{key:"id",parentKey:"parentId",sortKey:"date",reverse:!1}):"desc"===e?r().toArrayTree(t.originData,{key:"id",parentKey:"parentId",sortKey:"date",reverse:!0}):r().toArrayTree(t.originData,{key:"id",parentKey:"parentId"})}),300)},sortChangeEvent:function(e){var t=e.order;this.findList(t)}}},l=s,o=n(1001),p=(0,o.Z)(l,a,i,!1,null,null,null),c=p.exports}}]);