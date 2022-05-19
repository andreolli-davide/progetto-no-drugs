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
        domains: ["https://progettonodrugs.s3.eu-central-1.amazonaws.com"],
    },
    i18n: {
        locales: ['it'],
        defaultLocale: 'it'
    }
}

module.exports = nextConfig
