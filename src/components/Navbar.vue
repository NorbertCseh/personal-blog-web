<template>
	<div class="navigation" v-show="showNav">
		<div class="navbar-elements" id="expanded-navbar">
			<div class="icon close-icon" @click="showNav = !showNav">
				<i class="fas fa-angle-left"></i>
			</div>
			<router-link class="navbar-element" to="/">
				<strong>NorbertCseh</strong>
			</router-link>

			<router-link class="navbar-element" to="/about"
				>About Me</router-link
			>
			<router-link class="navbar-element" to="/github"
				>Github</router-link
			>
			<router-link class="navbar-element" to="/projects"
				>Projects</router-link
			>
			<router-link class="navbar-element" to="/cv">CV</router-link>
			<router-link class="navbar-element" to="/register">
				<strong>Sign up</strong>
			</router-link>
			<router-link class="navbar-element" to="/login">Log in</router-link>
		</div>
	</div>
	<div class="navigation-hidden" v-show="!showNav">
		<div class="navbar-elements" id="expanded-navbar">
			<div class="icon open-icon" @click="showNav = !showNav">
				<i class="fas fa-angle-right"></i>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import store from '@/store';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Navbar',
		data() {
			return {
				showNav: true,
			};
		},
		methods: {},
	});
</script>

<style>
	.navigation {
		width: 15%;
		background-color: #2c3e50;
		color: antiquewhite;
		display: block;
	}
	.navbar-elements {
		display: flex;
		flex-direction: column;
	}
	.navbar-element {
		padding-top: 2%;
		padding-bottom: 2%;
		color: aliceblue;
		text-decoration: none;
	}
	.navbar-element:hover {
		margin-top: 2%;
		color: teal;
		font-size: 125%;
		background-color: darkgrey;
	}
	.close-icon {
		justify-items: right;
		margin-left: 90%;
	}
	.icon:hover {
		background-color: darkgrey;
	}
	.navigation-hidden {
		width: 2%;
		background-color: #2c3e50;
		color: antiquewhite;
		display: block;
	}
	.open-icon {
		justify-items: right;
	}
</style>
