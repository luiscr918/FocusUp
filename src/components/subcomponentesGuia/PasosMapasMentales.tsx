interface Props{
    noche: boolean;
}

export const PasosMapasMentales = ({noche}: Props) => {
  return (
    <div  className="text-white text-center text-2xl">
      <p >¿Como Utilizar<strong> MAPAS MENTALES</strong>?</p><br />
        <p >1. Elige una de las tantas plantillas que disponemos en nuestra plataforma.</p>
        <img src="/src/assets/imgs/tec/mapas1.png" alt="Pasos Pomodoro" className="mx-auto" /> <br />
        <p >2. Una vez escogido presionaremos en el botón <strong>Editar</strong></p>
        <img src="/src/assets/imgs/tec/mapas3.png" alt=" Pasos Pomodoro" className="mx-auto" /><br />
        <p >3. Y listo podrás usar la plantilla y usarla a tu gusto. </p>
        <img src="/src/assets/imgs/tec/mapas2.png" alt="Pasos Pomodoro" className="mx-auto" /><br />
        
    </div>
  )
}
