export const tableOption = {
    "border": true,
    "index": true,
    "indexLabel": "序号",
    "stripe": true,
    "menuAlign": "center",
    "align": "center",
    "headerAlign": 'center',
    "searchMenuSpan": 6,
    "column": [
        {
            "type": "input",
            "label": "主键id",
            "prop": "id",
            "addDisplay": false,
            "editDisabled": true,
            width: 180,
        },
        {
            "type": "input",
            "label": "商家key",
            "prop": "clientKey",
            overHidden: true,
            "addDisplay": false,
        },
        {
            "type": "input",
            "label": "商家aecSec",
            "prop": "aecSecret",
            overHidden: true,
            "addDisplay": false,
        },
        {
            "type": "input",
            "label": "采购商名称",
            "prop": "name"
        },
        {
            "type": "input",
            "label": "注册手机号",
            "prop": "mobile",
            hide: true
        },
        {
            "type": "input",
            "label": "负责人名称",
            "prop": "directorName"
        },
        {
            "type": "input",
            "label": "联系方式",
            "prop": "directorMobile"
        },
        {
            "type": "number",
            "label": "每日限单数",
            "prop": "dailylimitCount",
            "value": 2,
            "step": 5,
        },
        {
            "type": "radio",
            "label": "状态",
            "prop": "status",
            value: 1,
            dicData: [{
                label: '正常',
                value: 1
            }, {
                label: '禁用',
                value: 2
            }, {
                label: '已过期',
                value: 3
            }]
        },
        {
            "type": "datetime",
            "label": "有效期开始",
            "prop": "validityStart",
            "format": "YYYY-MM-DD HH:mm:ss",
            "valueFormat": 'YYYY-MM-DD HH:mm:ss',
        },
        {
            "type": "datetime",
            "label": "有效期结束",
            "prop": "validityEnd",
            "format": "YYYY-MM-DD HH:mm:ss",
            "valueFormat": 'YYYY-MM-DD HH:mm:ss',

        },
        {
            "type": "input",
            "label": "备注",
            "prop": "remark",
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
            "label": "创建人",
            "prop": "createBy",
            "addDisplay": false,
            "editDisabled": true,
            showColumn: false,
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
