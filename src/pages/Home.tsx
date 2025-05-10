

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




    </div>



  );
};

