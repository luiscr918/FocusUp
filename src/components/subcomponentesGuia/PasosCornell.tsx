import paso1 from "../../assets/imgs/tec/Cornell1.png";
import paso2 from "../../assets/imgs/tec/Cornell2.png";
import paso3 from "../../assets/imgs/tec/Cornell3.png";
import paso4 from "../../assets/imgs/tec/Cornell 5.png";

export const PasosCornell = () => {
  return (
    <div  className="text-white text-center text-2xl">
      <p >¿Como Utilizar<strong> CORNELL</strong>?</p><br />
        <p >1. Elige un tema que quieras aprender.</p>
        <img src={paso1} alt="Pasos Cornell1" className="mx-auto" /> <br />
        <p >2. A tu lado izquierdo tendrás el apartado para las <strong>ideas principales</strong>del tema que estas haciendo.</p>
        <img src={paso2} alt=" Pasos Cornell2" className="mx-auto" /><br />
        <p >3. A su vez en el lado derecho tendrás el apartado en donde podras poner un parrafo principal del tema que estés tratando. </p>
        <img src={paso3} alt="Pasos Cornell3" className="mx-auto" /><br />
        <p >4. Por último en la parte inferior se encuentra el apartado de resumen  y a su vez el botón de descarga en <strong>"PDF"</strong></p>
        <img src={paso4} alt="Pasos Cornell4" className="mx-auto" />
    </div>
  )
}
