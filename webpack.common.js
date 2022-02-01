// Cria o arquivo HTML para servir ao bundle
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Remove todos os arquivos previamente existes do diretorio de saida
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Remove todos os comentarios do bundle e previne a criacao do arquivo licence.txt
const TerserPlugin = require('terser-webpack-plugin');

// Traduz os paths dos arquivos para compatibilidade em qualquer sistema operacional
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'template.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
