import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counter-card">
        <h1 className="title">🔥 React Counter</h1>
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button className="btn increase" onClick={() => setCount(count + 1)}>Increase</button>
          <button className="btn decrease" onClick={() => setCount(count - 1)}>Decrease</button>
          <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
