import { useState } from "react";



const Home = () => {
  const [modalA, setModalA] = useState(false);

  const cambiarEstado = () => {
    setModalA(!modalA);
  };


  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <button
          className="bg-blue-500 text-white py-3 px-5 shadow-md"
        >

          SELECCIONA
        </button>

        
      </div>


    </>
  );
};

export default Home;
