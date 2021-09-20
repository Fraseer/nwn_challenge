import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
const initialState = { newsFeed: [], countryCode: "us" };

// const configureStore = () => {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk))
// }

// export default configureStore

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
