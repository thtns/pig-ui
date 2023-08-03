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
      type: 'select',
      "label": "品牌id",
      "prop": "carBrandId",
      props: {
        label: 'brand',
        value: 'id'
      },
      dicUrl: '/admin/bizcarbrand/all',
      typeformat (item, label, value) {
        if(item.manufacturer != null){
          return item.brand + '-' + item.manufacturer
        }else{
          return item.brand
        }
      },
      search: true,
      searchSpan: 4
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
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "更新人",
      "prop": "updateBy",
      "addDisplay": false,
      "editDisabled": true
    }
  ]
}
