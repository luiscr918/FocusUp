import React, { useState } from 'react';

interface Props{
    nombre:String,
    descripcion: String
}


const ModalComponentConfirmar: React.FC <Props> = (props:Props) => {
    
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
        {/* modal 1 */}
            {/* Botón para abrir el modal */}
            <button
                onClick={openModal}
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
            >
                Abrir Modal 1
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    onClick={closeModal}  // Este es el fondo semitransparente
                    className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm opacity-100 transition-opacity duration-300"
                >
                    <div
                        className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
                        onClick={(e) => e.stopPropagation()} // Evitar que el modal se cierre al hacer clic dentro
                    >
                        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                            {props.nombre}
                        </div>
                        <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
                            {props.descripcion}
                        </div>
                        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                            {/* Botón de cancel */}
                            <button
                                onClick={closeModal}
                                className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Cancel
                            </button>
                            {/* Botón de confirmación */}
                            <button
                                onClick={closeModal}
                                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                                type="button"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
    
        </>
    );
};

export default ModalComponentConfirmar;
