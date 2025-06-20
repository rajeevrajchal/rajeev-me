<script lang="ts">
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	let text: HTMLElement | undefined = $state();
	let split: SplitText | undefined = $state();

	$effect(() => {
		if (!text) return;
		split = SplitText.create(text, {
			type: 'chars',
			autoSplit: true,
			onSplit: (self) => {
				return gsap.from(self.lines, {
					y: 100,
					opacity: 0,
					stagger: 0.05
				});
			}
		});
	});

	$effect(() => {
		if (!split) return;
		gsap.from(split.chars, {
			duration: 2,
			y: -100,
			autoAlpha: 0,
			stagger: 0.1
		});
	});
</script>

<main class="default-grid">
	<section>
		<h3 bind:this={text}>Rajeev Rajchal</h3>
	</section>
</main>

<style>
	section {
		grid-column: 2 / -2;
		position: relative;
		height: 100svh;
		width: 100svw;
	}

	h3 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		font-size: calc(env(--size-large) * 2);
		margin-inline-start: -0.08em;
	}
</style>
