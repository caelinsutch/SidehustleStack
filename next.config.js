module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.graphql?$/,
      loader: 'webpack-graphql-loader',
    });

    if (isServer) {
      // eslint-disable-next-line global-require
      require('./generateSiteMap');
    }

    return config;
  },
};
