"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2368],{72368:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(34284);var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("工具栏：通过 "),n("grid-api-link",{attrs:{prop:"toolbar-config"}}),e._v(" 属性配置，支持显示/隐藏列、列宽拖动状态的保存功能，可以通过表格的 "),n("table-api-link",{attrs:{prop:"custom-config"}}),e._v(" 参数开启将列个性化的设置状态保存到本地")],1),n("vxe-grid",{ref:"xGrid",attrs:{border:"",resizable:"","keep-source":"",id:"toolbar_demo_1",height:"500","print-config":{},"import-config":{},"export-config":{},columns:e.tableColumn,"toolbar-config":e.tableToolbar,data:e.tableData,"custom-config":{storage:!0},"edit-config":{trigger:"click",mode:"row",showStatus:!0}},on:{"toolbar-button-click":e.toolbarButtonClickEvent,"toolbar-tool-click":e.toolbarToolClickEvent},scopedSlots:e._u([{key:"name_edit",fn:function(t){var a=t.row;return[n("vxe-input",{model:{value:a.name,callback:function(n){e.$set(a,"name",n)},expression:"row.name"}})]}},{key:"nickname_edit",fn:function(t){var a=t.row;return[n("vxe-input",{model:{value:a.nickname,callback:function(n){e.$set(a,"nickname",n)},expression:"row.nickname"}})]}},{key:"role_edit",fn:function(t){var a=t.row;return[n("vxe-input",{model:{value:a.role,callback:function(n){e.$set(a,"role",n)},expression:"row.role"}})]}},{key:"address_edit",fn:function(t){var a=t.row;return[n("vxe-input",{model:{value:a.address,callback:function(n){e.$set(a,"address",n)},expression:"row.address"}})]}}])}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[],s=(t(34338),t(69851)),r=t.n(s),i={data:function(){return{tableData:[],tableToolbar:{buttons:[{code:"myInsert",name:"新增"},{code:"mySave",name:"app.body.button.save",status:"success"},{code:"myExport",name:"导出数据",type:"text",status:"warning"},{name:"禁用按钮",disabled:!1,dropdowns:[{code:"other1",name:"下拉的按钮1",type:"text",disabled:!1},{code:"other2",name:"下拉的按钮2",type:"text",disabled:!0},{code:"other3",name:"下拉的按钮3",type:"text",disabled:!1}]}],tools:[{code:"myPrint",name:"自定义打印"}],import:!0,export:!0,print:!0,zoom:!0,custom:!0},tableColumn:[{type:"checkbox",width:50},{type:"seq",width:60},{field:"name",title:"Name",editRender:{},slots:{edit:"name_edit"}},{title:"分类",children:[{field:"nickname",title:"Nickname",editRender:{autofocus:".vxe-input--inner"},slots:{edit:"nickname_edit"}},{field:"role",title:"Role",editRender:{},slots:{edit:"role_edit"}}]},{field:"address",title:"Address",showOverflow:!0,editRender:{},slots:{edit:"address_edit"}}],demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          keep-source\n          ref="xGrid"\n          id="toolbar_demo_1"\n          height="500"\n          :print-config="{}"\n          :import-config="{}"\n          :export-config="{}"\n          :columns="tableColumn"\n          :toolbar-config="tableToolbar"\n          :data="tableData"\n          :custom-config="{storage: true}"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          @toolbar-button-click="toolbarButtonClickEvent"\n          @toolbar-tool-click="toolbarToolClickEvent">\n          <template #name_edit="{ row }">\n            <vxe-input v-model="row.name"></vxe-input>\n          </template>\n          <template #nickname_edit="{ row }">\n            <vxe-input v-model="row.nickname"></vxe-input>\n          </template>\n          <template #role_edit="{ row }">\n            <vxe-input v-model="row.role"></vxe-input>\n          </template>\n          <template #address_edit="{ row }">\n            <vxe-input v-model="row.address"></vxe-input>\n          </template>\n        </vxe-grid>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableToolbar: {\n                buttons: [\n                  { code: 'myInsert', name: '新增' },\n                  { code: 'mySave', name: 'app.body.button.save', status: 'success' },\n                  { code: 'myExport', name: '导出数据', type: 'text', status: 'warning' },\n                  {\n                    name: '禁用按钮',\n                    disabled: false,\n                    dropdowns: [\n                      { code: 'other1', name: '下拉的按钮1', type: 'text', disabled: false },\n                      { code: 'other2', name: '下拉的按钮2', type: 'text', disabled: true },\n                      { code: 'other3', name: '下拉的按钮3', type: 'text', disabled: false }\n                    ]\n                  }\n                ],\n                tools: [\n                  { code: 'myPrint', name: '自定义打印' }\n                ],\n                refresh: true,\n                import: true,\n                export: true,\n                print: true,\n                zoom: true,\n                custom: true\n              },\n              tableColumn: [\n                { type: 'checkbox', width: 50 },\n                { type: 'seq', width: 60 },\n                { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },\n                {\n                  title: '分类',\n                  children: [\n                    { field: 'nickname', title: 'Nickname', editRender: { autofocus: '.vxe-input--inner' }, slots: { edit: 'nickname_edit' } },\n                    { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } }\n                  ]\n                },\n                { field: 'address', title: 'Address', showOverflow: true, editRender: {}, slots: { edit: 'address_edit' } }\n              ]\n            }\n          },\n          created () {\n            this.loadData()\n          },\n          methods: {\n            loadData () {\n              this.tableData = [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Guangzhou' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },\n                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: 'Man', age: 24, address: 'Shenzhen' },\n                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 20, address: 'Guangzhou' }\n              ]\n            },\n            toolbarButtonClickEvent ({ code }) {\n              const $grid = this.$refs.xGrid\n              switch (code) {\n                case 'myInsert':\n                  $grid.insert({\n                    name: 'xxx'\n                  })\n                  break\n                case 'mySave':\n                  setTimeout(() => {\n                    const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()\n                    VXETable.modal.message({ content: `新增 ${insertRecords.length} 条，删除 ${removeRecords.length} 条，更新 ${updateRecords.length} 条`, status: 'success' })\n                    this.loadData()\n                  }, 100)\n                  break\n                case 'myExport':\n                  $grid.exportData({\n                    type: 'csv'\n                  })\n                  break\n              }\n            },\n            toolbarToolClickEvent ({ code }) {\n              const $grid = this.$refs.xGrid\n              switch (code) {\n                case 'myPrint':\n                  $grid.print()\n                  break\n              }\n            }\n          }\n        }\n        "]}},created:function(){this.loadData()},methods:{loadData:function(){this.tableData=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"Man",age:24,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"Man",age:20,address:"Guangzhou"}]},toolbarButtonClickEvent:function(e){var n=this,t=e.code,a=this.$refs.xGrid;switch(t){case"myInsert":a.insert({name:"xxx"});break;case"mySave":setTimeout((function(){var e=a.getRecordset(),t=e.insertRecords,o=e.removeRecords,s=e.updateRecords;r().modal.message({content:"新增 ".concat(t.length," 条，删除 ").concat(o.length," 条，更新 ").concat(s.length," 条"),status:"success"}),n.loadData()}),100);break;case"myExport":a.exportData({type:"csv"});break}},toolbarToolClickEvent:function(e){var n=e.code,t=this.$refs.xGrid;switch(n){case"myPrint":t.print();break}}}},d=i,l=t(1001),c=(0,l.Z)(d,a,o,!1,null,null,null),m=c.exports}}]);