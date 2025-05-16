import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import Footer from "../components/Footer";
import { TempPomodoro } from "../components/TempPomodoro";
import { useNavigate } from "react-router-dom";
import { ModalTarea } from "../components/ModalTarea";
interface Props {
    tarea?: string;
}

export const Pomodoro = ({ tarea = '' }: Props) => {
    const [noche, setNoche] = useState(false);
    const navigation = useNavigate();
    const [nombre, setNombre] = useState(tarea);
    const volverHome = () => {
        navigation('/');
    }

    return (
        <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
            {noche && <NightSky />}
            {/* Barra de navegacion */}
            <Navegacion isChecked={noche} setIsChecked={setNoche} />
            {(nombre === '')
                ? (<ModalTarea closeModalTarea={volverHome} guardarNombre={setNombre}/>)
                : (<TempPomodoro />)
            }
            <Footer isChecked={noche} />
        </div>

    )
}
