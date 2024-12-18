import { sveltekit } from '@sveltejs/kit/vite';
import { objectToCssVariables } from './src/lib/tools/style/object-to-css';
import { variables } from './src/lib/tools/style/variables';
import { defineConfig } from 'vite';
import { objectToCssVariables } from './src/lib/tools/style/object-to-css';
import { variables } from './src/lib/tools/style/variables';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				silenceDeprecations: ['import'],
				additionalData: `
          @use 'sass:color';
          @import '@style/layout';
          ${objectToCssVariables(variables, '$', false)};
        `
			}
		}
	}
});
