
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from './imgs/banner.jpg';
import { useState } from 'react';


function App() {
  const [numClicks, setNumClicks] = useState(0);
  
  const clickManager = () =>{
    setNumClicks(numClicks + 1);
  }

  const counterReset = () =>{
    setNumClicks(0);
  }




  return (
    <div className="App">
      <div className='logo-container'> 
        <img
          className='logo'
          src={ logo }
          alt='logo' 
        />
      </div>
      <h1>
        Amount of people stuck on VIM: 
      </h1>
      <div className='counter-container'>
        <Counter
          numClicks = { numClicks }
        />
        <Button
          text = 'Click'
          isClickButton = { true }  
          clickManager = { clickManager }  
        />
        
        <Button
          text = 'Reset'
          isClickButton = { false }  
          clickManager = { counterReset }
        />
      </div>
    </div>
  );
}

export default App;
