/*import VueRouter from 'vue-router';
Vue.use(VueRouter);*/

const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import("../views/Home.vue"),
    },
    /**************************MODULE-CLIENTS**************************/
    {
        path:'/liste-des-Clients',
        name:'liste-clients',
        component:()=>import("../views/Clients/ListeClient.vue"),
    },
    {
        path:'/ajouter-un-Client',
        name:'ajouter-client',
        component:()=>import("../views/Clients/AjouterClient.vue"),
    },
    {
        path:'/type-de-Clients',
        name:'type-client',
        component:()=>import("../views/Clients/TypeClient.vue"),
    },
    /**************************MODULE-CLIENTS**************************/
    /**************************MODULE-COMPTES**************************/
    {
        path:'/liste-des-comptes',
        name:'liste-comptes',
        component:()=>import("../views/Comptes/ListeCompte.vue"),
    },
    {
        path:'/ajouter-un-compte',
        name:'ajouter-compte',
        component:()=>import("../views/Comptes/AjouterCompte.vue"),
    },
    {
        path:'/type-de-comptes',
        name:'type-compte',
        component:()=>import("../views/Comptes/TypeCompte.vue"),
    },
    /**************************MODULE-COMPTES**************************/
    /**************************MODULE-OPERATIONS**************************/
    {
        path:'/liste-des-operations',
        name:'liste-operations',
        component:()=>import("../views/Operations/ListeOperation.vue"),
    },
    {
        path:'/ajouter-une-operation',
        name:'ajouter-operation',
        component:()=>import("../views/Operations/AjouterOperation.vue"),
    },
    {
        path:'/type-operations',
        name:'type-operation',
        component:()=>import("../views/Operations/TypeOperation.vue"),
    },
    /**************************MODULE-OPERATIONS**************************/

]

/*const router = new VueRouter({
    mode:'history',
    routes,
})*/


export default routes;