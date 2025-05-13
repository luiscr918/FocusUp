
import { useEffect, useState } from "react";
import * as ImgsDefs from "../const/imgsDefModalConfirmar";
interface Props {
    nombre: string,
    openModal: boolean;
    closeModal: () => void;
    abirPrimerModal: ()=>void;
}

export const ModalComponentConfirmar = ({ nombre, openModal, closeModal,abirPrimerModal }: Props) => {
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
    }, [nombre])



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
                        className="bg-blue-500 rounded-lg w-96 p-6 shadow-md"
                        onClick={(e) => e.stopPropagation()} /* esto es para que no desaparezca el modal cuando damos click dentro de el */
                    >
                        {/* Título */}
                        <div className="text-xl font-semibold text-white mb-2">
                            {nombre}
                        </div>

                        {/* Imagen*/}
                        <div className="flex justify-center mb-4">
                            <img src={imagen} alt="imagen de la tecnica" className="w-full max-w-xs h-auto object-contain" />
                        </div>

                        {/* Descripción */}
                        <div className="text-sm text-white mb-4">
                            {definicion}
                        </div>

                        {/* Botones */}
                        <div className="flex justify-between">
                            <button
                                onClick={closeModal}
                                className="text-white hover:text-blue-600"
                                type="button"
                            >
                                CONOCER MÁS
                            </button>
                            <button
                                onClick={closeModal}
                                className="text-white hover:text-blue-600"
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


