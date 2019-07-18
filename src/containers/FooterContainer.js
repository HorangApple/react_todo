import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as loginActions from 'store/modules/login'
import Footer from 'components/Footer'

class FooterContainer extends Component {
  clickLogin = () => {
    const {LoginActions} = this.props
    LoginActions.login()
  }
  render() {
    return (
      <Footer clickLogin={this.clickLogin}/>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    LoginActions : bindActionCreators(loginActions,dispatch)
  })
)(FooterContainer)