import React, { useState } from 'react';


function Student(){

    // const nameUseHook = useState("Kashyap");
    const [name, setName] = useState("Kashyap");
    const handleClick = () =>{
        // nameUseHook[1]("Raja");
        // console.log(nameUseHook[1], nameUseHook[0]);
        setName("Raja");
        console.log(name);
    }

    return (
        <>
            <h1>Hi There !! </h1>
            {/* <h1>nameUseHook[0] : {nameUseHook[0]} </h1> */}
            <h1>nameUseHook[0] : {name} </h1>
            <button type='button' onClick={handleClick}>Click me</button>
        </>
    );
}

export default Student;