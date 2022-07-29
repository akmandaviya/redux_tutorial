import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import {incrementNum,decrementNum } from './actions/index';

const App = () => {

  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();

  return (
    <div className='box'>
      <h1>Increment and Decrement Counter</h1>
      <h3>Using React-Redux</h3>

      <div className='sub-box'>
        <button className='negative'  onClick={() => dispatch(decrementNum ())}><span> Down </span></button>
        <input name='item' type='text' className='item-input' value= {myState}/>
        <button className='positive' onClick={() => dispatch(incrementNum ())}><span> Up </span></button> 
      </div>
    </div>
  )
}

export default App


