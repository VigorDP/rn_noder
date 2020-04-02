import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {render} from 'mirrorx';
import App from './src/index';
import {name as appName} from './app.json';
import React from 'react';

AppRegistry.registerComponent(appName, () => render(<App />));
