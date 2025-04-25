<script lang="ts">
	import '@styles/css/reset.css';
	import '@styles/css/global.css';
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

{@render children()}
