import * as Config from './constant';
import {Alert} from 'react-native';
import axios from 'axios';
import queryString from 'query-string';
// 环境的切换
axios.defaults.baseURL = Config.Host;

// 请求超时时间
axios.defaults.timeout = 10000;
//让ajax携带cookie
axios.defaults.withCredentials = true;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.userInfo.token;
    // token && (config.headers.token = token);
    return config;
  },
  (error) => error,
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // config: {transformRequest: {…}, transformResponse: {…}, timeout: 10000, xsrfCookieName: "XSRF-TOKEN", adapter: ƒ, …}
    // data: {code: 1, msg: "success", result: {…}}
    // headers: {connection: "close", content-type: "application/json;charset=UTF-8", date: "Sat, 23 Nov 2019 05:18:23 GMT", transfer-encoding: "chunked", x-powered-by: "Express"}
    // request: XMLHttpRequest {readyState: 4, timeout: 10000, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
    // status: 200
    // statusText: "OK"
    if (response && response.status === 200) {
      // token 过期
      if (response.data && response.data.code === '109') {
        // Message.error(response.data.msg);
        // store.dispatch('clearUserInfo');
        // router.replace('/account');
      } else {
        const tab = queryString.parseUrl(response.request.responseURL).query
          .tab;
        response.data.tab = tab;
        return response.data;
      }
    }
  },
  // 服务器状态码不是200的情况
  (error) => {
    const response = error.response || {};
    switch (response.status) {
      case 401:
        Alert.alert('未授权');
        break;
      case 404:
        Alert.alert('网络请求不存在');
        break;
      case 500:
        Alert.alert('服务器内部错误');
        break;
    }
    return Promise.reject(response.data);
  },
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [query参数]
 */
export function get(url, params) {
  return axios.get(url, params);
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [body参数]
 */
export function post(url, params, headers) {
  if (headers) {
    // eslint-disable-next-line no-undef
    const data = new FormData();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const element = params[key];
        element && data.set(key, element);
      }
    }
    return axios.post(url, data, headers);
  } else {
    return axios.post(url, params);
  }
}
