"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[9913],{59913:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 虚拟滚动"),t("span",{staticClass:"orange"},[e._v("（最大可以支撑 5w 列、30w 行）")]),t("br"),e._v(" 高性能的虚拟渲染，设置 "),t("table-api-link",{attrs:{prop:"scroll-x"}}),e._v("={ "),t("table-api-link",{attrs:{prop:"enabled"}}),e._v(", "),t("table-api-link",{attrs:{prop:"gt"}}),e._v(" } | "),t("table-api-link",{attrs:{prop:"scroll-y"}}),e._v("={ "),t("table-api-link",{attrs:{prop:"enabled"}}),e._v(", "),t("table-api-link",{attrs:{prop:"gt"}}),e._v(" } 和 "),t("table-api-link",{attrs:{prop:"height"}}),e._v("、"),t("table-api-link",{attrs:{prop:"max-height"}}),e._v(" 来开启虚拟滚动， 会根据触发规则 "),t("table-api-link",{attrs:{prop:"gt"}}),e._v(" 来启用虚拟渲染。虚拟滚动启用后只会渲染指定范围内的可视区数据，其他的数据将被卷去收起，当滚动到可视区时才被渲染出来"),t("br"),t("span",{staticClass:"red"},[e._v("（注：启用虚拟滚动后："),t("table-api-link",{attrs:{prop:"show-overflow"}}),e._v("，"),t("table-api-link",{attrs:{prop:"show-header-overflow"}}),e._v("，"),t("table-api-link",{attrs:{prop:"show-footer-overflow"}}),e._v(" 参数将根据不同场景各自触发生效，无法取消；如果需要支持，需将虚拟滚动关闭）")],1),t("br"),t("span",{staticClass:"green"},[e._v("（性能优化：横向虚拟滚动由列宽决定性能，每一列的列宽越大就越流畅；纵向虚拟滚动由行高决定性能，每一行的高度越高就越流畅）")]),t("br"),t("span",{staticClass:"red"},[e._v("v3.7+默认关闭虚拟滚动，需手动 "),t("table-api-link",{attrs:{prop:"enabled"}}),e._v(" 开启或者 "),t("router-link",{staticClass:"link",attrs:{to:{name:"StartGlobal"}}},[e._v("setup")]),e._v(" 全局开启")],1)],1),t("vxe-table",{ref:"xTable1",attrs:{border:"","show-overflow":"",height:"300","row-config":{isHover:!0},"sort-config":{trigger:"cell"},"scroll-y":{enabled:!0}}},[t("vxe-column",{attrs:{type:"seq",width:"100"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),t("vxe-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-column",{attrs:{field:"age",title:"Age"}}),t("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v(" 手动调优，对于低性能的浏览器可以通过设置 "),t("table-api-link",{attrs:{prop:"oSize"}}),e._v(" 偏移量来缓解渲染次数，偏移量越大渲染次数就越少，但是每次渲染的耗时就越久"),t("br"),e._v(" 通过指定 "),t("table-api-link",{attrs:{prop:"scroll-x"}}),e._v("={enabled: true, gt: 20} 或 "),t("table-api-link",{attrs:{prop:"scroll-y"}}),e._v("={enabled: true, gt: 40} 适合的参数可以手动调优，如果设置 "),t("table-api-link",{attrs:{prop:"enabled"}}),e._v("=false 则关闭虚拟滚动"),t("br")],1),t("vxe-table",{ref:"xTable2",attrs:{border:"","show-overflow":"","show-header-overflow":"","show-footer-overflow":"","show-footer":"",height:"300","sort-config":{trigger:"cell"},"footer-method":e.footerMethod,"scroll-x":{enabled:!0,gt:10},"scroll-y":{enabled:!0,gt:100}}},[t("vxe-column",{attrs:{type:"seq",width:"100"}}),t("vxe-column",{attrs:{field:"name",title:"Name",width:"150",sortable:""}}),t("vxe-column",{attrs:{field:"sex",title:"Sex",width:"100"}}),t("vxe-column",{attrs:{field:"age",title:"Age",width:"100"}}),t("vxe-column",{attrs:{field:"num",title:"Num",width:"100"}}),t("vxe-column",{attrs:{field:"num2",title:"Num2",width:"100"}}),t("vxe-column",{attrs:{field:"attr19",title:"Name",width:"150",sortable:""}}),t("vxe-column",{attrs:{field:"attr18",title:"Sex",width:"100"}}),t("vxe-column",{attrs:{field:"attr17",title:"Age",width:"100"}}),t("vxe-column",{attrs:{field:"date3",title:"Date",width:"200","show-overflow":""}}),t("vxe-column",{attrs:{field:"role",title:"Role",width:"100"}}),t("vxe-column",{attrs:{field:"attr16",title:"Age",width:"100"}}),t("vxe-column",{attrs:{field:"attr15",title:"Num2",width:"100"}}),t("vxe-column",{attrs:{field:"attr14",title:"Sex",width:"100"}}),t("vxe-column",{attrs:{field:"attr13",title:"Name",width:"150",sortable:""}}),t("vxe-column",{attrs:{field:"attr12",title:"Sex",width:"100"}}),t("vxe-column",{attrs:{field:"attr11",title:"Age",width:"100"}}),t("vxe-column",{attrs:{field:"attr1",title:"Num",width:"100"}}),t("vxe-column",{attrs:{field:"address",title:"Address",width:"200","show-overflow":""}}),t("vxe-column",{attrs:{field:"attr2",title:"Role",width:"100"}}),t("vxe-column",{attrs:{field:"attr3",title:"Age",width:"100"}}),t("vxe-column",{attrs:{field:"attr4",title:"Num2",width:"100"}}),t("vxe-column",{attrs:{field:"attr5",title:"Rate",width:"100"}}),t("vxe-column",{attrs:{field:"attr6",title:"Name",width:"150",sortable:""}}),t("vxe-column",{attrs:{field:"attr7",title:"Date",width:"200","show-overflow":""}}),t("vxe-column",{attrs:{field:"attr8",title:"Role",width:"100"}}),t("vxe-column",{attrs:{field:"attr9",title:"Num",width:"100"}}),t("vxe-column",{attrs:{field:"attr10",title:"Address",width:"200","show-overflow":""}})],1),t("pre",[e._v("    "),t("pre-code",[e._v("\n      | Arrow Up ↑ | 匀速向上滚动数据 |\n      | Arrow Down ↓ | 匀速向下滚动数据 |\n      | Arrow Left ← | 匀速向左滚动数据 |\n      | Arrow Right → | 匀速向右滚动数据 |\n      | Page Up | 向上翻页滚动 |\n      | Page Down | 向下翻页滚动 |\n      | Spacebar | 翻页滚动 |\n      | Home | 滚动到顶部 |\n      | End | 滚动到底部 |\n    ")]),e._v("\n  ")],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1)],1)},o=[],a=(n(60228),n(70560),n(50886),n(38478)),i=n.n(a),r={data:function(){return{demoCodes:['\n        <vxe-table\n          border\n          show-overflow\n          ref="xTable1"\n          height="300"\n          :row-config="{isHover: true}"\n          :sort-config="{trigger: \'cell\'}"\n          :scroll-y="{enabled: true}">\n          <vxe-column type="seq" width="100"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {}\n          },\n          mounted () {\n            this.$nextTick(() => {\n              const $table = this.$refs.xTable1\n              this.mockList(500).then(data => {\n                if ($table) {\n                  $table.loadData(data)\n                }\n              })\n            })\n          },\n          methods: {\n            mockList (size) {\n              return new Promise(resolve => {\n                const list = []\n                for (let index = 0; index < size; index++) {\n                  list.push({\n                    name: `名称${index}`,\n                    sex: '0',\n                    num: 123,\n                    age: 18,\n                    num2: 234,\n                    rate: 3,\n                    address: 'shenzhen'\n                  })\n                }\n                resolve(list)\n              })\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          show-overflow\n          show-header-overflow\n          show-footer-overflow\n          show-footer\n          ref="xTable2"\n          height="300"\n          :sort-config="{trigger: \'cell\'}"\n          :footer-method="footerMethod"\n          :scroll-x="{enabled: true, gt: 10}"\n          :scroll-y="{enabled: true, gt: 100}">\n          <vxe-column type="seq" width="100"></vxe-column>\n          <vxe-column field="name" title="Name" width="150" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex" width="100"></vxe-column>\n          <vxe-column field="age" title="Age" width="100"></vxe-column>\n          <vxe-column field="num" title="Num" width="100"></vxe-column>\n          <vxe-column field="num2" title="Num2" width="100"></vxe-column>\n          <vxe-column field="attr19" title="Name" width="150" sortable></vxe-column>\n          <vxe-column field="attr18" title="Sex" width="100"></vxe-column>\n          <vxe-column field="attr17" title="Age" width="100"></vxe-column>\n          <vxe-column field="date3" title="Date" width="200" show-overflow></vxe-column>\n          <vxe-column field="role" title="Role" width="100"></vxe-column>\n          <vxe-column field="attr16" title="Age" width="100"></vxe-column>\n          <vxe-column field="attr15" title="Num2" width="100"></vxe-column>\n          <vxe-column field="attr14" title="Sex" width="100"></vxe-column>\n          <vxe-column field="attr13" title="Name" width="150" sortable></vxe-column>\n          <vxe-column field="attr12" title="Sex" width="100"></vxe-column>\n          <vxe-column field="attr11" title="Age" width="100"></vxe-column>\n          <vxe-column field="attr1" title="Num" width="100"></vxe-column>\n          <vxe-column field="address" title="Address" width="200" show-overflow></vxe-column>\n          <vxe-column field="attr2" title="Role" width="100"></vxe-column>\n          <vxe-column field="attr3" title="Age" width="100"></vxe-column>\n          <vxe-column field="attr4" title="Num2" width="100"></vxe-column>\n          <vxe-column field="attr5" title="Rate" width="100"></vxe-column>\n          <vxe-column field="attr6" title="Name" width="150" sortable></vxe-column>\n          <vxe-column field="attr7" title="Date" width="200" show-overflow></vxe-column>\n          <vxe-column field="attr8" title="Role" width="100"></vxe-column>\n          <vxe-column field="attr9" title="Num" width="100"></vxe-column>\n          <vxe-column field="attr10" title="Address" width="200" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {}\n          },\n          mounted () {\n            this.$nextTick(() => {\n              const $table = this.$refs.xTable2\n              this.mockList(500).then(data => {\n                if ($table) {\n                  $table.loadData(data)\n                }\n              })\n            })\n          },\n          methods: {\n            mockList (size) {\n              return new Promise(resolve => {\n                const list = []\n                for (let index = 0; index < size; index++) {\n                  list.push({\n                    name: `名称${index}`,\n                    sex: '0',\n                    num: 123,\n                    age: 18,\n                    num2: 234,\n                    rate: 3,\n                    address: 'shenzhen'\n                  })\n                }\n                resolve(list)\n              })\n            },\n            footerMethod ({ columns, data }) {\n              // 返回一个二维数组的表尾合计\n              console.log(data.length)\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  switch (column.property) {\n                    case 'age':\n                    case 'rate':\n                    case 'num':\n                    case 'num2':\n                      return parseInt(XEUtils.mean(data, column.property))\n                  }\n                  return '无'\n                })\n              ]\n            }\n          }\n        }\n        "]}},mounted:function(){var e=this;this.$nextTick((function(){var t=e.$refs.xTable1;e.mockList(500).then((function(e){t&&t.loadData(e)}))})),this.$nextTick((function(){var t=e.$refs.xTable2;e.mockList(500).then((function(e){t&&t.loadData(e)}))}))},methods:{mockList:function(e){return new Promise((function(t){for(var n=[],l=0;l<e;l++)n.push({name:"名称".concat(l),sex:"0",num:123,age:18,num2:234,rate:3,address:"shenzhen"});t(n)}))},footerMethod:function(e){var t=e.columns,n=e.data;return[t.map((function(e,t){if(0===t)return"平均";switch(e.property){case"age":case"rate":case"num":case"num2":return parseInt(i().mean(n,e.property))}return"无"}))]}}},s=r,d=n(1001),c=(0,d.Z)(s,l,o,!1,null,null,null),u=c.exports}}]);