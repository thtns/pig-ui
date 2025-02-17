export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  defaultSort:{
    prop: 'supplierName',
    order: 'ascending'
  },
  "column": [
    {
      "type": "input",
      "label": "主键id",
      "prop": "id",
      "addDisplay": false,
      "editDisabled": true,
      width:170,
    },
    {
      sortable:true,
      "type": "input",
      "label": "供应商名称",
      "prop": "supplierName",
      search: true,
      searchLabelWidth: 90,
      searchSpan: 4 ,
    },
    {
      "type": "input",
      "label": "负责人姓名",
      "prop": "directorName"
    },
    {
      "type": "input",
      "label": "联系方式",
      "prop": "contactMobile"
    },
    {
      sortable:true,
      "type": "input",
      "label": "当前单量",
      "prop": "dailyCount",
    },
    {
      "type": "number",
      "label": "每日限单量",
      "prop": "dailyLimitCount",
      value: 50,
    },
    {
      sortable:true,
      "type": "number",
      "label": "权重",
      "prop": "weight",
      overHidden:true,
      value: 1
    },
    {
      "type": "input",
      "label": "供应商logo",
      "prop": "logo",
      overHidden:true,
      hide: true
    },
    {
      "type": "radio",
      "label": "状态",
      "prop": "status",
      value: 1,
      search: true,
      searchSpan: 4 ,
      slot: true,
      dicUrl: '/admin/dict/key/base_status',
    },
    {
      "type": "input",
      "label": "创建人",
      "prop": "createBy",
      "addDisplay": false,
      "editDisabled": true,
      hide: true
    },
    {
      "type": "input",
      "label": "修改时间",
      "prop": "createTime",
      "addDisplay": false,
      "editDisabled": true,
      hide: true
    },
    {
      "type": "input",
      "label": "修改时间",
      "prop": "updateTime",
      "addDisplay": false,
      "editDisabled": true,
      hide: true
    },
    {
      "type": "input",
      "label": "更新人",
      "prop": "updateBy",
      "addDisplay": false,
      "editDisabled": true,
      hide: true
    }
  ]
}
