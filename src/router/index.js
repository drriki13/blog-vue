import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

function loadView(view) {
    return () => import('@/views/' + view);
}

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: loadView('Home')
        },
        {
            path: '/post/:id',
            name: 'Post',
            component: loadView('Post'),
        },
        {
            path: '/archive',
            name: 'Archive',
            component: loadView('Archive'),
        },
        {
            path: '/donations',
            name: 'Donations',
            component: loadView('Donations'),
        },
        {
            path: '/about',
            name: 'About',
            component: loadView('About'),
        },
        {
            path: '/test',
            name: 'Test',
            component: loadView('Test')
        },
        {
            path: "*",
            component: loadView('404'),
        }
    ]
})
