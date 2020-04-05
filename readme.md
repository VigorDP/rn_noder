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
- 启动屏制作参考 [这里](https://dev-yakuza.github.io/en/react-native/react-native-splash-screen/#installation)
- RNSplashScreen.h 找不到
  select your project → Build Settings → Search Paths → Header Search Paths to add:

```
$(SRCROOT)/../node_modules/react-native-splash-screen/ios
```

- react-navigation 中的导航器当设置 headerMode="none"时，需要自行处理 safe-area
- RN 添加自定义字体
  https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06

- xcode 黄色文件夹是逻辑文件夹(不一定对应真实文件夹)，绿色文件夹是不参与编译的文件夹，一般作为资源文件夹，创建文件夹时 new group without/with folder 区别是是否在磁盘上建立真正的文件夹

- http error 的结构

```
name: "Error"
message: ""
toString: ƒ toString()
```
