import React from 'react';

const defaultFooterLinks = [
    { label: 'Características', url: '#' },
    { label: 'Ayuda', url: '#' },
    { label: 'Política de privacidad', url: '#' },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const companyName = 'FocusUp';

    return (
        <footer className=" text-white py-5 fixed bottom-0 left-0 right-0 w-full z-10">
            <div className="container mx-auto flex flex-col items-center justify-center">
                
                <ul className="flex gap-5">
                    {defaultFooterLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.url}
                                className="text-black hover:text-gray-700 transition-colors"
                                aria-label={link.label}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-black mb-3">
                    © {currentYear} {companyName}. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
