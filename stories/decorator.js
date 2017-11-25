import * as React from 'react'

export default storyFn => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh'
    }}
  >
    {storyFn()}
  </div>
)
