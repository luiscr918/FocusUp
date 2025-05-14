
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Pomodoro } from "./pages/Pomodoro"
import { Feynman } from "./pages/Feynman"
import { Cornell } from "./pages/Cornell"
import { MapasMentales } from "./pages/MapasMentales"




function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route path="/feynman" element={<Feynman />} />
      <Route path="/cornell" element={<Cornell />} />
      <Route path="/mapas-mentales" element={<MapasMentales />} />
    </Routes>

  )
}

export default App
