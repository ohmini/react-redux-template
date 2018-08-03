import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {RouteProvider} from 'react-router5'

import './index.css';
import {router} from './router'
import {store} from './state/store'
import Root from './view/Root'

router.start('/home')
ReactDOM.render(
  <Provider store={store}>
    <RouteProvider router={router}>
      <Root />
    </RouteProvider>
  </Provider>,
  document.getElementById('root')
)
