import React from "react";
import { useNavigate } from "react-router-dom"

const Portada = () =>{
    const navegacion=useNavigate();
    return(
        <>
        <div className="portada">
            <div className="childPortada">
        <h1>BIENVENIDO/A</h1>
        <center><a href="#" class="rainbow-button" alt="vamos jugar" onClick={()=>navegacion("/juego")}>
        </a></center></div>
        </div>
        </>
    )
}
export default Portada;