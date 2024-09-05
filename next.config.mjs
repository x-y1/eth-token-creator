/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        //excluding pino-pretty from build to avoid walletconnect's error
        config.externals.push("pino-pretty");
        return config;
    },
};

export default nextConfig;
