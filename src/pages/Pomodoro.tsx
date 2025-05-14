import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import Footer from "../components/Footer";
interface Props {
    tarea?: string;
}

export const Pomodoro = ({ tarea = '' }: Props) => {
    const [noche, setNoche] = useState(false);
    return (
        <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
            {noche && <NightSky />}
            {/* Barra de navegacion */}
            <Navegacion isChecked={noche} setIsChecked={setNoche} />
            {(tarea === '')
                ? (<p>hola</p>)
                : (<>hi</>)
            }
            <Footer isChecked={noche}/>
        </div>

    )
}
