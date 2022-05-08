import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import joi from "joi";
import axios from "axios";

const URLPOST = "http://localhost:5000/signup"

export default function SignUpPage(){

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    function verifyInput(){

        const userSchema = joi.object({
            name: joi.string().required(),
            email: joi.string().pattern(RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)).required(),
            password: joi.string().required(),
            confirmPassword: joi.ref('password')
        });

        const validation = userSchema.validate(user);
        if(validation.error){
            
            console.log(validation.error)
            return alert("Todos os campos devem ser preenchidos corretamente") 
        }

        post();
        
    };

    function post(){
        delete user.confirmPassword;
        let promise = axios.post(URLPOST, user);
        promise
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    };

    return(
        <Container>
            <h1>MyWallet</h1>
            <input
                type="text"
                placeholder="Nome"
                value={user.name}
                onChange={(event) =>{
                    setUser({...user, name: event.target.value})
                }}
            ></input>
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
            <input
                type="password"
                placeholder="Confirme a senha"
                value={user.confirmPassword}
                onChange={(event) =>{
                    setUser({...user, confirmPassword: event.target.value})
                }}
            ></input>
            <button onClick={() => verifyInput()}>Entrar</button>
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

