import styled from "styled-components";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const URLGET = "http://localhost:5000/balance"

export default function BalancePage(){
    const navigate = useNavigate();
    const [tokenValidation, setTokenValidation] = useState(false);
    const [userBalanceData, setuserBalanceData] = useState(false);
    const [userName, setUserName] = useState("")
    let token = localStorage.getItem('token');

    useEffect( () => {
        let promise = axios.get(URLGET, {headers:{token}});
        promise.then(res => {
            setTokenValidation(true)
            setUserName(res.data);
        }).catch(err => {
            alert("Erro: não foi possível validar sua sessão.")
            navigate("/")
            console.log(err)});
    });

    

    if(!tokenValidation){
        return (
            <Container>
                <header>
                    <h1>CARREGANDO ...</h1>
                    <ion-icon name="log-out-outline"></ion-icon>
                </header>
                <main>
                    <div className="centralizer">
                        <div className='loading' />
                    </div>
                </main>
                <footer>
                    <Link to={"/income"}>
                        <button>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <h2>Nova <br/> entrada</h2>
                        </button>
                    </Link>
                    <Link to={"/expense"}>
                        <button>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <h2>Nova <br/> saída</h2>
                        </button>
                    </Link>
                </footer>
            </Container>
        );    
    };
    if (tokenValidation){
        return (
            <Container>
                <header>
                    <h1>Olá, {userName}!</h1>
                    <ion-icon name="log-out-outline"></ion-icon>
                </header>
                <main>
                    <Main></Main>
                </main>
                <footer>
                    <Link to={"/income"}>
                        <button>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <h2>Nova <br/> entrada</h2>
                        </button>
                    </Link>
                    <Link to={"/expense"}>
                        <button>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <h2>Nova <br/> saída</h2>
                        </button>
                    </Link>
                </footer>
            </Container>
        )
        function Main(){
            if(!userBalanceData){
                return (
                    <div className="centralizer">
                        <h3>Não há registros de <br/>entrada ou saída</h3>
                    </div>
                )
            };
            if(userBalanceData){
                return (
                    <></>
                )
            };
        }
    };
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
    header{
        width: 326px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1{
            color: #FFFFFF;
            font-weight: 700;
            font-size: 26px;
        }
        ion-icon{
            color: #ffffff;
            font-size: 30px;
        }
    }
    main{
        width: 326px;
        height: 446px;
        background-color: #ffffff;
        border-radius: 5px;
        margin-bottom: 13px;
        display: flex;
        justify-content: center;
        .centralizer{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h3{
            text-align: center;
            font-weight: 400;
            font-size: 20px;
            color: #868686;
        }
        .loading {
                animation: is-rotating 1s infinite;
                width: 50px;
                height: 50px;
                border: 6px solid var(--primaryColor);
                border-top-color: #FFFFFF;
                border-radius: 50%;
                margin: 15px;
            }
            @keyframes is-rotating {
                to {
                    transform: rotate(1turn);
                }
            }
    }
    footer{
        display: flex;
        width: 326px;
        justify-content: space-between;
        button{
            width: 155px;
            height: 114px;
            background: #A328D6;
            border-radius: 5px;
            border: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
            padding-top: 10px;
            padding-left: 10px;
            ion-icon{
                color: #FFFFFF;
                font-size: 25px;
            }
            h2{
            font-weight: 700;
            font-size: 17px;
            color: #FFFFFF;
            }
        }
    }
`