import { Palette } from './palette';

export const Variables = {
	color: {
		background: Palette.black,

		white: Palette.white,
		black: Palette.black
	},

	aspect: {
		square: '1/1',
		landscape: '1904/1292',
		portrait: '944/1292'
	},
	radius: {
		pill: '0.625em', // 10px
		1: '0.75em' // 12px
	},
	gap: {
		1: '1.0625', //17px
		2: '1.25em', //20px
		3: '2em', //23.76px
		4: '3.1025em',
		container: '1.25em'
	},
	animation: {
		'scrollhint-speed': '3s'
	},
	size: {
		small: '0.75rem', // 14px
		medium: '1.563rem', // 25px
		large: '3.625rem', // 58px
		xlarge: '18.266rem' // 292px
	},

	font: {
		root: `"Inter-18"`,
		regular: `"Inter-18"`,
		body: `"Inter-18"`
	},

	layout: {
		'desktop-padding': 20,
		'desktop-gap': 20,
		'desktop-columns': 12,
		'mobile-padding': 7,
		'mobile-gap': 7,
		'mobile-columns': 6,
		'tablet-padding': 10,
		'tablet-gap': 10,
		'tablet-columns': 8
	}
} as const;

export const Breakpoints = {
	tiny: '(min-width: 320px)',
	small: '(min-width: 430px)',
	medium: '(min-width: 570px)',
	large: '(min-width: 760px)',
	xlarge: '(min-width: 1080px)',
	xxlarge: '(min-width: 1600px)',
	ultra: '(min-width: 2400px)',

	landscape: '(orientation: landscape)'
} as const;
