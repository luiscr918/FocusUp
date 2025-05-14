
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Aboutus } from "./pages/Aboutus"




function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nosotros" element={<Aboutus />} />
      <Route path="/musica" element={<Aboutus />} />
    </Routes>

  )
}

export default App
