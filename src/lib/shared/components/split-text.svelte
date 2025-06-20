<script lang="ts">
	import gsap, { Expo } from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	let {
		value,
		size = 'default',
		delay = 0,
		direction = 'y',
		class: className = ''
	}: {
		value: string;
		class?: string;
		size?: 'large' | 'default';
		delay?: number;
		direction?: 'x' | 'y';
	} = $props();

	let text: HTMLElement | undefined = $state();
	let split: SplitText | undefined = $state();

	$effect(() => {
		if (!text) return;
		split = SplitText.create(text, {
			type: 'chars',
			mask: 'chars',
			autoSplit: true,
			onSplit: (self) => {
				return gsap.from(self.lines, {
					[direction]: 100,
					opacity: 0,
					stagger: 0.05
				});
			}
		});
	});

	$effect(() => {
		if (!split) return;
		gsap.from(split.chars.reverse(), {
			duration: 1.6,
			[direction]: -100,
			autoAlpha: 0,
			stagger: 0.1,
			ease: Expo.easeOut,
			delay: delay
		});
	});
</script>

<div bind:this={text} class={['split-text', size, className]}>{value}</div>

<style>
	.large {
		font-size: calc(env(--size-large) * 2);
		margin-inline-start: -0.06em;
	}

	.default {
		font-size: calc(env(--size-medium));
	}
</style>
