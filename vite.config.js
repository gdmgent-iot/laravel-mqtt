import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// read host from .env
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.APP_HOST || '127.0.0.1';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host: host,
        port: 3000,
    },
}); 
