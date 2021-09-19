import axios from 'axios'
import store from "../state/store/configureStore";
function getNewsFeed(data) {
  return { type: "SET_NEWS_FEED", payload: data }
}
const apiUrl = "https://newsapi.org/v2"
const apiKey = process.env.REACT_APP_API_KEY
const NewsService = {
  async index(countryCode) {
    const result = await axios.get(
      apiUrl + "/top-headlines",
      {
        params:
          { apiKey: apiKey, country: countryCode }
      }
    )
    store.dispatch(getNewsFeed(result.data.articles))
    return null
  },

  async search(query) {
    const result = await axios.get(
      apiUrl + "/everything",
      {
        params: {
          apiKey: apiKey, q: query
        }
      })
    store.dispatch({ type: "SET_NEWS_FEED", payload: result.data.articles })
    return null
  }
}

export default NewsService