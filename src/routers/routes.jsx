import { Routes, Route} from "react-router-dom";
import { Simulacra } from "../pages/Simulacra";
import { Matrices } from "../pages/Matrices";
import { Tierlist} from "../pages/Tierlist";
import { Relics } from "../pages/Relics"
import { Guides } from "../pages/Guides"

export function MyRoutes() {
    
    return(
        
            <Routes>
                <Route path="/" element={<Simulacra />}/>
                <Route path="/tierlist" element={<Tierlist></Tierlist>}/>
                <Route path="/matrices" element={<Matrices></Matrices>}/>
                <Route path="/relics" element={<Relics></Relics>}/>
                <Route path="/guides" element={<Guides></Guides>}/>
            </Routes>
    );
}
