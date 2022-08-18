/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //vamos a creas dos contadore distintos
    // cada uno en un estado diferente
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML) 

    const miRef = useRef();

    function incrementar1(){
        setcontador1(contador1 + 1)
    }

    function incrementar2(){
        setcontador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? caso 1: Ejecutar siempre un snippet de Codigo
     * cada vez qye haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    /* useEffect(()=> {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referecnia a elemento del DOM:');
        console.log(miRef);
    })

    /**
     * ?caso 2: Ejecutar solo cuando cambie contador 1
     * Cada vez qye haya un cambio en contador 1, se ejecuta lo que diga useEffect()
     * En caso de que cambie contador2, no habra ejecucion
     */
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL Contador 1');
        console.log('Mostrando Referecnia a elemento del DOM:');
        console.log(miRef);
        /* return () => {
            cleanup
        }; */
    }, [contador1]);



    return (
        <div>
        <h1>*** Ejemplo de usesState(), useRef(), y useEffect()</h1>
        <h2>CONTADOR 1: { contador1 }</h2>
        <h2>CONTADOR 2: { contador2 }</h2>

        <button onClick={incrementar1}>Increamentar conatador 1</button>
        <button onClick={incrementar2}>Increamentar conatador 1</button>


        </div>
    );
}

export default Ejemplo2;
