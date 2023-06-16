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
      "label": "状态:启用/禁用",
      "prop": "status"
    },
    {
      "type": "input",
      "label": "机器人访问地址",
      "prop": "robotUrl"
    },
    {
      "type": "input",
      "label": "robotProxies",
      "prop": "robotProxies"
    },
    {
      "type": "input",
      "label": "账号-密码（多个）",
      "prop": "robotAccountPassword"
    },
    {
      "type": "input",
      "label": "代理名称",
      "prop": "robotProxiesName"
    },
    {
      "type": "input",
      "label": "是否需要代理 0；关闭 1，开启",
      "prop": "needDynamicProxy"
    },
    {
      "type": "input",
      "label": "测试VIN码",
      "prop": "testVin"
    },
    {
      "type": "input",
      "label": "机器人服务开始时间",
      "prop": "serviceStartTime"
    },
    {
      "type": "input",
      "label": "机器人服务结束时间",
      "prop": "serviceEndTime"
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
