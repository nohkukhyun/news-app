// import * as news from "../actions/news.action";

import * as news from "../actions/news.action";

export const initalState = {
  isLoading: false
};

let nextData = {};
export default (state = initalState, { type, payload }) => {
  switch (type) {
    case news.FETCH_NEWS:
      nextData = state;
      nextData = {
        ...state.news,
        isLoading: true
      };
      return nextData;

    case news.FETCH_NEWS_SUCCESS:
      // console.log({ payload });
      let newsList = payload && payload.articles;
      nextData = {
        ...state.news,
        isLoading: false,
        newsList
      };
      return nextData;

    case news.FETCH_NEWS_FAIL:
      return {
        ...state.news,
        isLoading: false
      };

    default:
      return state;
  }
};
