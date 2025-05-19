import { useEffect, useState } from "react";

export const TempPomodoro = () => {
    const [tiempo, setTiempo] = useState(25 * 60); // Tiempo en segundos
    const [crono, setCrono] = useState(false); // Controla si el temporizador está corriendo
    const [enDescanso, setEnDescanso] = useState(false); // Indica si es tiempo de descanso o trabajo
    const [pausado, setPausado] = useState(false); // Indica si el temporizador está pausado
    const [ciclosCompletados, setCiclosCompletados] = useState(0); // Contador de ciclos completados
    const [mostrarModal, setMostrarModal] = useState(false); // Modal para final de tarea
    const [mostrarFelicitacion, setMostrarFelicitacion] = useState(false);

    useEffect(() => {
        // Mostrar modal solo si se completaron 4 ciclos y no está en descanso (o sea el descanso largo terminó)
        if (ciclosCompletados === 4 && !enDescanso) {
            setMostrarModal(true);
        }
    }, [ciclosCompletados, enDescanso]);

    useEffect(() => {
        if (!crono) return;

        const temporizador = setTimeout(() => {
            if (tiempo > 0) {
                setTiempo((prev) => prev - 1);
            } else {
                setCrono(false); // Pausa el temporizador automáticamente

                if (enDescanso) {
                    // Aquí terminó un descanso
                    setEnDescanso(false);
                    setTiempo(25 * 60);

                    // Incrementamos el contador de ciclos solo si no estamos en descanso largo
                    // pero para mantener la lógica correcta incrementamos siempre aquí para contar ciclos completos
                    // En este caso, cuando el descanso largo termina, se incrementa el ciclo

                    // Para saber si fue descanso largo, podemos verificar si el tiempo anterior fue 15 min

                    // Vamos a controlar ciclos aquí:
                    if (tiempo === 0) { // tiempo ya es 0, pero aquí no sabemos si el descanso fue largo o corto
                        // Mejor guardar el tipo de descanso en un estado
                        // Vamos a agregar un estado para saber si es descanso largo

                    }
                    // Pero para simplificar, incrementamos aquí.
                    setCiclosCompletados((prev) => prev + 1);
                } else {
                    // Aquí terminó un Pomodoro, comienza descanso
                    setEnDescanso(true);

                    if ((ciclosCompletados + 1) % 4 === 0) {
                        // Descanso largo de 15 min
                        setTiempo(15 * 60);
                    } else {
                        // Descanso corto de 5 min
                        setTiempo(5 * 60);
                    }
                }
            }
        }, 1000);

        return () => clearTimeout(temporizador);
    }, [crono, tiempo, enDescanso, ciclosCompletados]);

    const formatearTiempo = (segundos: number) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos.toString().padStart(2, "0")}:${segundosRestantes
            .toString()
            .padStart(2, "0")}`;
    };

    const terminarCiclo = () => {
        setCrono(false);
        if (enDescanso) {
            setEnDescanso(false);
            setTiempo(25 * 60);
            setCiclosCompletados((prev) => prev + 1);
        } else {
            setCrono(false);
            setEnDescanso(true);
            if ((ciclosCompletados + 1) % 4 === 0) {
                setTiempo(15 * 60);
            } else {
                setTiempo(5 * 60);
            }
        }
    };

    return (
        <div className="text-center">
            <h3 className="text-white text-2xl">
                {enDescanso ? "Tiempo de Descanso" : "Tiempo de Trabajo"}
            </h3>
            <h1 className="text-white text-4xl">{formatearTiempo(tiempo)}</h1>
            <p className="text-white mt-2">
                Ciclos completados: {ciclosCompletados}
            </p>
            <div className="mt-4">
                {!crono && !pausado && (
                    <button
                        onClick={() => {
                            setCrono(true);
                            setPausado(false);
                        }}
                        className="text-white bg-green-500 px-4 py-2 rounded mr-2"
                    >
                        Comenzar
                    </button>
                )}
                {!crono && pausado && (
                    <button
                        onClick={() => {
                            setCrono(true);
                            setPausado(false);
                        }}
                        className="text-white bg-blue-500 px-4 py-2 rounded mr-2"
                    >
                        Reanudar
                    </button>
                )}
                {crono && (
                    <button
                        onClick={() => {
                            setCrono(false);
                            setPausado(true);
                        }}
                        className="text-white bg-yellow-500 px-4 py-2 rounded mr-2"
                    >
                        Pausar
                    </button>
                )}
                <button
                    onClick={() => {
                        setCrono(false);
                        setPausado(false);
                        setTiempo(enDescanso ? 5 * 60 : 25 * 60);
                    }}
                    className="text-white bg-red-500 px-4 py-2 rounded mr-2"
                >
                    Reiniciar
                </button>
                <button
                    onClick={terminarCiclo}
                    className="text-white bg-purple-500 px-4 py-2 rounded"
                >
                    Terminar Ciclo
                </button>
            </div>
            {mostrarModal && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
                    <div className="bg-white p-8 rounded shadow-lg text-black">
                        <h2 className="text-xl mb-4">¿La tarea está terminada?</h2>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            onClick={() => {
                                setMostrarModal(false);
                                setMostrarFelicitacion(true);
                            }}
                        >
                            Sí
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => {
                                setMostrarModal(false);
                                setCrono(false);
                                setPausado(false);
                                setEnDescanso(false);
                                setTiempo(25 * 60);
                                setCiclosCompletados(0);
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}
            {mostrarFelicitacion && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
                    <div className="bg-white p-8 rounded shadow-lg text-black">
                        <h2 className="text-2xl mb-4">¡Felicitaciones!</h2>
                        <p>Has completado tu tarea con éxito.</p>
                        <button
                            className="bg-blue-400 text-white px-4 py-2 rounded mt-4"
                            onClick={() => setMostrarFelicitacion(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

