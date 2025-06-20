<script lang="ts">
	import { untrack } from 'svelte';

	let {
		layouts
	}: {
		layouts: {
			breakpoint: number;
			settings: {
				length: number;
				gap?: number;
				sidePadding?: number;
				maxWidth?: number;
			};
		}[];
	} = $props();

	let currentLayout = $state(layouts[0].settings);
	let currentStyle = $derived(`
		gap: ${currentLayout.gap ?? 0}px;
		max-width: ${currentLayout.maxWidth ?? 'auto'}px;
		padding-left: ${currentLayout.sidePadding ?? 0}px;
		padding-right: ${currentLayout.sidePadding ?? 0}px;
	`);

	const findMatchingLayout = () => {
		const reversedLayouts = [...layouts].reverse();
		const layout = reversedLayouts.find((layout) => layout.breakpoint <= window.innerWidth);
		if (layout) currentLayout = layout.settings;
	};

	$effect(() => {
		window.addEventListener('resize', findMatchingLayout);
		untrack(() => findMatchingLayout());
		return () => {
			window.removeEventListener('resize', findMatchingLayout);
		};
	});
</script>

<div class="outer-container">
	<div class="container" style={currentStyle}>
		{#each currentLayout}
			<div class="collumn"></div>
		{/each}
	</div>
</div>

<style>
	.outer-container {
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		z-index: 100;
		pointer-events: none;
		opacity: 0.5;
	}
	.container {
		display: grid;
		grid-auto-flow: column;

		height: 100%;
		width: 100%;
		margin: 0 auto;
		background: transparent;
	}

	.collumn {
		background-color: hsla(from hsla(0, 0%, 100%, 1) h s l/0.4);
		height: 100%;
	}
</style>
