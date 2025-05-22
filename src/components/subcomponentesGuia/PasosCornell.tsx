interface Props{
    noche: boolean;
}

export const PasosCornell = ({noche}:Props) => {
  return (
    <div  className="text-white text-center text-2xl">
      <p >¿Como Utilizar<strong> CORNELL</strong>?</p><br />
        <p >1. Elige un tema que quieras aprender.</p>
        <img src="/src/assets/imgs/tec/cornell1.png" alt="Pasos Pomodoro" className="mx-auto" /> <br />
        <p >2. A tu lado izquierdo tendrás el apartado para las <strong>ideas principales</strong>del tema que estas haciendo.</p>
        <img src="/src/assets/imgs/tec/cornell2.png" alt=" Pasos Pomodoro" className="mx-auto" /><br />
        <p >3. A su vez en el lado derecho tendrás el apartado en donde podras poner un parrafo principal del tema que estés tratando. </p>
        <img src="/src/assets/imgs/tec/cornell3.png" alt="Pasos Pomodoro" className="mx-auto" /><br />
        <p >4. Por último en la parte inferior se encuentra el apartado de resumen  y a su vez el botón de descarga en <strong>"PDF"</strong></p>
        <img src="/src/assets/imgs/tec/cornell 5.png" alt="Pasos Pomodoro" className="mx-auto" />
    </div>
  )
}
