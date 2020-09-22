<template>
	<div class="section">
		<div class="columns">
			<div class="column"></div>
			<div class="column is-5">
				<form action="">
					<div class="field is-horizontal">
						<div class="field-label is-normal">Email:</div>
						<div class="field-body">
							<div class="field">
								<div class="control is-expanded">
									<input
										class="input"
										type="text"
										placeholder="email@email.com"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="field is-horizontal">
						<div class="field-label is-normal">Password:</div>
						<div class="field-body">
							<div class="field">
								<div class="control is-expanded">
									<input
										class="input"
										type="text"
										placeholder="password"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="field is-grouped is-grouped-right">
						<div class="control">
							<button class="button is-success">Login</button>
						</div>
					</div>
				</form>
			</div>
			<div class="column"></div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({
		name: 'Login',
	});
</script>

<style></style>
