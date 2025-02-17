export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  addBtn: false,
  viewBtn: true,
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
      "label": "供应商ID",
      "prop": "supplierId"
    },
    {
      "type": "input",
      "label": "供应商名称",
      "prop": "supplierName"
    },
    {
      "type": "input",
      "label": "机器人id",
      "prop": "robotId"
    },
    {
      "type": "input",
      "label": "结果状态码",
      "prop": "resultStatus",
      dicData: [{
        label: '成功',
        value: 1
      },{
        label: '失败',
        value: 0
      }, {
        label: '无结果',
        value: 2
      }],
    },
    {
      "type": "input",
      "label": "失败原因",
      "prop": "failureReason",
      overHidden:true,
      hide: true
    },
    {
      "type": "input",
      "label": "成功结果",
      "prop": "result",
      overHidden:true,
      hide: true
    },
    {
      "type": "input",
      "label": "查询时间",
      "prop": "querytime"
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
