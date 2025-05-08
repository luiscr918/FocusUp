import '../styles/fondoNoche.css';
interface Props {
    showModal: boolean;
    cerrarModal: ()=> void; 

}
export const ModalHomeComponent = ({showModal}:Props) => {
  return (
    (showModal
        ?
        <div>
        
        ModalHomeComponent</div>
        :
        <p>error</p>
    )

  )
}
