import { Routes, Route} from "react-router-dom";
import { Simulacra } from "../pages/Simulacra";
import { Tierlist} from "../pages/Tierlist";
import { Relics } from "../pages/Relics";
import { Matrices } from "../pages/Matrices";
import { Guides } from "../pages/Guides";
import ImageDetail from "../pages/ImageDetail"; // Importa el componente con el nombre correcto
import { Food } from "../pages/Food";
import MatrixDetalle from "../pages/MatrixDetalle";
import DevNotesPage from "../pages/DevNotesPage/DevNotesPage"


export function MyRoutes() {
    
    return(
        
            <Routes>
                <Route path="/" element={<Simulacra  tittle="Simulacra" p="Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy. They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately."/>}/>
                <Route path="/tierlist" element={<Tierlist tittle="Tier List" p="Tier-list in progress..."/>}/>
                <Route path="/matrices" element={<Matrices tittle="Matrices" p="Matrices (aka Chips) are items that can be attached to one of the four weapon slots (Emotion, Mind, Belief, and Memory) to provide stat boosts and special effects.

Set effects will only be active when using the weapon that the matrices are attached to unless otherwise specified. Matrices can be strengthened similar to weapons, with each star unlocking higher values for the set effect."/>}/>
                <Route path="/relics" element={<Relics tittle="Relics" p="The best Relics for META"/>}/>
                <Route path="/guides" element={<Guides tittle="Guides" p="The best guides made BY Tynnox"/>}/>
                <Route path="/food" element={<Food tittle="Food" p="The best guides made BY Tynnox"/>}/>
                <Route path="/simulacra/:imageName" element={<ImageDetail />} />
                <Route path="/matrices/:matrizName" element={<MatrixDetalle />} />
                <Route path="/devnotes/:title" element={<DevNotesPage />} />
            </Routes>
    );
}
