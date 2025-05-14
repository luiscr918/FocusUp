import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import Footer from "../components/Footer";

export const Spotify = () => {
        const [noche, setNoche] = useState(false);
    
  return (
    <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
                {noche && <NightSky />}
                {/* Barra de navegacion */}
                <Navegacion isChecked={noche} setIsChecked={setNoche} />
                <Footer isChecked={noche}/>
    </div>
  )
}
