import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(22);
    const birthday = () =>{
        //actualixamos el State
        setage(age + 1)
    }
    return (
        <div>
                <h1>
                    !HOLA {props.name}! desde componente funcional
                </h1>
                <h2>
                    Tu edad es de : {age}
                </h2>

                <div>
                    <button onClick={birthday}>
                        Cumplir anios
                    </button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string

};


export default GreetingF;
