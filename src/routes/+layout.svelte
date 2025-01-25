<script lang="ts">
	import DebugGrid from '@comp/debug/debug-grid.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	import '@style/global.scss';

	const { children } = $props();
</script>

{@render children()}

{#if dev}
	<DebugGrid />
{/if}
