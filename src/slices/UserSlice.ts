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
    'auth/register',
    async (data: UserData, { rejectWithValue }) => {
        try {
            console.log("Registering user with data:", data);
            const response = await backendApi.post("/auth/register", data);
            console.log("Registration response:", response.data);
            return response.data;
        } catch (err: any) {
            console.error("Registration failed:", err.response?.data);
            return rejectWithValue(err.response?.data?.error || "Registration failed");
        }
    }

)

export const getAllDonors = createAsyncThunk(
    'user/getAllDonors',
    async () => {
        const response = await backendApi.get('/user/getAllDonors');
        console.log("Response from getAllDonors:", response.data);
        return response.data;
    }
)


/*const userSlice = createSlice({
    name : 'auth',
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
            state.error = action.payload as string;
        });
    }
})*/

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, () => {
                alert("Registering user, please wait...");
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.list = [action.payload];
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload as string;
            })

            .addCase(getAllDonors.fulfilled, (state, action) => {
                console.log("Fetched all donors:", action.payload);
                state.list = action.payload;
                state.error = null;
            })
            .addCase(getAllDonors.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    }
});

export const userReducer = userSlice.reducer;