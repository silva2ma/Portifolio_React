
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pagess/Home.jsx";
import Sobre from "./pagess/Sobre.jsx";
import Projetos from "./pagess/Projetos.jsx";
import Contato from "./pagess/Contato.jsx";



function App(){
  return(
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/projetos" element={<Projetos/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
