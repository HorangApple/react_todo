import React from 'react'
import {Provider} from 'react-redux'

import App from 'components/App'
import store from 'store/store'

const Root = () => {

  return (
    <Provider store = {store}>
      <App></App>
    </Provider>
  )
}

export default Root