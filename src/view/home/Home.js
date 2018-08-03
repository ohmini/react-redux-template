import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import './Home.css'

import {systemActions} from '../../state/system/actions'

export class Home extends PureComponent{

  handleClick = () => {
    const {setMessage} = this.props
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    setMessage(text)
  }

  render() {
    const {message} = this.props
    return (
      <div className="container">
        <h1 key="message">message: {message}</h1>
        <a onClick={this.handleClick} key="button" className="btn">random text</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.system.message,
})

const withStore = connect(mapStateToProps, {
  setMessage: systemActions.setMessage,
})

export default withStore(Home)