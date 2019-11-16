// import * as news from "../actions/news.action";

import * as news from "../actions/news.action";

export const initalState = {
  isLoading: false
};

let nextData = {};
export default (state = initalState, { type, payload, path }) => {
  switch (type) {
    case news.FETCH_NEWS_REQUEST:
      nextData = state;
      nextData = {
        ...state.news,
        isLoading: true,
        path: path
      };
      return nextData;

    case news.FETCH_NEWS_SUCCESS:
      // console.log({ payload });
      let newsList = payload && payload.articles;
      nextData = {
        ...state.news,
        isLoading: false,
        path: "",
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
