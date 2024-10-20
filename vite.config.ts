import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5175
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import 'src/style/main.scss';`
			}
		}
	}
});
