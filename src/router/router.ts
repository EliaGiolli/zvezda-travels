import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

//lazy loaded pages
const Home = () => import('../views/Home.vue');
const Contacts = () => import('../views/Contacts.vue');
const Blog = () => import('../views/Blog.vue');
const BlogPost = () => import('../views/BlogPost.vue');
const Packages = () => import('../views/Packages.vue');
const PackagesDetails = () => import('../views/PackagesDetails.vue');

//layouts
import RootLayout from "../layouts/RootLayout.vue";
import BlogLayout from "../layouts/BlogLayout.vue";
import BookingLayout from "../layouts/BookingLayout.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: RootLayout,
        children: [
            { path: '', component: Home },
            { path: 'contacts', component: Contacts }
        ]
    },
    {
        path: '/blog',
        component: BlogLayout,
        children: [
            { path: '', component: Blog },
            { path: ':slug', component: BlogPost }
        ]
    },
    {
        path: '/tours',
        component: BookingLayout,
        children: [
            { path: '', component: Packages },
            { path: ':id', component: PackagesDetails }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router