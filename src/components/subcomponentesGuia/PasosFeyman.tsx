interface Props{
    noche: boolean;
}

export const PasosFeyman = ({noche} : Props) => {
  return (
    <div>
      PasosFeyman - Noche: {noche ? 'Sí' : 'No'}
    </div>
  )
}
