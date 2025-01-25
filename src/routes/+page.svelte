<script>
	import Footer from '@atoms/footer.svelte';
	import Detail from '@comp/profile/detail.svelte';
	import SubDetail from '@comp/profile/sub-detail.svelte';
</script>

<div class="game_ui">
	<div class="background"></div>
	<div class="ui_content">
		<div class="main-content">
			<Detail />
			<SubDetail />
		</div>
		<Footer />
	</div>
</div>

<style lang="scss">
	.game_ui {
		height: 100vh;
		width: 100vw;
		position: relative;
	}
	.background {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		height: 100svh;
		width: 100vw;
		background: url('/background.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		filter: brightness(0.5);
	}
	.ui_content {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: $gap-sm;
		padding: calc($padding-xl * 3);
		box-sizing: border-box;
	}
	.main-content {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: $gap-sm;
	}

	.footer {
		width: 100%;
	}
</style>
