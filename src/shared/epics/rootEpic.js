import { combineEpics } from "redux-observable";
import { newsEpic } from "./news.epic";

export const rootEpic = combineEpics({
  newsEpic
});
