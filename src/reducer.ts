import {combineReducers} from "redux";
import clockReducer from './clock/slice';
const rootReducer = combineReducers({
    clock: clockReducer,
});

export default rootReducer;
