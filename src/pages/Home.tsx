import { useState } from "react";
import { ModalHomeComponent } from "../components/ModalHomeComponent";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 relative">
      <button
        className="bg-sky-500 text-black py-3 px-5 shadow-md"
        onClick={abrirModal}
      >
        SELECCIONA
      </button>

      <ModalHomeComponent showModal={showModal} cerrarModal={cerrarModal} />
    </div>
  );
};

export default Home;
