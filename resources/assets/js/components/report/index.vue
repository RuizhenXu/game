<template>
    <div>
        <h1>报表数据</h1>
        <el-button @click="visible = true">报表</el-button>

        <el-button @click="tests">Test</el-button>

        <el-button @click="api">api</el-button>

        <el-button @click="index">index</el-button>
        <el-dialog :visible.sync="visible" title="Title">
            <p>This a Dialog</p>
        </el-dialog>
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
            tests : function (event) {
                this.$notify({
                    title : 'a message',
                    message : 'test message',
                    type : 'success'
                });
            },
            
            api : function (event) {
                this.$http.get('/api').then(response => {
                    console.log(response.data);
                });
            },

            index : function (event) {
                this.$http.get('/index').then(response => {
                    this.$notify({
                        title : response.data.title,
                        message : response.data.msg,
                        type : 'success'
                    })
                })
            }
            
        },
        mounted(){

        }
    }
</script>