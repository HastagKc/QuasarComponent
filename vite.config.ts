import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for 'src' directory
      '@components': path.resolve(__dirname, './src/components'), // Alias for 'components' directory
      '@assets': path.resolve(__dirname, './src/assets'), // Alias for 'assets' directory
      '@images': path.resolve(__dirname, './src/assets/images'), // Alias for 'images' directory
    }
  }
});
