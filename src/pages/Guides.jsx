import styled from "styled-components";
import GuideCard from '../components/GuidesTof'
export function Guides(props) {
    
    return(
        <Container>
        <div className="container-global" >
            <div className="guide-container">
                <h1 className="simulacra-tittle">{props.tittle}</h1>
                 <p className="simulacra-detail"> {props.p}</p>
                 <div className="card-container">
                 <GuideCard title="Guía Dominio 9: Dominum" description="Hecho por Hinse" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guía Fantasma Secuencial" description="Hecho por Tynnox" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guía Fantasma del Pasado" description="Hecho por Narchy" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guía Rotacion: Equipo Healer" description="Hecho por Exxodus98" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guia para los f2p" description="Lorem ipsum" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guia para los f2p" description="Lorem ipsum" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guia para los f2p" description="Lorem ipsum" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guia para los f2p" description="Lorem ipsum" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guia para los f2p" description="Lorem ipsum" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 <GuideCard title="Guia para los f2p" description="Lorem ipsum" imageUrl="https://toweroffantasy.info/images/UI/huanxing/lihui/linghan.webp" />
                 </div>
            </div>
        </div>
        
        
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

.simulacra-container{
    height: 30vh;
    
}

.simulacra-tittle{
    display: flex;
    justify-content: center;
    padding: 20px;
}


`