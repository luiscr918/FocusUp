import { FaSpotify } from 'react-icons/fa';
import { ToogleComponent } from './ToogleComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    { name: 'Sobre Nosotros', link: '/sobre-nosotros' },
    { name: '❤️Apoya mi trabajo', link: 'https://ko-fi.com/luiscr918' },
];

const tecnicas: Nav[] = [
    { name: 'Pomodoro', link: '/pomodoro' },
    { name: 'Feynman', link: '/feynman' },
    { name: 'Cornell', link: '/cornell' },
    { name: 'Mapas Mentales', link: '/mapas-mentales' },
];

export const Navegacion = ({ isChecked, setIsChecked }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    return (
        <nav className="p-4 text-white relative z-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                {/* Logo */}
                <Link to={'/'}>
                    <div className="text-2xl font-bold flex-shrink-0">FocusUp</div>
                </Link>
                {/* Botón hamburguesa */}
                <button
                    className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                {/* Menú principal */}
                <ul
                    className={
                        [
                            "flex-col md:flex-row md:flex md:items-center md:justify-center",
                            "space-y-4 md:space-y-0 space-x-0 md:space-x-8",
                            isMobileMenuOpen
                                ? `flex ${isChecked ? 'night_no_stars' : 'cielo_animado_elementos'}`
                                : "hidden",
                            "md:flex",
                            "absolute md:static top-16 left-0 w-full md:w-auto z-40 p-4 md:p-0 rounded-b-lg md:rounded-none"
                        ].join(" ")
                    }
                >
                    {navV.map((item) => (
                        <li
                            key={item.name}
                            className="hover:text-gray-400 text-center"
                        >
                            <a
                                href={item.link}
                                className="block py-2"
                                target={item.name === '❤️Apoya mi trabajo' ? "_blank" : undefined}
                                rel={item.name === '❤️Apoya mi trabajo' ? "noopener noreferrer" : undefined}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {/* Técnicas */}
                    <li className="relative group text-center">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center hover:text-gray-400 cursor-pointer w-full"
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
                            className={`absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 mt-2 ${isChecked
                                ? 'bg-gray-800 text-gray-200 night_no_stars'
                                : 'bg-blue-100 text-gray-800 cielo_animado_elementos'
                                } shadow-lg w-full lg:w-56 ${isDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            {tecnicas.map((tech) => (
                                <li
                                    key={tech.name}
                                    className={`p-3 rounded-lg text-center transition duration-300 ${isChecked
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
                    <li className="flex-shrink-0 flex justify-center">
                        <Link
                            to="/spotify"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-green-500"
                        >
                            <FaSpotify />
                        </Link>
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