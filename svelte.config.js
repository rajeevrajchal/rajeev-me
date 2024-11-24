import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess({
		scss: {
			prependData: `@import 'src/style/global.scss';`
		}
	}),
	compilerOptions: {
		runes: true
	},
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@style': './src/style/*',
			'@comp': './src/lib/components/*',
			'@atoms': './src/lib/atoms/*',
			'@assets': './src/lib/assets/*',
			'@tools': './src/lib/tools/*',
			'@theme': './src/lib/tools/style/*',
			'@query': './src/lib/queries/*',
			'@const': './src/lib/constants/*',
			'@queries': './src/lib/queries/*',
			'@icon': './src/lib/icons/*'
		}
	}
};

export default config;
