import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import Button from '../src/components/Button'

storiesOf('Button', module)
  .addDecorator(Decorator)
  .add('default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('default disabled', () => (
    <Button disabled onClick={() => action('clicked')}>
      Default Disabled Button
    </Button>
  ))
  .add('colored', () => (
    <Button background={Gradients.sunKist} onClick={action('clicked')}>
      SunKist gradient button
    </Button>
  ))
  .add('colored disabled', () => (
    <Button
      disabled
      background={Gradients.sunKist}
      onClick={() => action('clicked')}
    >
      SunKist gradient button
    </Button>
  ))
