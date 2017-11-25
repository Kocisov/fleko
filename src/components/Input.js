import * as React from 'react'

const Input = ({ w = 200, ...props }) => (
  <input
    style={{
      border: '1px solid #ced4da',
      borderRadius: '3px',
      marginLeft: '10px',
      marginRight: '10px',
      minWidth: '200px',
      outline: '0',
      padding: '5px 10px',
      width: w
    }}
    {...props}
  />
)

export default Input
