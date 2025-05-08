
import { useState } from "react";
import { ModalHomeComponent } from "../components/ModalHomeComponent";
const Home = () => {
  const [modalA, setModalA] = useState(false);

  const abrirModal = () => {
    setModalA(!modalA);
  };

  return (
    <>

      <div className="h-screen flex justify-center items-center">
        <button
          className="bg-blue-500 text-white py-3 px-5 shadow-md"
          onClick={abrirModal}
        >
          SELECCIONA
        </button>
        <ModalHomeComponent showModal={modalA} cerrarModal={abrirModal}/>

      </div>


    </>
  );
};

export default Home;
