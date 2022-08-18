/* 
* ejempro de  uso de hook State

* crear un componente de tipo funciony acceder a su estado
* privado a travez de un hooky, ademas, poder modificarlo
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial par un contador
    const valorInicial = 0;

    // valor inicial para una persona 

    const personaInicial = {
        nombre: 'Juel',
        email: 'juel@mail.com'
    }

    /* 
    queremos que el VALORINICIAL Y PEROSNAINICIAL sean 
    parte del estdo del componente para asi poder gestionar su cambio
    y qye este se vean reflejado en la vista del componente.

    const[nombreVariable, funcionParaCambiar] = useState(valor inicial)
    
    */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /* 
    funcion para actualizar el estado privado que contiene  el contador

    */

    function incrementarContador(){
        //? funcionParaCambiar(nuevoValor)
        setContador(contador  + 1)
    }

    /**
     * 
     * funcion para cambiar el estado del componente 
     */

    function actualizarPersona(nombre){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@inaginagroup.com',
            }
        )
    }

    return (
        <div>
        <h1>***ejemplo useState()***</h1>

        <h3>CONTADOR: { contador }</h3>
        <h3>DATOS DE LA PERSONA:</h3>
        <h3>Nombre: { persona.nombre } </h3>
        <h4>Email: {persona.email} </h4>
        {/* Bloque de botonea para actualizar el estado del componente */}
        <button onClick={ incrementarContador }>Increamentar</button>
        <button onClicK={ actualizarPersona } >Actualizar</button>

            
        </div>
    );
}

export default Ejemplo1;
