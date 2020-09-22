<template>
	<section class="hero is-medium is-dark is-bold container">
		<div class="hero-body">
			<div class="columns">
				<div class="column is-3 push-left">
					<figure class="">
						<figure class="image is-128x128">
							<img
								class="is-rounded"
								src="https://bulma.io/images/placeholders/128x128.png"
							/>
						</figure>
					</figure>
				</div>
				<div class="column is-9 has-text-justified">
					<h1 class="title">Norbert István Cseh</h1>
					<p>Quality assurance engeenier</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({});
</script>

<style>
	.push-left {
		padding-left: 100px;
	}
</style>
