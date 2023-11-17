"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[3687],{13687:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(34284);var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("插入数据，简单的实现示例")]),t("vxe-toolbar",{attrs:{custom:""},scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:e.insertEvent}},[e._v("新增")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),t("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),t("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{resizable:"","show-overflow":"","keep-source":"","tree-config":e.treeConfig,"edit-config":{trigger:"click",mode:"row",showStatus:!0},data:e.tableData}},[t("vxe-column",{attrs:{type:"checkbox",width:"120","tree-node":""}}),t("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"row.name"}})]}}])}),t("vxe-column",{attrs:{field:"size",title:"Size","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.size,callback:function(t){e.$set(a,"size",t)},expression:"row.size"}})]}}])}),t("vxe-column",{attrs:{field:"type",title:"Type","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.type,callback:function(t){e.$set(a,"type",t)},expression:"row.type"}})]}}])}),t("vxe-column",{attrs:{field:"date",title:"Date","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"date",transfer:""},model:{value:a.date,callback:function(t){e.$set(a,"date",t)},expression:"row.date"}})]}}])})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],d=n(38478),i=n.n(d),r=n(69851),o=n.n(r),l={data:function(){return{tableData:[{id:1e4,parentId:null,name:"vxe-table test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"vxe-table test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"vxe-table test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"vxe-table test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"vxe-table test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],treeConfig:{transform:!0,rowField:"id",parentField:"parentId"},demoCodes:['\n        <vxe-toolbar custom>\n          <template #buttons>\n            <vxe-button @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          show-overflow\n          keep-source\n          ref="xTable"\n          :tree-config="treeConfig"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          :data="tableData">\n          <vxe-column type="checkbox" width="120" tree-node></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="size" title="Size" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.size" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="type" title="Type" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.type" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="date" title="Date" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.date" type="date" transfer></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10000, parentId: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'vxe-table test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'vxe-table test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'vxe-table test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ],\n              treeConfig: {\n                transform: true,\n                rowField: 'id',\n                parentField: 'parentId'\n              }\n            }\n          },\n          methods: {\n            insertEvent () {\n              const $table = this.$refs.xTable\n              const newRow = {\n                name: '新数据',\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')\n              }\n              $table.insert(newRow).then(({ row }) => $table.setActiveRow(row))\n            },\n            getInsertEvent () {\n              const $table = this.$refs.xTable\n              const insertRecords = $table.getInsertRecords()\n              VXETable.modal.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              const $table = this.$refs.xTable\n              const removeRecords = $table.getRemoveRecords()\n              VXETable.modal.alert(removeRecords.length)\n            }\n          }\n        }\n        "]}},methods:{insertEvent:function(){var e=this.$refs.xTable,t={name:"新数据",date:i().toDateString(new Date,"yyyy-MM-dd")};e.insert(t).then((function(t){var n=t.row;return e.setActiveRow(n)}))},getInsertEvent:function(){var e=this.$refs.xTable,t=e.getInsertRecords();o().modal.alert(t.length)},getRemoveEvent:function(){var e=this.$refs.xTable,t=e.getRemoveRecords();o().modal.alert(t.length)}}},p=l,v=n(1001),c=(0,v.Z)(p,a,s,!1,null,null,null),m=c.exports}}]);