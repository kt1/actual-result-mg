import React from 'react';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { login } from '../actions/Action'
import { render } from 'react-dom';
import Top from './Top'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

   this.store = createStore(
      rootReducer,
      applyMiddleware(thunk, logger)
    )

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  handleClickSubmit(e) {
    console.log(this.state.email);
    console.log(this.state.password);
    this.store.dispatch(login(this.state))
    render(
      <Top />
      , document.getElementById('root')
    )
    e.preventDefault();
  }

  render() {
    /* <label className="siimple-label siimple--color-">Password</label> */
    return (
      <div className="login-form">
        <form className="siimple-form" method="post" style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", margin: "auto", width: "80%", height: "18rem", maxWidth: "400px", border: "solid #546778", borderRadius: "30px" }}>
          <div className="siimple-form-title" style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "30px" }}>result management</div>
          <div className="siimple-form-field" style={{ textAlign: "center" }}>
            <input name="email" type="text" value={this.state.email} placeholder="email" className="siimple-input" style={{ width: "80%" }} onChange={this.handleChangeEmail} />
          </div>
          <div className="siimple-form-field" style={{ textAlign: "center" }}>
            <input name="password" type="text" value={this.state.password} placeholder="password" className="siimple-input" style={{ width: "80%" }} onChange={this.handleChangePassword} />
          </div>
          <div className="siimple-form-field" style={{ textAlign: "center", paddingTop: "20px" }} >
            <div type="submit" value="Submit" className="siimple-btn siimple-btn--navy" style={{ width: "80%" }} onClick={this.handleClickSubmit}>login</div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login