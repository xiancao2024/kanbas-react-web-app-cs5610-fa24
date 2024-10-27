import React, { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
              id="wd-counter-up-click"  style={{ backgroundColor: 'green', color: 'white', marginRight: '10px'  }}>Up</button>
      <button onClick={() => setCount(count - 1)}
              id="wd-counter-down-click" style={{ backgroundColor: 'red', color: 'white' }}>Down</button>
<hr/></div>);}

