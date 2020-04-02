/**
 *  @providesModule utils/request
 */

import * as Config from './constant';
import queryString from 'query-string';
import {Alert} from 'react-native';

function request(method, url, options = {}) {
  const {body, fetchConfig, timeout} = options;
  const requestUrl = `${Config.Host}${url}`;
  const requestBody = Object.assign({
    method,
    headers: {},
    body: body && JSON.stringify(body),
  });
  let promise = fetch(requestUrl, requestBody, fetchConfig)
    .then((response) => {
      const {status} = response;
      if (status >= 200 && status < 300) {
        if (status === 204) {
          return null;
        }
        return response.json().then((result) => {
          const tab = queryString.parseUrl(requestUrl).query.tab;
          result.tab = tab;
          return result;
        });
      }

      throw Object.assign(new Error(response.statusText), {
        response,
        status,
      });
    })
    .catch((err) => {
      throw err;
    });
  if (timeout) {
    promise = Promise.race([
      promise,
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('timeout'));
        }, timeout);
      }),
    ]);
  }
  return promise.catch((e) => {
    Alert.alert('网络不太好，请稍后重试！', '', [
      {
        text: '知道了',
      },
    ]);
  });
}

function post(url, options = {}) {
  return request('post', url, options);
}

function get(url, options = {}) {
  return request('get', url, options);
}

export {get, post};

export default request;
