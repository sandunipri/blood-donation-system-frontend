import type { BloodStockData } from "./BloodStockData";

export interface HospitalData {
    name: string;
    location: string;
    contact: string;
    email: string;
    bloodStock: BloodStockData[];
}