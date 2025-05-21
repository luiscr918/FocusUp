
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
                
                break;
            case 'Cornell':
                
                break;
            case 'Mapas Mentales':
                
                break;

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