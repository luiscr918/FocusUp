import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import Footer from "../components/Footer";
import { CarruselPlaylist } from "../components/CarruselPlaylist";


export const Spotify = () => {
  const [noche, setNoche] = useState(false);

  return (
    <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
                {noche && <NightSky />}
                {/* Barra de navegacion */}
                <Navegacion isChecked={noche} setIsChecked={setNoche} />
                <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}relative h-screen flex items-center justify-start bg-cover bg-center`}>
                  
 {/* carrusel */}
 <CarruselPlaylist/>
</div>
      <Footer isChecked={noche}/>
    </div>
  )
}
