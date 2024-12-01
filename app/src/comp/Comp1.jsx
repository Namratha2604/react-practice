import But from "./but";
import { useContext } from "react";
import { counterContext } from "../context/context";

const Comp1 = () => {

  const val = useContext(counterContext);
  return (
    <div>
      <But />
      <button onClick={()=>val.setCount((count)=>count+1)}>hello</button>
    </div>
  )
}

export default Comp1;
