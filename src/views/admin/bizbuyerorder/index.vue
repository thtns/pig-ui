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
              <template #menu="{size,row,index}">
                <el-button @click="rowRetry(row,index)"
                           icon="el-icon-position"
                           text
                           type="primary"
                           :size="size">重试</el-button>
                <el-button @click="rowReject(row,index)"
                           icon="el-icon-turn-off"
                           text
                           type="primary"
                           :size="size">驳回</el-button>
              </template>
              <template #requestStatus="scope">
                <dict-tag :options="scope.dic" :value="scope.row.requestStatus" />
              </template>
              <template #anyData="scope">
                <dict-tag :options="scope.dic" :value="scope.row.anyData" />
              </template>
            </avue-crud>
        </basic-container>
    </div>
</template>

<script>
    import {fetchList, getObj, addObj, putObj, delObj, rejectObj, retryObj} from '@/api/admin/bizbuyerorder'
    import {tableOption} from '@/const/crud/admin/bizbuyerorder'
    import {mapGetters} from 'vuex'

    export default {
        name: 'bizbuyerorder',
        data() {
            return {
                searchForm: {},
                tableData: [],
                page: {
                    total: 0, // 总页数
                    currentPage: 1, // 当前页数
                    pageSize: 10 // 每页显示多少条
                },
                tableLoading: false,
                tableOption: tableOption
            }
        },
        computed: {
            ...mapGetters(['permissions']),
            permissionList() {
                return {
                    addBtn: this.validData(this.permissions.admin_bizbuyerorder_add, false),
                    delBtn: this.validData(this.permissions.admin_bizbuyerorder_del, false),
                    editBtn: this.validData(this.permissions.admin_bizbuyerorder_edit, false)
                };
            }
        },
        methods: {
            getList(page, params) {
                this.tableLoading = true
                console.log(this.searchForm)
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
            rowReject: function (row, index) {
              this.$confirm('是否确认驳回ID为' + row.id, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(function () {
                return rejectObj(row.id)
              }).then(data => {
                this.$message.success('驳回订单成功')
                this.getList(this.page)
              }).catch(cancelorerror=>{})
            },
            rowRetry: function (row, index) {
              this.$confirm('是否确认重试ID为' + row.id, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(function () {
                return retryObj(row.id)
              }).then(data => {
                this.$message.success('驳回订单成功')
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
                if(form.requestTime){
                  const requestTime = this.formatDateTime(form.requestTime)
                  form.requestTime = requestTime
                }
                if (form.callbackTime){
                  const callbackTime = this.formatDateTime(form.callbackTime)
                  form.callbackTime = callbackTime
                }
                this.searchForm = form
                this.page.currentPage = 1
                this.getList(this.page, form)
                done()
            },
            refreshChange() {
                this.getList(this.page)
            },
            formatDateTime(date) {
              const year = date.getFullYear();
              const month = this.padNumber(date.getMonth() + 1);
              const day = this.padNumber(date.getDate());
              const hours = this.padNumber(date.getHours());
              const minutes = this.padNumber(date.getMinutes());
              const seconds = this.padNumber(date.getSeconds());
              return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // 使用字符串拼接构建时间字符串
          },
          padNumber(number) {
            // 辅助函数，用于将数字补零为两位数
            return String(number).padStart(2, "0");
          }
        }
    }
</script>
