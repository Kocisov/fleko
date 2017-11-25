import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import Button from '../src/components/Button'

const gradientKeys = Object.keys(Gradients)

storiesOf('Gradients', module)
  .addDecorator(Decorator)
  .add('list', () => (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {gradientKeys.map(gradient => (
        <div
          key={gradient}
          style={{
            alignItems: 'center',
            background: Gradients[gradient],
            borderRadius: '50%',
            color: '#fff',
            display: 'flex',
            height: 150,
            justifyContent: 'center',
            margin: 5,
            width: 150
          }}
        >
          {gradient}
        </div>
      ))}
    </div>
  ))
