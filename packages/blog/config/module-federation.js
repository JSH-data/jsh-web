const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'remote1',
    filename: 'remoteEntry.js',
    exposes: {
      './Blog': './src/blog.tsx',
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
      },
    },
    dts: false
  }),
  server: [
    new UniversalFederationPlugin({
      remoteType: 'script',
      name: 'remote1',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      exposes: {
        './Blog': './src/blog.tsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
      dts: false
    }),
  ],
};
