// const {
//         withModuleFederation,
//     } = require("@module-federation/nextjs-mf");

import withModuleFederation from "@module-federation/nextjs-mf";
module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack: (
    /** @type {{ output: { libraryTarget: any; }; cache: boolean; }} */ config,
    /** @type {{ isServer: any; }} */ options,
  ) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "clockFace",
      library: {
        type: config.output.libraryTarget,
        name: "clockFace",
      },
      filename: "static/runtime/clockFaceremoteEntry.js",
      remotes: {},
      exposes: {
        "./Clock": "./_components/Clock",
      },
    };
    config.cache = false;
    new withModuleFederation({
      ...config,
      extraOptions: {},
    });

    return config;
  },
};
