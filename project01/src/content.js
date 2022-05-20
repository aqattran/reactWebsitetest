import React from 'react';
import {useState} from 'react';


export const content = () => {
    const [name, setName]  = useState('Alice');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
    const names = ['Alice', 'Mihir', 'Margaret', 'Megan'];
    const int = Math.floor(Math.random()*4);
    setName(names[int]);
  } 

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  const handleClick2 = (name) => {
    console.log(count)
  }

/*   const handleClick3 = (e) => {
    console.log(e.target.innerText)
  } */

  return (
    <main>
        <p onDoubleClick = {handleClick}>
            Hello {name}!
        </p>
        <button
          onClick = {handleNameChange}>Change Name </button>
        <button onClick = {handleClick}>Click It </button>
        <button onClick = {handleClick2}>Click It </button>
      
    </main>
  )
}
export default content
