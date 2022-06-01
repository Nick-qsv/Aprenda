module.exports = {
    entry: [
      './client/index.js'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ]
          }
        },
        {
            test:/\.(jpeg|png|jpg|svg|gif)$/i,
            loader: 'file-loader',
        }
      ]
    }
  }