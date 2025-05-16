interface Props {
    closeModalTarea: () => void;
    abrirPomodoro: () => void;
    abrirModalHome: () => void; // Nueva función
}

export const ModalTarea = ({ closeModalTarea, abrirPomodoro, abrirModalHome }: Props) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
            <div className="relative rounded-lg w-125 p-6 shadow-md border-2 border-white flex flex-col items-center">
                
                <div className="w-full flex justify-between items-center mb-1">
                    <h2 className="text-xl font-semibold text-center flex-grow">INGRESE SU TAREA</h2>
                    <button 
                        onClick={() => { 
                            closeModalTarea(); 
                            abrirModalHome(); 
                        }} 
                        className="bg-red-500 px-3 py-1 rounded">
                        X
                    </button>
                </div>

                <div className="border-b-2 border-white my-4 w-full"></div>

                <input 
                    className="bg-white text-black border border-gray-100 rounded-md p-3 focus:border-blue-500 w-70 text-center" 
                    type="text" 
                    placeholder="Escribe tu tarea aquí..." 
                />

                <div className="flex gap-4 mt-6">
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
