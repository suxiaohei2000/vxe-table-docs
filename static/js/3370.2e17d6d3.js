"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[3370],{63370:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});n(34284);var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 树表格与展开行同时使用，非常简单就能实现很复杂的树形展开行 ")]),t("vxe-table",{attrs:{border:"",resizable:"","tree-config":{transform:!0},data:e.tableData}},[t("vxe-column",{attrs:{field:"name",title:"Name","tree-node":""}}),t("vxe-column",{attrs:{type:"expand",title:"Details",width:"80"},scopedSlots:e._u([{key:"content",fn:function(n){var a=n.row;return[t("ul",{staticClass:"expand-wrapper"},[t("li",[t("span",[e._v("ID：")]),t("span",[e._v(e._s(a.id))])]),t("li",[t("span",[e._v("Name：")]),t("span",[e._v(e._s(a.name))])]),t("li",[t("span",[e._v("Date")]),t("span",[e._v(e._s(a.date))])])])]}}])}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"type",title:"Type"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),t("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},s=[],d={data:function(){return{tableData:[{id:1e4,parentId:null,name:"Test1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"Test4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"Test5",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"Test6",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test7",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test8",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test9",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test10",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test11",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test12",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test13",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test14",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test15",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"Test16",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test17",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test18",type:"js",size:1024,date:"2021-06-01"}],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          :tree-config="{transform: true}"\n          :data="tableData">\n          <vxe-column field="name" title="Name" tree-node></vxe-column>\n          <vxe-column type="expand" width="60">\n            <template #content="{ row, rowIndex }">\n              <ul class="expand-wrapper">\n                <li>\n                  <span>ID：</span>\n                  <span>{{ row.id }}</span>\n                </li>\n                <li>\n                  <span>Name：</span>\n                  <span>{{ row.name }}</span>\n                </li>\n                <li>\n                  <span>Date</span>\n                  <span>{{ row.date }}</span>\n                </li>\n              </ul>\n            </template>\n          </vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          }\n        }\n        ","\n        .expand-wrapper {\n          padding: 20px;\n        }\n        "]}}},i=d,p=n(1001),l=(0,p.Z)(i,a,s,!1,null,"3fd5a00c",null),r=l.exports}}]);