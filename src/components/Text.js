import * as React from 'react'

const Text = ({
  size,
  color,
  bold,
  flex,
  np,
  flexRight,
  semiBold,
  ...props
}) => (
  <p
    style={{
      color: color ? color : 'inherit',
      fontSize: size ? `${size}px` : 'inherit',
      fontWeight: bold ? '800' : semiBold ? '600' : '400',
      margin: '0px',
      marginLeft: flexRight ? 'auto' : '0',
      padding: flex ? '0px 2px' : np ? '0px' : '10px 0px'
    }}
    {...props}
  />
)

export default Text
