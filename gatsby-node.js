/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({ 
            module: {
                rules: [
                  {
                    test: /@typeform\/embed/,
                    use: loaders.null(),
                  },
                ],
              }
        })
    }
}

exports.onCreateBabelConfig = ({ actions }) => {
    if (process.env.NODE_ENV !== 'development') {
      actions.setBabelPlugin({
        name: '@babel/plugin-transform-regenerator',
        options: {},
      });
      actions.setBabelPlugin({
        name: '@babel/plugin-transform-runtime',
        options: {},
      });
    }
  };