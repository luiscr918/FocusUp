

import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import { useState } from "react";
import { ToogleComponent } from '../components/ToogleComponent';



export const Home = () => {
  const [noche, setNoche] = useState(true);
  return (
    /*  Div principal  */
    <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
      {noche && <NightSky />}
      <p style={{ color: 'white' }}>hola</p>
      <ToogleComponent isChecked={noche} setIsChecked={setNoche} />



    </div>



  );
};

