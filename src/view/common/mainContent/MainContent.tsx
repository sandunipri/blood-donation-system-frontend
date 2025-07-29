import {Route, Routes} from "react-router-dom";
import {DonorManage} from "../../pages/donor/DonorManage.tsx";
import {Admin} from "../../pages/admin/Admin.tsx";
import {Hospital} from "../../pages/hospital/Hospital.tsx";
import {Home} from "../../pages/home/Home.tsx";
import {RequestBlood} from "../../pages/request/RequestBlood.tsx";
import {Notification} from "../../pages/notification/Notification.tsx";
import {MedicalHistory} from "../../pages/history/MedicalHistory.tsx";
import {Patient} from "../../pages/patient/Patient.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";
import {BloodBasic} from "../../pages/basic/BloodBasic.tsx";
import DonorProfile from "../../pages/profile/DonorProfile.tsx";
import BloodPage from "../../pages/recipient/Recipient.tsx";
import DonorAbout from "../../pages/donorAbout/DonorAbout.tsx";

export function MainContent() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/donor-manage" element={<DonorManage/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/hospital" element={<Hospital/>}></Route>
            <Route path="/request" element={<RequestBlood/>}></Route>
            <Route path="/notification" element={<Notification/>}></Route>
            <Route path="/history" element={<MedicalHistory/>}></Route>
            <Route path="/donors" element={<DonorManage/>}></Route>
            <Route path="/patient" element={<Patient/>}></Route>
            <Route path="/blood-basic" element={<BloodBasic/>}></Route>
            <Route path="/profile" element={<DonorProfile/>}></Route>
            <Route path="/recipient" element={<BloodPage/>}></Route>
            <Route path="/donor" element={<DonorAbout/>}></Route>

        </Routes>
    );
}