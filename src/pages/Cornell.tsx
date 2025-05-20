import { useState, useRef } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import Footer from "../components/Footer";

export const Cornell = () => {
  const [noche, setNoche] = useState(false);
  const tituloRef = useRef<HTMLTextAreaElement | null>(null);
  const ideasRef = useRef<HTMLTextAreaElement | null>(null);
  const notasRef = useRef<HTMLTextAreaElement | null>(null);
  const resumenRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <div className={`${noche ? "cuerpo_noche" : "cielo_animado"}`}>
      {noche && <NightSky />}
      <Navegacion isChecked={noche} setIsChecked={setNoche} />
      <form className="max-w-3xl w-full mx-auto px-2">
        {/* TITULO */}
        <label
          htmlFor="titulo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          TITULO
        </label>
        <textarea
          id="titulo"
          ref={tituloRef}
          rows={1}
          onInput={() => handleInput(tituloRef)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none"
          placeholder="Escribe el título de la lección o tema"
        ></textarea>
        {/* IDEAS PRINCIPALES Y NOTAS DE CLASE */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* IDEAS PRINCIPALES */}
          <div className="w-full md:w-1/2">
            <label htmlFor="ideas-principales" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              IDEAS PRINCIPALES
            </label>
            <textarea
              id="ideas-principales"
              ref={ideasRef}
              rows={10}
              onInput={() => handleInput(ideasRef)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none"
              placeholder="Anota las ideas clave o conceptos principales"
            ></textarea>
          </div>
          {/* NOTAS DE CLASE */}
          <div className="w-full md:w-1/2">
            <label htmlFor="notas-clase" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              NOTAS DE CLASE
            </label>
            <textarea
              id="notas-clase"
              ref={notasRef}
              rows={10}
              onInput={() => handleInput(notasRef)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none"
              placeholder="Agrega tus notas o detalles importantes"
            ></textarea>
          </div>
        </div>
        {/* RESUMEN */}
        <label
          htmlFor="resumen"
          className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          RESUMEN
        </label>
        <textarea
          id="resumen"
          ref={resumenRef}
          rows={6}
          onInput={() => handleInput(resumenRef)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none"
          placeholder="Escribe un resumen breve de las ideas principales aquí..."
        ></textarea>
      </form>
      <Footer isChecked={noche} />
    </div>
  );
};
