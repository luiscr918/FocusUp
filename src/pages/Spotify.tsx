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
                <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}relative h-screen flex items-center justify-start bg-cover bg-center`}>
  <div className="relative z-10 px-8 sm:px-16 text-white max-w-2xl">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Relájate escuchando tu <span className="text-white">PlayList.</span></h1>
    <p className="text-sm sm:text-base mb-6 text-gray-200">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="https://open.spotify.com/intl-es/?_authfailed=1" className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-full transition-all">
        <img src="/spotify-icon.svg" alt="Spotify" className="w-5 h-5" />
        Ir a Spotify
      </a>
      <a href="https://www.youtube.com" className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-full transition-all">
        <img src="/youtube-icon.svg" alt="YouTube" className="w-5 h-5" />
        Ir a YouTube Play
      </a>
    </div>
  </div>
   {/* Lado derecho: imagen */}
  <div className="hidden md:block w-1/2">
    <img
      src="/src/assets/imgs/logoRecortado.png"
      alt="Logotipo"
      className="w-full h-full object-left-top  "
    />
  </div>
</div>
      <Footer isChecked={noche}/>
    </div>
  )
}
