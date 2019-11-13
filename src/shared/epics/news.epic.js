import { ajax } from "rxjs/ajax";
import { mergeMap, map } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import * as action from "../actions/news.action";

const fetchNewsEpic = action$ =>
  action$.pipe(
    ofType(action.FETCH_NEWS),
    mergeMap(action =>
      ajax
        .getJSON(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=1f04516a3f5b4157a5b8434ca25acc40`
        )
        .pipe(
          map(response => ({
            type: action.FETCH_NEWS_SUCCESS,
            payload: response
          }))
        )
    )
  );

export default combineEpics({
  newsEpic: fetchNewsEpic
});
