import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState("");

  const calculate = () => {
    try {
      const process = value;
      const result = process.replace("x", "*");
      const evaluatedResult = eval(result); 
      setValue(evaluatedResult)
    } catch (error) {
      setValue('Geçersiz')
    }
  }

  const [darkMode, setDarkMode] = useState(true);

  const modeChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='calculator-box flex flex-col items-center justify-between p-6 rounded-3xl'>
        <div className="calculator-top flex flex-col justify-between items-end w-full h-60">
          <i onClick={modeChange} class={darkMode ? "bi bi-moon" : "bi bi-brightness-high"}></i>
          <div className='solution flex flex-col items-end gap-2'>
            <h1 className='text-5xl'>{value}</h1>
          </div>
        </div>
        <div className="calculator-bottom flex flex-wrap justify-center gap-2 h-3/4 w-full">
          <div>
            <input type='button' value="C" onClick={e => setValue("")} className='bg-btn-grey' />
            <input type='button' value="CE" onClick={e => setValue(value.slice(0, -1))} className='bg-btn-grey' />
            <input type='button' value="%" onClick={e => setValue(value + e.target.value)} className='bg-btn-grey' />
            <input type='button' value="/" onClick={e => setValue(value + e.target.value)} className='bg-btn-green' />
          </div>
          <div>
            <input type='button' value="7" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="8" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="9" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="x" onClick={e => setValue(value + e.target.value)} className='bg-btn-green' />
          </div>
          <div>
            <input type='button' value="4" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="5" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="6" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="-" onClick={e => setValue(value + e.target.value)} className='bg-btn-green' />
          </div>
          <div>
            <input type='button' value="1" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="2" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="3" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="+" onClick={e => setValue(value + e.target.value)} className='bg-btn-green' />
          </div>
          <div>
            <input type='button' value="0" onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue big-btn' />
            <input type='button' value="." onClick={e => setValue(value + e.target.value)} className='bg-btn-navy-blue' />
            <input type='button' value="=" onClick={calculate} className='bg-btn-green' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
