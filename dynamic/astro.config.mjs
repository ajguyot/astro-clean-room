import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
	output: 'server',
	adapter: node({ mode: 'standalone' }),
	site: process.env.PUBLIC_URL,
	server: { allowedHosts: [process.env.PUBLIC_URL] },
	devToolbar: { enabled: false }
});
