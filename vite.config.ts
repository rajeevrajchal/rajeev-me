import { sveltekit } from '@sveltejs/kit/vite';
import browserslist from 'browserslist';
import { browserslistToTargets, composeVisitors, Features } from 'lightningcss';

import { colorFunctionsVisitor } from 'lightningcss-plugin-color-functions';
import { envWhitespaceFix } from 'lightningcss-plugin-env-whitespace-fix';

import { defineConfig } from 'vite';

import { variablesVisitor } from './src/styles/lighting-css';

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
			visitor: composeVisitors([variablesVisitor, colorFunctionsVisitor, envWhitespaceFix])
		}
	},
	build: {
		cssMinify: 'lightningcss'
	},
	plugins: [sveltekit()]
});
