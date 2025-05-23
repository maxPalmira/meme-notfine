/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Suppress punycode deprecation warning
    serverComponentsExternalPackages: ['punycode'],
  },
  webpack: (config, { dev, isServer }) => {
    // Performance optimizations
    config.resolve.alias = {
      ...config.resolve.alias,
      'tailwindcss': require.resolve('tailwindcss'),
    };
    
    // Suppress punycode deprecation warnings in webpack
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    
    // Optimize for production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig; 