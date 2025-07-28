import type {AdminData} from "../model/AdminData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";

interface adminState {
    list: AdminData[]
    error: string | null | undefined
}

const initialStateAdmin: adminState = {
    list: [],
    error: null
}


export const registerAdmin = createAsyncThunk(
    'auth/registerAdmin',
    async (data: AdminData, {rejectWithValue}) => {
        try {
            console.log("Registering admin with data:", data);
            const response = await backendApi.post("/auth/registerAdmin", data);
            console.log("Registration response:", response.data);
            return response.data;
        } catch (err: any) {
            console.error("Registration failed:", err.response?.data);
            return rejectWithValue(err.response?.data?.error || "Registration failed");
        }
    }
)

/*const adminSlice = createSlice({
    name : 'auth',
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(registerAdmin.pending, () => {
            alert("Registering admin, please wait...");
        })
        builder.addCase(registerAdmin.fulfilled, (state, action) => {
            state.list.push(action.payload);
            state.error = null;
        });
        builder.addCase(registerAdmin.rejected, (state, action) => {
            state.error = action.payload as string;
        });
    }
})*/

const adminSlice = createSlice({
    name: 'auth',
    initialState : initialStateAdmin,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAdmin.pending, () => {
            alert("Registering admin, please wait...");
        })
        builder.addCase(registerAdmin.fulfilled, (state, action) => {
            state.list.push(action.payload);
            state.error = null;
        })
        builder.addCase(registerAdmin.rejected, (state, action) => {
            state.error = action.payload as string;
        });
    }
})

export const adminReducer = adminSlice.reducer;
