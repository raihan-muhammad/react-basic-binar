import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./../pages/About";
import App from "./../App";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/about' element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;