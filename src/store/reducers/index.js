import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import count from "./counterReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ count });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
