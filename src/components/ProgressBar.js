import * as React from 'react'
import Flex from './Flex'
import Text from './Text'

const ProgressBar = ({
  background,
  color,
  title,
  value,
  className,
  w = 100
}) => (
  <Flex m={10} direction="column">
    {title && (
      <Flex w="100%" align="center">
        <Text semiBold>{title}</Text>
        <Text semiBold flexRight>
          {value}%
        </Text>
      </Flex>
    )}
    <div
      style={{
        background: background ? background : '#ced4da',
        borderRadius: '3px',
        minHeight: '6px',
        width: w,
        minWidth: '100px'
      }}
    >
      <div
        style={{
          background: color ? color : '#228ae6',
          borderRadius: '3px',
          height: '6px',
          maxWidth: '100%',
          transition: `width .7s ease-in-out`,
          width: `${value}%`
        }}
      />
    </div>
  </Flex>
)

export default ProgressBar
