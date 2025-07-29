import type {UserData} from "../model/UserData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";


interface userState {
    list: UserData[]
    error: string | null | undefined
    profile: UserData | null;
    count: number;
}

const initialState: userState = {
    list: [],
    error: null,
    profile: null,
    count: 0,
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: UserData, {rejectWithValue}) => {
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

export const getAllRecipient = createAsyncThunk(
    'user/getAllRecipient',
    async () => {
        const response = await backendApi.get('/user/getAllRecipient');
        console.log("Response from getAllRecipient:", response.data);
        return response.data;
    }
)

export const getUserCount = createAsyncThunk(
    '/user/getAllUserCount',
    async () => {
        const response = await backendApi.get('/user/getAllUserCount');
        console.log("Response from getUserCount:", response.data);
        return response.data;
    }
)

export const getUserProfile = createAsyncThunk(
    '/user/getProfile',
    async () => {
        const response = await backendApi.get('/user/getProfile');
        console.log("Response from getUserProfile:", response.data);
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
            .addCase(getAllRecipient.pending, (state) => {
                console.log("Fetching all recipients...");
                state.error = null;
            })
            .addCase(getAllRecipient.fulfilled, (state, action) => {
                console.log("Fetched all recipients:", action.payload);
                state.list = action.payload;
            })
            .addCase(getAllRecipient.rejected, (state, action) => {
                console.error("Error fetching recipients:", action.error);
                state.error = action.error.message;
            })
            .addCase(getUserCount.fulfilled, (state, action) => {
                console.log("Fetched user count:", action.payload);
                state.count = action.payload.count;
            })
            .addCase(getUserCount.rejected, (state, action) => {
                console.error("Error fetching user count:", action.error);
                state.error = action.error.message;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                console.log("Fetched user profile:", action.payload);
                state.profile = action.payload.data;
                state.error = null;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                console.error("Error fetching user profile:", action.error);
                state.error = action.error.message;
            });

    }
});

export const userReducer = userSlice.reducer;