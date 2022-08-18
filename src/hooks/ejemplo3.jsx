/**
 * Ejemplo Hooks:
 * - useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns componente 1
 * Dispone de un contexto qye va a tener un valor
 * que revibe sesde el padre
 */
const miContexto = React.createContext(null)

const Componente1 = () => {
    //inicializamos un estado vacio que va a rellenar con los
    //datos del contexto del padre
    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El toke es: {state.token}
                {/* pintamos el componente 2 */}
                <Componente2></Componente2>
            </h1>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesion es:  {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creasmos el estado de este componente
    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion(){
        sessionData(
            {
                token: ' JWT123456789',
                session: sessionData.sesion + 1
            }
        )
    }

    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* todo lo que este aqui dentro puede leer los datos de sessionData */}
                {/* Ademas, si se actualiza, los componentes de aqui, tambien los actualizan */}

                <Componente1></Componente1>
                <button onClick={actualizarSesion}>actualiza Sesion</button>

            </miContexto.Provider>
        </div>
    )
}


