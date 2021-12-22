// const path = require('path')
// const withSass = require('@zeit/next-sass');
// module.exports =
//     {
//         withSass(
//             {
//                 cssModules: true
//             }
//         )
//     }

//     module.exports = {{
//     /* Add Your Scss File Folder Path Here */
//         sassOptions: {
//             includePaths: [path.join(__dirname, 'styles')],
//         },
//     }
// }

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      // {
      //   test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      //   use: ["url-loader"]
      // }
    );
    return config;
  },

};
