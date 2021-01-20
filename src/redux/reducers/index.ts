import { combineReducers } from "redux";
import searchQuery from "./searchQuery";
import searchImages from "./searchImages";

export default combineReducers({ searchQuery, searchImages });
