import './App.css';
import { useState } from 'react';

function App() {
    const [weight, setweight] = useState('')
    const [height, setheight] = useState('')
    const [bmi, setbmi] = useState('')
    const [message, setMessage] = useState('')

    const bmifunc = () =>{
      const weightNum = parseFloat(weight)
      const heightNum = parseFloat(height)

      if (weightNum > 0 && heightNum >0){
        let bmi_value = weightNum *10000 /(heightNum*heightNum)
        setbmi(bmi_value.toFixed(2));

        if (bmi_value < 18.5){
          setMessage('UnderWeight')
        } else if (bmi_value >= 18.5 && bmi_value < 24.9){
          setMessage('Normal Weight')
        } else {
          setMessage('Obesity')
        }
      }
    };

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <div className='calculator'>
        <input type='number' value={weight} onChange={(e) => setweight(e.target.value)} placeholder='Enter Weight(KG)'/>
        <input type='number' value={height} onChange={(e) => setheight(e.target.value)} placeholder='Enter height(CM)'/>
        <button onClick={bmifunc}>Calculate BMI</button>
        <h2>Your BMI: {bmi}</h2>
        <p><strong>{message}</strong></p>
      </div>
    </div>
  );
}

export default App;
