import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../slices/RootReducer.ts";

// using the configureState and create the state
export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type  AppDispatch = typeof store.dispatch;