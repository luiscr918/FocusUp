import { useState } from "react";

interface Props {
    closeModalTarea: () => void;
    guardarNombre: (nombre: string) => void;
}

export const ModalTarea = ({ closeModalTarea, guardarNombre }: Props) => {
    const [nombreTarea, setNombreTarea] = useState<string>("");

    return (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
            <div className="relative rounded-lg w-125 p-6 shadow-md border-2 border-white flex flex-col items-center">

                <div className="w-full flex justify-between items-center mb-1">
                    <h2 className="text-xl font-semibold text-center flex-grow">INGRESE SU TAREA</h2>
                    <button
                        onClick={() => {
                            closeModalTarea();
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
                    value={nombreTarea}
                    onChange={(e) => {
                        const valor = e.target.value;
                        if (valor.length === 1 && valor[0] === " ") {
                            alert("No se permite espacio al inicio.");
                            return;
                        }
                        setNombreTarea(valor);
                    }}
                />

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => {
                            if (nombreTarea.trim() === "") {
                                alert("Por favor, ingrese una tarea.");
                                return;
                            }
                            guardarNombre(nombreTarea);
                        }}
                        className="text-white border-2 border-white bg-teal-400 hover:bg-teal-500 px-6 py-2 rounded  cursor-pointer"
                    >
                        GUARDAR TAREA
                    </button>
                </div>
            </div>
        </div>
    );
};

