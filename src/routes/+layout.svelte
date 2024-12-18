<script lang="ts">
	import DebugGrid from '@comp/debug/debug-grid.svelte';
	import '@style/global.scss';
	const { children } = $props();
</script>

{@render children()}
<DebugGrid />

<style lang="scss">
	.main {
		position: relative;
		width: 100svw;
		min-height: 100svh;
	}
</style>
