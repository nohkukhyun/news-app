import * as action from "../actions/news.action";
import { combineReducers } from "redux";

const initalState = {
  isLoading: false,
  payload: []
};

export const fetchNews = (state = initalState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case action.FETCH_NEWS:
      return {
        ...state,
        isLoading: true,
        payload: action.payload
      };
    case action.FETCH_NEWS_SUCCES:
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };

    case action.FETCH_NEWS_FAIL:
      return {
        ...state,
        isFetch: false,
        payload: action.payload
      };

    default:
      return state;
  }
};
