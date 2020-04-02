module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          components: ['./src/components'],
          utils: ['./src/utils'],
          screens: ['./src/screens'],
          assets: ['./src/assets'],
          api: ['./src/api'],
          store: ['./src/store'],
        },
      },
    ],
  ],
};
