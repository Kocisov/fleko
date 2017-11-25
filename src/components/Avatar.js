import * as React from 'react'

const Avatar = ({ size = 40, className, src, alt }) => (
  <img
    style={{
      borderRadius: '50%',
      height: `${size}px`,
      objectFit: 'cover',
      width: `${size}px`
    }}
    src={src}
    alt={alt}
  />
)

export default Avatar
