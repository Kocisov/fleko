import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import Text from '../src/components/Text'

storiesOf('Text', module)
  .addDecorator(Decorator)
  .add('default', () => <Text>Some text</Text>)
  .add('size', () => <Text size={30}>Some text</Text>)
  .add('semiBold', () => <Text semiBold>Some text</Text>)
  .add('bold', () => <Text bold>Some text</Text>)
