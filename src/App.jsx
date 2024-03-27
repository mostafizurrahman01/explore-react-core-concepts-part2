import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'



function App() {

  // normal function
  // function handleClick(){
  //   alert("I am clicked");
  // }

  //arrow function
  const handleClick = () => {
    alert("Clicked");
  }

  const handleClick2 = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>

      <br></br>
      <button onClick = {handleClick}>Click Me</button>
      <button onClick = {() => handleClick2(5)}>Click Me 2</button>
    </>
  )
}

export default App
