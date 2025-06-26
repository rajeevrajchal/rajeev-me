<script lang="ts">
	/** * Add a particle background or 3d background * */

	import { SplitText } from '@shared/components';
</script>

<main class="default-grid">
	<div class="container">
		<SplitText value="Rajeev Rajchal" size="large" direction="x" />
		<div class="content">
			<SplitText class="subtitle" value="Software Developer" direction="x" delay={1500} />
		</div>
	</div>
</main>

<style>
	main {
		position: relative;
		height: 100svh;
		width: 100svw;
	}

	.container {
		grid-column: 1/-1;

		@media (--large) {
			grid-column: 3 / -3;
		}

		position: absolute;
		top: 45%;
		transform: translateY(-45%);
	}

	.content {
		width: 100%;
		position: relative;

		:global(.subtitle) {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
		}
	}
</style>
