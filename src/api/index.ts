import {get, post} from 'utils/request';

function getTopicByTabName(params?: {}) {
  const {page, tab} = params;
  return get(`topics${tab ? `?tab=${tab}&page=${page}&limit=10` : ``}`);
}

function getTopicDetail(id) {
  return get(`topic/${id}`);
}

function login(accesstoken) {
  return post(`accessToken`, {accesstoken});
}

export {getTopicByTabName, login, getTopicDetail};
