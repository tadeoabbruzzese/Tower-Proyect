import styled from "styled-components";
import MatricesDetail from '../components/MatricesDetail'
export function Matrices(props) {
    
    return(
        <Container>
        <div className="container-global">
            <div className="simulacra-container">
                <h1 className="simulacra-tittle">{props.tittle}</h1>
                 <p className="simulacra-detail"> {props.p}</p>
            </div>
        </div>
        <div className="container-characters">
            <h1 className="titulo">Matrices</h1>
            <MatricesDetail />
      {/* Agregar componentes si faltan */}
    </div>
    </Container>
    );
}
const Container =styled.div`
    min-height: 100vh;
    width: 100%

    .container-global{
        width: 80%;
        height: inherit;
        
        
    }

    .simulacra-container{
        height: 30vh;
        
    }

    .simulacra-tittle{
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    .simulacra-detail{
        
        padding: 0 30px;
        padding: 0 25%;
        font-size: 20px
        

    }
`