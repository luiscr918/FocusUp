import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// @ts-expect-error: vite-plugin-netlify no tiene tipos
import netlify from 'vite-plugin-netlify';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    netlify({
      redirects: [
        {
          from: '/*',
          to: '/index.html',
          status: 200,
        },
      ],
    }),
  ],
});
