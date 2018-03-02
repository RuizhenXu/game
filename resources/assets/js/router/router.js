import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name : "home",
            path : "/",
            component : resolve =>void(require(['../components/index.vue'], resolve))
        },
        {
            name: "report",
            path: '/report/index',
            component: resolve =>void(require(['../components/report/index.vue'], resolve))
        },
        {
            name: "chart",
            path: '/report/chart',
            component: resolve =>void(require(['../components/report/chart.vue'], resolve))
        },
        {
            name: "example",
            path: '/example',
            components :{
                main : resolve =>void(require(['../components/hello/test2.vue'], resolve)),
            }
        },
    ]
})