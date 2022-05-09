import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import joi from "joi";

const URLPOST = "https://git.heroku.com/my-wallet-manuelhmr.git/signin";

export default function LoginPage(){

    const navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function Button(){
        if(!loading){
            return (
                <button onClick={() => verifyInput()}>Entrar</button>
            )
        }else{
            return (
                <div className='loading' />
            )
        }
    }

    function verifyInput(){

        const userSchema = joi.object({
            email: joi.string().required(),
            password: joi.string().required(),
        });
        const validation = userSchema.validate(user);
        if(validation.error){
            return alert("Preencha todos os dados!")
        }
        post();
    }

    function post(){
        setloading(true)
        let promise = axios.post(URLPOST, user);
        promise
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data)
                navigate("/balance")
            })
            .catch(err => console.log(err))
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <input
                type="email"
                placeholder="E-mail"
                value={user.email}
                onChange={(event) =>{
                    setUser({...user, email: event.target.value})
                }}
            ></input>
            <input
                type="password"
                placeholder="Senha"
                value={user.password}
                onChange={(event) =>{
                    setUser({...user, password: event.target.value})
                }}
            ></input>
            <Button></Button>
            <Link to={"/signup"}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
        </Container>
    )
};

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
    .loading {
        animation: is-rotating 1s infinite;
        width: 50px;
        height: 50px;
        border: 6px solid var(--primaryColor);
        border-top-color: #ffffff;
        border-radius: 50%;
        margin: 15px;
    }
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`