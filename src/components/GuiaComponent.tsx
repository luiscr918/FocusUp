
import { PasosCornell } from "./subcomponentesGuia/PasosCornell";
import { PasosFeyman } from "./subcomponentesGuia/PasosFeyman";
import { PasosMapasMentales } from "./subcomponentesGuia/PasosMapasMentales";
import { PasosPomodoro } from "./subcomponentesGuia/PasosPomodoro";



interface Props {
    nombre: string;
}

export const GuiaComponent = ({ nombre}: Props) => {
   
const definirPasos=()=>{
        switch (nombre) {
            case 'Pomodoro':
return (<PasosPomodoro  />)
            case 'Feynman':
                
return(<PasosFeyman /> )
            case 'Cornell':
                
return(<PasosCornell  /> )
            case 'Mapas Mentales':
                
return(<PasosMapasMentales  /> )

            default:
                console.log('No se ha encontrado la técnica');
                break;
        }
}
    return (
        <>
{definirPasos()}

        </>

    );
};