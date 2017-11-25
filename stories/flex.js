import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import Flex from '../src/components/Flex'
import Avatar from '../src/components/Avatar'

storiesOf('Flex', module)
  .addDecorator(Decorator)
  .add('align', () => (
    <Flex align="center">
      <Avatar
        size={60}
        src="https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg"
        alt=""
      />
      <Avatar
        size={160}
        src="https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg"
        alt=""
      />
    </Flex>
  ))
  .add('direction', () => (
    <Flex direction="column" align="center">
      <Avatar
        size={60}
        src="https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg"
        alt=""
      />
      <Avatar
        size={160}
        src="https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg"
        alt=""
      />
    </Flex>
  ))
