<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="card">
	<div class="content">
		{@render children()}
	</div>
</div>

<style lang="scss">
	.card {
		background: #0f1118;
		padding: $padding-sm;
		border-radius: $border-radius;
		.content {
			background: #1d2028;
			height: 100%;
			padding: $padding-md $padding-lg;
		}
	}
</style>
