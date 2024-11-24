<script lang="ts">
	import { PUBLIC_ENV_MODE } from '$env/static/public';
	import DebugGrid from '@comp/debug/debug-grid.svelte';
	import '@style/global.scss';

	const { children } = $props();
</script>

{#if PUBLIC_ENV_MODE === 'development'}
	<DebugGrid />
{/if}

{@render children()}
