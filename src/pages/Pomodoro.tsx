import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import "../styles/fondosMain.css";
import Footer from "../components/Footer";
import { TempPomodoro } from "../components/TempPomodoro";
import { useNavigate } from "react-router-dom";
import { ModalTarea } from "../components/ModalTarea";
import { IconoComponent } from "../components/IconoComponent";
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
            <IconoComponent/>
            {(nombre === '')
                ? (<ModalTarea closeModalTarea={volverHome} guardarNombre={setNombre} />)
                : (<TempPomodoro tarea={nombre} setNombre={setNombre} noche={noche} />)
            }
            {/* GIF DE FONDO */}
            <div className="flex justify-center items-center m-10">
                <figure className="max-w-lg ">
                    <img className="h-auto max-w-xs rounded-lg" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWZ2MnZwNzZscDhxdTVubDVsbGhvMDJmZG0zMGF5cnEwMTBkaW41bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XbJYBCi69nyVOffLIU/giphy.gif" alt="image description" />
                    <figcaption className={`mt-2 text-sm text-center ${noche ? 'text-teal-200' : 'text-white'}`}>Estudia con intención, descansa con propósito</figcaption>
                </figure>
            </div>
            <Footer isChecked={noche} />


        </div>

    )
}