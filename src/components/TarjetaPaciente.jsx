import React, { useState } from "react";
import '../css/TarjetaPaciente.css'

const TarjetaPaciente = () => {
    const [mostrarDatos, setMostrarDatos] = useState(false);
    const toggleDatos = () => {
        setMostrarDatos(!mostrarDatos);
    }

    let nombre = "Jorge"
    let edad = 35
    let genero = "Masculino"
    let dni = 123456789
    let fotoPerfil = <img src="https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2017/08/01/13082/201708010905081ec284aacbb965c8e938932758592a26.jpg" alt="foto de perfil" />


    return (
        <>
            <div className="card-wrapper">
                <p className="text-title">
                    Hola, soy el componente TarjetaPaciente. ¡Mira tus datos!
                </p>

                <button className="button-show-data" onClick={toggleDatos}>
                    {mostrarDatos ? "Ocultar Datos" : "Ver Datos"}
                </button>

                <div className={`data-container ${mostrarDatos ? "visible" : "oculto"}`}>
                    <ul className="list-data">
                        <li>Tu Nombre: {nombre}</li>
                        <li>Tu Edad: {edad}</li>
                        <li>Tu Genero: {genero}</li>
                        <li>Tu Dni: {dni}</li>
                    </ul>


                    <p className="text-profile-picture">
                        Tu foto de perfil:
                    </p>

                    <div className="foto-perfil">
                        {fotoPerfil}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TarjetaPaciente;