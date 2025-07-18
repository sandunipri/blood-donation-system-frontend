import {combineReducers} from "redux";
import {userReducer} from "./UserSlice.ts";

export const rootReducer = combineReducers({
    user : userReducer,

})
export type RootReducerState = ReturnType<typeof rootReducer>


