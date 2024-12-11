import React, { useState } from 'react'
import peopleIcon from'./images/icon-person.svg'

export default function App() {
  const [numberOfPeople, setNumberOfPeople] = useState('')
  const [bill, setBill] = useState('');
  const [tip, setTip] =useState('');
  const [error, setError] = useState(false);
  const [selectedTip, setSelectedTip] = useState(''); 

  const handleReset = () => {
    setNumberOfPeople(''),
    setBill(''),
    setTip(''),
    setSelectedTip(''),
    setError(false);
  }


  const handleOnClick = (value) => {
    if (value === 'custom') {
      setSelectedTip('');
      setTip(''); // Reset the tip if "Custom" is selected
    } else {
      setSelectedTip(value);
      setTip(value); // Update tip percentage
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {id,value} = e.target;

    if ( id === "NumPeople"){
      setNumberOfPeople(value);

      setError(value === '0');
    }

    if(id === "Bill"){
      setBill(value)
    }

    if (id === 'CustomTip') {
      setTip(value);
      setSelectedTip('custom'); // Set custom as selected if manually entering
    }

    const updateObject = {
      [id] : value,
    }
    console.log(updateObject)
  }
  return (
    <div className='p-10 h-screen w-screen bg-light-grayish-cyan flex items-center justify-center font-spaceMono'>
      <div className='flex gap-6 bg-white p-10 rounded-2xl' id='content'>
        <div className='w-1/2'>
          <p>Bill</p>
          <label className='relative'>
            <p className='absolute left-0 p-2'>$</p>
            <input value={bill} id='Bill' onChange={onChange} type="number" className='bg-very-light-grayish-cyan text-right w-full p-2 rounded' placeholder='0' min={0}/>
          </label>

          <p className='pt-10'>Select Tip %</p>

          <div className='w-full grid grid-cols-3 gap-3 pt-3'>
            {['5', '10', '15', '25', '50', 'custom'].map((value) => (
              <button
                key={value}
                className={`bg-very-dark-cyan px-10 py-3 items-center justify-center flex text-white rounded ${
                  selectedTip === value ? 'bg-very-light-grayish-cyan text-dark-grayish-cyan' : ''
                }`}
                onClick={() => handleOnClick(value)}
                value={value}
              >
                {value === 'custom' ? 'Custom' : `${value}%`}
              </button>
            ))}
          </div>

          <div className='flex justify-between pt-10'>
            <p className=''>Number of People</p>
            <p className={`text-red-600 ${error ? 'block' : 'hidden'}`}>Can't be zero</p>
          </div>
          <label className='relative flex items-center justify-center pt-3'>
            <img src={peopleIcon} alt="People icon" className='absolute left-0 p-2'/>
            <input value={numberOfPeople} id='NumPeople' onChange={onChange} type="number"  className={`bg-very-light-grayish-cyan text-right w-full p-2 rounded border ${error ? ' border-red-600 border-2' : ''}`} min={0} placeholder='0'/>
          </label>
        </div>

        <div className='w-1/2 bg-very-dark-cyan p-5 rounded-xl relative'>
          <div className='flex justify-between'>
            <div>
              <p className='text-white'>Tip Amount</p>
              <p className='text-grayish-cyan'>/ person</p>
            </div>
            <div className='flex items-center'>
            <p className='text-strong-cyan text-4xl text-center'>
      ${numberOfPeople > 0 ? ((Number(bill) * Number(tip)) / 100 / Number(numberOfPeople)).toFixed(2) : '0.00'}
    </p>
            </div>
          </div>

          <div className='flex justify-between pt-6'>
            <div>
              <p className='text-white'>Total</p>
              <p className='text-grayish-cyan'>/ person</p>
            </div>
            <div className='flex items-center'>
            <p className='text-strong-cyan text-4xl text-center'>
      ${numberOfPeople > 0 ? ((Number(bill) + (Number(bill) * Number(tip)) / 100) / Number(numberOfPeople)).toFixed(2) : '0.00'}
    </p>
            </div>
          </div>

          <div className='absolute w-full bottom-5 left-0 right-0 flex justify-center'>
            <button className='w-4/5 bg-strong-cyan rounded p-2 ' onClick={handleReset}>Reset</button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

