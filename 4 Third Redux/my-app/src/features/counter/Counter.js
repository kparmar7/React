// import '/Users/kasparmar/Downloads/FrontEnd/4 Third Redux/my-app/src/App.css';
// import {useState} from 'react';

import { useSelector, useDispatch } from "react-redux";
import {incremented, decremented} from './CounterSlice'

function Counter() {
    // const [first, setfirst] = useState(0);
    const first = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className="App">
    <button className="button" onClick={()=> {dispatch(incremented())}} aria-label="Increment Value"> + </button>
    <span className="value">Counter: {first}</span>
    <button className="button" onClick={()=> {dispatch(decremented())}} aria-label="Decrement Value"> - </button>
    </div>
  );
}

export default Counter;
