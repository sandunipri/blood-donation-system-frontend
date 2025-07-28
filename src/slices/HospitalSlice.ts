import type {HospitalData} from "../model/HospitalData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";

interface hospitalState {
    list: HospitalData[]
    error: string | null | undefined
    count : number,
}

const initialState: hospitalState = {
    list: [],
    error: null,
    count: 0,
}

export const saveHospital = createAsyncThunk(
    'hospital/save',
    async (data: HospitalData) => {
        try {
            console.log("Saving hospital data:", data);
            const response = await backendApi.post("/hospital/save", data);
            console.log("Response from backend:", response.data);
            return response.data;
        } catch (error: any) {
            console.error("Error saving hospital data:", error);
            throw error.response ? error.response.data : new Error("Failed to save hospital data");
        }
    }
)

export const getAllHospitals = createAsyncThunk(
    'hospital/getAll',
    async () => {
        const response = await backendApi.get("/hospital/getAll");
        console.log("Fetched hospitals:", response.data);
        return response.data;

    }
)

export const getHospitalCount = createAsyncThunk(
    'hospital/getAllHospitalCount',
    async () => {
        const response = await backendApi.get("/hospital/getAllHospitalCount");
        console.log("Hospital count:", response.data);
        return response.data;
    }
)


const hospitalSlice = createSlice({
    name: 'hospital',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveHospital.pending, (state) => {
                alert("Saving hospital data...");
                state.error = ("Saving hospital data...");
            })
            .addCase(saveHospital.fulfilled, (state, action) => {
                state.list.push(action.payload);
                state.error = null;
            })
            .addCase(saveHospital.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(getAllHospitals.fulfilled, (state, action) => {
                state.list = action.payload;
                state.error = null;
            })
            .addCase(getHospitalCount.pending, (state) => {
                console.log("Fetching hospital count...");
                state.error = null;
            })
            .addCase(getHospitalCount.fulfilled, (state, action) => {
                console.log("Hospital count fetched:", action.payload.count);
                state.count = action.payload.count;
            })
            .addCase(getHospitalCount.rejected, (state, action) => {
                state.error = action.error.message;
                console.error("Error fetching hospital count:", action.error.message);
            });

    }
})

export const useHospitalReducer = hospitalSlice.reducer;