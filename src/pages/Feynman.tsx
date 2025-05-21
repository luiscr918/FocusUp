import { NightSky } from "../components/NightSky";
import { Navegacion } from "../components/Navegacion";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";



interface Props {
    noche: boolean;
}

export const Feynman = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
    const [recording, setRecording] = useState(false);
    const [paused, setPaused] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
    const [taskName, setTaskName] = useState('');
    const [videoPreviewURL, setVideoPreviewURL] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [noche, setNoche] = useState(false);
    const [solicitarPermiso, setSolicitarPermiso] = useState(false);
    // Encender cámara
    const turnOnCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setMediaStream(stream);
            setError(null);
        } catch (err) {
            setError('No se pudo acceder a la cámara o al micrófono.');
        }
    };

    // Apagar cámara
    const turnOffCamera = () => {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            setMediaStream(null);
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        }
    };
    useEffect(() => {
        if (solicitarPermiso) {
            (async () => {
                await turnOnCamera();
                setSolicitarPermiso(false);
            })();
        }
    }, [solicitarPermiso]);
    useEffect(() => {
        if (!mediaStream) {
            turnOnCamera();
        }
        return () => {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
                mediaRecorderRef.current.stop();
            }
            turnOffCamera();
            if (videoPreviewURL) {
                URL.revokeObjectURL(videoPreviewURL);
            }
        };
    }, []);

    const startRecording = async () => {
        if (!mediaStream) {
            await turnOnCamera();
        }
        setRecordedChunks([]);
        setVideoPreviewURL(null);
        setError(null);

        const stream = mediaStream || (videoRef.current?.srcObject as MediaStream);
        if (stream) {
            let localChunks: Blob[] = [];
            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;

            recorder.ondataavailable = (event: BlobEvent) => {
                if (event.data.size > 0) {
                    localChunks.push(event.data);
                }
            };

            recorder.onstop = () => {
                setRecordedChunks(localChunks);
                const blob = new Blob(localChunks, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                setVideoPreviewURL(url);
            };

            recorder.start();
            setRecording(true);
            setPaused(false);
        } else {
            setError("No hay acceso a la cámara o micrófono.");
        }
    };

    const pauseRecording = () => {
        if (mediaRecorderRef.current?.state === 'recording') {
            mediaRecorderRef.current.pause();
            setPaused(true);
        }
    };

    const resumeRecording = () => {
        if (mediaRecorderRef.current?.state === 'paused') {
            mediaRecorderRef.current.resume();
            setPaused(false);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && recording) {
            mediaRecorderRef.current.stop();
            setRecording(false);
            setPaused(false);
        }
    };

    const downloadRecording = () => {
        if (recordedChunks.length > 0) {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${taskName || 'grabacion'}.webm`;
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    const resetRecording = async () => {
        setRecordedChunks([]);
        setVideoPreviewURL(null);
        setRecording(false);
        setPaused(false);
        setError(null);
        setSolicitarPermiso(true);
        setTaskName('');

    };

    return (
        <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
            {noche && <NightSky />}

            <Navegacion isChecked={noche} setIsChecked={setNoche} />
            <div
                className={`${noche ? 'night_no_stars text-white border-gray-500' : 'cielo_animado_elementos text-black border-white'} max-w-xl mx-auto p-8 rounded-xl w-600 border-2`}

            >
                <input
                    type="text"
                    placeholder="Ingrese el nombre de la tarea"
                    value={taskName}
                    onChange={e => {
                        const valor = e.target.value;
                        if (valor.length === 1 && valor[0] === " ") {
                            alert("No se permite espacio al inicio.");
                            return;
                        }
                        setTaskName(valor);
                    }}
                    disabled={recording}
                    className={`block p-2.5 w-full text-sm rounded-lg border resize-none
            ${noche
                            ? "bg-gray-600 text-white placeholder-gray-50 border-gray-100"
                            : "bg-gray-50 text-gray-900 border-gray-300"
                        } 
          `} aria-label="Ingrese el nombre de la tarea"
                />
                {taskName && (
                    <h2 className={`block mb-2 text-sm font-medium ${noche ? "text-teal-400" : "text-gray-800"}`}>
                        {taskName}
                    </h2>
                )}

                {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

                <div className="mb-flex flex-col md:flex-row gap-4 mt-4">
                    {mediaStream && (
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            width={640}
                            height={480}
                            className="w-full max-w-xl rounded-lg border border-gray-300 bg-black mb-5"
                        />
                    )}


                    <div className="w-full flex flex-col items-center justify-center mb-6">
                        <div className="grid grid-cols-3 gap-4">
                            <button
                                type="button"
                                onClick={startRecording}
                                disabled={recording || !taskName}
                                className={`flex items-center gap-2 justify-center min-w-[150px] px-6 py-2 border-2 border-red-500 rounded-full font-semibold text-white bg-red-500 shadow transition cursor-pointer
        ${recording || !taskName
                                        ? 'opacity-60 cursor-not-allowed'
                                        : 'hover:bg-red-600'
                                    }`}
                            >
                                <span className="w-6 h-6 flex items-center justify-center">
                                    <span className="w-4 h-4 bg-white rounded-full border-2 border-red-700"></span>
                                </span>
                                <span className="text font-medium">Grabar</span>
                            </button>

                            <button
                                type="button"
                                onClick={pauseRecording}
                                disabled={!recording || paused}
                                className={`flex items-center gap-2 justify-center min-w-[150px] px-6 py-2 border-2 border-yellow-400 rounded-full font-semibold text-yellow-900 bg-yellow-300 shadow transition cursor-pointer
        ${!recording || paused
                                        ? 'opacity-60 cursor-not-allowed'
                                        : 'hover:bg-yellow-400'
                                    }`}
                            >
                                <span className="w-6 h-6 flex items-center justify-center">
                                    <span className="w-3 h-4 flex gap-1">
                                        <span className="inline-block w-1.5 h-4 bg-yellow-500 rounded-sm"></span>
                                        <span className="inline-block w-1.5 h-4 bg-yellow-500 rounded-sm"></span>
                                    </span>
                                </span>
                                <span className="text font-medium">Pausar</span>
                            </button>


                            <button
                                type="button"
                                onClick={resumeRecording}
                                disabled={!recording || !paused}
                                className={`flex items-center gap-2 justify-center min-w-[150px] px-6 py-2 border-2 border-green-500 rounded-full font-semibold text-white bg-green-500 shadow transition cursor-pointer
        ${!recording || !paused
                                        ? 'opacity-60 cursor-not-allowed'
                                        : 'hover:bg-green-600'
                                    }`}
                            >
                                <span className="w-6 h-6 flex items-center justify-center">
                                    <span className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white"></span>
                                </span>
                                <span className="text font-medium">Reanudar</span>
                            </button>

                            <button
                                type="button"
                                onClick={stopRecording}
                                disabled={!recording}
                                className={`flex items-center gap-2 justify-center min-w-[150px] px-6 py-2 border-2 border-gray-700 rounded-full font-semibold text-white bg-gray-700 shadow transition cursor-pointer
        ${!recording
                                        ? 'opacity-60 cursor-not-allowed'
                                        : 'hover:bg-gray-800'
                                    }`}
                            >
                                <span className="w-6 h-6 flex items-center justify-center">
                                    <span className="w-4 h-4 bg-red-700 rounded-sm"></span>
                                </span>
                                <span className="text font-medium">Detener</span>
                            </button>

                            <button
                                type="button"
                                onClick={downloadRecording}
                                disabled={recordedChunks.length === 0}
                                className={`flex items-center gap-2 justify-center min-w-[150px] px-6 py-2 border-2 border-blue-500 rounded-full font-semibold text-white bg-blue-500 shadow transition cursor-pointer
        ${recordedChunks.length === 0
                                        ? 'opacity-60 cursor-not-allowed'
                                        : 'hover:bg-blue-600'
                                    }`}
                            >
                                <span className="w-6 h-6 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 012 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 115.707 8.293L8 10.586V2z"></path>
                                        <path d="M3 16a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z"></path>
                                    </svg>
                                </span>
                                <span className="text font-medium">Descargar</span>
                            </button>

                            <button
                                type="button"
                                onClick={resetRecording}
                                disabled={recording && !videoPreviewURL}
                                className={`flex items-center gap-2 justify-center min-w-[150px] px-6 py-2 border-2 border-violet-500 rounded-full font-semibold text-violet-700 bg-violet-100 shadow transition cursor-pointer
        ${(recording && !videoPreviewURL)
                                        ? 'opacity-60 cursor-not-allowed'
                                        : 'hover:bg-violet-200'
                                    }`}
                            >
                                <span className="w-6 h-6 flex items-center justify-center relative">
                                    <span className="w-4 h-4 bg-violet-500 rounded-full flex items-center justify-center"></span>
                                    <span className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 12 12" className="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5" y="2" width="2" height="8" rx="1" fill="white" />
                                            <rect x="2" y="5" width="8" height="2" rx="1" fill="white" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="text font-medium">Nueva Grabación</span>
                            </button>
                        </div>
                    </div>
                    {videoPreviewURL && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Vista previa de la grabación:</h3>
                            <video
                                src={videoPreviewURL}
                                controls
                                width={640}
                                height={480}
                                className="w-full max-w-xl rounded-lg border border-gray-300"
                            />
                        </div>
                    )}
                </div>

            </div>
            <div className="flex just">
                <Footer isChecked={noche} />
            </div>

        </div>

    );
}
export default Feynman;