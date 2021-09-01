import './App.css';
import React, {useState}  from 'react';

function App() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [count, setCount] = useState(0);

  //console.log(username, password);
  //console.log(new Date().toDateString(), new Date().toString())
  return (
    <div className="App">
        {/* <h2>React Counter</h2> */}
        <h1>MY COUNTER </h1>
        <h3>{count}</h3>
        <h4>Use these buttons to modify the count.</h4>
        <div>
          <button onClick={()=>{setCount(count + 1)}}>+</button>
          <button onClick={()=>{setCount(count - 1)}}>-</button>
        </div>
        
    </div>
  );
}

export default App;
