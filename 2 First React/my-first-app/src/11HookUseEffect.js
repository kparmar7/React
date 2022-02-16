import React, { useState, useEffect } from 'react';


function Student(){

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);

    const handleClick = () =>{
        console.log(count);
        setCount(count+1);
    }

    const handleClick1 = () =>{
        console.log(count);
        setCount1(count1-1);
    }

    useEffect(()=>{
        console.log("useEffect is called");
    }, [count])

    return (
        <>
            <h1>Hi There !! </h1>
            <h1>Count Up : {count} </h1>
            <button type='button' onClick={handleClick}>Click me</button>

            <h1>--------------------------</h1>
            <h1>Count Down : {count1} </h1>
            <button type='button' onClick={handleClick1}>Click me</button>
        </>
    );
}

export default Student;