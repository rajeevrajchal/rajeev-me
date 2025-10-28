<script lang="ts">
	import '@styles/css/reset.css';
	import '@styles/css/global.css';
	import { type Snippet } from 'svelte';
	import { Debug, DocumentHead } from '@shared/components';
	import CustomScroll from '@shared/components/custom-scroll/custom-scroll.svelte';
	import Appbar from '@shared/components/navigation/appbar.svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<Debug />
<DocumentHead />

<Appbar />
<CustomScroll>
	{@render children()}
</CustomScroll>
