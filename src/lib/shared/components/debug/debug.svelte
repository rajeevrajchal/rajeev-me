<script lang="ts">
	import { PUBLIC_ENV_MODE } from '$env/static/public';
	import { Variables } from '@styles/variables';
	import { LayoutGrid, setDebugContext, Tweak } from '.';
	import { getDebugContext } from './debug-context.svelte';

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

	setDebugContext();
	let debugContext = getDebugContext();
</script>

{#if PUBLIC_ENV_MODE === 'development'}
	<Tweak />
	{#if debugContext.showGrid}
		<LayoutGrid {layouts} />
	{/if}
{/if}
