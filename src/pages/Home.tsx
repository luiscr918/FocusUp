

import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import { useState } from "react";
import { Navegacion } from '../components/Navegacion';
import { ModalHomeComponent } from "../components/ModalHomeComponent";




export const Home = () => {
  const [noche, setNoche] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };
  const cerrarModal = () => {
    setShowModal(false);
  };
  return (
    /*  Div principal  */
    <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
      {noche && <NightSky />}
      {/* Barra de navegacion */}
      <Navegacion isChecked={noche} setIsChecked={setNoche} />
      {/*Heading Principal */}
      <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">MEJORA TU ENFOQUE EN EL ESTUDIO</h1>
        <p className={`mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 ${noche ? 'text-teal-200' : 'text-gray-800'}`}>Organiza tu tiempo, potencia tu aprendizaje y alcanza tus metas con métodos probados. ¿Listo para concentrarte de verdad?</p>
        <button
          onClick={abrirModal}
          className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white  rounded-lg  focus:ring-4 ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'} `}>
          Comenzar Ahora
        </button>
        <img src="/src/assets/imgs/logoSinFondo.png" alt="icono de FocusUp" />
      </div>
      {/*Modal Seleccion de Tecnicas */}
      {showModal && <ModalHomeComponent showModal={showModal} cerrarModal={cerrarModal} noche={noche} abrirModalOtraPag={abrirModal} />}
    </div>
  );
};

