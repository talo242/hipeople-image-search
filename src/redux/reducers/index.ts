import { combineReducers } from "redux";
import searchQuery from "./searchQuery";
import searchImages from "./searchImages";
import selectImage from "./selectImage";

const reducers = combineReducers({ searchQuery, searchImages, selectImage });

export type AppState = ReturnType<typeof reducers>

export default reducers;
