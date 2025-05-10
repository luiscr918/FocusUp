import React from 'react';
import { FaSpotify } from 'react-icons/fa'; // Importa el ícono de Spotify

interface Nav {
    name: string;
    link: string;
}

const navV: Nav[] = [
    { name: 'Inicio', link: '#' },
    { name: 'Sobre Nosotros', link: '#' },
];

const tecnicas: Nav[] = [
    { name: 'Pomodoro', link: '#' },
    { name: 'Feynman', link: '#' },
    { name: 'Cornell', link: '#' },
    { name: 'Mapas Mentales', link: '#' },
];

const Navegacion: React.FC = () => {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-4xl font-bold text-black">FocusUp</div>
                <div className="flex justify-center flex-grow">
                    <ul className="flex space-x-6">
                        {/* Inicio */}
                        {navV.map((item) => (
                            <li key={item.name} className="hover:text-gray-700">
                                <a className="text-black" href={item.link}>{item.name}</a>
                            </li>
                        ))}

                        {/* Técnicas */}
                        <li className="relative group">
                            <button className="flex items-center text-black hover:text-gray-700">
                                Técnicas
                                <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg rounded mt-2 w-40 z-10">
                                {tecnicas.map((tech) => (
                                    <li key={tech.name} className="p-1 hover:bg-gray-100 rounded-md">
                                        <a className="text-black" href={tech.link}>{tech.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {/* Ícono de Spotify */}
                        <div className="text-black text-2xl">
                            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                                <FaSpotify className="hover:text-green-500 cursor-pointer" />
                            </a>
                        </div>

                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navegacion;