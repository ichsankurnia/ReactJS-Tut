import { combineReducers } from "redux";
import ktpReducer from "./kptReducer";
import globalReducer from "./globalReducer";

const rootReducer = combineReducers({
    global: globalReducer,
    ektp: ktpReducer,
})

export default rootReducer