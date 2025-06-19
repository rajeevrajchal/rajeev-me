<script lang="ts">
	import '@styles/css/reset.css';
	import '@styles/css/global.css';
	import { type Snippet } from 'svelte';
	import { Appbar, Debug, DocumentHead } from '@shared/components';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<Debug />
<DocumentHead />

<Appbar />
{@render children()}
