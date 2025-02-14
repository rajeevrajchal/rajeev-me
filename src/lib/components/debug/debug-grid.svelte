<script lang="ts">
	import { onMount } from 'svelte';

	type GridLayout = {
		name: string;
		minWidth: number;
		columns: number;
		margin: number;
		gap: number;
		offset: number;
	};

	let visible = $state(false);
	let activeLayout = $state<GridLayout | null>(null);

	let layouts = $state<GridLayout[]>([
		{ name: 'Mobile', minWidth: 0, columns: 4, margin: 8, gap: 16, offset: 16 },
		{ name: 'Tablet', minWidth: 768, columns: 8, margin: 32, gap: 20, offset: 35 },
		{ name: 'Desktop', minWidth: 1024, columns: 12, margin: 32, gap: 35, offset: 35 },
		{ name: 'Large Desktop', minWidth: 1440, columns: 12, margin: 40, gap: 35, offset: 35 },
		{ name: 'Extra Large Desktop', minWidth: 1920, columns: 12, margin: 40, gap: 35, offset: 35 }
	]);

	function updateActiveLayout() {
		const width = window.innerWidth;
		activeLayout =
			layouts
				.slice()
				.reverse()
				.find((layout) => width >= layout.minWidth) || layouts[0];
	}

	$effect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === 'g') {
				event.preventDefault();
				visible = !visible;
				localStorage.setItem('debug-grid-visible', String(visible));
				updateActiveLayout();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('resize', updateActiveLayout);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('resize', updateActiveLayout);
		};
	});

	onMount(() => {
		visible = localStorage.getItem('debug-grid-visible') === 'true';
		if (visible) {
			updateActiveLayout();
		}
	});
</script>

{#if activeLayout && visible}
	<div
		class="grid"
		class:visible
		style:--columns={activeLayout.columns}
		style:--gap="{activeLayout.gap}px"
		style:--margin="{activeLayout.margin}px"
		style:--offset="{activeLayout.offset}px"
	>
		{#each Array(activeLayout.columns) as _, i}
			<div class="column"></div>
		{/each}
	</div>
{/if}

<style>
	.grid {
		display: none;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: var(--gap);
		padding: 0 calc(var(--margin) + var(--offset));
		width: calc(100% - (var(--margin) * 2) - (var(--offset) * 2));
		max-width: 1920px;
		margin: 0 auto;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0;
		pointer-events: none;
		z-index: 9999;
	}

	.grid.visible {
		display: grid;
	}

	.column {
		background-color: rgba(0, 123, 255, 0.1);
		height: 100%;
		border-left: 1px solid rgba(0, 123, 255, 0.2);
		border-right: 1px solid rgba(0, 123, 255, 0.2);
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
