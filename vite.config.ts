import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

// Mirrors the base path logic in svelte.config.js so manifest URLs (icons,
// start_url, scope) resolve correctly when deployed under a GitHub Pages
// subpath.
const base = process.argv.includes('dev') ? '/' : `${process.env.BASE_PATH ?? ''}/`;

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			base,
			scope: base,
			registerType: 'autoUpdate',
			manifest: {
				id: base,
				name: 'Advent Baking',
				short_name: 'Advent Baking',
				description: 'An advent endeavor for the masochistic patissier',
				start_url: base,
				scope: base,
				display: 'standalone',
				background_color: '#ffffff',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'icons/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'icons/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: 'icons/maskable-icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				]
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,jpeg,svg,webmanifest}'],
				skipWaiting: true,
				clientsClaim: true
			},
			devOptions: {
				enabled: false
			}
		})
	]
});
