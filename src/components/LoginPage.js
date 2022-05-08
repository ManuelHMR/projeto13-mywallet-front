import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";


export default function LoginPage(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    return(
        <Container>
            <h1>MyWallet</h1>
            <input
                type="email"
                placeholder="E-mail"
                value={user.email}
                onChange={(event) =>{
                    setUser({...user.email, email: event.target.value})
                }}
            ></input>
            <input
                type="password"
                placeholder="Senha"
                value={user.password}
                onChange={(event) =>{
                    setUser({...user.password, password: event.target.value})
                }}
            ></input>
            <button>Entrar</button>
            <Link to={"/signup"}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--primaryColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color: #ffffff;
    }
    input{
        width: 326px;
        height: 58px;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
        padding-left: 15px;
    }
    button{
        width: 326px;
        height: 46px;
        color: #ffffff;
        background-color: var(--secondaryColor);
        border: none;
        border-radius: 5px;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 36px;
    }
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #ffffff;
    }
`