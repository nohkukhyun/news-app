import { combineReducers } from "redux";
// import fetchNews from "./news.reducer";
import fetchNews, { initalState } from "./news.reducer";

const rootReducer = combineReducers({
  fetchNews
});

export default rootReducer;
