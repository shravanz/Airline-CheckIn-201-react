import React, { Component } from "react";
import Login from "../components/Login";
import { authenticateUser } from "../../axios/LoginAPI";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateUserDetail } from "../../actions/UserAction";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    let error = "";
    let loggedIn = false;
    this.state = {
      loggedIn,
      error
    };
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  handleLogin = () => {
    console.log(this.state.email);
    let userDetail = authenticateUser(this.state.email, this.state.password);
    userDetail.then(user => {
      if (user.length === 1) {
        this.props.updateUserDetail(user[0].role, user[0].firstName);

        console.log("login successful");
      } else {
        console.log("login Error");
      }
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  sccessGoogleLogin = response => {
    // console.log(response.profileObj.name);
    this.props.updateUserDetail("staff", response.profileObj.name);
    this.setState({
      loggedIn: true
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  failureGooleLogin = response => {
    console.log(response);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    console.log(this.props.token);
    if (this.props.token !== "") {
      return <Redirect to='/home' />;
    }

    return (
      <div>
        <Login
          handleLogin={() => this.handleLogin()}
          onChange={event => this.onChange(event)}
          successGoogleLogin={this.sccessGoogleLogin}
          failureGooleLogin={this.failureGooleLogin}
        />
      </div>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mapStateToProps = state => {
  return {
    userName: state.userName,
    role: state.role,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserDetail: (role, userName) =>
      dispatch(updateUserDetail(role, userName, "Login-Attempt"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
