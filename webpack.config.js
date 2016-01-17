var buildPath = './'

module.exports = {
  entry: "./glsl-raytrace/index.js",
  output: {
    path: buildPath,
    filename: "index.js"
  }
  // ,

  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'babel',
  //     }
  //   ]
  // }
};
