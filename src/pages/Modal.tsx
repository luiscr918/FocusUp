import ModalComponentConfirmar from '../components/ModalComponentConfirmar'

const Modal = () => {
  return (
    <div>
      <ModalComponentConfirmar
        nombre={"CORNELL"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat cupiditate voluptatibus quam corporis illum numquam laboriosam at doloremque temporibus modi dignissimos veritatis eveniet eum in ullam, odit quibusdam quo."}
        imagen='' />

      <ModalComponentConfirmar
        nombre={"modal 2"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat cupiditate voluptatibus quam corporis illum numquam laboriosam at doloremque temporibus modi dignissimos veritatis eveniet eum in ullam, odit quibusdam quo."}
        imagen='' />
      <ModalComponentConfirmar
        nombre={"modal 3"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat cupiditate voluptatibus quam corporis illum numquam laboriosam at doloremque temporibus modi dignissimos veritatis eveniet eum in ullam, odit quibusdam quo."}
        imagen=''/>
      <ModalComponentConfirmar
        nombre={"modal 4"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat cupiditate voluptatibus quam corporis illum numquam laboriosam at doloremque temporibus modi dignissimos veritatis eveniet eum in ullam, odit quibusdam quo."} 
        imagen=''/>
    </div>
  )
}

export default Modal
