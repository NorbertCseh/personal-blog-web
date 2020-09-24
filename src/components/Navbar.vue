<template>
	<nav class="navbar is-transparent">
		<div class="navbar-brand">
			<div
				class="navbar-burger burger"
				data-target="navbarExampleTransparentExample"
				@click="showNav = !showNav"
				:class="{ 'is-active': showNav }"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

		<div
			id="navbarExampleTransparentExample"
			class="navbar-menu"
			:class="{ 'is-active': showNav }"
		>
			<div class="navbar-start">
				<router-link class="navbar-item" to="/">
					Home
				</router-link>

				<router-link class="navbar-item" to="/blog">
					Blog
				</router-link>

				<router-link class="navbar-item" to="/projects">
					Projects
				</router-link>
				<router-link class="navbar-item" to="/cv">
					CV
				</router-link>
			</div>
			<div class="navbar-end">
				<a
					href="https://www.github.com/NorbertCseh"
					target="_blank"
					class="navbar-item"
					><i class="fab fa-github"></i
				></a>
				<a
					href="https://www.linkedin.com/in/norbertistvancseh/"
					target="_blank"
					class="navbar-item"
					><i class="fab fa-linkedin-in"></i
				></a>
				<router-link class="" to="/">
					<figure class="image is-48x48 mt-1 mr-5 mb-1">
						<img :src="avatar" alt="Avatar" class=" is-rounded" />
					</figure>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import gravatar from 'gravatar';

	export default defineComponent({
		name: 'Navbar',
		data() {
			return {
				showNav: false,
				avatar: gravatar.url('cseh.norbert94@gmail.com'),
			};
		},
		methods: {},
	});
</script>

<style></style>
