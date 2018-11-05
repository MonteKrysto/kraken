import { combineReducers } from 'redux';
import {allFiles, isFetching, isUploading } from "./files";

const rootReducer = combineReducers({
    isFetching,
    allFiles,
    isUploading,
});
export default rootReducer;
