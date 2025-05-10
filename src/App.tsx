
import { Route, Routes } from "react-router-dom"
import Navegacion from "./components/navegacion"






function App() {


  return (
    <Routes>
    <Route path="/home" element={<Navegacion/>} />
  

  </Routes>

  )
}

export default App
