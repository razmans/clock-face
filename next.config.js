// @ts-nocheck
// remote/next.config.js
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  // @ts-ignore
  // @ts-ignore
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "clockFace",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          // specify exposed pages and components
          "./Clock": "./components/Clock",
        },
        shared: {
          // specify shared dependencies
          // read more in Shared Dependencies section
        },
      }),
    );

    return config;
  },
};
