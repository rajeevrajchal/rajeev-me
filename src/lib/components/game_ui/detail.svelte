<script>
	import Card from '@atoms/card.svelte';
</script>

<Card>
	<div class="profile">
		<div class="avatar">
			<img src="/photo.png" alt="" />
		</div>
	</div>
</Card>

<style lang="scss">
	.avatar {
		width: 176px;
		height: 176px;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
