import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from './decorator'
import Gradients from '../src/gradients'
import ProgressBar from '../src/components/ProgressBar'

storiesOf('ProgressBar', module)
  .addDecorator(Decorator)
  .add('default', () => <ProgressBar w={400} value={50} />)
  .add('colored', () => (
    <ProgressBar w={400} color={Gradients.sunKist} value={50} />
  ))
  .add('colored container', () => (
    <ProgressBar
      background={Gradients.deepSpace}
      color={Gradients.sunKist}
      value={50}
      w={400}
    />
  ))
  .add('with title', () => (
    <ProgressBar
      title="Uploading a file..."
      color={Gradients.poncho}
      value={50}
      w={400}
    />
  ))
