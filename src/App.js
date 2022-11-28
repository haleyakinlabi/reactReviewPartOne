import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Alpha from './components/Alpha'
import Bravo from './components/Bravo';

function App() {
  const [productName, setProductName] = useState("Cup and String")
  // let productName = "Cup and String"

  const handleChange = (event) => {
    const newString = event.target.value + "hello"
    setProductName(newString)
    //event.target = input field 
    //value = value of imput field
    // productName = event.target.value
  }
  return (
    <div className="App">
      <Header />
     <h1>Hello World</h1>
     {/* <h2>My Product is: {productName}</h2>
     <input  placeholder='Product Name' onChange=
     {handleChange}/> */}
      <Alpha setProductName={setProductName}/>
      <Bravo name={productName} />

    </div>
  );
}

export default App;

//when to use components:

//1. if it is separate from everything else (unique)
//a header can be unique from everything else

//2. if it is frequently used on the screen
//reuseable components

//3. if it is an immense amount of code 


//React LifeCycle:

//DOM
//-reads components top to bottom then stops
//-only time it's different is when you use a hook

//hook
//-useState is a hook 
//makes react reread the component and rerender it 

//when wanting to change what is seen in the browser use state
//global variables have to use state