import changeNumber from "./increDecre";

import { combineReducers } from "redux"; // to combine all the reducers

const rootReducer = combineReducers({// main reducer
    changeNumber
}) 

export default rootReducer;

