<template>
	<Navbar />
	<div class="content">
		<router-view />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Navbar from '@/components/Navbar.vue';
	import store from './store';

	export default defineComponent({
		name: 'App',
		components: {
			Navbar,
		},
		props: {},
		data() {
			return {};
		},
		methods: {},
		watch: {},
	});
</script>

<style>
	#app {
		font-family: Share Tech Mono, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		overflow: auto;
	}
	.content {
		width: 100%;
		background-color: whitesmoke;
	}
</style>
