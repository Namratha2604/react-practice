import { useState } from "react";

const App1 = () => {

// const [name, setName] = useState("nasar");
const [form, setForm] = useState({tel:"", add:""});

// const handleClick = ()=>{
//     alert("im cloickfc");
// }
// const handleMouse = ()=>{
//     alert("beeeeeep beeep")
// }

const handleChange = (i)=>{
    // setName(i.target.value);
    setForm({...form,[i.target.tel]:i.target.value});
    console.log(form);
}

  return (
    <div>
      {/* <button onClick={handleClick} >click me</button>
      <p onMouseOver={handleMouse} >jordindiannnn</p> */}
      <input type="text" name='tel' value={form.tel} onChange={handleChange} />

      <input type="text" name='add' value={form.add} onChange={handleChange} />
    </div>
  )
}

export default App1;
