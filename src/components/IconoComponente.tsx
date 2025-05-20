import { FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props{
    noche: boolean
}

export const IconoComponent = ({noche}:Props) => {
    return (
        <div className="absolute right-4 z-50 text-white">
            <button
                rel="noopener noreferrer"
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28  flex items-center justify-center ${noche ? 'hover:text-teal-200' : 'hover:text-yellow-400'}`}>
                <Link to={"/"}>
                    <FiHelpCircle className="md:text-5xl " />
                </Link>
            </button>
        </div>
    );
}