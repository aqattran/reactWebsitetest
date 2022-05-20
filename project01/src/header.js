import React from 'react'
const headerStyle = {
  backgroundColor:'lightblue',
  color: '#fff',
};

const header = ({title}) => {
  return (
    <header style ={headerStyle}>
        <h1>
            {title}
        </h1>
    </header>
  )
}

header.defaultProps = {
  title: "Default Title"
}


export default header