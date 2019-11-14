import * as action from "../actions/news.action";
import { combineReducers } from "redux";

export const initalState = {
  isLoading: false,
  payload: []
};

export default (state = initalState, { type, payload }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case action.FETCH_NEWS:
      return {
        ...state,
        isLoading: true,
        payload: payload
      };
    case action.FETCH_NEWS_SUCCESS:
      console.log({ payload });
      return {
        ...state,
        isLoading: false,
        payload: payload
      };

    case action.FETCH_NEWS_FAIL:
      return {
        ...state,
        isFetch: false,
        payload: payload
      };

    default:
      return state;
  }
};
