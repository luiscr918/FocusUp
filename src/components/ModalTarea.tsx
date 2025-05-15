
interface Props {
    closeModalTarea: () => void;
    abrirPomodoro: () => void;
}

export const ModalTarea = ({ closeModalTarea, abrirPomodoro }: Props) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
            <div className={`rounded-lg w-125 p-6 shadow-md border-2 border-white`}>
                <h2 className="text-xl font-semibold text-center">INGRESE SU TAREA</h2>
                <input 
    className="bg-white text-black border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500 " 
    type="text" 
    placeholder="Escribe tu tarea aquí..."
/>

                <div className="flex gap-4 mt-4">
                    <button 
                        onClick={closeModalTarea} 
                        className="text-red-500 hover:text-red-600"
                    >
                        Cerrar
                    </button>
                    <button 
                        onClick={() => { closeModalTarea(); abrirPomodoro(); }} 
                        className="text-blue-500 hover:text-blue-600"
                    >
                        Iniciar Pomodoro
                    </button>
                </div>
            </div>
        </div>
    );
};