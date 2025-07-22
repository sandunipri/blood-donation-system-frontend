import type {HospitalData} from "../model/HospitalData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";

interface hospitalState {
    list: HospitalData[]
    error: string | null | undefined
}

const initialState: hospitalState = {
    list: [],
    error: null
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
            .addCase(getAllHospitals.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
})

export const useHospitalReducer = hospitalSlice.reducer;