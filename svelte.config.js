import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess()],
    kit: {
        adapter: adapter({
            fallback: undefined, 
            pages: 'build',
            assets: 'build',
            strict: true
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/tucsokvendeghaz' : '',
        },
        prerender: {
            entries: ['*'],
            handleHttpError: ({ path, referrer, message }) => {
                if (path.includes('//') || path.includes('/#')) {
                    return;
                }
                throw new Error(message);
            }
        }
    },
    extensions: ['.svelte']
};

export default config;