import {Route, Routes, useNavigate} from "react-router-dom";
import {DefaultLayout} from "./view/common/defaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/login/Login.tsx";
import {Register} from "./view/pages/register/Register.tsx";
import {Home} from "./view/pages/home/Home.tsx";
import {User} from "./view/pages/user/User.tsx";
import {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";
import {Admin} from "./view/pages/admin/Admin.tsx";


function App(){

    const  navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || isTokenExpired(token)){
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            navigate('/login');
        }
    },[])

    return(
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/user" element={<User/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                {/*<Route path="/donor/profile" element={<User/>}></Route>*/}
                {/*<Route path="/donor/contacts" element={<User/>}></Route>*/}
                {/*<Route path="/donor/donors" element={<User/>}></Route>*/}
                {/*<Route path="/donor/blood-basics" element={<User/>}></Route>*/}
                {/*<Route path="/donor/blood-bank" element={<User/>}></Route>*/}

            </Routes>
    )
}

export default App;