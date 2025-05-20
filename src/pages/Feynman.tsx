import React, { useEffect, useRef, useState } from "react";

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

    // Solo enciende la cámara al montar si no hay grabación previa
    useEffect(() => {
        return () => {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
                mediaRecorderRef.current.stop();
            }
            turnOffCamera();
            if (videoPreviewURL) {
                URL.revokeObjectURL(videoPreviewURL);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Iniciar grabación y encender cámara si es necesario
    const startRecording = async () => {
        if (!mediaStream) {
            await turnOnCamera();
        }
        setRecordedChunks([]);
        setVideoPreviewURL(null);
        setError(null);

        // Espera a que la cámara esté lista
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

    // Detener grabación y apagar cámara
    const stopRecording = () => {
        if (mediaRecorderRef.current && recording) {
            mediaRecorderRef.current.stop();
            setRecording(false);
            setPaused(false);
            turnOffCamera();
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

    // Nueva grabación: enciende la cámara de nuevo
    const resetRecording = async () => {
        setRecordedChunks([]);
        setVideoPreviewURL(null);
        setRecording(false);
        setPaused(false);
        setError(null);
        await turnOnCamera();
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md font-sans">
            <input
                type="text"
                placeholder="Nombre de la tarea"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                disabled={recording}
                className={`w-full mb-4 px-4 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    recording ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                }`}
                aria-label="Nombre de la tarea"
            />
            {taskName && <h2 className="text-2xl font-semibold mb-5 text-gray-800">{taskName}</h2>}

            {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

            {/* Solo muestra el video si la cámara está activa */}
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

            <div className="flex flex-wrap gap-4 mb-6">
                <button
                    type="button"
                    onClick={startRecording}
                    disabled={recording || !taskName}
                    className={`flex-1 min-w-[120px] px-5 py-3 rounded-lg font-semibold text-white transition ${
                        recording || !taskName
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
                    }`}
                >
                    Iniciar Grabación
                </button>
                <button
                    type="button"
                    onClick={pauseRecording}
                    disabled={!recording || paused}
                    className={`flex-1 min-w-[120px] px-5 py-3 rounded-lg font-semibold text-white transition ${
                        !recording || paused
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300'
                    }`}
                >
                    Pausar
                </button>
                <button
                    type="button"
                    onClick={resumeRecording}
                    disabled={!recording || !paused}
                    className={`flex-1 min-w-[120px] px-5 py-3 rounded-lg font-semibold text-white transition ${
                        !recording || !paused
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300'
                    }`}
                >
                    Reanudar
                </button>
                <button
                    type="button"
                    onClick={stopRecording}
                    disabled={!recording}
                    className={`flex-1 min-w-[120px] px-5 py-3 rounded-lg font-semibold text-white transition ${
                        !recording
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300'
                    }`}
                >
                    Detener
                </button>
                <button
                    type="button"
                    onClick={downloadRecording}
                    disabled={recordedChunks.length === 0}
                    className={`flex-1 min-w-[120px] px-5 py-3 rounded-lg font-semibold text-white transition ${
                        recordedChunks.length === 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300'
                    }`}
                >
                    Descargar
                </button>
                <button
                    type="button"
                    onClick={resetRecording}
                    disabled={recording && !videoPreviewURL}
                    className={`flex-1 min-w-[120px] px-5 py-3 rounded-lg font-semibold text-white transition ${
                        recording && !videoPreviewURL
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300'
                    }`}
                >
                    Nueva Grabación
                </button>
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
    );
};