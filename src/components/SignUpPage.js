import styled from "styled-components";
import {Link} from "react-router-dom"


export default function SignUpPage(){
    return(
        <Container>
            <h1>MyWallet</h1>
            <input
                type="text"
                placeholder="Nome"
            ></input>
            <input
                type="email"
                placeholder="E-mail"
            ></input>
            <input
                type="password"
                placeholder="Senha"
            ></input>
            <input
                type="password"
                placeholder="Confirme a senha"
            ></input>
            <button>Entrar</button>
            <Link to={"/"}>
                <h2>Já tem uma conta? Entre agora!</h2>
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
    background-color: #8C11BE;
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
        background-color: #A328D6;
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