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
    }
}

module.exports = nextConfig
