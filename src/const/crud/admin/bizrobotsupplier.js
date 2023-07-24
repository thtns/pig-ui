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
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "机器人id",
      "prop": "robotId",
      props: {
        label: 'robotProxiesName',
        value: 'id'
      },
      dicUrl: '/admin/bizrobot/all',
    },
    {
      "label": "供应商id",
      "prop": "supplierId",
      "type": "select",
      props: {
        label: 'supplierName',
        value: 'id'
      },
      dicUrl: '/admin/bizsupplier/all',
      search: true,
      searchSpan: 4
    },
    {
      "type": "input",
      "label": "排序(权重)",
      "prop": "sort",
      hide: true
    },
    {
      "type": "input",
      "label": "创建人",
      "prop": "createBy",
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "修改时间",
      "prop": "createTime",
      "addDisplay": false,
      "editDisabled": true
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
