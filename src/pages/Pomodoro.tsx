import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import Footer from "../components/Footer";
import { TempPomodoro } from "../components/TempPomodoro";
interface Props {
    tarea?: string;
}

export const Pomodoro = ({ tarea = 'jfjfj' }: Props) => {
    const [noche, setNoche] = useState(false);
    return (
        <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
            {noche && <NightSky />}
            {/* Barra de navegacion */}
            <Navegacion isChecked={noche} setIsChecked={setNoche} />
            {(tarea === '')
                ? (<p>hola</p>)
                : (<TempPomodoro />)
            }
            <Footer isChecked={noche} />
        </div>

    )
}
