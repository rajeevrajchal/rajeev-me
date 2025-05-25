<script lang="ts">
	import '@styles/css/reset.css';
	import '@styles/css/global.css';
	import type { Snippet } from 'svelte';
	import { Variables } from '@styles/variables';
	import { LayoutGrid } from '@shared/components/debug';
	import Appbar from '@shared/components/navigation/appbar.svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
	let showGrid: boolean = $state(true);

	const layouts = [
		{
			breakpoint: 0,
			settings: {
				length: Variables.layout['mobile-columns'],
				gap: Variables.layout['mobile-gap'],
				sidePadding: Variables.layout['mobile-padding']
			}
		},
		{
			breakpoint: 760,
			settings: {
				length: Variables.layout['tablet-columns'],
				gap: Variables.layout['tablet-gap'],
				sidePadding: Variables.layout['tablet-padding']
			}
		},
		{
			breakpoint: 1080,
			settings: {
				length: Variables.layout['desktop-columns'],
				gap: Variables.layout['desktop-gap'],
				sidePadding: Variables.layout['desktop-padding']
			}
		}
	];
</script>

<main>
	{#if showGrid}
		<LayoutGrid {layouts} />
	{/if}
	<Appbar />
	{@render children()}
</main>

<style>
	main {
		position: relative;
		height: 100svh;
		width: 100svw;
	}
</style>
