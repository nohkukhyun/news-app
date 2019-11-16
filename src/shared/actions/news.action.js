export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL";

export const fetchNewsRequest = (payload, path) => ({
  type: FETCH_NEWS_REQUEST,
  payload,
  path
});

export const fetchNewsSuccess = (payload, path) => ({
  type: FETCH_NEWS_SUCCESS,
  payload,
  path
});

export const fetchNewsFail = payload => ({
  type: FETCH_NEWS_FAIL,
  payload
});
