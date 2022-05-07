import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Balance(){
    return (
        <Container>
            <header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </header>
            <main>
                <h3>Não há registros de <br/>entrada ou saída</h3>
            </main>
            <footer>
                <Link to={"/"}>
                    <button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <h2>Nova <br/> entrada</h2>
                    </button>
                </Link>
                <Link to={"/"}>
                    <button>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <h2>Nova <br/> saída</h2>
                    </button>
                </Link>
            </footer>
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
        align-items: center;
        justify-content: center;
        h3{
            text-align: center;
            font-weight: 400;
            font-size: 20px;
            color: #868686;
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