/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/articoli",
                permanent: true
            }
        ]
    },
    images: {
        // TODO: DA RIMUOVERE, solo per test
        domains: ["cdn.bootstrapstudio.io", "www.icfondorevo.it"],
    },
    i18n: {
        locales: ['it'],
        defaultLocale: 'it'
    }
}

module.exports = nextConfig
