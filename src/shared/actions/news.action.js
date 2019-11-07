const FETCH_NEWS = "FETCH_NEWS";
const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";

export const fetchNewsData = payload => ({
  type: FETCH_NEWS,
  payload
});

export const fetchNewsDataSuccess = payload => ({
  type: FETCH_NEWS_SUCCESS,
  payload
});

export const fetchNewsDataFailed = payload => ({
  type: FETCH_NEWS_FAIL,
  payload
});
