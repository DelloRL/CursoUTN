import React from "react";

const TarjetaPaciente = () => {
    let nombre = "Jorge"
    let edad = 35
    let genero = "Masculino"
    let dni = 123456789
    let fotoPerfil =
        <img src="https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2017/08/01/13082/201708010905081ec284aacbb965c8e938932758592a26.jpg" alt="foto de perfil" />
    return (
        <>
            <p>
                Hola soy el componente TarjetaPaciente, ¡mira tus datos!
            </p>

            <button>Ver Datos</button>

            <p>
                nombre: {nombre},
                edad: {edad},
                genero: {genero},
                dni: {dni}
            </p>

            <p>
                Tu foto de perfil: {fotoPerfil}
            </p>
        </>
    );
}

export default TarjetaPaciente;