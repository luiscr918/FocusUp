
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Pomodoro } from "./pages/Pomodoro"
import { Feynman } from "./pages/Feynman"
import { Cornell } from "./pages/Cornell"
import { MapasMentales } from "./pages/MapasMentales"
import { Aboutus } from "./pages/Aboutus"
import { Spotify } from "./pages/Spotify"
import { Guia } from "./pages/Guia"




function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route path="/feynman" element={<Feynman />} />
      <Route path="/cornell" element={<Cornell />} />
      <Route path="/mapas-mentales" element={<MapasMentales />} />
      <Route path="/sobre-nosotros" element={<Aboutus />} />
      <Route path="/spotify" element={<Spotify />} />
      <Route path="/guia/:nombre" element={<Guia />} />
    </Routes>

  )
}

export default App
