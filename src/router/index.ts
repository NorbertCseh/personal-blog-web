import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Github from '../views/Github.vue';
import Login from '../views/Login.vue';
import Projects from '../views/Projects.vue';
import CV from '@/views/CV.vue';
import Blog from '@/views/Blog.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},

	{
		path: '/github',
		name: 'Github',
		component: Github,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
	},
	{
		path: '/cv',
		name: 'CV',
		component: CV,
	},
	{
		path: '/blog',
		name: 'Blog',
		component: Blog,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
