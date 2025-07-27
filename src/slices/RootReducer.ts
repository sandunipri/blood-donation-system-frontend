import {combineReducers} from "redux";
import {userReducer} from "./UserSlice.ts";
import {useHospitalReducer} from "./HospitalSlice.ts";
import {useBloodRequestReducer} from "./BloodRequestSlice.ts";
import {notificationReducer} from "./NotificationSlice.ts";
import {useDonationReducer} from "./DonationSlice.ts";

export const rootReducer = combineReducers({
    user : userReducer,
    hospital : useHospitalReducer,
    bloodRequest : useBloodRequestReducer,
    donation : useDonationReducer,
    notification : notificationReducer

})
export type RootReducerState = ReturnType<typeof rootReducer>


