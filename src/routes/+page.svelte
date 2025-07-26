<script lang="ts">
	/**
	 * Add a particle background or 3d background
	 ***/
	import { SplitText } from '@shared/components';
</script>

<div class="default-grid">
	<div class="container">
		<SplitText value="Rajeev Rajchal" size="large" direction="x" />
		<SplitText value="Software Developer" direction="x" delay={1000} />
	</div>
</div>

<style>
	.default-grid {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.container {
		grid-column: 1/-1;
		height: fit-content;
		align-self: center;

		@media (--large) {
			grid-column: 3 / -3;
		}
	}

	.content {
		background: green;
	}
</style>
