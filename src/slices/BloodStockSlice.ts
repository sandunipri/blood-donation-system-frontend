import type {BloodStockData} from "../model/BloodStockData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";

interface BloodStockState {
    list: BloodStockData[];
    error: string | null;
}

const initialStateBlood: BloodStockState = {
    list: [],
    error: null,
};

export const getBloodStockOneByOne = createAsyncThunk<BloodStockData[]>(
    'bloodStock/getBloodStockOneByOne',
    async () => {
        try {
            const response = await backendApi.get<BloodStockData[]>('/hospital/blood-stocks');
            console.log("Response from getBloodStockOneByOne:", response.data);
            return response.data;
        } catch (error: any) {
            console.error("Error fetching blood stocks:", error);
            throw new Error(error.response?.data?.message || "Failed to fetch blood stocks");
        }
    }
);

const bloodStockSlice = createSlice({
    name: 'bloodStock',
    initialState: initialStateBlood,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBloodStockOneByOne.pending, (state) => {
                state.error = null;
            })
            .addCase(getBloodStockOneByOne.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(getBloodStockOneByOne.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch blood stocks';
            });
    }
});

export const bloodStockReducer = bloodStockSlice.reducer;
