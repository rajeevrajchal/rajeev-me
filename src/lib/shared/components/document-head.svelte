<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	{#if page.data.title}
		<title>Rajeev - {page.data.title}</title>
	{:else}
		<title>Rajeev</title>
	{/if}
</svelte:head>
