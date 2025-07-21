import {combineReducers} from "redux";
import {userReducer} from "./UserSlice.ts";
import {useHospitalReducer} from "./HospitalSlice.ts";

export const rootReducer = combineReducers({
    user : userReducer,
    hospital : useHospitalReducer,

})
export type RootReducerState = ReturnType<typeof rootReducer>


