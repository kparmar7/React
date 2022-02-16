// import './App.css';
// import {useState} from 'react';

// function App() {
//   const [first, setfirst] = useState(0);
//   return (
//     <div className="App">
//     <button className="button" onClick={()=> {setfirst(first + 1)}} aria-label="Increment Value"> + </button>
//     <span className="value">{first}</span>
//     <button className="button" onClick={()=> {setfirst(first - 1)}} aria-label="Decrement Value"> - </button>
//     </div>
//   );
// }

// export default App;



import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div>
      <Counter/>
      <Coin/>
    </div>
);
}

export default App;
