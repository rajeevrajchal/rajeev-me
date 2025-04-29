<script lang="ts">
	import '@styles/css/reset.css';
	import '@styles/css/global.css';
	import type { Snippet } from 'svelte';
	import { AppBar, Layout } from '@shared';
	import { Variables } from '@styles/variables';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
	let showGrid: boolean = $state(false);

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
		<Layout {layouts} />
	{/if}
	<AppBar />
	{@render children()}
</main>

<style>
	main {
		position: relative;
		width: 100vw;
		background: blue;
	}
</style>
