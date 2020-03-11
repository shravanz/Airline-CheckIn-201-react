import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import GoogleLogin from 'react-google-login';

export class Login extends Component {

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 blue-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Log in
                    </h3>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">    
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput label="Your email" name="email" required group type="text" validate onChange={this.props.onChange} >
                  <div className='invalid-feedback ml-3 pl-3'>
                    Please provide a valid city.
                </div>
                  <div className='valid-feedback ml-3 pl-3'>Looks good!</div>

                </MDBInput>
                <MDBInput
                  label="Your password"
                  name="password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0" required onChange={this.props.onChange}
                >
                  <div className='invalid-feedback ml-3 pl-3'>
                    Please provide a valid city.
                </div>
                  <div className='valid-feedback ml-3 pl-3'>Looks good!</div>

                </MDBInput>

                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                  <MDBCol md="5" className="d-flex align-items-start">
                    <div className="text-center">
                      <MDBBtn
                        color="grey"
                        rounded
                        type="button"
                        className="z-depth-1a"
                        onClick={this.props.handleLogin}
                      >
                        Log in
                        </MDBBtn>
                    </div>
                  </MDBCol>
                  
                  <MDBCol md="7" className="d-flex align-items-start">
                  <div>
                    <GoogleLogin
                      clientId="769432167633-k5qb3p2s29cintlcbj0c6a4vtrta5h2a.apps.googleusercontent.com"
                      onSuccess={this.props.successGoogleLogin}
                      onFailure={this.props.failureGooleLogin}
                    />
                  </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    )
  }
}

export default Login
