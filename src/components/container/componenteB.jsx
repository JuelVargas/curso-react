import React,{useState} from 'react';
import PropTypes from 'prop-types';


const ComponenteB = (linea) => {

    /*  const defaultContacto = new Contacto('juel', 'Vargas','example@mail.com', linea) */

    const [conectado, setConectado] = useState(linea);
    return (
        <div>
            <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
            <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};


ComponenteB.propTypes = {
    linea: PropTypes.bool,
};


export default ComponenteB;
