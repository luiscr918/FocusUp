import { useState } from "react";
import { NightSky } from "../components/NightSky";
import { Navegacion } from "../components/Navegacion";
import Footer from "../components/Footer";
import { IconoComponent } from "../components/IconoComponent";



export const MapasMentales = () => {
    const [noche, setNoche] = useState(false);

    return (
        <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
            {noche && <NightSky />}
            {/* Barra de navegacion */}
            <Navegacion isChecked={noche} setIsChecked={setNoche} />
            <IconoComponent noche={noche} nombre="Mapas Mentales"/>
            {/* Contenido de la pagina */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className={`font-manrope font-bold text-4xl ${noche ? 'text-teal-200' : 'text-white'} mb-8 max-xl:text-center `}>Mapas Mentales</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="https://www.canva.com/design/DAGoCFIxeoI/rqvCkBy-w_OMUdIyh9IWKA/edit?utm_content=DAGoCFIxeoI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-xl object-cover group-hover:scale-140 transition-transform duration-300" src="src/assets/imgs/3.png" alt="Jacket image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAGoCMFYrAw/2nklJBJ0QeLnx1TZ18cbjw/edit?utm_content=DAGoCMFYrAw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/2.png" alt="Blazer image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAGoCFPilZA/bsJpQo2Z8cQKoxUtbXl2Dw/edit?utm_content=DAGoCFPilZA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/1.png" alt="printed top image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.canva.com/design/DAGoCBe0QFI/14Q5Hifwiih-lcwIclcYyw/edit?utm_content=DAGoCBe0QFI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img
                                className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                                src="src/assets/imgs/4.png"
                                alt="Denim jacket image"
                            />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <br />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="https://www.canva.com/design/DAGoCBgVaNo/LCZTip5nfke5neep3NQ-PA/edit?utm_content=DAGoCBgVaNo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/5.png" alt="Jacket image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAGoCY6Wdzo/WwRpwHCRFFe7jLgHIsB42w/edit?utm_content=DAGoCY6Wdzo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/6.png" alt="Blazer image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAGoCSMjp0E/XV9y92jdaVvov3BR_9NL_Q/edit?utm_content=DAGoCSMjp0E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/7.png" alt="printed top image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.canva.com/design/DAGoCY3T0uE/MQevl2dLpykmxb5WKuSOVA/edit?utm_content=DAGoCY3T0uE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img
                                className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                                src="src/assets/imgs/8.png"
                                alt="Denim jacket image"
                            />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <br />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="https://www.canva.com/design/DAGoCVvkS_A/XaY0WP63hw6qndifv4nixw/edit?utm_content=DAGoCVvkS_A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank" 
                        rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/9.png" alt="Jacket image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAGoCQUnoRs/2c36JyGjrSho1tqzPqYNVQ/edit?utm_content=DAGoCQUnoRs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/10.png" alt="Blazer image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAGoCZT72pU/9TOzHBDhgzlNXsVWRzUd1g/edit?utm_content=DAGoCZT72pU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300" src="src/assets/imgs/11.png" alt="printed top image" />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAGoCS9cF7s/6B6VeVainrMdOMf77NTAVQ/edit?utm_content=DAGoCS9cF7s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img
                                className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                                src="src/assets/imgs/12.png"
                                alt="Denim jacket image"
                            />
                            <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500">
                                <div className="flex items-center justify-center mb-2">
                                    <button className={`sm:w-fit w-full px-3.5 py-2  transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${noche ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}>
                                        <h3 className="text-white px-4 py-2 ">Editar</h3>
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <Footer isChecked={noche} />
        </div>
    )
};