import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from './componenteB';


const ComponenteA = ({ contacto }) => {
    return (
        <div>
            <h3>
                nombre: { contacto.nombre }
            </h3>

            <h3>
                apellido: { contacto.apellido }
            </h3>

            <h3>
                email: { contacto.email }
            </h3>

            <ComponenteB linea={false}></ComponenteB>
        </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};


export default ComponenteA;
