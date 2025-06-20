<script lang="ts">
	import { SplitText } from '@shared/components';
</script>

<main class="default-grid">
	<div class="container">
		<SplitText value="Rajeev Rajchal" />
	</div>
</main>

<style>
	main {
		position: relative;
		height: 100svh;
		width: 100svw;
	}

	.container {
		grid-column: 3 / -3;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
