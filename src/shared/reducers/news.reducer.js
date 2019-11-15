export const initalState = {
  isLoading: false,
  news: []
};

export default (state = initalState, action) => {
  // eslint-disable-next-line default-case
  switch (action) {
    case action.FETCH_NEWS:
      return {
        ...state,
        isLoading: true,
        payload: action.state
      };
    case action.FETCH_NEWS_SUCCESS:
      console.log(action.news);
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };

    case action.FETCH_NEWS_FAIL:
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };

    default:
      return state;
  }
};
