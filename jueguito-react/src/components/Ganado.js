import React from 'react';
import {useNavigate} from "react-router-dom";

const Ganado =() => {
    const navegacion=useNavigate();
    return(
        <>
        <h1>
            Muy Bien, has ganado y continuas manteniendo tu cabeza sobre los hombros
        </h1>
        <div className="imagen">
            <img src={requestAnimationFrame(`../Assets/el_ahorcado1.png`)} alt=""/>
        </div>
        <button onClick={() => navegacion("/juego/")}>Volver a jugar</button>
        </>
    )
}
export default Ganado;