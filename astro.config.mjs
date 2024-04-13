import { defineConfig } from "astro/config";

// Astro integration imports
import compress from "astro-compress";
import AstroPWA from '@vite-pwa/astro';
//import vercel from "@astrojs/vercel/serverless"
//import SpeedInsights from "@vercel/speed-insights/astro"

// Helper imports
//import { siteConfig } from "./src/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  integrations: [compress(), AstroPWA({
    mode: 'production',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'AnimeX',
      short_name: 'AnimeX',
      theme_color: '#000000',
      background_color: '#ff297d',
      icons: [{
        src: '/assets/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: '/assets/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,webp}']
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\//]
    },
    experimental: {
      directoryAndTrailingSlashHandler: true
    }
  })],
});