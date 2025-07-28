import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/Store.ts";
import {confirmNotification, fetchAdminNotifications, rejectNotification} from "../../../slices/NotificationSlice.ts";
import type { NotificationData } from "../../../model/NotificationData.ts";

export function Notification() {
    const dispatch = useDispatch<AppDispatch>();

    const {loading, error } = useSelector((state: RootState) => state.notification);
    const notification = useSelector((state: RootState) => state.notification.list);

    useEffect(() => {
        dispatch(fetchAdminNotifications());
    }, [dispatch]);

    const reversedNotification= [...notification].reverse();


    const handleConfirm = (email: string) => {
        dispatch(confirmNotification(email))
        console.log("Confirmed notification", email);
    };

    const handleReject = (email: string) => {
        dispatch(rejectNotification(email))
        console.log("Rejected notification", email);
    };

    return (
        <div className="p-4 mt-40 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Admin Notifications</h2>

            {loading && <p className="text-gray-600 animate-pulse">Loading notifications...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && reversedNotification.length === 0 && (
                <p className="text-gray-500">No notifications available.</p>
            )}

            <div className="space-y-3">
                {reversedNotification.map((notification: NotificationData, index: number) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow-md border ${
                            notification.isRead ? "bg-white" : "bg-blue-50"
                        }`}
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-gray-800">{notification.message}</p>
                            {!notification.isRead && (
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                        </div>
                        <p className="text-sm text-gray-400">
                            {new Date(notification.createdAt ?? "").toLocaleString("en-US", {
                                dateStyle: "medium",
                                timeStyle: "short",
                            })}
                        </p>
                        {notification.type === "blood-request" && (
                            <div className="mt-3 flex gap-2">
                                <button
                                    className="px-4 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                                    onClick={() => handleConfirm(notification.userEmail!)}
                                >
                                    Confirm
                                </button>
                                <button
                                    className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                    onClick={() => handleReject(notification.userEmail!)}
                                >
                                    Reject
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
