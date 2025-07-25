export interface NotificationData {
    message: string;
    type: string;
    role: string;
    userEmail?: string;
    isRead: boolean;
    createdAt?: string;
}
