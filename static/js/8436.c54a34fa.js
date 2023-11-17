"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8436],{78436:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});t(34284);var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("设置 "),n("table-api-link",{attrs:{prop:"edit-config"}}),e._v(" 的 "),n("table-api-link",{attrs:{prop:"activeMethod"}}),e._v(" 方法判断单元格是否禁用，例如：限制第二行不允许编辑")],1),n("vxe-table",{attrs:{border:"","show-overflow":"",height:"400",data:e.tableData,"edit-config":{trigger:"click",mode:"row",activeMethod:e.activeRowMethod}},on:{"edit-disabled":e.editDisabledEvent}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{autofocus:".myinput"}},scopedSlots:e._u([{key:"edit",fn:function(t){var a=t.row;return[n("vxe-input",{staticClass:"myinput",model:{value:a.name,callback:function(n){e.$set(a,"name",n)},expression:"row.name"}})]}}])}),n("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e.formatSex(a.sex)))])]}},{key:"edit",fn:function(t){var a=t.row;return[n("vxe-select",{attrs:{transfer:""},model:{value:a.sex,callback:function(n){e.$set(a,"sex",n)},expression:"row.sex"}},e._l(e.sexList,(function(e){return n("vxe-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)]}}])}),n("vxe-column",{attrs:{field:"date",title:"Date","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var a=t.row;return[n("vxe-input",{attrs:{type:"week",placeholder:"请选择日期",transfer:""},model:{value:a.date,callback:function(n){e.$set(a,"date",n)},expression:"row.date"}})]}}])})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),n("p",{staticClass:"tip"},[e._v("配合 "),n("table-api-link",{attrs:{prop:"edit-actived"}}),e._v(" 事件，使用组件方式禁用编辑")],1),n("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",height:"400",data:e.tableData,"edit-config":{trigger:"click",mode:"row"}},on:{"edit-actived":e.editActivedEvent}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{autofocus:".myinput"}},scopedSlots:e._u([{key:"edit",fn:function(t){var a=t.row;return[n("vxe-input",{staticClass:"myinput",attrs:{disabled:e.nameDisabled},model:{value:a.name,callback:function(n){e.$set(a,"name",n)},expression:"row.name"}})]}}])}),n("vxe-column",{attrs:{field:"age",title:"Age","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var a=t.row;return[n("vxe-input",{attrs:{type:"number",disabled:e.ageDisabled},model:{value:a.age,callback:function(n){e.$set(a,"age",n)},expression:"row.age"}})]}}])}),n("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e.formatSex(a.sex)))])]}},{key:"edit",fn:function(t){var a=t.row;return[n("vxe-select",{attrs:{transfer:"",disabled:e.sexDisabled},model:{value:a.sex,callback:function(n){e.$set(a,"sex",n)},expression:"row.sex"}},e._l(e.sexList,(function(e){return n("vxe-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)]}}])}),n("vxe-column",{attrs:{field:"date",title:"Date","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var a=t.row;return[n("vxe-input",{attrs:{type:"week",placeholder:"请选择日期",transfer:""},model:{value:a.date,callback:function(n){e.$set(a,"date",n)},expression:"row.date"}})]}}])})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1)],1)},s=[],d=t(69851),l=t.n(d),i={data:function(){return{nameDisabled:!1,ageDisabled:!1,sexDisabled:!1,tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:44,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex2:["1","0"],num1:20,age:30,address:"Shanghai",date12:"2020-09-20",date13:""},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"1",sex2:["0"],num1:10,age:21,address:"Shenzhen",date12:"",date13:""},{id:10007,name:"Test7",nickname:"T7",role:"Develop",sex:"0",sex2:["0"],num1:5,age:29,address:"Shenzhen",date12:"2020-01-02",date13:"2020-09-20"},{id:10008,name:"Test8",nickname:"T8",role:"PM",sex:"1",sex2:["0"],num1:2,age:35,address:"Shenzhen",date12:"",date13:""}],sexList:[{label:"",value:""},{label:"男",value:"1"},{label:"女",value:"0"}],demoCodes:['\n        <vxe-table\n          border\n          show-overflow\n          height="400"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\', activeMethod: activeRowMethod}"\n          @edit-disabled="editDisabledEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{autofocus: \'.myinput\'}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" class="myinput"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" :edit-render="{}">\n            <template #default="{ row }">\n              <span>{{ formatSex(row.sex) }}</span>\n            </template>\n            <template #edit="{ row }">\n              <vxe-select v-model="row.sex" transfer>\n                <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n              </vxe-select>\n            </template>\n          </vxe-column>\n          <vxe-column field="date" title="Date" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.date" type="week" placeholder="请选择日期" transfer></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }\n              ],\n              sexList: [\n                { label: '', value: '' },\n                { label: '男', value: '1' },\n                { label: '女', value: '0' }\n              ]\n            }\n          },\n          methods: {\n            formatSex (value) {\n              if (value === '1') {\n                return '男'\n              }\n              if (value === '0') {\n                return '女'\n              }\n              return ''\n            },\n            activeRowMethod ({ row, rowIndex }) {\n              return rowIndex !== 1\n            },\n            editDisabledEvent ({ row, column }) {\n              VXETable.modal.message({ content: '禁止编辑', status: 'error' })\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          show-overflow\n          ref="xTable"\n          height="400"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          @edit-actived="editActivedEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{autofocus: \'.myinput\'}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" class="myinput" :disabled="nameDisabled"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="age" title="Age" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.age" type="number" :disabled="ageDisabled"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" :edit-render="{}">\n            <template #default="{ row }">\n              <span>{{ formatSex(row.sex) }}</span>\n            </template>\n            <template #edit="{ row }">\n              <vxe-select v-model="row.sex" transfer :disabled="sexDisabled">\n                <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n              </vxe-select>\n            </template>\n          </vxe-column>\n          <vxe-column field="date" title="Date" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.date" type="week" placeholder="请选择日期" transfer></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              nameDisabled: false,\n              sexDisabled: false,\n              dateDisabled: false,\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }\n              ],\n              sexList: [\n                { label: '', value: '' },\n                { label: '男', value: '1' },\n                { label: '女', value: '0' }\n              ]\n            }\n          },\n          methods: {\n            formatSex (value) {\n              if (value === '1') {\n                return '男'\n              }\n              if (value === '0') {\n                return '女'\n              }\n              return ''\n            },\n            editActivedEvent ({ row, rowIndex }) {\n              this.nameDisabled = rowIndex === 1\n              this.ageDisabled = row.age < 30\n              this.sexDisabled = row.sex === '1'\n            }\n          }\n        }\n        "]}},methods:{formatSex:function(e){return"1"===e?"男":"0"===e?"女":""},activeRowMethod:function(e){var n=e.rowIndex;return 1!==n},editDisabledEvent:function(){l().modal.message({content:"禁止编辑",status:"error"})},editActivedEvent:function(e){var n=e.row,t=e.rowIndex;this.nameDisabled=1===t,this.ageDisabled=n.age<30,this.sexDisabled="1"===n.sex}}},r=i,o=t(1001),m=(0,o.Z)(r,a,s,!1,null,null,null),u=m.exports}}]);