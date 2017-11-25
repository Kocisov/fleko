import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import Input from '../src/components/Input'

storiesOf('Input', module)
  .addDecorator(Decorator)
  .add('default', () => <Input />)
  .add('placeholder', () => <Input placeholder="Your username..." />)
