import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URLPOST = "https://my-wallet-manuelhmr.herokuapp.com/balance";
let token = localStorage.getItem('token');

export default function ExpensePage(){

    const navigate = useNavigate();

    const [loading, setloading] = useState(false);
    const [newTrasaction, setNewTransaction] = useState({
        description: "",
        value: undefined,
        type: "expense"
    })

    function Button(){
        if(!loading){
            return (
                <button onClick={() => post()}>Salvar saída</button>
            )
        }else{
            return (
                <div className='loading' />
            )
        }
    }
    function post(){
        setloading(true);
        let promise = axios.post(URLPOST, newTrasaction, {headers:{token}});
        promise.then(res => {
            alert('Saída salva com sucesso!');
            navigate("/balance")
        }).catch(err => console.log(err))  
    };

    return(
        <Container>
            <h1>Nova saída</h1>
            <input
                type="number"
                placeholder="Valor"
                value={newTrasaction.value}
                onChange={(event) =>{
                    setNewTransaction({...newTrasaction, value: event.target.value})
                }}
            ></input>
            <input
                type="text"
                placeholder="Descrição"
                value={newTrasaction.description}
                onChange={(event) =>{
                    setNewTransaction({...newTrasaction, description: event.target.value})
                }}
            ></input>
            <Button></Button>
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
    justify-content: left;
    h1{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 26px;
        text-align: left;
        width: 326px;
        padding: 15px 0;
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
`