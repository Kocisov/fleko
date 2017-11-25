import * as React from 'react'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'

const Alert = ({
  background,
  children,
  className,
  icon,
  onClick,
  onRightClick,
  rightIcon,
  visible
}) => (
  <Transition
    component={false}
    enter={{
      opacity: 1,
      translateY: spring(0, { stiffness: 200, damping: 9 })
    }}
    leave={{
      opacity: 0,
      translateY: -100
    }}
  >
    {visible && (
      <div
        key="alert-box"
        style={{
          alignItems: 'center',
          background: background ? background : '#333',
          borderRadius: '3px',
          color: '#fff',
          cursor: onClick ? 'pointer' : '',
          display: 'flex',
          minWidth: '400px',
          margin: '10px',
          padding: '10px'
        }}
        onClick={onClick}
      >
        {icon && icon}
        {children}
        {rightIcon && (
          <div
            onClick={onRightClick}
            style={{ cursor: 'pointer', marginLeft: 'auto' }}
          >
            {rightIcon}
          </div>
        )}
      </div>
    )}
  </Transition>
)

export default Alert
