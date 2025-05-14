

const defaultFooterLinks = [
    { label: 'Características', url: '#' },
    { label: 'Ayuda', url: '#' },
    { label: 'Política de privacidad', url: '#' },
];

interface FooterProps {
    isChecked: boolean; // Prop para controlar el estado del tema
}

const Footer = ({ isChecked }: FooterProps) => {
    const currentYear = new Date().getFullYear();
    const companyName = 'FocusUp';

    return (
        <footer className="py-5 w-full z-10">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <ul className="flex gap-5 mb-3">
                    {defaultFooterLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                className={`transition-colors ${
                                    isChecked
                                        ? 'text-white hover:text-black'
                                        : 'text-black hover:text-gray-700'
                                }`}
                                href={link.url}
                                aria-label={link.label}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <p
                    className={`text-sm transition-colors ${
                        isChecked ? 'text-white' : 'text-black'
                    }`}
                >
                    © {currentYear} {companyName}. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;