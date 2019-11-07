import { Observable, observable } from "rxjs";
import * as action from "../actions/news.action";

const initalState = {
  payload: []
};

const fetchNews = (state = initalState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case action.FETCH_NEWS:
      return {
        ...state
      };

    case action.FETCH_NEWS_SUCCES:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default fetchNews;
