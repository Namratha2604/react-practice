import  {useContext} from 'react';
import {counterContext} from '../context/context'

const But = () => {
  const val = useContext(counterContext);
  return (
    <div>
      {val.count}
    </div>
  )
}

export default But;

// import React, { useContext } from "react";
// import { counterContext } from "../context/context";

// function But() {
//   const count = useContext(counterContext);

//   return (
//     <nav>
//       <h2>Current Count: {count}</h2>
//     </nav>
//   );
// }

// export default But;

