import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { NotificationData } from "../model/NotificationData.ts";
import { backendApi } from "../api"; // your API call setup

interface NotificationState {
    list: NotificationData[];
    loading: boolean;
    error: string | null;
}

const initialState: NotificationState = {
    list: [],
    loading: false,
    error: null,
};

export const fetchAdminNotifications = createAsyncThunk(
    "notification/requests",
    async (_, { rejectWithValue }) => {
        try {
            const response = await backendApi.get("/notification/requests");
            console.log("Response from backend:", response.data);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Failed to fetch notifications");
        }
    }
);

export const confirmNotification = createAsyncThunk(
    "notification/confirm",
    async (email : string) => {
        try {
            const response = await backendApi.patch(`/notification/confirm/${email}`);
            console.log("Notification confirmed:", response.data);
            alert("Notification confirmed successfully");
            return response.data;
        }catch (error : any) {
            console.error("Error confirming notification:", error);
            throw new Error(error.response?.data?.message || "Failed to confirm notification");
        }
    }
)

export const rejectNotification = createAsyncThunk(
    "notification/reject",
    async (email: string) => {
        try {
            const response = await backendApi.patch(`/notification/reject/${email}`);
            console.log("Notification removed:", response.data);
            alert("Notification rejected successfully");
            return response.data;
        } catch (error: any) {
            console.error("Error removing notification:", error);
            throw new Error(error.response?.data?.message || "Failed to remove notification");
        }
    }

)

const notificationSlice = createSlice({
    name: "notification",
    initialState : initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdminNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAdminNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(confirmNotification.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.list.findIndex(n => n.userEmail === updated.userEmail);
                if (index !== -1) state.list[index] = updated;
            })
            .addCase(rejectNotification.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.list.findIndex(n => n.userEmail === updated.userEmail);
                if (index !== -1) state.list[index] = updated;
            });

    },
});

export const notificationReducer  = notificationSlice.reducer;
