const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/pd.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'pd-animate.min.js',
    library: {
      name: 'Pd',
      type: 'umd',
      export: 'default'
    },
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(glsl|vs|fs)$/,
        use: 'glsl-shader-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'pd-animate.min.css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.glsl','.jsx', '.ts', '.tsx']
  }
};