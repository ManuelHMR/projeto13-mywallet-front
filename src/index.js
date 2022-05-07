import reactDom from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Balance from "./components/Balance";

import "./style.css";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LoginPage />}></Route>
                <Route path={"/signup"} element={<SignUpPage />}></Route>
                <Route path={"/balance"} element={<Balance />}></Route>
                {/* <Route path={"/revenue"} element={}></Route>
                <Route path={"/expense"} element={}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}


reactDom.render(<App/>, document.querySelector(".root"))