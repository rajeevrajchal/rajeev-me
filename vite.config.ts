import { sveltekit } from '@sveltejs/kit/vite';
import browserslist from 'browserslist';
import { browserslistToTargets, composeVisitors, Features } from 'lightningcss';

import { colorFunctionsVisitor } from 'lightningcss-plugin-color-functions';
import { inlineSvgVisitor } from 'lightningcss-plugin-inline-svg';
import { envWhitespaceFix } from 'lightningcss-plugin-env-whitespace-fix';

import { defineConfig } from 'vite';

import { resolve } from 'node:path';

export default defineConfig({
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
			include: Features.Nesting,
			exclude: Features.LogicalProperties | Features.DirSelector | Features.LightDark,
			drafts: {
				customMedia: true
			},
			visitor: composeVisitors([
				colorFunctionsVisitor,
				envWhitespaceFix,
				inlineSvgVisitor({
					directory: resolve(__dirname, './src/lib/shared/icons'),
					acceptedExtensions: ['.svelte']
				})
			])
		}
	},
	build: {
		cssMinify: 'lightningcss'
	},
	plugins: [sveltekit()]
});
