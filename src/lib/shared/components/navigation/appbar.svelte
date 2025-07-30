<div class="default-grid">
	<nav>
		<p>RR</p>
		<div class="quick">
			<a href="">Home</a>
			<a href="">Work</a>
			<a href="">Contact</a>
		</div>
	</nav>
</div>

<style>
	.default-grid {
		position: fixed;
		width: 100%;
	}

	nav {
		grid-column: 2 / -2;
		padding-block: env(--gap-2);

		display: grid;
		grid-template-columns: 1fr auto;

		p {
			text-transform: uppercase;
			font-weight: 700;
			font-size: env(--size-medium);
		}
	}

	.quick {
		display: flex;
		gap: calc(env(--gap-3) * 1.5);
		align-items: center;
	}
</style>
