<!--
  -    Copyright (c) 2018-2025, lengleng All rights reserved.
  -
  - Redistribution and use in source and binary forms, with or without
  - modification, are permitted provided that the following conditions are met:
  -
  - Redistributions of source code must retain the above copyright notice,
  - this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
  - notice, this list of conditions and the following disclaimer in the
  - documentation and/or other materials provided with the distribution.
  - Neither the name of the pig4cloud.com developer nor the names of its
  - contributors may be used to endorse or promote products derived from
  - this software without specific prior written permission.
  - Author: lengleng (wangiegie@gmail.com)
  -->
<template>
    <div class="execution">
        <basic-container>
            <avue-crud ref="crud"
                       v-model:page="page"
                       :data="tableData"
                       :permission="permissionList"
                       :table-loading="tableLoading"
                       :option="tableOption"
                       @on-load="getList"
                       @search-change="searchChange"
                       @refresh-change="refreshChange"
                       @size-change="sizeChange"
                       @current-change="currentChange"
                       @row-update="handleUpdate"
                       @row-save="handleSave"
                       @row-del="rowDel">
              <template #status="scope">
<!--                <dict-tag :options="scope.dic" :value="scope.row.status" />-->
                <el-switch
                    v-model="scope.row.status"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :active-value="1"
                    :inactive-value="0"
                    @click.native="disable(scope.row)"
                />

              </template>
              <template #menu-left="{}">
                <el-button type="primary" icon="el-icon-turn-off" @click="doAll(0)">关 闭</el-button>
                <el-button type="primary" icon="el-icon-open" @click="doAll(1)">打 开</el-button>
              </template>
            </avue-crud>
        </basic-container>
    </div>
</template>

<script>
    import {fetchList, getObj, addObj, putObj, delObj, closeAll} from '@/api/admin/bizsupplier'
    import {tableOption} from '@/const/crud/admin/bizsupplier'
    import {mapGetters} from 'vuex'

    export default {
        name: 'bizsupplier',
        data() {
            return {
                searchForm: {},
                tableData: [],
                page: {
                    total: 0, // 总页数
                    currentPage: 1, // 当前页数
                    pageSize: 20 // 每页显示多少条
                },
                tableLoading: false,
                tableOption: tableOption
            }
        },
        computed: {
            ...mapGetters(['permissions']),
            permissionList() {
                return {
                    addBtn: this.validData(this.permissions.admin_bizsupplier_add, false),
                    delBtn: this.validData(this.permissions.admin_bizsupplier_del, false),
                    editBtn: this.validData(this.permissions.admin_bizsupplier_edit, false)
                };
            }
        },
        methods: {
            disable: function (row){
              putObj(row).then(data => {
                this.$message.success('修改成功')
                done()
                this.getList(this.page)
              }).catch(() => {
                this.getList(this.page)
              });
            },
            getList(page, params) {
                this.tableLoading = true
                fetchList(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize
                }, params, this.searchForm )).then(response => {
                    this.tableData = response.data.data.records
                    this.page.total = response.data.data.total
                    this.tableLoading = false
                }).catch(() => {
                    this.tableLoading=false
                })
            },
            rowDel: function (row, index) {
                this.$confirm('是否确认删除ID为' + row.id, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    return delObj(row.id)
                }).then(data => {
                    this.$message.success('删除成功')
                    this.getList(this.page)
                }).catch(cancelorerror=>{})
            },
            handleUpdate: function (row, index, done,loading) {
                putObj(row).then(data => {
                    this.$message.success('修改成功')
                    done()
                    this.getList(this.page)
                }).catch(() => {
                    loading();
                });
            },
            handleSave: function (row, done,loading) {
                addObj(row).then(data => {
                    this.$message.success('添加成功')
                    done()
                    this.getList(this.page)
                }).catch(() => {
                    loading();
                });
            },
            sizeChange(pageSize){
                this.page.pageSize = pageSize
            },
            currentChange(current){
                this.page.currentPage = current
            },
            searchChange(form, done) {
                this.searchForm = form
                this.page.currentPage = 1
                this.getList(this.page, form)
                done()
            },
            refreshChange() {
                this.getList(this.page)
            },
            doAll(type){
              closeAll(type).then(data => {
                if (type === 0){
                  this.$message.success('关闭成功')
                }else{
                  this.$message.success('打开成功')
                }
                this.getList(this.page)
                done()
              }).catch(() => {
                loading();
              });
            },
        }
    }
</script>
