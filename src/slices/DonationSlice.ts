import type {DonationData} from "../model/DonationData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";
import {getAllDonors} from "./UserSlice.ts";

interface DonationState {
    list: DonationData[];
    error: string | null;
    loading: boolean;
}

const initialState: DonationState = {
    list: [],
    error: null,
    loading: false
};

export const getDonationRecordByEmail = createAsyncThunk(
    'donation/getHistoryRecord',
    async (email: string) => {
        const response = await backendApi.get(`/donation/getHistoryRecord/${email}`);
        console.log("Response from getDonationRecordByEmail:", response.data);
        return response.data;
    }
)
export const saveDonationRecord = createAsyncThunk(
    '/donation/donate',
    async (data: DonationData, { rejectWithValue }) => {
        try {
            const response = await backendApi.post('/donation/donate', data);
            console.log("Response from saveDonationRecord:", response.data);
            return response.data;
        } catch (err: any) {
            console.error("Error saving donation record:", err.response?.data);
            return rejectWithValue(err.response?.data?.error || "Failed to save donation record");
        }
    }
)


const donationSlice = createSlice({
    name: 'donation',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDonationRecordByEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDonationRecordByEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getDonationRecordByEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch donation records';
            })

            .addCase(getAllDonors.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addCase(saveDonationRecord.pending, () => {
                alert("Saving donation record, please wait...");
            })
            .addCase(saveDonationRecord.fulfilled, (state, action) => {
                console.log("Donation record saved successfully:", action.payload);
                state.list.push(action.payload);
                state.error = null;
            });


    }
});
export const useDonationReducer = donationSlice.reducer;