<p align="center">
	<img src="https://kocisov.github.io/fleko/static/fleko.svg" width="174" height="154" alt="logo" />
</p>

# fleko [![npm package](https://img.shields.io/npm/v/fleko.svg?style=flat)](https://www.npmjs.org/package/fleko)

> Small React UI Library

Currently provides 8 customizable components

## Storybook

Available at https://kocisov.github.io/fleko

## Installation

```bash
# npm
npm install --save fleko

# yarn
yarn add fleko
```

## Usage

```js
import * as React from 'react'
import { Alert, Gradients, Text } from 'fleko'

export default class App extends React.PureComponent {
  state = {
    visible: true
  }

  render() {
    return (
      <Alert
        visible={this.state.visible}
        background={Gradients.sunKist}
        icon={<Icon size={20} color="#fff" />}
      >
        <Text>Application is running</Text>
      </Alert>
    )
  }
}
```
