import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='box'>
      <h1>Increment and Decrement Counter</h1>
      <h3>Using React-Redux</h3>

      <div>
        <a className='negative' href='/' title='Decrement'><span>Incre</span></a>
        <input name='item' type='text' className='item-input' value='0'/>
        <a className='positive' href='/' title='Increment'><span>Decre</span></a> 
      </div>
    </div>
  )
}

export default App


