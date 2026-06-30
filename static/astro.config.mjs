import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	site: process.env.PUBLIC_URL,
	server: { allowedHosts: [process.env.PUBLIC_URL] },
	devToolbar: { enabled: false }
});
