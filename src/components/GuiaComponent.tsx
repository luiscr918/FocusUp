
import { PasosCornell } from "./subcomponentesGuia/PasosCornell";
import { PasosFeyman } from "./subcomponentesGuia/PasosFeyman";
import { PasosMapasMentales } from "./subcomponentesGuia/PasosMapasMentales";
import { PasosPomodoro } from "./subcomponentesGuia/pasosPomodoro";


interface Props {
    nombre: string;
    noche: boolean;
}

export const GuiaComponent = ({ nombre, noche }: Props) => {
   
const definirPasos=()=>{
        switch (nombre) {
            case 'Pomodoro':
return (<PasosPomodoro noche={noche} />)
            case 'Feynman':
                
return(<PasosFeyman noche={noche} /> )
            case 'Cornell':
                
return(<PasosCornell noche={noche} /> )
            case 'Mapas Mentales':
                
return(<PasosMapasMentales noche={noche} /> )

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