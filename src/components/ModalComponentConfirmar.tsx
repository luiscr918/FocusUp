
import { useEffect, useState } from "react";
import * as ImgsDefs from "../const/imgsDefModalConfirmar";
import "../styles/fondosMain.css";
import { useNavigate } from "react-router-dom";
interface Props {
    nombre: string,
    openModal: boolean;
    closeModal: () => void;
    abirPrimerModal: () => void;
    noche: boolean;
}

export const ModalComponentConfirmar = ({ nombre, openModal, closeModal, abirPrimerModal, noche }: Props) => {
    const [imagen, setImagen] = useState<string>('');
    const [definicion, setDefinicion] = useState<string>('');
    useEffect(() => {
        switch (nombre) {
            case 'Pomodoro':
                setImagen(ImgsDefs.IMGPOMODORO);
                setDefinicion(ImgsDefs.DEFPOMODORO);
                break;
            case 'Feynman':
                setImagen(ImgsDefs.IMGFEYNMAN);
                setDefinicion(ImgsDefs.DEFFEYNMAN);
                break;
            case 'Cornell':
                setImagen(ImgsDefs.IMGCORNELL);
                setDefinicion(ImgsDefs.DEFCORNELL);
                break;
            case 'Mapas Mentales':
                setImagen(ImgsDefs.IMGMENTALES);
                setDefinicion(ImgsDefs.DEFMENTALES);
                break;

            default:
                console.log('No se ha encontrado la técnica');
                break;
        }
    }, [nombre]);
    //redireecionar a la pagina de la tecnica seleccionada
    //1.Usar useNavigate para navegar entre paginas
    const navigate = useNavigate();
    const abrirPaginaTcSelec = (nombre: string) => {
        switch (nombre) {
            case 'Pomodoro':
                navigate('/pomodoro');
                break;
            case 'Feynman':
                navigate('/feynman');
                break;
            case 'Cornell':
                navigate('/cornell');
                break;
            case 'Mapas Mentales':
                navigate('/mapas-mentales');
                break;

            default:
                console.log('No se ha encontrado la técnica');
                break;
        }
    }



    return (
        <>

            {/* Desde aqui comienza para modificar el estilo modal */}
            {/* Modal */}
            {openModal && (
                <div
                    onClick={() => { closeModal(); abirPrimerModal(); }}
                    className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50"
                >
                    <div
                        className={`rounded-lg w-125 p-6 shadow-md ${noche ? 'night_no_stars text-white border-gray-500' : 'cielo_animado_elementos text-black border-white'}`}
                        onClick={(e) => e.stopPropagation()} /* esto es para que no desaparezca el modal cuando damos click dentro de el */
                    >
                        {/* Título */}
                        <div className="text-xl font-semibold text-white mb-2">
                            {nombre}
                        </div>

                        {/* Imagen*/}
                        <div className="flex justify-center mb-4">
                            {imagen && (<img src={imagen} alt="imagen de la tecnica" className="w-full max-w-xs h-auto object-contain" />)}

                        </div>

                        {/* Descripción */}
                        <div className={`text-sm  mb-4 ${noche ? 'text-white' : 'text-black'}`}>
                            {definicion}
                        </div>

                        {/* Botones */}
                        <div className="flex justify-between ">
                            <button
                                onClick={closeModal}
                                className={`${noche ? 'text-teal-400 hover:text-teal-500' : 'text-white hover:text-blue-600'} cursor-pointer `}
                                type="button"
                            >
                                CONOCER MÁS
                            </button>
                            <button
                                onClick={() => abrirPaginaTcSelec(nombre)}
                                className={` ${noche ? 'text-teal-400 hover:text-teal-500' : 'text-white hover:text-blue-600'} cursor-pointer`}
                                type="button"
                            >
                                IR AHORA
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};


