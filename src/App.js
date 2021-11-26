//import useState Hook
//import Rect bootstrap
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import More from './components/More';

function App() {
  //initializing states with current state and function that updates state
  const [countInv, setCountInv] = useState(0)
  const [addInv, setAddInv] = useState(0)
  const [compInv, setCompInv] = useState(0)
  const [countOutInv, setCountOutInv] = useState(0)
  const [gross, setGross] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false);

  

  const price = 10

//connvert data into integers and create variables to store calculations
  const totalInv = parseInt(countInv) + parseInt(addInv)
  const totalSold = parseInt(totalInv) - parseInt(countOutInv) - parseInt(compInv) 
  const totalGross = parseInt(price * totalSold )
  const qtyRemaining = parseInt(countOutInv - countInv)

  // function to call to disable input fields
  const disableForm = () => {
    setIsDisabled(!isDisabled)
  };
  
  return (

      <div>
        {/* Imported compent that stores poster update options */}
    <More price={price}/>

    <br/>
    {/* Input fields to store inventory, sales and gross */}
    <label htmlFor="myInput">Qty Remaining</label>
  <input value={qtyRemaining} id="qty-remining" type="number" disabled={isDisabled} />

    <label htmlFor="myInput">Count In</label>
  <input value={countInv} id="count-inv" onChange={e => setCountInv(e.target.value)} type="number" disabled={isDisabled} />

  <label htmlFor="myInput">Add</label>
  <input value={addInv} id="added-inv" onChange={e => setAddInv(e.target.value)} type="number" disabled={isDisabled} />

  <label htmlFor="myInput">Total Inv</label>
  <input value={totalInv} id="total-inv" type="text" disabled={isDisabled} />

  <label htmlFor="myInput">Comp</label>
  <input id="comp-inv" onChange={e => setCompInv(e.target.value)} type="number" disabled={isDisabled} />

  <label htmlFor="myInput">Count Out</label>
  <input  id="count-out" onChange={e => setCountOutInv(e.target.value)} type="number" disabled={isDisabled} />

  <label htmlFor="myInput">Total Sold</label>
  <input value={totalSold} id="total-sold" type="number" disabled={isDisabled}/>

  <label htmlFor="myInput" className="grossInput">Gross</label>
  <input value={totalGross} id="gross" type="number" disabled={isDisabled} />
    <br/>
    <br/>

    <button type="button" onClick={disableForm}>Settle Account</button>
    </div>

  )
}

  
export default App;
