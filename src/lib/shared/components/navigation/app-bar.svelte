<nav>
	<p>Rajeev Rajchal</p>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		padding-inline: calc(var(--layout-padding) * 1px);
		background: green;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		display: flex;
		align-items: center;
		gap: env(--gap-2);
	}
</style>
