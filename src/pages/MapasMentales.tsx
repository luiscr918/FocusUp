import { useState } from "react";
import { NightSky } from "../components/NightSky";
import { Navegacion } from "../components/Navegacion";
import Footer from "../components/Footer";




export const MapasMentales = () => {
  const [noche, setNoche] = useState(false);

  return (
    <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
      {noche && <NightSky />}
      {/* Barra de navegacion */}
      <Navegacion isChecked={noche} setIsChecked={setNoche} />
      {/* Contenido de la pagina */}
        <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                        <div className="flex items-center justify-between mb-2">
                            <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                <h3 className="text-white px-4 py-2 ">Editar</h3>
                            </button>
                        </div>
                    </div>
                </a>
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>

                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
            </div>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>

                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
            </div>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>

                <a href="javascript:;"
                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                    <img className="rounded-2xl object-cover" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image"/>
                    <div
                        className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                        <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
      <Footer isChecked={noche} />
      </div>
)};