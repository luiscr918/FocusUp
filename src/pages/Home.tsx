

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
      <button type="button" onClick={() => setNoche(!noche)} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
      <ToogleComponent />



    </div>



  );
};

