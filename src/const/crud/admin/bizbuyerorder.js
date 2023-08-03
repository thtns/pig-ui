export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 3,
  addBtn: false,
  delBtn: false,
  viewBtn: true,
  menuWidth: 270,
  "column": [
    {
      "type": "input",
      "label": "主键id",
      "prop": "id",
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "select",
      "label": "采购商",
      "prop": "buyerId",
      props: {
        label: 'name',
        value: 'id'
      },
      dicUrl: '/admin/bizbuyer/all',
      search: true,
      searchSpan: 4 ,
    },
    // {
    //   "type": "input",
    //   "label": "采购商名称",
    //   "prop": "buyerName"
    // },
    {
      "type": "select",
      "label": "品牌",
      "prop": "carBrandId",
      dicUrl: '/admin/bizcarbrand/all',
      props: {
        label: 'brand',
        value: 'id'
      },
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
    // {
    //   "type": "input",
    //   "label": "品牌名称",
    //   "prop": "carBrandName",
    //   search: true,
    //   searchSpan: 4 ,
    //   searchRange: true
    // },
    {
      "type": "input",
      "label": "厂商名称",
      "prop": "manufacturer",
      search: true,
      searchSpan: 4 ,
      searchRange: true
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
      "prop": "supplierName",
      search: true,
      searchLabelWidth: 90,
      searchSpan: 4
    },
    {
      "type": "input",
      "label": "VIN码",
      "prop": "vin",
      search: true,
      searchSpan: 5
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
      "type": "datetime",
      "label": "请求时间",
      "prop": "requestTime",
      // key: 'requestTime',
      search: 'range',
      searchSpan: 4 ,
    },
    {
      "type": "input",
      "label": "请求参数",
      "prop": "requestParams",
      overHidden: true,
      hide: true
    },
    {
      "type": "input",
      "label": "请求header",
      "prop": "requestHeader",
      overHidden: true,
      hide: true
    },
    {
      "type": "input",
      "label": "发动机号",
      "prop": "engineCode",
      hide: true
    },
    {
      "type": "input",
      "label": "回调地址",
      "prop": "callbackUrl",
      overHidden: true,
      hide: true
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
      "type": "datetime",
      "label": "回调时间",
      "prop": "callbackTime",
      search: 'range',
      searchSpan: 4 ,
    },
    {
      type: 'select',
      "label": "订单状态",
      "prop": "requestStatus",
      dataType: 'number/string',
      dicUrl: '/admin/dict/key/order_status',
      search: true,
      searchSpan: 4 ,
      slot: true,
    },
    {
      type: 'select',
      "label": "是否有记录",
      "prop": "anyData",
      dataType: 'string',
      dicUrl: '/admin/dict/key/order_is_data',
      search: true,
      searchLabelWidth: 90,
      searchSpan: 4 ,
      slot: true,
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
