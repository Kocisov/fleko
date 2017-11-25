import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Info from 'react-icons/lib/io/alert'
import Close from 'react-icons/lib/io/close'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import Alert from '../src/components/Alert'
import Text from '../src/components/Text'

storiesOf('Alert', module)
  .addDecorator(Decorator)
  .add('default', () => (
    <Alert visible={true}>
      <Text np>Default Alert</Text>
    </Alert>
  ))
  .add('colored', () => (
    <Alert visible={true} background={Gradients.fireWatch}>
      <Text np>Alert</Text>
    </Alert>
  ))
  .add('colored with left icon', () => (
    <Alert
      visible={true}
      background={Gradients.fireWatch}
      icon={<Info size={20} color="#fff" />}
    >
      <Text np>Alert</Text>
    </Alert>
  ))
  .add('colored with both icons', () => (
    <Alert
      visible={true}
      background={Gradients.fireWatch}
      icon={<Info size={20} color="#fff" />}
      rightIcon={<Close size={20} color="#fff" />}
    >
      <Text np>Application is running on server</Text>
      <Text flex bold>
        Zebra
      </Text>
    </Alert>
  ))
