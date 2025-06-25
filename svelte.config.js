import adapter from 'svelte-kit-sst';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$email: 'src/email',
			$auth: 'src/auth'
		}
	}
};

export default config;
