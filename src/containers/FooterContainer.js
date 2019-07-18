import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as loginActions from 'store/modules/login'
import Footer from 'components/Footer'

class FooterContainer extends Component {

  render() {
    return (
      <Footer />
    )
  }
}

export default connect(
  (dispatch) => ({
    LoginActions : bindActionCreators(loginActions,dispatch)
  })
)(FooterContainer)