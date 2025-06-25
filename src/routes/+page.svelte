<script lang="ts">
	import { SplitText } from '@shared/components';
</script>

<main class="default-grid">
	<div class="container">
		<SplitText value="Rajeev Rajchal" size="large" direction="x" />
		<div class="content">
			<SplitText class="subtitle" value="Software Developer" delay={1.2} direction="x" />
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
		width: 100%;

		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding-inline: env(--gap-2);
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
