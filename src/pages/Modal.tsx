import { Link } from 'react-router-dom'
import ModalComponentConfirmar from '../components/ModalComponentConfirmar'

const Modal = () => {
  return (
    <div>
      <Link to="/Modal" className="btn btn-primary m-1" >Modales</Link>
     <ModalComponentConfirmar
     nombre={"modal 1"}
     descripcion={"AJAJAJAJ"}/>
     <ModalComponentConfirmar
     nombre={"modal 2"}
     descripcion={"000000"}/>
     <ModalComponentConfirmar
     nombre={"modal 3"}
     descripcion={"IIIIIII"}/>
     <ModalComponentConfirmar
     nombre={"modal 4"}
     descripcion={"UUUUUU"}/>
    </div>
  )
}

export default Modal
