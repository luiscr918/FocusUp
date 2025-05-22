import paso1 from "../../assets/imgs/tec/Mapas1.png";
import paso2 from "../../assets/imgs/tec/Mapas3.png";
import paso3 from "../../assets/imgs/tec/Mapas2.png";
export const PasosMapasMentales = () => {
  return (
    <div  className="text-white text-center text-2xl">
      <p >¿Como Utilizar<strong> MAPAS MENTALES</strong>?</p><br />
        <p >1. Elige una de las tantas plantillas que disponemos en nuestra plataforma.</p>
        <img src={paso1} alt="Pasos mapas mentales1" className="mx-auto" /> <br />
        <p >2. Una vez escogido presionaremos en el botón <strong>Editar</strong></p>
        <img src={paso2} alt=" Pasos mapas mentales2" className="mx-auto" /><br />
        <p >3. Y listo podrás usar la plantilla y usarla a tu gusto. </p>
        <img src={paso3} alt="Pasos mapas mentales3" className="mx-auto" /><br />
        
    </div>
  )
}
