<script lang="ts">
	import { animate, stagger } from 'animejs';

	let {
		value,
		size = 'default',
		direction = 'y',
		splitBy = 'letters',
		class: className = '',
		delay = 0
	}: {
		value: string;
		class?: string;
		size?: 'large' | 'default';
		direction?: 'x' | 'y';
		splitBy?: 'letters' | 'words' | 'lines';
		delay?: number;
	} = $props();

	let text: HTMLElement | undefined = $state();

	// Split by letters
	function splitIntoLetters(element: HTMLElement, textValue: string) {
		element.innerHTML = '';
		textValue.split('').forEach((char) => {
			const span = document.createElement('span');
			span.className = 'letter';
			span.textContent = char === ' ' ? '\u00A0' : char;
			span.style.display = 'inline-block';
			element.appendChild(span);
		});
		return element.querySelectorAll('.letter');
	}

	// Split text by words
	function splitIntoWords(element: HTMLElement, textValue: string) {
		element.innerHTML = '';
		textValue.split(' ').forEach((word, index) => {
			const span = document.createElement('span');
			span.className = 'word';
			span.textContent = word;
			span.style.display = 'inline-block';
			if (index < textValue.split(' ').length - 1) {
				span.style.marginRight = '0.25em';
			}
			element.appendChild(span);
		});
		return element.querySelectorAll('.word');
	}

	// Split text by lines
	function splitIntoLines(element: HTMLElement, textValue: string) {
		element.innerHTML = '';
		textValue.split('\n').forEach((line) => {
			const div = document.createElement('div');
			div.className = 'line';
			div.textContent = line;
			div.style.display = 'block';
			element.appendChild(div);
		});
		return element.querySelectorAll('.line');
	}

	$effect(() => {
		if (!text || !value) return;
		let elements: NodeListOf<Element>;
		switch (splitBy) {
			case 'letters':
				elements = splitIntoLetters(text, value);
				break;
			case 'words':
				elements = splitIntoWords(text, value);
				break;
			case 'lines':
				elements = splitIntoLines(text, value);
				break;
			default:
				elements = splitIntoLetters(text, value);
		}

		// Set initial state based on direction
		elements.forEach((element) => {
			const el = element as HTMLElement;
			el.style.opacity = '0';

			switch (direction) {
				case 'x':
					el.style.transform = 'translateX(-100%)';
					break;
				case 'y':
					el.style.transform = 'translateY(100%)';
					break;
			}
		});

		// Animate elements
		animate(elements, {
			opacity: 1,
			[direction]: 0,
			duration: 800,
			delay: stagger(50, { start: delay }),
			easing: 'easeOutExpo'
		});
	});
</script>

<div bind:this={text} class={`split-text ${size} ${className}`}></div>

<style>
	.split-text {
		overflow: hidden;
	}

	.large {
		margin-inline-start: -0.06em;
		font-size: env(--size-large);
		@media (--large) {
			font-size: calc(env(--size-large) * 2);
		}
	}

	.default {
		font-size: calc(env(--size-medium));
	}
</style>
