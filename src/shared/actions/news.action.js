export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL";

export const fetchNews = payload => ({
  type: FETCH_NEWS,
  payload
});

export const fetchNewsSuccess = payload => ({
  type: FETCH_NEWS_SUCCESS,
  payload
});

export const fetchNewsFail = payload => ({
  type: FETCH_NEWS_FAIL,
  payload
});
