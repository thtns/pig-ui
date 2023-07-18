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
            width:180,
        },
        {
            "type": "input",
            "label": "代理名称",
            "prop": "robotProxiesName",
            search: true,
        },
        {
            "type": "input",
            "label": "账号-密码",
            "prop": "robotAccountPassword",
            overHidden:true,
        },
        {
            "type": "input",
            "label": "访问地址",
            "prop": "robotUrl",
            overHidden:true,
        },
        {
            "type": "input",
            "label": "host",
            "prop": "host",
            overHidden:true,
        },
        {
            "type": "input",
            "label": "代理Proxies",
            "prop": "robotProxies",
            overHidden:true,
        },
        {
            "type": "radio",
            "label": "是否代理",
            "prop": "needDynamicProxy",
            value: 1,
            dicData: [{
                label: '开启',
                value: 1
            }, {
                label: '关闭',
                value: 0
            }]
        },
        {
            "type": "input",
            "label": "测试VIN码",
            "prop": "testVin"
        },
        {
            "type": "time",
            "label": "服务开始",
            "prop": "serviceStartTime",
            format: 'HH:mm:ss',
            valueFormat: 'HH:mm:ss',
            hide: true
        },
        {
            "type": "time",
            "label": "服务结束",
            "prop": "serviceEndTime",
            format: 'HH:mm:ss',
            valueFormat: 'HH:mm:ss',
            hide: true
        },
        {
            "type": "radio",
            "label": "状态",
            "prop": "status",
            value: true,
            dicData: [{
                label: '启动',
                value: true
            }, {
                label: '禁用',
                value: false
            }]
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
