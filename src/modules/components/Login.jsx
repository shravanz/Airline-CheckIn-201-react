// Material Design for BootStrap
// THIS COMPONENET IS RESPONSIBLE FOR LOGIN ACTION WITH GOOGLE OAUTH SIGIN
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import Background from "../../airport3.jpg";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from "mdbreact";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class Login extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(" + Background + ") ",
          backgroundSize: "cover"
        }}
      >
        <br />
        <MDBContainer>
          <h2 style={{ fontWeight: 900 }}> A project case study</h2>
          <MDBRow center>
            <MDBCol md='6'>
              <h1 style={{ fontWeight: 550 }}>201 React Program Mindtree</h1>
              <MDBCard>
                <form className='needs-validation'>
                  <div className='header pt-2 aqua-gradient'>
                    <MDBRow className='d-flex justify-content-center'>
                      <h3 className='white-text mb-3 pt-3 font-weight-bold'>
                        LOGIN
                      </h3>
                    </MDBRow>
                    <MDBRow className='mt-2 mb-3 d-flex justify-content-center'></MDBRow>
                  </div>
                  <MDBCardBody className='mx-4 mt-4'>
                    <MDBInput
                      label='UserName'
                      name='email'
                      required
                      group
                      id='materialFormRegisterConfirmEx3'
                      type='text'
                      validate
                      onChange={this.props.onChange}
                    ></MDBInput>
                    <MDBInput
                      label='Password'
                      name='password'
                      group
                      type='password'
                      validate
                      containerClass='mb-0'
                      required
                      onChange={this.props.onChange}
                    ></MDBInput>

                    <MDBRow className='d-flex align-items-center mb-4 mt-6'>
                      <MDBCol md='5' className='d-flex align-items-start'>
                        <div className='text-center'>
                          <MDBBtn
                            color='green'
                            rounded
                            type='button'
                            className='z-depth-1a'
                            onClick={this.props.handleLogin}
                          >
                            Log in
                          </MDBBtn>
                        </div>
                      </MDBCol>
                      {/* THE Social media login user will be default staff */}
                      <MDBCol
                        md='7'
                        className='d-flex align-items-start align-right'
                      >
                        <div>
                          <GoogleLogin
                            clientId='415924756271-qapdng11n6a8thlfc5fbgrjmhv1dlerk.apps.googleusercontent.com' //TODO encrypt and abtract
                            onSuccess={this.props.successGoogleLogin}
                            onFailure={this.props.failureGooleLogin}
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <div
                      class='alert alert-light'
                      // text-align='center'
                      margin='2px'
                      role='alert'
                    >
                      <i class='fas fa-info-circle'></i> Please check the README
                      File
                    </div>
                  </MDBCardBody>
                </form>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
// TODO validation properly
export default Login;
