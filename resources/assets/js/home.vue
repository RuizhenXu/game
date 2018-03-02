<style>
    .el-header {
        background-color: #00C776;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<template>
    <el-container style="border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1','2','3','4']">

                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>数据概况
                    </template>
                    <router-link to="/report/index" tag="div">
                        <el-menu-item index="1-1">投放数据</el-menu-item>
                    </router-link>
                    <router-link to="/report/chart" tag="div">
                        <el-menu-item index="1-2">数据明细</el-menu-item>
                    </router-link>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>推广</template>
                    <el-menu-item index="2-1">推广计划</el-menu-item>
                    <el-menu-item index="2-2">广告管理</el-menu-item>
                    <el-menu-item index="2-3">新建广告</el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>工具</template>
                    <el-menu-item index="3-1">素材管理</el-menu-item>
                    <el-menu-item index="3-2">应用管理</el-menu-item>
                    <el-menu-item index="3-3">定向包管理</el-menu-item>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>帐户中心</template>
                    <el-menu-item index="3-1">用户信息</el-menu-item>
                    <el-menu-item index="3-2">修改密码</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
                    <!--<span>王小虎</span>-->
                    <span class="el-dropdown-link" style="color: #ffffff;">
                        admin
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>用户中心</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>