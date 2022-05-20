import React from 'react'

export const content = () => {
    const handleNameChange = () => {
    const names = ['Alice', 'Mihir', 'Margaret', 'Megan'];
    const int = Math.floor(Math.random()*4);
    return names[int];
  } 

  const handleClick = () => {
    console.log('You clicked it')
  }

  const handleClick2 = (name) => {
    console.log(`${name} was here`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <main>
        <p onDoubleClick = {handleClick}>
            Hello {handleNameChange()}!
        </p>
        <button
          onClick = {handleClick}>Click It </button>
        <button onClick = {() => handleClick2('Alice')}>Click It </button>
        <button onClick = {(e) => handleClick3(e)}>Click It </button>
      
    </main>
  )
}
export default content
