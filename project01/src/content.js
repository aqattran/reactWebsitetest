import React from 'react'

export const content = () => {
    const handleNameChange = () => {
    const names = ['Alice', 'Mihir', 'Margaret', 'Megan'];
    const int = Math.floor(Math.random()*4);
    return names[int];
  } 
  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}
export default content
