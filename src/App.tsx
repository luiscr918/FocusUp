
import { Route, Routes } from "react-router-dom"
import Navegacion from "./components/Navegacion"







function App() {


  return (
    <Routes>
      <Route path="/home" element={<Navegacion />} />

    </Routes>

  )
}

export default App
