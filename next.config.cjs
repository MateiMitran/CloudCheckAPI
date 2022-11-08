/** @type {import('next').NextConfig} */

module.exports = {
    experimental: { esmExternals: true },
    webpack: (config, { buildId, dev }) => {

        config.resolve.symlinks = false;

        return config;
    },
};
