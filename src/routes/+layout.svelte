<script lang="ts">
	import '@styles/reset.css';
	import '@styles/global.css';
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

{@render children()}
