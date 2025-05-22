import paso1 from "../../assets/imgs/tec/Pomo1.png";
import paso2 from "../../assets/imgs/tec/Pomo2.png";
import paso3 from "../../assets/imgs/tec/Pomo3.png";
import paso4 from "../../assets/imgs/tec/Pomo7.png";
import paso5 from "../../assets/imgs/tec/Pomo5.png";
import paso6 from "../../assets/imgs/tec/Pomo6.png";
export const PasosPomodoro = () => {
  return (
    <div className="text-white text-center text-2xl">
        <p >¿Como Utilizar <strong>POMODORO</strong>?</p><br />
        <p >1. Elige una tarea que quieras realizar.</p>
        <img src={paso1} alt="Pasos Pomodoro 1" className="mx-auto" /> <br />
        <p >2. Pon un temporizador de 25 minutos.</p>
        <img src={paso2} alt=" Pasos Pomodoro 2" className="mx-auto" /><br />
        <p >3. Una vez que le des en <strong>comennzar</strong> comenzará a correr el tiempo, podras pausar, reiniciar y terminar ciclo.</p>
        <img src={paso3} alt="Pasos Pomodoro 3" className="mx-auto" /><br />
        <p >4. Una vez que hayas terminado terminado los 3 ciclos te dará un descanso de 15 minutos</p>
        <img src={paso4} alt="Pasos Pomodoro 4" className="mx-auto" /><br />
        <p>5. Una vez que hayas terminado los 4 ciclos te saldrá una ventana en donde confirmaria si has acabado con tu tarea</p>
        <img src={paso5} alt="Pasos Pomodoro 5" className="mx-auto" /><br />
        <p>6. Si precionas en <strong>"Si"</strong> te llevará a otra ventana en donde te preguntará si deseas volver al inicio o iniciar otra nueva tarea</p>
        <img src={paso6} alt="Pasos Pomodoro 6" className="mx-auto" /><br />
    </div>
  )
}
