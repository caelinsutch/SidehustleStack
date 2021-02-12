module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.graphql?$/,
      loader: 'webpack-GraphQL-loader',
    });

    return config;
  },
};
