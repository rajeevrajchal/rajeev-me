<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { CustomScroll } from './func/custom-scroll.svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();

	let scrollContainer: HTMLElement | undefined = $state();
	let scrollContent: HTMLElement | undefined = $state();
	let customScroll: CustomScroll | undefined = $state();

	onMount(() => {
		if (!scrollContainer || !scrollContent) {
			return;
		}
		customScroll = new CustomScroll({
			scrollElement: scrollContainer,
			scrollContent: scrollContent
		});
		customScroll.addEventListener();

		return () => {
			customScroll?.removeEventListener();
		};
	});
</script>

<div class="scroll-container" bind:this={scrollContainer}>
	<div class="content" bind:this={scrollContent}>
		{@render children()}
	</div>
</div>

<style>
	.scroll-container {
		width: 100vw;
		height: 200vh;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.content {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
