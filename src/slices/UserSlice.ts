import type {UserData} from "../model/UserData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";


interface userState{
    list : UserData[]
    error : string | null | undefined
}

const initialState: userState = {
    list:  [],
    error: null
}

export const registerUser = createAsyncThunk(
    'user/register',
    async (data: UserData, { rejectWithValue }) => {
        try {
            console.log("Registering user with data:", data);
            const response = await backendApi.post("/user/register", data); // send JSON
            const message = response.data.message;
            alert(message);
            return response.data; // Make sure to return something if your reducer needs it
        } catch (err: any) {
            console.error("Registration failed:", err.response?.data);
            return rejectWithValue(err.response?.data?.error || "Registration failed");
        }
    }

)

const userSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(registerUser.pending, () => {
            alert("Registering user, please wait...");
            })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.list = action.payload
            state.error = null;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
                state.error = action.error.message;
        });
    }
})

export const userReducer = userSlice.reducer;