import { createStore, combineReducers } from "redux";
import blogReducer from "./reducers/blogReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    books: blogReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;