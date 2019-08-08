import React, {useState} from 'react';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);


  const strike = (strikes)=> {
    if (strikes >= 3) {
        setStrikes(0);
    }
    else {
        setStrikes(strikes += 1);
    }
}

const ball = (balls) => {
    if (balls >= 4) {
        setBalls(0);
    }
    else {
        setBalls(balls += 1);
    }
}

const foul = (strikes) => {
    if (strikes < 2) {
        setStrikes(strikes += 1);
    }
}

const hit = (strikes, balls) => {
    setStrikes(0);
    setBalls(0);
}

  return (
    <div className="App">
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
