import paso1 from "../../assets/imgs/tec/Feyman2.png";
import paso2 from "../../assets/imgs/tec/Feyman1.png";
import paso3 from "../../assets/imgs/tec/Feyman3.png";
import paso4 from "../../assets/imgs/tec/Feyman4.png";

export const PasosFeyman = () => {
  return (
    <div className="text-white text-center text-2xl">
      <p >¿Como Utilizar<strong> FEYMAN</strong>?</p><br />
        <p >1. Elige un tema que quieras aprender.</p>
        <img src={paso1} alt="Pasos Feynman1" className="mx-auto" /> <br />
        <p >2. Tendras la oportunidad de autoeducarte ya que cuentas con la opción de grabarte.</p>
        <img src={paso2} alt=" Pasos Feynman2" className="mx-auto" /><br />
        <p >3. Tendras un apartado muy intuitivo donde tendrás los botones de Grabar, Pausar, Reanudar, Detener, Descargar y Nueva Grabación. </p>
        <img src={paso3} alt="Pasos Feynman3" className="mx-auto" /><br />
        <p >4. Una vez que hayas terminado la grabación podrás ver una previzualización antes de que descargues el video</p>
        <img src={paso4} alt="Pasos Feynman4" className="mx-auto" />
    </div>
  )
}
