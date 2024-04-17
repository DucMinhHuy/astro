import { defineConfig } from 'astro/config'

// Official integrations
import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

/**
 * 現在のyyyymm形式の文字列を返す
 * @params {boolean} month 月を含めるかどうか
 */
const getYYYYMM = (month = false) => {
    const now = new Date()
    const year = now.getFullYear()
    const monthStr = now.getMonth() + 1
    const monthStr2 = ('0' + monthStr).slice(-2)
    return month ? `${year}${monthStr2}` : `${year}`
}

const date = getYYYYMM()

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    server: {
        host: true,
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'hover',
    },
    integrations: [
        react(),
        tailwind(),
        sitemap(),
        mdx(),
        markdoc(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
    devToolbar: {
        enabled: false,
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: '_astro/[name].js',
                    chunkFileNames: '_astro/chunks/[name].js',
                    assetFileNames: ({ name }) => {
                        if (name.endsWith('.css')) {
                            return `_astro/${date}-[name].css`
                        }
                        return `_astro/${date}-[name][extname]`
                    },
                },
            },
            manifest: true,
        },
    },
})
