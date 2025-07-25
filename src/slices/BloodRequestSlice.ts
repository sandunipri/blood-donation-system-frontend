import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendApi } from "../api"; // your axios config with token
import type { BloodRequestData } from "../model/BloodRequestData";

interface BloodRequestState {
    list: BloodRequestData[];
    error: string | null;
    loading: boolean;
}

const initialState: BloodRequestState = {
    list: [],
    error: null,
    loading: false,
};

export const sendBloodRequest = createAsyncThunk(
    "request-blood/request",
    async (requestData: BloodRequestData, { rejectWithValue }) => {
        try {
            const response = await backendApi.post("/request-blood/request", requestData);
            return response.data;
        } catch (error: any) {
            console.error("Error saving request data:", error);
            return rejectWithValue(error.response?.data || "Failed to save request data");
        }
    }
);

export const fetchAllBloodRequests = createAsyncThunk(
    "bloodRequest/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await backendApi.get("/blood-request");
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.error || "Failed to fetch blood requests");
        }
    }
);

const bloodRequestSlice = createSlice({
    name: "bloodRequest",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBloodRequests.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllBloodRequests.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAllBloodRequests.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const useBloodRequestReducer = bloodRequestSlice.reducer;