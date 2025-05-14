import { useState } from "react";
import { Navegacion } from "../components/Navegacion";
import { NightSky } from "../components/NightSky";

export const Aboutus = () => {
    const [noche, setNoche] = useState(false);
    return (
        <div className={`${noche ? 'cuerpo_noche' : 'cielo_animado'}`}>
            {noche && <NightSky />}
            {/* Barra de navegacion */}
            <Navegacion isChecked={noche} setIsChecked={setNoche} />
            {/* contenido */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img src="/assets/fondo.png" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Conoce más de Nosotros</h2>
                        <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">En nuestra galería de arte, somos un equipo apasionado por el mundo de la creatividad y la expresión artística. Cada uno de nosotros comparte el objetivo común de brindar a nuestros clientes una experiencia única, conectándolos con obras que inspiran, transforman y cuentan historias.
                            Desde los curadores que seleccionan cuidadosamente cada cuadro hasta los asesores que te guiarán con calidez y profesionalismo, trabajamos juntos para ofrecer una colección diversa que incluye desde arte clásico hasta piezas contemporáneas. Nuestra misión es crear un espacio donde el talento de artistas emergentes y consagrados pueda ser valorado y apreciado.
                            Creemos que el arte tiene el poder de enriquecer la vida, y estamos aquí para ayudarte a descubrir la pieza perfecta que resuene contigo. Porque detrás de cada obra, hay no solo un artista, sino un equipo comprometido con el amor por el arte.</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Locales</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">2</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Nuestros Cuadros</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">550+</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Ganadores de Premios</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">5</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">El Museo del Louvre</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">Reconocimiento</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Conoce a nuestro Grupo de trabajo</h2>
                        <p className="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
