<template>
	<section class="section">
		<div class="container">
			<h1 class="title is-3 has-text-centered">I'm a tech enthusiast.</h1>
			<div class="columns">
				<div class="column">
					<figure class="image">
						<img alt="Avatar" class="" :src="profileImage" />
					</figure>
				</div>
				<div class="column content is-medium has-text-justify">
					<p class="has-text-justify">
						I'm always learning. Most of the time web development,
						but sometimes networking, IT security and everything
						that I'm interested in. I'm currently trying to dig deep
						down into fullstack JavaScript with Mevn stack. I try to
						build everything that I think of if I have free time.
						I'm currently working as a quality assurance engineer
						where I spend most of my time with test automatization
						with Selenium and C#.
					</p>
					<p class="has-text-justify mt-3">
						When I create something and I'm satisfied with it I
						upload them to Github, but usually when I'm doing
						something an another idea hits me and throw everything
						away and start working on the new idea.
					</p>
					<p class="has-text-justify mt-3">
						I was never really interested in development, back then
						I really wanted to be a system administrator. In the
						middle school we had basic web development class with
						HTML and CSS with JavaScript and on that class something
						changed and I started enjoying that I can create
						something and shape it as I want it.
					</p>
					<p class="has-text-justify mt-3">
						I started my carrier as a Customer Support agent with a
						bit of manual testing in a smaller company. After 2-3
						months there was a position in automated testing within
						the company and luckily they choose me. They used
						Selenium and Cucumber with Java at that time I was
						really into SpringBoot and Java so the learning curve
						was not that huge.
					</p>
					<p class="has-text-justify mt-3">
						I was at this job for more than a year and I really
						loved what I'm doing, but I wanted to change to
						something new. I knew how we doing things in software
						development and testing, but I wanted to see how a big
						company doing these things. I ended up in a way bigger
						company and It's really different from my previous
						company. More people and It's really strange that I do
						not know everyone. Way more rules that I expected.
					</p>
					<p class="has-text-justify mt-3">
						The current goal in my life is to get hired as a web
						developer. I know that I have to learn a lot, but I
						think I'm on the right path.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Home',
		components: {},
		data() {
			return {
				profileImage: require('../images/profileImage.jpg'),
			};
		},
	});
</script>

<style lang="scss" scoped></style>
