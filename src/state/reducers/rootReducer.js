const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEWS_FEED":
      return {
        ...state,
        newsFeed: action.payload,
      };
    case "SET_COUNTRY_CODE":
      return {
        ...state,
        countryCode: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
