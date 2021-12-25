import { createStore, combineReducers } from "redux";
import serviceReducer from "./Reducers/ServiceReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    books: serviceReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;