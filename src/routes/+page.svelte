<script lang="ts">
	/**
	 * Add a particle background or 3d background
	 ***/
	import { SplitText } from '@shared/components';
	import { Github, Linkedin } from 'lucide-svelte';
	import { github, linkedin } from '@shared/constant/rajeev.json';
	import { animate, stagger } from 'animejs';

	let elements: HTMLElement[] = $state([]);

	$effect(() => {
		if (!elements) return;

		animate(elements, {
			opacity: {
				from: 0,
				to: 1
			},
			y: {
				from: 50,
				to: 0
			},
			duration: 800,
			delay: stagger(50, { start: 100 }),
			easing: 'easeOutExpo'
		});
	});
</script>

<section>
	<img bind:this={elements[1]} class="profile" src="./images/rajeev.png" alt="Rajeev Rajchal" />
	<SplitText value="Rajeev Rajchal" size="large" direction="y" />
	<SplitText value="Software Developer" direction="y" delay={1000} />
	<div class="socials" bind:this={elements[2]}>
		<a class="icon" href={linkedin} target="_blanwk"><Linkedin /></a>
		<a class="icon" href={github} target="_blank"><Github /></a>
	</div>
</section>

<style>
	section {
		display: grid;
		place-content: center;
		justify-items: center;
		gap: env(--gap-3);

		height: 100vh;
		width: 100vw;

		:global(.split-text) {
			text-align: center;
			align-self: center;
		}
	}

	img {
		border-radius: 50%;
		width: 8em;
		height: 8em;
		object-fit: cover;
		align-self: center;
		box-shadow: 0 8px 32px rgba(47, 69, 80, 0.2);
		border: 4px solid #b8dbd9;
		opacity: 0;
	}

	.socials {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: calc(env(--gap-2) * 2);
		opacity: 0;
	}

	.icon {
		border: 1px solid env(--color-interactive-button);
		border-radius: env(--radius-pill);
		padding: env(--gap-1);
		:global(svg) {
			stroke: env(--color-interactive-button);
		}
	}
</style>
