import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const Aboutus = () => {
    const [noche, setNoche] = useState(false);
    return (
        <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
            {noche && <NightSky />}
            {/* Barra de navegacion */}
            <Navegacion isChecked={noche} setIsChecked={setNoche} />
            {/* contenido */}
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">¿Quienes Somos?</h2>
                                <p className="text-white text-base font-normal leading-relaxed lg:text-start text-justify">FocusUp es un gestor de estudio diseñado para optimizar el aprendizaje combinando metodologías efectivas como Pomodoro, Feynman, el método Cornell y mapas mentales. Esta herramienta ayuda a los estudiantes a organizar su tiempo y contenido de forma eficiente: con Pomodoro mejora la concentración mediante sesiones temporizadas; el método Feynman promueve la comprensión profunda al explicar conceptos con palabras simples; Cornell facilita la toma de apuntes estructurada;
                                    y los mapas mentales permiten visualizar y conectar ideas de manera clara. FocusUp integra estas técnicas en una sola plataforma para potenciar el rendimiento académico.</p>
                            </div>
                            <button className="sm:w-fit w-full px-3.5 py-2 bg-teal-400 hover:bg-teal-500 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <Link to="/">Ir al Inicio</Link>
                            </button>
                        </div>
                        <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="/src/assets/imgs/logoSinFondo.png" alt="about Us image" />
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Métodos</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">4</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Nuestros Usuarios</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">1000+</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">En Sitios Mas Utilizados</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">#3</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Fácil y sencilla</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">Accesibilidad</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
            {/* Sección de equipo */}
            <div className={`py-24 sm:py-32 ${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
                <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:px-2 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">Conoce a Nuestro Grupo de Trabajo</h2>
                        <p className="mt-6 text-lg/8 text-white">Somos un equipo multidisciplinario comprometido con mejorar la experiencia educativa.
                        Combinamos tecnología, pedagogía y diseño para crear soluciones eficientes y accesibles.
                        Nuestra misión es facilitar el aprendizaje a través de herramientas intuitivas y efectivas.</p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-10 xl:col-span-2">
                        <li>
                            <div className="flex items-center gap-x-6">
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-white">Luis Castillo</h3>
                                    <p className="text-sm/6 font-semibold text-white">Scrum Master</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-white">Alisson Guapulema</h3>
                                    <p className="text-sm/6 font-semibold text-white">Desarrollador / Tester</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-white">Andres Falcon</h3>
                                    <p className="text-sm/6 font-semibold text-white">Desarrollador</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-white">Cristopher Chasiloa</h3>
                                    <p className="text-sm/6 font-semibold text-white">Desarrollador</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-white">Jean Carlos Itaz</h3>
                                    <p className="text-sm/6 font-semibold text-white">Desarrollador / Diseñador</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer isChecked={noche} />
        </div>
    )
}
