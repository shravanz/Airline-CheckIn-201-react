// Material Design for BootStrap
// THIS MODULE WILL TRY TO UPDATE THE ANCILLARY SERVICES FOR THE EACH PASSENGER WHEN CLICKED
import React, { Component } from "react";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol
} from "mdbreact";
import { updatePassengerAncillary } from "../../axios/PassengerAPI";
export class AncillaryServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal13: false
    };
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  toggle = N => () => {
    let modalNumber = "modal" + N;
    if (this.state[modalNumber]) {
      // console.log("Called");
      this.props.updateToPreviousAncillaryServices();
    }
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  updateAndClose = () => {
    this.setState({
      modal13: !this.state.modal13
    });
    const {
      selectedPassengerId,
      passengerAncillaryService,
      flight
    } = this.props.state;
    let Ancillarys = [];
    for (let i = 0; i < passengerAncillaryService.length; i++) {
      if (passengerAncillaryService[i]) {
        Ancillarys.push(flight.ancillary[i]);
      }
    }
    let data = {
      ancillary: Ancillarys
    };
    let passengerPromises = updatePassengerAncillary(selectedPassengerId, data);
    passengerPromises.then(response =>
      console.log("updated Ancillary : " + Ancillarys)
    );
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    const { selectedPassengerId, flight } = this.props.state;
    return (
      <MDBContainer>
        <MDBBtn
          outline
          size='md'
          color='primary'
          gradient='blue'
          onClick={this.toggle(13)}
          disabled={selectedPassengerId === "#"}
        >
          Ancillary
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal13}
          toggle={this.toggle(13)}
          size='md'
        >
          <MDBModalHeader
            className='text-center text-white near-moon-gradient'
            titleClass='w-100'
            tag='h5'
          >
            <MDBIcon icon='cog' className='text-white mr-2' />
            Ancillary Service
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              {flight.ancillary &&
                flight.ancillary.map((item, index) => {
                  return (
                    <span key={index}>
                      <MDBCol md='1'>
                        <input
                          type='checkbox'
                          id={index}
                          value={item}
                          checked={
                            this.props.state.passengerAncillaryService[index]
                          }
                          onChange={this.props.updatePassengerAncillaryService}
                        />{" "}
                      </MDBCol>
                      <MDBCol md='3'>
                        <b>{item}</b>
                      </MDBCol>
                    </span>
                  );
                })}
            </MDBRow>
            <MDBModalFooter>
              <MDBBtn color='danger' onClick={this.toggle(13)}>
                CANCEL
              </MDBBtn>
              <MDBBtn color='success' onClick={this.updateAndClose}>
                UPDATE
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AncillaryServices;
