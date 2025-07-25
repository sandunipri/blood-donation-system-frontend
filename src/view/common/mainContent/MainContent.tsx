import {Route, Routes} from "react-router-dom";
import {Register} from "../../pages/register/Register.tsx";
import {DonorManage} from "../../pages/donor/DonorManage.tsx";
import {Admin} from "../../pages/admin/Admin.tsx";
import {Hospital} from "../../pages/hospital/Hospital.tsx";
import {Home} from "../../pages/home/Home.tsx";

export function MainContent() {
    return (
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/donor-manage" element={<DonorManage/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/hospital" element={<Hospital/>}></Route>
        </Routes>
    );
}