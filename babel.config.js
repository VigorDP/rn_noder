module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
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
