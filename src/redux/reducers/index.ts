import { combineReducers } from "redux";
import searchQuery from "./searchQuery";
import searchImages from "./searchImages";

const reducers = combineReducers({ searchQuery, searchImages });

export type AppState = ReturnType<typeof reducers>

export default reducers;
