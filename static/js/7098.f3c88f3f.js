"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[7098],{7098:function(e,a,s){s.r(a),s.d(a,{default:function(){return i}});var t=function(){var e=this,a=e._self._c;return a("div",[a("vxe-table",{staticClass:"mytable-style",attrs:{border:"","header-cell-class-name":e.headerCellClassName,"row-class-name":e.rowClassName,"cell-class-name":e.cellClassName,data:e.tableData}},[a("vxe-column",{attrs:{type:"seq",width:"60"}}),a("vxe-column",{attrs:{field:"name",title:"Name"}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"attr1",title:"Attr1"}}),a("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1)],1)},l=[],r=(s(76801),{data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}]}},methods:{headerCellClassName:function(e){var a=e.column;return"name"===a.field?"col-blue":null},rowClassName:function(e){var a=e.rowIndex;return[2,3,5].includes(a)?"row-green":null},cellClassName:function(e){var a=e.row,s=e.column;if("sex"===s.field){if(a.sex>="1")return"col-red";if(26===a.age)return"col-orange"}return null}}}),n=r,d=s(1001),o=(0,d.Z)(n,t,l,!1,null,"430f9673",null),i=o.exports}}]);