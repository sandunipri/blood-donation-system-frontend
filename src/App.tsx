import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/defaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/login/Login.tsx";
import {Register} from "./view/pages/register/Register.tsx";
import {Home} from "./view/pages/home/Home.tsx";
import {User} from "./view/pages/user/User.tsx";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/user" element={<User/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App;