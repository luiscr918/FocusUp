import { useEffect, useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import * as ImgsDefs from "../const/imgsDefModalConfirmar";
import { GuiaComponent } from "../components/GuiaComponent";

export const Guia = () => {
  const [noche, setNoche] = useState(false);
  const { nombre = "" } = useParams<{ nombre: string }>();
  const [definicion, setDefinicion] = useState<string>("");
  useEffect(() => {
    switch (nombre) {
      case "Pomodoro":
        setDefinicion(ImgsDefs.DEFPOMODORO);
        break;
      case "Feynman":
        setDefinicion(ImgsDefs.DEFFEYNMAN);
        break;
      case "Cornell":
        setDefinicion(ImgsDefs.DEFCORNELL);
        break;
      case "Mapas Mentales":
        setDefinicion(ImgsDefs.DEFMENTALES);
        break;

      default:
        console.log("No se ha encontrado la técnica");
        break;
    }
  }, [nombre]);
  return (
    /*  Div principal  */
    <div className={`${noche ? "cuerpo_noche" : "cielo_animado"}`}>
      {noche && <NightSky />}
      {/* Barra de navegacion */}
      <Navegacion isChecked={noche} setIsChecked={setNoche} />
      {nombre === "" ? (
        <p>error</p>
      ) : (
        <div>
          <div className="bg-white/80 rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-6">
            <p className={`${noche ? "text-white" : "text-gray-800"} text-center text-3xl font-bold`}>
              {nombre}
            </p>
            <p className={`${noche ? "text-teal-600" : "text-gray-800"} text-center text-xl mt-2`}>{definicion}</p>
          </div>
          {/* pasos */}
          <GuiaComponent nombre={nombre} />
        </div>
      )}
      <Footer isChecked={noche} />
    </div>
  );
};
