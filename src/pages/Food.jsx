import styled from "styled-components";
import '../styles/ImagesGrid.css';

export function Food(props) {
  return (
    <Container>
      
      <div className="container-global">
        <div className="simulacra-container">
          <h1 className="simulacra-tittle">{props.tittle}</h1>
          <p className="simulacra-detail"> {props.p}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;

  .container-global {
    width: 100%;
    height: inherit;
  }

  .simulacra-container {
    height: 30vh;
  }

  .simulacra-tittle {
    display: flex;
    justify-content: center;
    padding: 20px;
  }


`;
