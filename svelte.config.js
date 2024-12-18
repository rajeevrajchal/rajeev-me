import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({
		scss: {
			prependData: `@import 'src/style/global.scss';`
		}
	}),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
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
