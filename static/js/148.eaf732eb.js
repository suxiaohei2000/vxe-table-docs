"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[148],{55676:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});n(34284);var s=function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"tip"},[e._v(" 手风琴展开效果，通过配置 expand-config={"),a("table-api-link",{attrs:{prop:"accordion"}}),e._v("} 属性来开启同一级的节点，每次只能展开一个 ")],1),a("vxe-table",{attrs:{border:"","expand-config":{accordion:!0},data:e.tableData}},[a("vxe-column",{attrs:{type:"seq",width:"60"}}),a("vxe-column",{attrs:{type:"expand",width:"80"},scopedSlots:e._u([{key:"content",fn:function(n){var s=n.row,t=n.rowIndex;return[1===t?a("div",{staticClass:"expand-wrapper"},[a("vxe-table",{attrs:{border:"",data:e.childData}},[a("vxe-column",{attrs:{field:"role",title:"Role"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}})],1)],1):a("div",{staticClass:"expand-wrapper"},[a("ul",[a("li",[a("span",[e._v("ID：")]),a("span",[e._v(e._s(s.id))])]),a("li",[a("span",[e._v("Name：")]),a("span",[e._v(e._s(s.name))])]),a("li",[a("span",[e._v("UpdateTime：")]),a("span",[e._v(e._s(s.updateTime))])]),a("li",[a("span",[e._v("CreateTime：")]),a("span",[e._v(e._s(s.createTime))])])])])]}}])}),a("vxe-column",{attrs:{field:"name",title:"Name"}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),a("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},t=[],d={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}],childData:[{id:50004,name:"Test554",role:"Designer",sex:"1",age:33,address:"test abc"},{id:50005,name:"Test555",role:"Develop",sex:"0",age:36,address:"Shanghai"},{id:50006,name:"Test556",role:"Designer",sex:"1",age:40,address:"test abc"}],demoCodes:['\n        <vxe-table\n          border\n          :expand-config="{accordion: true}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column type="expand" width="80">\n            <template #content="{ row, rowIndex }">\n              <div v-if="rowIndex === 1" class="expand-wrapper">\n                <vxe-table\n                  border\n                  :data="childData">\n                  <vxe-column field="role" title="Role"></vxe-column>\n                  <vxe-column field="age" title="Age"></vxe-column>\n                </vxe-table>\n              </div>\n              <div v-else class="expand-wrapper">\n                <ul>\n                  <li>\n                    <span>ID：</span>\n                    <span>{{ row.id }}</span>\n                  </li>\n                  <li>\n                    <span>Name：</span>\n                    <span>{{ row.name }}</span>\n                  </li>\n                  <li>\n                    <span>UpdateTime：</span>\n                    <span>{{ row.updateTime }}</span>\n                  </li>\n                  <li>\n                    <span>CreateTime：</span>\n                    <span>{{ row.createTime }}</span>\n                  </li>\n                </ul>\n              </div>\n            </template>\n          </vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ],\n              childData: [\n                { id: 50004, name: 'Test554', role: 'Designer', sex: '1', age: 33, address: 'test abc' },\n                { id: 50005, name: 'Test555', role: 'Develop', sex: '0', age: 36, address: 'Shanghai' },\n                { id: 50006, name: 'Test556', role: 'Designer', sex: '1', age: 40, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        ","\n        .expand-wrapper {\n          padding: 20px;\n        }\n        "]}}},l=d,i=n(1001),r=(0,i.Z)(l,s,t,!1,null,"c6856f90",null),o=r.exports}}]);