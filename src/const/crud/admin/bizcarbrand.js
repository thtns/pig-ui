export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
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
      "type": "input",
      "label": "车辆品牌",
      "prop": "brand",
      search: true,
      overHidden:true,
      searchSpan: 4 ,
    },
    {
      "type": "input",
      "label": "品牌首字母",
      "prop": "letter"
    },
    {
      "type": "input",
      "label": "logo地址",
      "prop": "logoUrl",
      overHidden:true,
      hide: true

    },
    {
      "type": "input",
      "label": "wmi",
      "prop": "wmi",
      hide: true
    },
    {
      label: '类型',
      prop: 'type',
      type: 'radio',
      slot: true,
      border: true,
      span: 24,
      dicUrl: '/admin/dict/key/car_type'
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
      "label": "创建时间",
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
