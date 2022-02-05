const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// Plugin para otimizar imagens
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// Plugin para minificar os arquivos CSS e extrai-los para um diretorio particular
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            encodeOptions: {
              mozjpeg: {
                quality: 50,
              },
              pngquant: {
                quality: [0.5, 0.5],
              },
            },
          },
        },
      }),
    ],
  },
});
