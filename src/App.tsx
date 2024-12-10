import React from 'react'
import peopleIcon from'./images/icon-person.svg'

export default function App() {
  const onChange = ():returnType => {
    
  }
  return (
    <div className='p-10 h-screen w-screen bg-light-grayish-cyan flex items-center justify-center text-2xl font-spaceMono'>
      <div className='flex gap-6 bg-white p-10 rounded-2xl' id='content'>
        <div className='w-1/2'>
          <p>Bill</p>
          <label className='relative'>
            <p className='absolute left-0 p-2'>$</p>
            <input onChange={onChange} type="number" className='bg-very-light-grayish-cyan text-right w-full p-2 rounded' placeholder='0' min={0}/>
          </label>

          <p className='pt-10'>Select Tip %</p>
          <div className='w-full grid grid-cols-3 gap-3 pt-3'>
            <button className='bg-very-dark-cyan active:bg-very-light-grayish-cyan active:text-dark-grayish-cyan px-10 py-3 items-center justify-center flex  text-white rounded' id='5'>5%</button>
            <button className='bg-very-dark-cyan active:bg-very-light-grayish-cyan active:text-dark-grayish-cyan px-10 py-3 items-center justify-center flex  text-white rounded' id='10'>10%</button>
            <button className='bg-very-dark-cyan active:bg-very-light-grayish-cyan active:text-dark-grayish-cyan px-10 py-3 items-center justify-center flex text-white rounded' id='15'>15%</button>
            <button className='bg-very-dark-cyan active:bg-very-light-grayish-cyan active:text-dark-grayish-cyan px-10 py-3 items-center justify-center flex text-white rounded' id='25'>25%</button>
            <button className='bg-very-dark-cyan active:bg-very-light-grayish-cyan active:text-dark-grayish-cyan px-10 py-3 items-center justify-center flex text-white rounded' id='50'>50%</button>
            <button className='bg-very-dark-cyan active:bg-very-light-grayish-cyan active:text-dark-grayish-cyan px-10 py-3 items-center justify-center flex text-white rounded' id='custom'>Custom</button>
          </div>

          <p className='pt-10'>Number of People</p>
          <label className='relative flex items-center justify-center pt-3'>
            <img src={peopleIcon} alt="People icon" className='absolute left-0 p-2'/>
            <input onChange={onChange} type="number"  className='bg-very-light-grayish-cyan text-right w-full p-2 rounded' min={0} placeholder='0'/>
          </label>


        </div>

        <div className='w-1/2 bg-very-dark-cyan p-5 rounded-xl relative'>
          <div className='flex justify-between'>
            <div>
              <p className='text-white'>Tip Amount</p>
              <p className='text-grayish-cyan'>/ person</p>
            </div>
            <div className='flex items-center'>
              <p className='text-strong-cyan text-4xl text-center'>$0.00</p>
            </div>
          </div>

          <div className='flex justify-between pt-6'>
            <div>
              <p className='text-white'>Total</p>
              <p className='text-grayish-cyan'>/ person</p>
            </div>
            <div className='flex items-center'>
              <p className='text-strong-cyan text-4xl text-center'>$0.00</p>
            </div>
          </div>

          <div className='absolute w-full bottom-5 left-0 right-0 flex justify-center'>
            <button className='w-4/5 bg-strong-cyan rounded p-2 '>Reset</button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

