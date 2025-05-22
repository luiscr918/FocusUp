interface Props{
    noche: boolean;
}

export const PasosPomodoro = ({noche}:Props) => {
  return (
    <div className="text-white text-center text-2xl">
        <p >¿Como Utilizar <strong>POMODORO</strong>?</p><br />
        <p >1. Elige una tarea que quieras realizar.</p>
        <img src="/src/assets/imgs/tec/Pomo1.png" alt="Pasos Pomodoro" className="mx-auto" /> <br />
        <p >2. Pon un temporizador de 25 minutos.</p>
        <img src="/src/assets/imgs/tec/Pomo2.png" alt=" Pasos Pomodoro" className="mx-auto" /><br />
        <p >3. Una vez que le des en <strong>comennzar</strong> comenzará a correr el tiempo, podras pausar, reiniciar y terminar ciclo.</p>
        <img src="/src/assets/imgs/tec/Pomo3.png" alt="Pasos Pomodoro" className="mx-auto" /><br />
        <p >4. Una vez que hayas terminado terminado los 3 ciclos te dará un descanso de 15 minutos</p>
        <img src="/src/assets/imgs/tec/Pomo7.png" alt="Pasos Pomodoro" className="mx-auto" /><br />
        <p>5. Una vez que hayas terminado los 4 ciclos te saldrá una ventana en donde confirmaria si has acabado con tu tarea</p>
        <img src="/src/assets/imgs/tec/Pomo5.png" alt="Pasos Pomodoro" className="mx-auto" /><br />
        <p>6. Si precionas en <strong>"Si"</strong> te llevará a otra ventana en donde te preguntará si deseas volver al inicio o iniciar otra nueva tarea</p>
        <img src="/src/assets/imgs/tec/Pomo6.png" alt="Pasos Pomodoro" className="mx-auto" /><br />
    </div>
  )
}
