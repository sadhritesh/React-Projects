import './App.css'
import { useState } from 'react'
import InputBox from './components/InputBox'
import useFetchData from './hooks/useFetchData.js'

function App() {

  const [ amount, setAmount ] = useState(''); 
  const [ from, setFrom ] = useState('usd');
  const [ to, setTo ] = useState('inr');
  const [ convertedAmount, setConvertedAmount ] = useState('');

  const currencies = useFetchData(from);
  const options = Object.keys(currencies);

  const convertBtnHandler = (e) =>{
      if (amount){
        setConvertedAmount(amount*currencies[to])
      }
  }
  
  const swapHanlder = (e) =>{
    setFrom(to);
    setTo(from);
    setAmount('');
    setConvertedAmount('');
  }

  return (
    <>
      <div 
        className='img-div'
        style={{
          backgroundImage:`url("https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`
        }}
      >
        <div
         className='container'
        >
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              convertBtnHandler();
            }}
          >
          <InputBox 
              label = "From"
              amount = {amount}
              setAmount = {setAmount}
              selectedCurrency = {from}
              onChangeSelectedCurrency = {setFrom}
              currencyOptions = {options}
          />
          <button 
              onClick={swapHanlder}
              className='swap-btn'
          >swap
          </button>
          <InputBox 
              label = "To"
              selectedCurrency = {to}
              onChangeSelectedCurrency = {setTo}
              currencyOptions = {options}
              amount = {convertedAmount}
              isDisabled = {true}
          />
          <button className='convert-btn'>Convert {from} to {to}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
