import React from 'react';

interface NavItem {
    name: string;
    link: string;
}

const navItems: NavItem[] = [
    { name: 'Inicio', link: '#' },
    { name: 'Sobre Nosotros', link: '#' }
];

const techniques: NavItem[] = [
    { name: 'Pomodoro', link: '#' },
    { name: 'Técnica Feynman', link: '#' },
    { name: 'Mapas Mentales', link: '#' }
];

const Navegacion: React.FC = () => {
    return (
        <nav className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">FocusUp</div>
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.name} className="hover:text-gray-300">
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    <li className="relative group">
                        <button className="flex items-center justify-center bg-white text-blue-500 p-2 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                            Técnicas
                        </button>
                        <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg rounded mt-2 w-40">
                            {techniques.map((tech) => (
                                <li key={tech.name} className="p-1 hover:bg-gray-200 rounded-md">
                                    <a href={tech.link}>{tech.name}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navegacion;

