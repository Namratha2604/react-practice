import { useState } from "react";

const App1 = () => {

const [name, setName] = useState("nasar");

const handleClick = ()=>{
    alert("im cloickfc");
}
const handleMouse = ()=>{
    alert("beeeeeep beeep")
}

const handleChange = (i)=>{
    setName(i.target.value);
}

  return (
    <div>
      <button onClick={handleClick} >click me</button>
      <p onMouseOver={handleMouse} >jordindiannnn</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default App1;
