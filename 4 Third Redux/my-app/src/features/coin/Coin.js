import { useSelector } from "react-redux";
function Coin() {
  const first = useSelector((state)=> state.counter.value);
  return <div >
      <span className="value">Coin: {first}</span>
  </div>;
}

export default Coin;
