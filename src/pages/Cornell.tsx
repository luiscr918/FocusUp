import { useState, useRef } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import Footer from "../components/Footer";
import { useReactToPrint }  from "react-to-print"; 

export const Cornell = () => {
  const [noche, setNoche] = useState(false);
  const tituloRef = useRef<HTMLTextAreaElement | null>(null);
  const ideasRef = useRef<HTMLTextAreaElement | null>(null);
  const notasRef = useRef<HTMLTextAreaElement | null>(null);
  const resumenRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleInput = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: formRef,
    documentTitle: 'Notas Cornell',
  });

  return (
    <div className={`${noche ? "cuerpo_noche" : "cielo_animado"}`}>
      {noche && <NightSky />}
      <Navegacion isChecked={noche} setIsChecked={setNoche} />
      <form ref={formRef} className="max-w-3xl w-full mx-auto px-2">
        {/* TITULO */}
        <label
          htmlFor="titulo"
          className={`block mb-2 text-sm font-medium ${noche ? 'text-teal-200' : 'text-gray-800'}`}
        >
          TITULO
        </label>
        <textarea
          id="titulo"
          ref={tituloRef}
          rows={2}
          onInput={() => handleInput(tituloRef)}
          className={`block p-2.5 w-full text-sm rounded-lg border resize-none
            ${noche ? 'bg-gray-600 text-white placeholder-gray-50 border-gray-100' : 'bg-gray-50 text-gray-900 border-gray-300'}
          `}
          placeholder="Escribe el título de la lección o tema"
        ></textarea>

        {/* IDEAS PRINCIPALES Y NOTAS DE CLASE */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* IDEAS PRINCIPALES */}
          <div className="w-full md:w-1/2">
            <label htmlFor="ideas-principales" className={`block mb-2 text-sm font-medium ${noche ? 'text-teal-200' : 'text-gray-800'}`}>
              IDEAS PRINCIPALES
            </label>
            <textarea
              id="ideas-principales"
              ref={ideasRef}
              rows={10}
              onInput={() => handleInput(ideasRef)}
              className={`block p-2.5 w-full text-sm rounded-lg border resize-none
                ${noche ? 'bg-gray-600 text-white placeholder-gray-50 border-gray-100' : 'bg-gray-50 text-gray-900 border-gray-300'}
              `}
              placeholder="Anota las ideas clave o conceptos principales"
            ></textarea>
          </div>

          {/* NOTAS DE CLASE */}
          <div className="w-full md:w-1/2">
            <label htmlFor="notas-clase" className={`block mb-2 text-sm font-medium ${noche ? 'text-teal-200' : 'text-gray-800'}`}>
              NOTAS DE CLASE
            </label>
            <textarea
              id="notas-clase"
              ref={notasRef}
              rows={10}
              onInput={() => handleInput(notasRef)}
              className={`block p-2.5 w-full text-sm rounded-lg border resize-none
                ${noche ? 'bg-gray-600 text-white placeholder-gray-50 border-gray-100' : 'bg-gray-50 text-gray-900 border-gray-300'}
              `}
              placeholder="Agrega tus notas o detalles importantes"
            ></textarea>
          </div>
        </div>

        {/* RESUMEN */}
        <label
          htmlFor="resumen"
          className={`block mb-2 text-sm font-medium ${noche ? 'text-teal-200' : 'text-gray-800'}`}
        >
          RESUMEN
        </label>
        <textarea
          id="resumen"
          ref={resumenRef}
          rows={6}
          onInput={() => handleInput(resumenRef)}
          className={`block p-2.5 w-full text-sm rounded-lg border resize-none
            ${noche ? 'bg-gray-600 text-white placeholder-gray-50 border-gray-100' : 'bg-gray-50 text-gray-900 border-gray-300'}
          `}
          placeholder="Escribe un resumen breve de las ideas principales aquí..."
        ></textarea>
      </form>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handlePrint}
          className={`${noche
            ? 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:ring-teal-300 shadow-lg shadow-teal-500/50'
            : 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-cyan-300 shadow-lg shadow-cyan-500/50'
            } hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        >
          DESCARGAR COMO PDF
        </button>
      </div>
      <Footer isChecked={noche} />
    </div>
  );
};

