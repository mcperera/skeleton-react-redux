import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistedReducer from "./reducers";

const combineReducers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  combineReducers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor, store };
