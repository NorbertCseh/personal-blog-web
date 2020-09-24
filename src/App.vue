<template>
	<div class="container">
		<Navbar />
		<router-view />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Navbar from '@/components/Navbar.vue';

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

<style lang="scss">
	@import '@/scss/myStyle.scss';
</style>
