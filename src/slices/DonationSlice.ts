import type {DonationData} from "../model/DonationData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";

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
            });
    }
})
export const useDonationReducer = donationSlice.reducer;