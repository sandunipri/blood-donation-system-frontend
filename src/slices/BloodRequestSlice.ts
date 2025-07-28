import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import { backendApi } from "../api"; // your axios config with token
import type { BloodRequestData } from "../model/BloodRequestData";

interface BloodRequestState {
    list: BloodRequestData[];
    error: string | null;
    loading: boolean;
    count : number;
}

const initialState: BloodRequestState = {
    list: [],
    error: null,
    loading: false,
    count : 0,
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
    "request-blood/getAllRequestCount",
    async (_, { rejectWithValue }) => {
        try {
            const response = await backendApi.get("/blood-request");
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.error || "Failed to fetch blood requests");
        }
    }
);

export const getAllRequestCount = createAsyncThunk(
    "bloodRequest/getAllRequestCount",
    async () => {
        const response = await backendApi.get("/request-blood/getAllRequestCount");
        console.log("Response from getAllRequestCount:", response.data);
        return response.data;
    }
)

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
            })
           /* .addCase(sendBloodRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendBloodRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.list.push(action.payload);
                state.error = null;
            })
            .addCase(sendBloodRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })*/
            .addCase(getAllRequestCount.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllRequestCount.fulfilled, (state, action: PayloadAction<{ count: number }>) => {
                state.loading = false;
                state.count = action.payload.count;
                state.error = null;
            })
    },
});

export const useBloodRequestReducer = bloodRequestSlice.reducer;