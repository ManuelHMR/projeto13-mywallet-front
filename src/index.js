import reactDom from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import BalancePage from "./components/BalancePage";
import ExpensePage from "./components/ExpensePage";
import IncomePage from "./components/IncomePage";

import "./style.css";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LoginPage />}></Route>
                <Route path={"/signup"} element={<SignUpPage />}></Route>
                <Route path={"/balance"} element={<BalancePage />}></Route>
                <Route path={"/income"} element={<IncomePage/>}></Route>
                <Route path={"/expense"} element={<ExpensePage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


reactDom.render(<App/>, document.querySelector(".root"))