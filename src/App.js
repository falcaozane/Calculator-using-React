import './App.css';
//import Header from './Components/Header';
//import  Counter from './Components/Counter';
import { useState } from 'react';

function App() {

  const [result,setResult] = useState("")
  const clickHandler = (event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearDisplay = ()=>{
    setResult('')
  }

  const calculate = ()=>{
    setResult(eval(result).toString())
  }
  return (
    <>
      {
      /*
      <div className='main'>
      <Header />
      <Counter />
      </div>
        */
      }
      <div className='calc'>
          <input type='text' placeholder='0' id='answer' value={result}></input>
          <input type='button' value="9" className="btn" onClick={clickHandler}></input>
          <input type='button' value="8" className="btn" onClick={clickHandler}></input>
          <input type='button' value="7" className="btn" onClick={clickHandler}></input>
          <input type='button' value="+" className="btn" onClick={clickHandler}></input>
          <input type='button' value="6" className="btn" onClick={clickHandler}></input>
          <input type='button' value="5" className="btn" onClick={clickHandler}></input>
          <input type='button' value="4" className="btn" onClick={clickHandler}></input>
          <input type='button' value="-" className="btn" onClick={clickHandler}></input>
          <input type='button' value="3" className="btn" onClick={clickHandler}></input>
          <input type='button' value="2" className="btn" onClick={clickHandler}></input>
          <input type='button' value="1" className="btn" onClick={clickHandler}></input>
          <input type='button' value="*" className="btn" onClick={clickHandler}></input>
          <input type='button' value="." className="btn" onClick={clickHandler}></input>
          <input type='button' value="0" className="btn" onClick={clickHandler}></input>
          <input type='button' value="%" className="btn" onClick={clickHandler}></input>
          <input type='button' value="/" className="btn" onClick={clickHandler}></input>
          <input type='button' value="Clear" className="btn-cal" onClick={clearDisplay}></input>
          <input type='button' value="=" className="btn-cal" onClick={calculate}></input>
      </div>
    </>
  );
}

export default App;
