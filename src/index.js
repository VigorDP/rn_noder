"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_screens_1 = require("react-native-screens");
var react_1 = require("react");
var async_storage_1 = require("@react-native-community/async-storage");
var stack_1 = require("@react-navigation/stack");
var native_1 = require("@react-navigation/native");
var index_1 = require("screens/index");
var react_redux_1 = require("react-redux");
var getStore_1 = require("store/getStore");
react_native_screens_1.enableScreens();
var Stack = stack_1.createStackNavigator();
function App() {
    var _this = this;
    var store = getStore_1["default"]();
    react_1["default"].useEffect(function () {
        // Fetch the token from storage then navigate to our appropriate place
        var bootstrapAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            var userToken, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userToken = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, async_storage_1["default"].getItem('userToken')];
                    case 2:
                        userToken = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        // After restoring token, we may need to validate it in production apps
                        // This will switch to the App screen or Auth screen and this loading
                        // screen will be unmounted and thrown away.
                        store.dispatch({ type: 'RESTORE_TOKEN', token: userToken });
                        return [2 /*return*/];
                }
            });
        }); };
        bootstrapAsync();
    }, []);
    return (<react_redux_1.Provider store={store}>
      <native_1.NavigationContainer>
        <Stack.Navigator>
          {store.getState().userToken === null ? (<Stack.Screen name="SignIn" component={index_1.SignInScreen}/>) : (<Stack.Screen name="Home" component={index_1.HomeScreen}/>)}
        </Stack.Navigator>
      </native_1.NavigationContainer>
    </react_redux_1.Provider>);
}
exports["default"] = App;
