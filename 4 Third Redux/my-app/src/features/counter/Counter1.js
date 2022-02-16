// import '/Users/kasparmar/Downloads/FrontEnd/4 Third Redux/my-app/src/App.css';
import {useState} from 'react';

function Counter() {
    const [first, setfirst] = useState(0);
  return (
    <div className="App">
    <button className="button" onClick={()=> {setfirst(first + 1)}} aria-label="Increment Value"> + </button>
    <span className="value">Counter: {first}</span>
    <button className="button" onClick={()=> {setfirst(first - 1)}} aria-label="Decrement Value"> - </button>
    </div>
  );
}

export default Counter;
