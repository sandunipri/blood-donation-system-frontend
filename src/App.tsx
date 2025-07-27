import {Route, Routes, useNavigate} from "react-router-dom";
import {DefaultLayout} from "./view/common/defaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/login/Login.tsx";
import {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";
import {Register} from "./view/pages/register/Register.tsx";
function App(){

    const  navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || isTokenExpired(token)){
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            navigate('/');
        }
    },[])

    return(
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>

                {/*           <Route path="/register" element={<Register/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/donor-manage" element={<DonorManage/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/hospital" element={<Hospital/>}></Route>*/}
                {/*<Route path="/donor/profile" element={<DonorManage/>}></Route>*/}
                {/*<Route path="/donor/contacts" element={<DonorManage/>}></Route>*/}
                {/*<Route path="/donor/donors" element={<DonorManage/>}></Route>*/}
                {/*<Route path="/donor/blood-basics" element={<DonorManage/>}></Route>*/}
                {/*<Route path="/donor/blood-bank" element={<DonorManage/>}></Route>*/}

            </Routes>
    )
}

export default App;