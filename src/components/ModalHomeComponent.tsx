interface Props {
  showModal: boolean;
  cerrarModal: () => void;
}
export const ModalHomeComponent = ({ showModal, cerrarModal }: Props) => {
  return (
    showModal && (
      <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
        <div className="bg-blue-300 p-5 rounded relative text-white w-120 h-70 border-2 border-white">
          <div className="flex items-center justify-between">
            <img src="https://img.icons8.com/ios7/600w/handshake-heart.png" alt="Icono" className="w-8 h-8" />
            <span className="flex-1 text-center">BIENVENIDO</span>
            <button
              onClick={cerrarModal}
              className="bg-red-500 px-3 py-1 rounded"
            >
              X
            </button>
          </div>

          <div className="border-b-2 border-white my-4"></div>
<ul className="space-y-4">
  <li className="flex items-center cursor-pointer" onClick={() => abrirModalCristopher("pomodoro")}>
    <img src="https://cdn-icons-png.flaticon.com/512/7329/7329726.png" alt="Pomodoro" className="w-7 h-7 mr-4" />
    Pomodoro
  </li>
  <li className="flex items-center cursor-pointer" onClick={() => abrirModal("feynman")}>
    <img src="https://img.icons8.com/ios/50/book.png" alt="Feynman" className="w-7 h-7 mr-4" />
    Feynman
  </li>
  <li className="flex items-center cursor-pointer" onClick={() => abrirModal("cornell")}>
    <img src="https://cdn-icons-png.flaticon.com/512/4696/4696551.png" alt="Cornell" className="w-7 h-7 mr-4" />
    Cornell
  </li>
  <li className="flex items-center cursor-pointer" onClick={() => abrirModal("mapas")}>
    <img src="https://png.pngtree.com/png-clipart/20230424/original/pngtree-mindmap-line-icon-png-image_9093594.png" alt="Mapas Mentales" className="w-7 h-7 mr-4" />
    Mapas Mentales
  </li>
</ul>

        </div>
      </div>
    )
  );
};
