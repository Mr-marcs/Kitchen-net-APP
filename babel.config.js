module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root:['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
          ],
          alias: {
            '@components': './src/components',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@pages': './src/pages',
            '@src': './src',
          },
        }
      ],
    ]
  };
};
