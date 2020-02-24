import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

import PageNotFound from "./pages/PageNotFound.vue"

Vue.use(Router);

export default new Router({

routes:[
{
    path:"/", 
    name: "home", 
    component: Home
}, 
{
    path:"/brazil", 
    name: "brazil", 
    component: () => import(/* webpackChunkName: "Brazil" */"./pages/Brazil")
}, 
{
    path:"/hawai", 
    name: "hawai", 
    component: () => import(/* webpackChunkName: "Hawai" */"./pages/Hawai")
}, 
{
    path:"/jamaica", 
    name: "jamaica", 
    component: () => import(/* webpackChunkName: "Jamaica" */"./pages/Jamaica")
}, 
{
    path:"/panama", 
    name: "panama", 
    component: () => import(/* webpackChunkName: "Panama" */"./pages/Panama")
}, 
{
path: "*", 
name: "PageNotFound", 
component: PageNotFound


}

]

})