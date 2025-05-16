
    interface Props {
        closeModalTarea: () => void;
        abrirPomodoro: () => void;
    }

    export const ModalTarea = ({ closeModalTarea, abrirPomodoro }: Props) => {
        return (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
                <div className={`rounded-lg w-125 p-6 shadow-md border-2 border-white`}>
                    
                    <h2 className="text-xl font-semibold text-center mb-4">INGRESE SU TAREA</h2> 
                            <div className="border-b-2 border-white my-4"></div>

                    <div className="flex justify-center">
                        <input 
                            className="bg-white text-black border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500 w-3/4"
                            type="text" 
                            placeholder="Escribe tu tarea aquí"


                        />
                    </div>

                    <div className="flex gap-4 mt-6 justify-center"> 
                    
                        <button 
                            onClick={() => { closeModalTarea(); abrirPomodoro(); }} 
                            className="text-white hover:text-blue-600"
                        >
                            INICIAR POMODORO
                        </button>
                    </div>
                </div>
            </div>
        );
    };
