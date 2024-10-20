<script lang="ts">
	import DebugGrid from '@comp/debug-grid.svelte';
	import Navbar from '@comp/navbar.svelte';
	import '@style/global.scss';
	const { children } = $props();
</script>

<div class="main">
	<Navbar />
	{@render children()}
</div>
<DebugGrid />

<style lang="scss">
	.main {
		position: relative;
		background: $primary-background;
		width: 100vw;
		min-height: 100vh;
	}
</style>
