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
      {/* Encabezado */}
      <div className="container mx-auto flex flex-col items-center justify-center  text-center ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">Encuentra tu ritmo para concentrarte</h1>
        <p className={`mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 ${noche ? 'text-teal-200' : 'text-gray-800'}`}>Explora nuestras playlists diseñadas para mejorar tu enfoque y acompañarte en cada sesión de estudio.
          Elige la música ideal para crear el ambiente perfecto y mantenerte productivo mientras aprendes.</p>
      </div>
      {/* carrusel */}
      <CarruselPlaylist oscuro={noche} />

      <Footer isChecked={noche} />
    </div>
  )
}
