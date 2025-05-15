import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import Footer from "../components/Footer";
import { TempPomodoro } from "../components/TempPomodoro";
import { ModalTarea } from "../components/ModalTarea"; 

interface Props {
    tarea?: string;
}

export const Pomodoro = ({ tarea = 'jfjfj' }: Props) => {
    const [noche, setNoche] = useState(false);
    const [mostrarModalTarea, setMostrarModalTarea] = useState<boolean>(true); // Inicia con el modal activo
    const [mostrarPomodoro, setMostrarPomodoro] = useState<boolean>(false); // Estado para mostrar el Pomodoro

    return (
        <>
            <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'} ${mostrarModalTarea ? 'blur-md' : ''}`}>
                {noche && <NightSky />}
                <Navegacion isChecked={noche} setIsChecked={setNoche} />
                
                {mostrarPomodoro && <TempPomodoro />} 

                <Footer isChecked={noche} />
            </div>

          
            {mostrarModalTarea && (
                <ModalTarea closeModalTarea={() => setMostrarModalTarea(false)} abrirPomodoro={() => setMostrarPomodoro(true)} />
            )}
        </>
    );
};
