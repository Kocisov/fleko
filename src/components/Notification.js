import * as React from 'react'

const Notification = ({
  background = '#333',
  color = '#fff',
  children,
  value
}) => (
  <div
    style={{
      display: 'inline-block',
      marginRight: '10px',
      position: 'relative'
    }}
  >
    <div
      style={{
        background,
        borderRadius: '50%',
        color,
        fontSize: '13px',
        minWidth: '23px',
        padding: '2px 4px',
        position: 'absolute',
        right: '-8px',
        textAlign: 'center',
        top: '-8px'
      }}
    >
      {value}
    </div>
    {children}
  </div>
)

export default Notification
