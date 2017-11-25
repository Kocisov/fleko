import * as React from 'react'

const Button = ({
  background = '#333',
  color = '#fff',
  disabled,
  icon,
  className,
  onClick,
  children,
  m = 0,
  w = 78
}) => (
  <div
    style={{
      alignItems: 'center',
      background,
      border: '0',
      borderRadius: '3px',
      color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-block',
      justifyContent: 'center',
      margin: m,
      marginRight: '5px',
      opacity: disabled ? '0.5' : '1',
      outline: '0',
      padding: '5px 15px',
      textAlign: 'center',
      minWidth: w
    }}
    onClick={onClick}
    onKeyPress={e => {
      if (!onClick) {
        return false
      }

      if (disabled) {
        return false
      }

      const isTriggered = e.key === ' ' || e.key === 'Enter'

      if (!isTriggered) {
        return false
      }

      e.preventDefault()
      onClick()
    }}
    role="button"
  >
    {icon && <div style={{ marginRight: 2 }}>{icon}</div>}
    {children}
  </div>
)

export default Button
