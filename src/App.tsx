
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Modal from "./pages/Modal"




function App() {


  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Modal" element={<Modal/>} />
    
  </Routes>

  )
}

export default App
