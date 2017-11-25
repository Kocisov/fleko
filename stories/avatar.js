import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import Avatar from '../src/components/Avatar'

storiesOf('Avatar', module)
  .addDecorator(Decorator)
  .add('default', () => (
    <Avatar src="https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg" alt="" />
  ))
  .add('size', () => (
    <Avatar
      size={160}
      src="https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg"
      alt=""
    />
  ))
