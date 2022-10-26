import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./../pages/About";
import App from "./../App";
import LoginPage from "../pages/Login";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/about' element={<About/>} />
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;