<template>
	<div class="section" id="github_content">
		<h1 class="title is-3">Github Repos</h1>
		<div class="content" v-if="!isLoading">
			<ul>
				<li v-for="repo in repos" :key="repo.name">
					<a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
				</li>
			</ul>
		</div>
		<div class="box" v-else>
			<progress class="progress is-medium is-dark" max="100"
				>45%</progress
			>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, onMounted } from 'vue';
	import axios from 'axios';
	export default defineComponent({
		name: 'Github',
		data() {
			return {
				repos: Array,
				isLoading: false,
			};
		},
		methods: {
			loadRepos() {
				this.isLoading = true;
				axios
					.get('https://api.github.com/users/NorbertCseh/repos')
					.then((res) => {
						this.repos = res.data;
						this.isLoading = false;
					});
			},
		},
		mounted() {
			this.loadRepos();
		},
	});
</script>

<style></style>
