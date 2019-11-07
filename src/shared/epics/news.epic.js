import { ofType, combineEpics } from "redux-observable";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import * as news from "../actions/news.action";

const fetchNewsRequestEpic = action$ =>
  action$.pipe(
    ofType(news.FETCH_NEWS),
    mergeMap(action =>
      ajax.getJSON(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=1f04516a3f5b4157a5b8434ca25acc40`
      )
    )
  );

const rootEpic = combineEpics(fetchNewsRequestEpic);
