// import { useEffect, useRef, useState } from "react";
// import { counterContext } from "./context/context";
import Navbar from "./comp/Navbar";
// import { Redcomp } from "./UseRed/useRed";

function App() {
  // const [count, setCount] = useState(1);
  // const renderRef = useRef(0);

  // useEffect(() => {
  //   alert("Welcome to my page!");
  //   renderRef.current += 1;
  // }, []);

  // useEffect(() => {
  //   alert("Count changed");
  //   renderRef.current += 1;
  // }, [count]);

  return (
<>
{/* <Redcomp></Redcomp> */}
<Navbar adjective="awesome" />
</>





  //   <counterContext.Provider value={{count,setCount}}>
  //     <Navbar />
  //     <h1>Count: {count}</h1>
  //     <h1>Render Count: {renderRef.current}</h1>
  //     <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  //   </counterContext.Provider>
  );
}

export default App;
