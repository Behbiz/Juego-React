import {  Route, Routes } from "react-router-dom";
import Provider from "./contexto/Provider";
import Portada from "./components/Portada";
import Juego from "./components/Juego";
import Ganado from "./components/Ganado";
import Final from "./components/Final";

function App() {
  return (
  
   <Provider>
   <Routes>
    <Route path="/" element={<Portada/>}/>
    <Route path="juego/" element={<Juego/>}/>
    <Route path="ganado/" element={<Ganado/>}/>
    <Route path="final/" element={<Final/>}/>
   </Routes>
   </Provider>
   

  )
}

export default App;
