import React from 'react'


export const footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}
export default footer
