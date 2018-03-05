<template>
    <el-row>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>推广计划</el-breadcrumb-item>
        </el-breadcrumb>
        <h2>推广计划</h2>

        <el-row :gutter="20" style="margin-bottom: 20px;background: #f0f0f0;padding: 10px;">
            <el-col :span="12">
                <span>创建日期：</span>
                <el-date-picker value-format="yyyy-MM-dd" v-model="searchDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2"></el-date-picker>
            </el-col>
            <el-col :span="6" :offset="6">
                <el-row :gutter="20">
                    <el-col :span="6"><el-button type="primary" @click="createPlan()">新建计划</el-button></el-col>
                    <el-col :span="14"><el-input v-model="searchKeyWord" placeholder="计划名称、ID模糊查询"></el-input></el-col>
                    <el-col :span="4" ><el-button type="primary" icon="el-icon-search" @click="searchPlan()"></el-button></el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-table :data="planData" style="width: 100%;margin-bottom: 30px;" :highlight-current-row="true" :stripe="true">
            <el-table-column prop="plan_id" label="ID"></el-table-column>
            <el-table-column prop="plan_name" label="计划名称"></el-table-column>
            <el-table-column label="计划状态">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.exc_status" :active-value="'1'" :inactive-value="'0'" @change="switchPlan(scope.row)"></el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="threshold" label="限额">
                <template slot-scope="scope">
                    <div v-if="scope.row.threshold_type === '0'">不限</div>
                    <div v-else>{{ '￥' + scope.row.threshold + ' 元/天'}}</div>
                </template>
            </el-table-column>
            <el-table-column prop="create_time" label="创建时间"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="editPlan(scope.$index, scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="text-align: right;" layout="prev, pager, next" :total="total" :current-page.sync="page" @current-change="currentChange()"></el-pagination>
    </el-row>

</template>

<script>
    export default {
        components : {
        },

        data () {
           return {
               planData : [],
               page : 1,
               pageSize : 10,
               total : 0,

               searchDate : null,
               startDate : null,
               endDate : null,
               searchKeyWord : null,

               pickerOptions2 : {
                   shortcuts: [
                       {
                           text: '今天',
                           onClick(picker) {
                               const end = new Date();
                               const start = new Date();
                               picker.$emit('pick', [start, end]);
                           }
                       },
                       {
                           text: '昨天',
                           onClick(picker) {
                               const end = new Date();
                               const start = new Date();
                               start.setTime(start.getTime() - 3600 * 1000 * 24);
                               end.setTime(end.getTime() - 3600 * 1000 * 24);
                               picker.$emit('pick', [start, end]);
                           }
                       },
                       {
                           text: '最近一周',
                           onClick(picker) {
                               const end = new Date();
                               const start = new Date();
                               start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                               picker.$emit('pick', [start, end]);
                           }
                       },
                       {
                           text: '最近一个月',
                           onClick(picker) {
                               const end = new Date();
                               const start = new Date();
                               start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                               picker.$emit('pick', [start, end]);
                           }
                       }
                   ]
               },
           }
        },

        methods : {
            editPlan : function (index, row) {
                console.log(index);
                console.log(row);
            },

            switchPlan : function (item) {
                let msg = '';
                if (item.exc_status === '0'){
                    msg = '确定下线该计划？（与该计划相关的广告也会同时下线）';
                }else {
                    msg = '确定上线该计划？';
                }

                this.$confirm(msg,'提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //确定
                    this.$message({
                        type : 'success',
                        message : '下线成功！'
                    });
                }).catch(() => {
                    //取消
                    if (item.exc_status === '0'){
                        item.exc_status = '1';
                    }else {
                        item.exc_status = '0';
                    }
                });
            },
            createPlan : function () {
                alert('create_plan');
            },

            searchPlan : function () {
                this.getPlanList();
            },

            currentChange : function () {
                this.getPlanList();
            },

            getPlanList : function () {
                this.$http.get('Spread/getPlanList',{
                    params : {
                        page : this.page,
                        pageSize : this.pageSize,
                        startDate : this.searchDate === null ? null : this.searchDate[0],
                        endDate : this.searchDate === null ? null : this.searchDate[1],
                        searchKeyWord : this.searchKeyWord
                    }
                }).then(response => {
                    this.planData = response.data.data;
                    this.total = response.data.total;
                });
            },

        },

        mounted() {
            this.getPlanList();
        },
    }


</script>