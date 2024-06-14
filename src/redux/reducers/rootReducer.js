import { combineReducers } from "redux";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    //put reducers here
    user:userReducer,
   
});

export default rootReducer;