import { FaSpotify } from 'react-icons/fa'; // Importa el ícono de Spotify
import { ToogleComponent } from './ToogleComponent';
import { useState } from 'react';

interface Nav {
    name: string;
    link: string;
}
interface Props {
    isChecked: boolean;
    setIsChecked: (valor: boolean) => void;
}

const navV: Nav[] = [
    { name: 'Inicio', link: '/' },
    { name: 'Sobre Nosotros', link: '#' },
];

const tecnicas: Nav[] = [
    { name: 'Pomodoro', link: '/pomodoro' },
    { name: 'Feynman', link: '/feynman' },
    { name: 'Cornell', link: '/cornell' },
    { name: 'Mapas Mentales', link: 'mapas-mentales' },
];

export const Navegacion = ({ isChecked, setIsChecked }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <nav className="p-4 text-white">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold flex-shrink-0">FocusUp</div>

                {/* Menú principal */}
                <ul className="flex flex-wrap items-center justify-center space-x-4 md:space-x-8">
                    {/* Inicio y Sobre Nosotros */}
                    {navV.map((item) => (
                        <li
                            key={item.name}
                            className="hover:text-gray-400 text-center"
                        >
                            <a
                                href={item.link}
                                className="block py-2"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {/* Técnicas */}
                    <li className="relative group text-center">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center hover:text-gray-400"
                        >
                            Técnicas
                            <svg
                                className="ml-1 w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                        <ul
                            className={`absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 mt-2 ${
                                isChecked
                                    ? 'bg-gray-800 text-gray-200 night_no_stars'
                                    : 'bg-blue-100 text-gray-800 cielo_animado_elementos'
                            } shadow-lg w-full lg:w-56 ${isDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            {tecnicas.map((tech) => (
                                <li
                                    key={tech.name}
                                    className={`p-3 rounded-lg text-center transition duration-300 ${
                                        isChecked
                                            ? 'hover:bg-gray-700'
                                            : 'hover:bg-blue-200'
                                    }`}
                                >
                                    <a
                                        href={tech.link}
                                        className="block text-sm font-medium"
                                    >
                                        {tech.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* Ícono de Spotify */}
                    <li className="flex-shrink-0">
                        <a
                            href="https://spotify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-green-500"
                        >
                            <FaSpotify />
                        </a>
                    </li>
                </ul>

                {/* Toggle para cambio de tema */}
                <div>
                    <ToogleComponent
                        isChecked={isChecked}
                        
                        setIsChecked={setIsChecked}
                    />
                </div>
            </div>
        </nav>
    );
};