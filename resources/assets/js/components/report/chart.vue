<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据明细</el-breadcrumb-item>
        </el-breadcrumb>
        <h2>Chart</h2>
        <div id="chart" style="width :500px;height :300px"></div>
    </div>
</template>

<script>
    export default{
        components : {
        },
        data(){
            return {
                visible: false
            }
        },
        methods : {
            initData : function () {
                let myChart = this.$echarts.init(document.getElementById('chart'));
                myChart.setOption({
                    title: { text: 'Echarts Demo' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            },
        },
        mounted(){
            this.initData();
        }
    }


</script>