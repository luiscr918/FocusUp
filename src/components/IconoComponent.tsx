
import { FiHelpCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Props{
    noche: boolean
    nombre:string
}

export const IconoComponent = ({noche, nombre}:Props) => {

const navigate=useNavigate();
const navegarGuia=()=>{
    navigate(`/guia/${nombre}`);
}
    return (
        <div className="fixed top right-4 z-50 text-white">
            <button
            type="button"
                onClick={navegarGuia}
                rel="noopener noreferrer"
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28  flex items-center justify-center ${noche ? 'hover:text-teal-200' : 'hover:text-yellow-400'}`}>
                    <FiHelpCircle className="md:text-5xl" />
            </button>
        </div>

    );
}
