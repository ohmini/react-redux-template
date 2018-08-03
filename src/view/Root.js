import * as React from 'react'
import {RouteNode} from 'react-router5'
import {startsWithSegment} from 'router5-helpers'

import {Home} from './home'

export class Root extends React.Component {

  renderChild(route) {
    const test = startsWithSegment(route.name)
    if (test('home')) {
      return <Home />
    } else {
      return null
    }
  }

  render() {
    return (
      <RouteNode nodeName="">
        {({route}) => this.renderChild(route)}
      </RouteNode>
    )
  }
}

export default Root
