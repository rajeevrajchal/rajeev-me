<div class="indicator">
	<div class="step"></div>
	<div class="step"></div>
	<div class="step"></div>
	<div class="step"></div>
</div>

<style>
	.indicator {
		position: fixed;
		top: 50%;
		right: env(--gap-3);
		transform: translateY(-50%);

		display: flex;
		flex-direction: column;
		gap: env(--gap-1);
		align-items: center;
	}

	.step {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		border: 2px solid env(--color-accent-primary);
	}
</style>
