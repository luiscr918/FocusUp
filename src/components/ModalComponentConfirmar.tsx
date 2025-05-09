import React, { useState } from 'react';

interface Props {
    nombre: string,
    descripcion: string,
    imagen: string
}

const ModalComponentConfirmar: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    // Función para abrir el modal
    const openModal = () => setIsOpen(true);

    // Función para cerrar el modal
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {/* Botón para abrir modal */}
            <button
                onClick={openModal}
                className="rounded-md bg-blue-500 py-2 px-4 text-white text-sm shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="button"
            >
                Abrir Modal 1
            </button>
            {/* Desde aqui comienza para modificar el estilo modal */}
            {/* Modal */}
            {isOpen && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" 
                >
                    <div
                        className="bg-blue-500 rounded-lg w-96 p-6 shadow-md"
                        onClick={(e) => e.stopPropagation()} /* esto es para que no desaparezca el modal cuando damos click dentro de el */
                    >
                        {/* Título */}
                        <div className="text-xl font-semibold text-white mb-2">
                            {props.nombre}
                        </div>

                        {/* Imagen*/}
                        <div className="flex justify-center mb-4">
                            <img src={props.imagen} alt="imagen" className="w-24 h-24 object-cover" />
                        </div>

                        {/* Descripción */}
                        <div className="text-sm text-white mb-4">
                            {props.descripcion}
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

export default ModalComponentConfirmar;
