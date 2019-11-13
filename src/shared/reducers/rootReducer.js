import { combineReducers } from "redux";
import * as fetchNews from "./news.reducer";

const rootReducer = combineReducers({
  fetchNews
});

export default rootReducer;
