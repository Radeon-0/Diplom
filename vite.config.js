import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },

    build: {
        cssMinify: true,
        sourcemap: false,

        rollupOptions: {
            output: {
                entryFileNames: 'js/main.js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith('.css')) {
                        return 'css/style.css';
                    }

                    return 'assets/[name][extname]';
                },
            },
        },
    },
});