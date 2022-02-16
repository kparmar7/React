import React, { useState } from 'react';

function useCustomHook(){

    const [count, setCount] = useState(0);

    const handleIncrement= ()=>{
        setCount(count+1);
    };

    return{count, handleIncrement};
}

function Student(){
    const data = useCustomHook();

    return(<>
        <h1>Count Up {data.count}</h1>
        <button onClick={data.handleIncrement}>Click me</button>
    </>);
}

export default Student;