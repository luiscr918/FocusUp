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
    { name: 'Inicio', link: '#' },
    { name: 'Sobre Nosotros', link: '#' },
];

const tecnicas: Nav[] = [
    { name: 'Pomodoro', link: '#' },
    { name: 'Feynman', link: '#' },
    { name: 'Cornell', link: '#' },
    { name: 'Mapas Mentales', link: '#' },
];

export const Navegacion = ({ isChecked, setIsChecked }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="p-4 text-white">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
                {/* Logo */}
                <div className="text-2xl font-bold mb-4 lg:mb-0">FocusUp</div>

                {/* Menú principal */}
                <ul
                    className={`flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 ${
                        isMobileMenuOpen ? 'block' : 'hidden lg:flex'
                    }`}
                >
                    {/* Inicio y Sobre Nosotros */}
                    {navV.map((item) => (
                        <li
                            key={item.name}
                            className="hover:text-gray-400 text-center"
                        >
                            <a href={item.link} className="block py-2">
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {/* Técnicas */}
                    <li className="relative group text-center">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center hover:text-gray-400 w-full"
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
                            className={`absolute left-1/2 transform -translate-x-1/2 mt-2 ${
                                isChecked
                                    ? 'bg-gray-800 text-gray-200 night_no_stars' // Modo oscuro
                                    : 'bg-blue-100 text-gray-800 cielo_animado_elementos' // Modo claro
                            } rounded-lg shadow-lg w-56 z-10 ${ // Cambié z-50 a z-10
                                isDropdownOpen ? 'block' : 'hidden'
                            }`}
                        >
                            {tecnicas.map((tech) => (
                                <li
                                    key={tech.name}
                                    className={`p-3 rounded-lg text-center transition duration-300 ${
                                        isChecked
                                            ? 'hover:bg-gray-700' // Hover en modo oscuro
                                            : 'hover:bg-blue-200' // Hover en modo claro
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
                    <li>
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
                <div className="hidden lg:block">
                    <ToogleComponent
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                    />
                </div>
            </div>
        </nav>
    );
};