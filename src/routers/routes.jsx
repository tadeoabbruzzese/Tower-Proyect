import { Routes, Route} from "react-router-dom";
import { Simulacra } from "../pages/Simulacra";
import { Matrices } from "../pages/Matrices";
import { Tierlist} from "../pages/Tierlist";
import { Relics } from "../pages/Relics"
import { Guides } from "../pages/Guides"
import ImageDetail from "../pages/ImageDetail"; // Importa el componente con el nombre correcto
import { Food } from "../pages/Food";


export function MyRoutes() {
    
    return(
        
            <Routes>
                <Route path="/" element={<Simulacra  tittle="Simulacra" p="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."/>}/>
                <Route path="/tierlist" element={<Tierlist tittle="Tier List" p="Tier-list in progress..."/>}/>
                <Route path="/matrices" element={<Matrices tittle="Matrices" p="The best Matrices for each elemental comp."/>}/>
                <Route path="/relics" element={<Relics tittle="Relics" p="The best Relics for META"/>}/>
                <Route path="/guides" element={<Guides tittle="Guides" p="The best guides made BY Tynnox"/>}/>
                <Route path="/food" element={<Food tittle="Food" p="The best guides made BY Tynnox"/>}/>
                <Route path="/simulacra/:imageName" element={<ImageDetail />} />
            </Routes>
    );
}
