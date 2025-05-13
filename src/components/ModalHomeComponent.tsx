import { useState } from "react";
import { ModalComponentConfirmar } from "./ModalComponentConfirmar";
import * as icons from "../const/imgsDefModalConfirmar";
import "../styles/fondosMain.css";

interface Props {
  showModal: boolean;
  cerrarModal: () => void;
  noche: boolean;
}

export const ModalHomeComponent = ({ showModal, cerrarModal, noche }: Props) => {
  //constante para manejar el nombre de la tecnica
  const [nombreTecnica, setNombreTecnica] = useState<string>('');
  const [modalConfirmar, setModalConfirmar] = useState<boolean>(false);
  /* FUNCION PARA ABIR EL MODAL DEL CRIKKO PERO DE UNA VEZ CAMBIAR EL NOMBRE */
  const abrirModalConfirmar = (nombreTec: string) => {
    setModalConfirmar(true);
    setNombreTecnica(nombreTec);

  }
  const closeModalConfirman = () => {
    setModalConfirmar(false);
  }
  return (
    showModal && (
      <div
        className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50"
      >
        <div
          className={`${noche ? 'night_no_stars text-white border-gray-500' : 'cielo_animado_elementos text-black border-white'
            } p-5 rounded relative w-120 h-75 border-2`}
          onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
        >
          <div className="flex items-center justify-between">
            <img
              src={noche ? icons.IMGNB : "https://img.icons8.com/ios7/600w/handshake-heart.png"}

              alt="Icono"
              className="w-10 h-10"
            />
            <div className="flex flex-col items-center flex-1 text-center">
              <span className="text-xl font-bold">BIENVENIDO</span>
              <span className="text-sm">SELECCIONE LA TÉCNICA</span>
            </div>
            <button
              onClick={cerrarModal}
              className="bg-red-500 px-4 py-1 rounded"
            >
              X
            </button>
          </div>

          <div className="border-b-2 border-white my-4"></div>
          <ul className="space-y-4">
            <li
              className="flex items-center cursor-pointer"
              onClick={() => abrirModalConfirmar('Pomodoro')}
            >
              <img
                src={noche ? icons.IMGN1 : "https://cdn-icons-png.flaticon.com/512/7329/7329726.png"}
                alt="Pomodoro"
                className="w-7 h-7 mr-4"
              />
              POMODORO
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={() => abrirModalConfirmar('Feynman')}
            >
              <img
                src={noche ? icons.IMGN2 : "https://img.icons8.com/ios/50/book.png"}
                alt="Feynman"
                className="w-7 h-7 mr-4"
              />
              FEYMAN
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={() => abrirModalConfirmar('Cornell')}
            >
              <img
                src={noche ? icons.IMGN3 : "https://cdn-icons-png.flaticon.com/512/4696/4696551.png"}

                alt="Cornell"
                className="w-7 h-7 mr-4"
              />
              CORNELL
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={() => abrirModalConfirmar('Mapas Mentales')}
            >
              <img
                src={noche ? icons.IMG4 : "https://png.pngtree.com/png-clipart/20230424/original/pngtree-mindmap-line-icon-png-image_9093594.png"}

                alt="Mapas Mentales"
                className="w-7 h-7 mr-4"
              />
              MAPAS MENTALES
            </li>
          </ul>
        </div>
        {/* Modal de confirmación */}
        {modalConfirmar && (<ModalComponentConfirmar nombre={nombreTecnica} openModal={modalConfirmar} closeModal={closeModalConfirman} />)}
      </div>
    )
  );
};
