<script>
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
</script>

<section class="default-grid">
	<p class="heading">Expeience</p>
	<div class="container">
		<div class="expeience">
			<div class="expeience-item">
				<p class="company">
					<span>Google</span>
					<span>Current</span>
				</p>
				<p class="poition">Senior Software Developer</p>
				<ul class="role">
					<li>Head of department</li>
					<li>Head of deparemtn</li>
				</ul>
			</div>
		</div>
		<div class="action">
			<button class="btn arrow-up"><ChevronUp /></button>
			<button class="btn arrow-down"><ChevronDown /></button>
		</div>
	</div>
</section>

<style>
	.default-grid {
		align-items: center;
		height: 100%;
	}

	.heading {
		grid-column: 4 / -4;
		align-self: flex-end;
	}

	.container {
		height: auto;
		min-height: 12em;
		grid-column: 4 / -4;
		align-self: flex-start;

		position: relative;
	}

	.expeience-item {
		padding-block: env(--gap-3);
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-auto-flow: row;
		column-gap: calc(env(--gap-4) * 2);
		row-gap: env(--gap-3);

		grid-template-areas:
			'company position'
			'company role';
	}

	.company {
		grid-area: company;
	}

	.position {
		grid-area: position;
	}

	.role {
		grid-area: role;
	}

	.status {
		grid-area: status;
	}

	.action {
		position: absolute;
		right: -5em;
		top: 0;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
</style>
