import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlxdhoangyen.com',
  output: 'server',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  adapter: node({
    mode: 'standalone'
  })
});
