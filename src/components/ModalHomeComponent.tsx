import '../styles/fondoNoche.css';
interface Props {
    showModal: boolean;
    cerrarModal: ()=> void; 

}
export const ModalHomeComponent = ({showModal, cerrarModal}: Props) => {
  return (
    showModal && (
      <div>
        ModalHomeComponent
      </div>
    )
  );
}
