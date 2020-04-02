## 新版 RN-CNode 客户端

## 技术栈

- react-native 0.62
- @react-navigation 5.x
- react 16.11.0
- redux 4.x

## 一些坑

- 用 xcode 打开 xcworkspace,而不是 xcodeproj
- 清 RN 缓存
  rm -rf \$TMPDIR/react-\* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache

- RNSplashScreen.h 找不到
  select your project → Build Settings → Search Paths → Header Search Paths to add:

```
$(SRCROOT)/../node_modules/react-native-splash-screen/ios
```
