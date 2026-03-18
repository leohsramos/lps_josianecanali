import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        // Raise the chunk size warning threshold (avoids noise from large pages)
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            output: {
                /**
                 * PERF: Manual chunk splitting.
                 * Separates vendor libs, React, and page-level code into discrete
                 * bundles so the browser can cache them independently and only
                 * re-download what changed on deploy.
                 */
                manualChunks: (id) => {
                    // React core – cached almost forever, rarely changes
                    if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
                        return 'vendor-react';
                    }
                    // React Router – also very stable
                    if (id.includes('node_modules/react-router')) {
                        return 'vendor-router';
                    }
                    // Lucide icons – large but static
                    if (id.includes('node_modules/lucide-react')) {
                        return 'vendor-icons';
                    }
                    // All other node_modules → shared vendor chunk
                    if (id.includes('node_modules')) {
                        return 'vendor-misc';
                    }
                },
            },
        },
        // Minify with esbuild (default, fastest)
        minify: 'esbuild',
        // Generate source maps only in development
        sourcemap: false,
        // Target modern browsers: smaller output, no legacy polyfills
        target: 'es2020',
    },
});
