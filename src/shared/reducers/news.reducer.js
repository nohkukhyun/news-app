import { combineReducers } from "redux";
import * as action from "../actions/news.action";

const initalState = {
  isLoading: false
};

const fetchNews = (state = initalState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case action.FETCH_NEWS:
      return {
        isLoading: true,
        payload: action.payload
      };
    case action.FETCH_NEWS_SUCCES:
      return {
        isLoading: false,
        payload: action.payload
      };

    case action.FETCH_NEWS_FAIL:
      return {
        isFetch: false,
        payload: action.payload
      };

    default:
      return state;
  }
};

export default combineReducers({
  news: fetchNews
});
