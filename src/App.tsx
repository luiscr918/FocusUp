
import { Route, Routes } from "react-router-dom"
import Navegacion from "./components/Navegacion"
import Footer from "./components/Footer"







function App() {


  return (
    <Routes>
      <Route path="/home" element={<Navegacion />} />

    </Routes>

  )
}

export default App
