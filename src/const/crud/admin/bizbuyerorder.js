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
      "label": "采购商Id",
      "prop": "buyerId",
      hide: true
    },
    {
      "type": "input",
      "label": "采购商名称",
      "prop": "buyerName"
    },
    {
      "type": "input",
      "label": "供应商ID",
      "prop": "supplierId",
      hide: true
    },
    {
      "type": "input",
      "label": "供应商名称",
      "prop": "supplierName"
    },
    {
      "type": "input",
      "label": "品牌id",
      "prop": "carBrandId",
      hide: true
    },
    {
      "type": "input",
      "label": "品牌名称",
      "prop": "carBrandName"
    },
    {
      "type": "input",
      "label": "机器人ID",
      "prop": "robotId",
      hide: true
    },
    {
      "type": "input",
      "label": "请求IP地址信息",
      "prop": "requestIpAddress",
      hide: true
    },
    {
      "type": "input",
      "label": "请求时间",
      "prop": "requestTime"
    },
    {
      "type": "input",
      "label": "请求参数",
      "prop": "requestParams",
      overHidden: true,
    },
    {
      "type": "input",
      "label": "请求header",
      "prop": "requestHeader",
      overHidden: true,
    },
    {
      "type": "input",
      "label": "VIN码",
      "prop": "vin"
    },
    {
      "type": "input",
      "label": "发动机号",
      "prop": "engineCode"
    },
    {
      "type": "input",
      "label": "回调地址",
      "prop": "callbackUrl",
      overHidden: true,
    },
    {
      "type": "radio",
      "label": "结果状态码",
      "prop": "requestStatus",
      dicData: [{
        label: '下单成功',
        value: 1
      }, {
        label: '下单失败',
        value: 2
      }, {
        label: '回调成功',
        value: 3
      }, {
        label: '回调失败',
        value: 4
      }]
    },
    {
      "type": "input",
      "label": "失败原因",
      "prop": "failureReason",
      hide: true
    },
    {
      "type": "input",
      "label": "查询成功结果",
      "prop": "result",
      hide: true
    },
    {
      "type": "input",
      "label": "回调时间",
      "prop": "callbackTime",
      hide: true
    },
    {
      "type": "input",
      "label": "订单消耗时长",
      "prop": "spendTime"
    },
    {
      "type": "input",
      "label": "重试次数",
      "prop": "retryCount"
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
