<script lang="ts">
	let visible = $state(false);
	let columns = $state(12);
	let gutter = $state(16);
	let margin = $state(32);
	let maxWidth = $state(1200);

	type GridConfig = {
		columns: number;
		gutter: number;
		margin: number;
		maxWidth: number;
	};

	const breakpoints: { [key: string]: GridConfig } = {
		mobile: { columns: 4, gutter: 8, margin: 16, maxWidth: 600 },
		tablet: { columns: 8, gutter: 12, margin: 24, maxWidth: 900 },
		desktop: { columns: 12, gutter: 16, margin: 32, maxWidth: 1200 }
	};

	$effect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === 'g') {
				event.preventDefault();
				visible = !visible;
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	});

	$effect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			let config: GridConfig;

			if (width <= breakpoints.mobile.maxWidth) {
				config = breakpoints.mobile;
			} else if (width <= breakpoints.tablet.maxWidth) {
				config = breakpoints.tablet;
			} else {
				config = breakpoints.desktop;
			}

			columns = config.columns;
			gutter = config.gutter;
			margin = config.margin;
			maxWidth = config.maxWidth;
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div
	class="grid"
	class:visible
	style:--columns={columns}
	style:--gutter="{gutter}px"
	style:--margin="{margin}px"
	style:--max-width="{maxWidth}px"
>
	{#each Array(columns) as _, i}
		<div class="column"></div>
	{/each}
</div>

<style>
	.grid {
		display: none;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: var(--gutter);
		padding: 0 var(--margin);
		max-width: var(--max-width);
		margin: 0 auto;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
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
