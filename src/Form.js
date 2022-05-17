import React, { useState } from "react";
import "./Form.css";



export default function Form(props) {

const [enteredName, setEnteredName] = useState('');
const [enteredEmail, setEnteredEmail] = useState('');
const [enteredToken, setEnteredToken] = useState('');
const [enteredPrice, setEnteredPrice] = useState('');

function nameChangeHandler(event){
setEnteredName(event.target.value);
}
function emailChangeHandler(event){
setEnteredEmail(event.target.value);
}
function tokenChangeHandler(event){
setEnteredToken(event.target.value);
}
function priceChangeHandler(event){
setEnteredPrice(event.target.value);
}

function submitHandler(event){
    event.preventDefault();
    const submittedData = {
        name: enteredName,
        email: enteredEmail,
        token: enteredToken,
        price: enteredPrice
    }
    props.dataHandler(submittedData);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredToken('');
    setEnteredPrice('');
}
  return (
    <div>
      <div class="container">
        <div class="brand-title">React Form-Table</div>
        <div className="form-and-table">
          <div class="inputs">
            <form onSubmit={submitHandler}>
              <label>NAME</label>
              <input value={enteredName} type="text" placeholder="eg. John Doe" onChange={nameChangeHandler}/>
              <label>EMAIL</label>
              <input value={enteredEmail} type="text" placeholder="eg. John@example.com" onChange={emailChangeHandler}/>
              <label>NAME OF TOKEN</label>
              <input value={enteredToken} type="text" placeholder="eg. TRAC" onChange={tokenChangeHandler}/>
              <label>PRICE OF TOKEN</label>
              <input value={enteredPrice} type="number" placeholder="eg. 1.4" onChange={priceChangeHandler}/>

              <button type="submit">Submit</button>
            </form>
          </div>
          <div>{props.children}</div>
        </div>
        
      </div>
    </div>
  );
}
