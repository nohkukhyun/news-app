import { combineEpics } from "redux-observable";
import fetchNewsEpic from "./news.epic";

const rootEpic = combineEpics(...fetchNewsEpic);

export default rootEpic;
