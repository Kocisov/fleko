import * as React from 'react'

const Flex = ({
  align = 'flex-start',
  justifyContent = 'initial',
  direction = 'row',
  wrap = 'nowrap',
  w,
  m = 0,
  children,
  ...props
}) => (
  <div
    style={{
      alignItems: align,
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent,
      margin: `${m}px`,
      width: w ? w : 'auto'
    }}
    {...props}
  >
    {children}
  </div>
)

export default Flex
