import styled from "styled-components";
import TierlistComponent from "../components/Tierlist/TierlistComponent";
export function Tierlist(props) {
    
    return(
        <Container>
            <div className="container-global">
                <div className="simulacra-container">
                    <h1 className="simulacra-tittle">{props.tittle}</h1>
                    {/* <p className="simulacra-detail"> {props.p}</p> */}
                </div>
            </div>

        <TierlistComponent />
    </Container>
    );
}
const Container =styled.div`
min-height: 100vh;
width: 100%;


.container-global{
    width: 100%;
    height: inherit;
    
    
}


.simulacra-tittle{
    display: flex;
    justify-content: center;
    padding: 20px;
}


`