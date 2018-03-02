<template>
    <div>
        <h1>test3333</h1>
        <el-button @click="visible = true">按钮333</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>欢迎使用 Element</p>
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

        },
        mounted(){

        }
    }
</script>