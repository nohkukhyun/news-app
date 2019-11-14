export const initalState = {
  isLoading: false,
  news: []
};

export default (state = initalState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case action.FETCH_NEWS:
      return {
        ...state,
        isLoading: true,
        news: action.news
      };
    case action.FETCH_NEWS_SUCCESS:
      console.log(action.news);
      return {
        ...state,
        isLoading: false,
        news: action.news
      };

    case action.FETCH_NEWS_FAIL:
      return {
        ...state,
        isFetch: false,
        news: action.news
      };

    default:
      return state;
  }
};
