import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/defaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/login/Login.tsx";
import {Register} from "./view/pages/register/Register.tsx";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;