
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Random } from "./pages/Random"




function App() {


  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/hola" element={<Random/>} />
  </Routes>

  )
}

export default App
