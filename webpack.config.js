const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const config = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.mjs', '.tsx', '.ts', '.js', '.json', '.png'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'source-map-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        },
      ],
    });
  }

  if (argv.mode === 'production') {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        },
        {
          loader: 'img-loader',
          options: {
            optipng: false, // disabled
            pngquant: true,
            gifsicle: {
              optimizationLevel: 3,
            },
          },
        },
      ],
    });
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      })
    );
  }
  return config;
};
