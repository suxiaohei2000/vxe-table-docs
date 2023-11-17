"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[1137],{81137:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});a(34284);var n=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("vxe-table",{attrs:{border:"",resizable:"",height:"500","row-config":{isCurrent:!0,isHover:!0},data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex",formatter:e.formatterSex}}),t("vxe-column",{attrs:{field:"age",title:"Age"}}),t("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}}),t("vxe-column",{attrs:{title:"操作",width:"100","show-overflow":""},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("vxe-button",{attrs:{type:"text",icon:"vxe-icon-edit"},on:{click:function(t){return e.editEvent(n)}}}),t("vxe-button",{attrs:{type:"text",icon:"vxe-icon-delete"}})]}}])})],1),t("vxe-modal",{attrs:{title:e.selectRow?"编辑&保存":"新增&保存",width:"800","min-width":"600","min-height":"300",resize:"","destroy-on-close":""},scopedSlots:e._u([{key:"default",fn:function(){return[t("vxe-form",{attrs:{data:e.formData,rules:e.formRules,"title-align":"right","title-width":"100"},on:{submit:e.submitEvent}},[t("vxe-form-item",{attrs:{title:"Basic information","title-align":"left","title-width":200,span:24,"title-prefix":{icon:"vxe-icon-comment"}}}),t("vxe-form-item",{attrs:{field:"name",title:"Name",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-input",{attrs:{placeholder:"请输入名称"},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"data.name"}})]}}])}),t("vxe-form-item",{attrs:{field:"nickname",title:"Nickname",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-input",{attrs:{placeholder:"请输入名称"},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"data.name"}})]}}])}),t("vxe-form-item",{attrs:{field:"role",title:"Role",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-input",{attrs:{placeholder:"请输入角色"},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"data.name"}})]}}])}),t("vxe-form-item",{attrs:{field:"sex",title:"Sex",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-select",{attrs:{transfer:""},model:{value:n.sex,callback:function(t){e.$set(n,"sex",t)},expression:"data.sex"}},e._l(e.sexList,(function(e){return t("vxe-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)]}}])}),t("vxe-form-item",{attrs:{field:"age",title:"Age",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-input",{attrs:{type:"number",placeholder:"请输入年龄"},model:{value:n.age,callback:function(t){e.$set(n,"age",t)},expression:"data.age"}})]}}])}),t("vxe-form-item",{attrs:{field:"flag1",title:"是否单身",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-radio-group",{model:{value:n.flag1,callback:function(t){e.$set(n,"flag1",t)},expression:"data.flag1"}},[t("vxe-radio",{attrs:{label:"Y",content:"是"}}),t("vxe-radio",{attrs:{label:"N",content:"否"}})],1)]}}])}),t("vxe-form-item",{attrs:{field:"checkedList",title:"可选信息",span:24,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-checkbox-group",{model:{value:n.checkedList,callback:function(t){e.$set(n,"checkedList",t)},expression:"data.checkedList"}},[t("vxe-checkbox",{attrs:{label:"1",content:"运动、跑步"}}),t("vxe-checkbox",{attrs:{label:"2",content:"听音乐"}}),t("vxe-checkbox",{attrs:{label:"3",content:"爬山"}}),t("vxe-checkbox",{attrs:{label:"4",content:"吃美食"}})],1)]}}])}),t("vxe-form-item",{attrs:{title:"Other information","title-align":"left","title-width":200,span:24,"title-prefix":{message:"请填写必填项",icon:"vxe-icon-info-circle-fill"}}}),t("vxe-form-item",{attrs:{field:"num",title:"Number",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-input",{attrs:{type:"number",placeholder:"请输入数值"},model:{value:n.num,callback:function(t){e.$set(n,"num",t)},expression:"data.num"}})]}}])}),t("vxe-form-item",{attrs:{field:"date3",title:"Date",span:12,"item-render":{}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-input",{attrs:{type:"date",placeholder:"请选择日期",transfer:""},model:{value:n.date3,callback:function(t){e.$set(n,"date3",t)},expression:"data.date3"}})]}}])}),t("vxe-form-item",{attrs:{field:"address",title:"Date",span:24,"item-render":{},"title-suffix":{message:"提示信息！！",icon:"vxe-icon-question-circle-fill"}},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.data;return[t("vxe-textarea",{attrs:{autosize:{minRows:2,maxRows:4}},model:{value:n.address,callback:function(t){e.$set(n,"address",t)},expression:"data.address"}})]}}])}),t("vxe-form-item",{attrs:{align:"center","title-align":"left",span:24},scopedSlots:e._u([{key:"default",fn:function(){return[t("vxe-button",{attrs:{type:"submit"}},[e._v("提交")]),t("vxe-button",{attrs:{type:"reset"}},[e._v("重置")])]},proxy:!0}])})],1)]},proxy:!0}]),model:{value:e.showEdit,callback:function(t){e.showEdit=t},expression:"showEdit"}}),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},l=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"tip"},[e._v("实现弹框表单编辑功能"),t("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])])}],s=(a(25728),a(60228),a(69851)),i=a.n(s),o={data:function(){return{selectRow:null,showEdit:!1,sexList:[{label:"",value:""},{label:"女",value:"0"},{label:"男",value:"1"}],formData:null,formRules:{name:[{required:!0,message:"请输入名称"},{min:3,max:5,message:"长度在 3 到 5 个字符"}],nickname:[{required:!0,message:"请输入昵称"}],sex:[{required:!0,message:"请选择性别"}]},tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"1",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"1",age:35,amount:999,address:"test abc"},{id:10009,name:"Test9",role:"Test",sex:"1",age:26,amount:2e3,address:"test abc"},{id:100010,name:"Test10",role:"Develop",sex:"1",age:21,amount:666,address:"test abc"}],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          height="500"\n          :row-config="{isCurrent: true, isHover: true}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n          <vxe-column title="操作" width="100" show-overflow>\n            <template #default="{ row }">\n              <vxe-button type="text" icon="vxe-icon-edit" @click="editEvent(row)"></vxe-button>\n              <vxe-button type="text" icon="vxe-icon-delete"></vxe-button>\n            </template>\n          </vxe-column>\n        </vxe-table>\n\n        <vxe-modal v-model="showEdit" :title="selectRow ? \'编辑&保存\' : \'新增&保存\'" width="800" min-width="600" min-height="300" resize destroy-on-close>\n          <template #default>\n            <vxe-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">\n              <vxe-form-item title="Basic information" title-align="left" :title-width="200" :span="24" :title-prefix="{icon: \'vxe-icon-comment\'}"></vxe-form-item>\n              <vxe-form-item field="name" title="Name" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="nickname" title="Nickname" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="role" title="Role" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.name" placeholder="请输入角色"></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="sex" title="Sex" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-select v-model="data.sex" transfer>\n                    <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n                  </vxe-select>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="age" title="Age" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.age" type="number" placeholder="请输入年龄"></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="flag1" title="是否单身" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-radio-group v-model="data.flag1">\n                    <vxe-radio label="Y" content="是"></vxe-radio>\n                    <vxe-radio label="N" content="否"></vxe-radio>\n                  </vxe-radio-group>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="checkedList" title="可选信息" :span="24" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-checkbox-group v-model="data.checkedList">\n                    <vxe-checkbox label="1" content="运动、跑步"></vxe-checkbox>\n                    <vxe-checkbox label="2" content="听音乐"></vxe-checkbox>\n                    <vxe-checkbox label="3" content="爬山"></vxe-checkbox>\n                    <vxe-checkbox label="4" content="吃美食"></vxe-checkbox>\n                  </vxe-checkbox-group>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item title="Other information" title-align="left" :title-width="200" :span="24" :title-prefix="{message: \'请填写必填项\', icon: \'vxe-icon-info-circle-fill\'}"></vxe-form-item>\n              <vxe-form-item field="num" title="Number" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.num" type="number" placeholder="请输入数值"></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="date3" title="Date" :span="12" :item-render="{}">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.date3" type="date" placeholder="请选择日期" transfer></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item field="address" title="Date" :span="24" :item-render="{}" :title-suffix="{message: \'提示信息！！\', icon: \'vxe-icon-question-circle-fill\'}">\n                <template #default="{ data }">\n                  <vxe-textarea v-model="data.address" :autosize="{minRows: 2, maxRows: 4}"></vxe-textarea>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item align="center" title-align="left" :span="24">\n                <template #default>\n                  <vxe-button type="submit">提交</vxe-button>\n                  <vxe-button type="reset">重置</vxe-button>\n                </template>\n              </vxe-form-item>\n            </vxe-form>\n          </template>\n        </vxe-modal>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              selectRow: null,\n              showEdit: false,\n              sexList: [\n                { label: '', value: '' },\n                { label: '女', value: '0' },\n                { label: '男', value: '1' }\n              ],\n              formData: null,\n              formRules: {\n                name: [\n                  { required: true, message: '请输入名称' },\n                  { min: 3, max: 5, message: '长度在 3 到 5 个字符' }\n                ],\n                nickname: [\n                  { required: true, message: '请输入昵称' }\n                ],\n                sex: [\n                  { required: true, message: '请选择性别' }\n                ]\n              },\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },\n                { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },\n                { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            formatterSex ({ cellValue }) {\n              const item = this.sexList.find(item => item.value === cellValue)\n              return item ? item.label : ''\n            },\n            editEvent (row) {\n              this.formData = {\n                name: row.name,\n                nickname: row.nickname,\n                role: row.role,\n                sex: row.sex,\n                age: row.age,\n                num: row.num,\n                date3: row.date3,\n                address: row.address\n              }\n              this.selectRow = row\n              this.showEdit = true\n            },\n            submitEvent () {\n              this.showEdit = false\n              VXETable.modal.message({ content: '保存成功', status: 'success' })\n              Object.assign(this.selectRow, this.formData)\n            }\n          }\n        }\n        "]}},methods:{formatterSex:function(e){var t=e.cellValue,a=this.sexList.find((function(e){return e.value===t}));return a?a.label:""},editEvent:function(e){this.formData={name:e.name,nickname:e.nickname,role:e.role,sex:e.sex,age:e.age,num:e.num,date3:e.date3,address:e.address},this.selectRow=e,this.showEdit=!0},submitEvent:function(){this.showEdit=!1,i().modal.message({content:"保存成功",status:"success"}),Object.assign(this.selectRow,this.formData)}}},r=o,d=a(1001),m=(0,d.Z)(r,n,l,!1,null,null,null),u=m.exports}}]);