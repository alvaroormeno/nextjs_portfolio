/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com'
            }
        ]
    },
    experimental: {
        serverActions: true
    }
};

export default nextConfig;
