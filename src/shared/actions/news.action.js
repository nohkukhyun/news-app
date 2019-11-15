export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL";

export const fetchNewsRequest = payload => ({
  type: FETCH_NEWS_REQUEST,
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
