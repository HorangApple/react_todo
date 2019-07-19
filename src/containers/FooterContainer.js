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
  clickLogout = () => {
    const {LoginActions} = this.props
    LoginActions.logout()
  }
  
  render() {
    const {user} = this.props
    return (
      <Footer clickLogin={this.clickLogin} clickLogout={this.clickLogout} user={user}/>
    )
  }
}

export default connect(
  (state) => ({
    user: state.login.get("user"),
  }),
  (dispatch) => ({
    LoginActions : bindActionCreators(loginActions,dispatch)
  })
)(FooterContainer)