

import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import { useState } from "react";
import { Navegacion } from '../components/Navegacion';



export const Home = () => {
  const [noche, setNoche] = useState(false);
  return (
    /*  Div principal  */
    <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
      {noche && <NightSky />}
      {/* Barra de navegacion */}
      <Navegacion isChecked={noche} setIsChecked={setNoche} />
      {/*Heading Principal */}
      <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">MEJORA TU ENFOQUE EN EL ESTUDIO</h1>
        <p className="mb-6 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">Organiza tu tiempo, potencia tu aprendizaje y alcanza tus metas con métodos probados. ¿Listo para concentrarte de verdad?</p>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Comenzar Ahora
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <img src="/src/assets/imgs/logoSinFondo.png" alt="icono de FocusUp" />
      </div>





    </div>



  );
};

