import { useEffect, useState } from "react";

export const TempPomodoro = () => {
    const [tiempo, setTiempo] = useState(25 * 60); // Tiempo en segundos
    const [crono, setCrono] = useState(false); // Controla si el temporizador está corriendo
    const [enDescanso, setEnDescanso] = useState(false); // Indica si es tiempo de descanso o trabajo
    const [pausado, setPausado] = useState(false); // Indica si el temporizador está pausado
    const [ciclosCompletados, setCiclosCompletados] = useState(0); // Contador de ciclos completados

    useEffect(() => {
        if (!crono) return;

        const temporizador = setTimeout(() => {
            if (tiempo > 0) {
                setTiempo((prev) => prev - 1);
            } else {
                setCrono(false); // Pausa el temporizador automáticamente

                if (enDescanso) {
                    // Si estaba en descanso, reinicia al tiempo de trabajo
                    setEnDescanso(false);
                    setTiempo(25 * 60);
                } else {
                    // Si estaba en trabajo, incrementa el contador de ciclos
                    setCiclosCompletados((prev) => prev + 1);

                    // Si se completaron 4 ciclos, establece un descanso largo
                    if ((ciclosCompletados + 1) % 4 === 0) {
                        setTiempo(15 * 60); // Descanso largo
                    } else {
                        setTiempo(5 * 60); // Descanso corto
                    }

                    setEnDescanso(true);
                }
            }
        }, 1000);

        return () => clearTimeout(temporizador); // Limpia el temporizador
    }, [crono, tiempo, enDescanso, ciclosCompletados]);

    const formatearTiempo = (segundos: number) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos.toString().padStart(2, "0")}:${segundosRestantes
            .toString()
            .padStart(2, "0")}`;
    };

    const terminarCiclo = () => {
        setCrono(false); // Pausa el temporizador
        if (enDescanso) {
            // Si está en descanso, reinicia al tiempo de trabajo
            setEnDescanso(false);
            setTiempo(25 * 60);
        } else {
            // Si está en trabajo, incrementa el contador de ciclos
            setCiclosCompletados((prev) => prev + 1);

            // Si se completaron 4 ciclos, establece un descanso largo
            if ((ciclosCompletados + 1) % 4 === 0) {
                setTiempo(15 * 60); // Descanso largo
            } else {
                setTiempo(5 * 60); // Descanso corto
            }

            setEnDescanso(true);
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
                {/* Botón Comenzar */}
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

                {/* Botón Reanudar */}
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

                {/* Botón Pausar */}
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

                {/* Botón Reiniciar */}
                <button
                    onClick={() => {
                        setCrono(false);
                        setPausado(false);
                        setTiempo(enDescanso ? 5 * 60 : 25 * 60); // Reinicia el tiempo según el estado actual
                    }}
                    className="text-white bg-red-500 px-4 py-2 rounded mr-2"
                >
                    Reiniciar
                </button>

                {/* Botón Terminar Ciclo */}
                <button
                    onClick={terminarCiclo}
                    className="text-white bg-purple-500 px-4 py-2 rounded"
                >
                    Terminar Ciclo
                </button>
            </div>
        </div>
    );
};

