<script>
	import Detail from '@comp/game_ui/detail.svelte';
</script>

<div class="game_ui">
	<div class="ui_content">
		<div class="main-content">
			<Detail />
			<div class="card">
				<div class="content">
					<p>Main content 2</p>
				</div>
			</div>
		</div>
		<div class="card footer">
			<div class="content">
				<p>Footer</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.game_ui {
		height: 100svh;
		width: 100vw;
		background: url('/background.png');
		background-repeat: no-repeat;
		background-origin: border-box;
		background-attachment: fixed;
		background-position: top;
		padding: calc($padding-xl * 3);
	}
	.ui_content {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: $gap-sm;
	}
	.main-content {
		height: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: $gap-sm;
	}

	.footer {
		width: 100%;
	}
</style>
