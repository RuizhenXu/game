import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name : "Home",
            path : "/",
            component : resolve =>void(require(['../components/index.vue'], resolve))
        },
        {
            name: "Report",
            path: '/report/index',
            component: resolve =>void(require(['../components/report/index.vue'], resolve))
        },
        {
            name: "Chart",
            path: '/report/chart',
            component: resolve =>void(require(['../components/report/chart.vue'], resolve))
        },
        {
            name: "SpreadPlan",
            path: '/spread/spreadPlan',
            component: resolve =>void(require(['../components/spread/spreadPlan.vue'], resolve))
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