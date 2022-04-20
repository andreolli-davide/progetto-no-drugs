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
        domains: ["cdn.bootstrapstudio.io"],
    },
}

module.exports = nextConfig
