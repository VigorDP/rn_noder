- 清 RN 缓存
  rm -rf \$TMPDIR/react-\* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache

- RNSplashScreen.h 找不到
  select your project → Build Settings → Search Paths → Header Search Paths to add:

```
$(SRCROOT)/../node_modules/react-native-splash-screen/ios
```
