<script lang="ts">
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	let {
		value
	}: {
		value: string;
	} = $props();

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
		gsap.from(split.chars.reverse(), {
			duration: 2,
			y: -100,
			autoAlpha: 0,
			stagger: 0.1
		});
	});
</script>

<p bind:this={text}>{value}</p>

<style>
	p {
		font-size: calc(env(--size-large) * 2);
	}
</style>
