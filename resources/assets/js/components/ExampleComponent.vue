<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
            <hr>
            <router-view name="left"></router-view>
            <router-view name="main"></router-view>
            <router-link to="/test2">Go to 2</router-link>
            <router-link to="/test1">Go to 1</router-link>
            <router-link to="/">Go to index</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
