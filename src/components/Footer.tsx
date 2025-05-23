



interface FooterProps {
    isChecked: boolean; // Prop para controlar el estado del tema
}

const Footer = ({ isChecked }: FooterProps) => {
    const currentYear = new Date().getFullYear();
    const companyName = 'FocusUp';

    return (
        <footer className="py-5 w-full z-10">
            <div className="container mx-auto flex flex-col items-center justify-center">

                <p
                    className={`text-sm transition-colors ${isChecked ? 'text-white' : 'text-black'
                        }`}
                >
                    © {currentYear} {companyName}. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;