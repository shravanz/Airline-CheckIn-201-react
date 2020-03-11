import React, { Component } from 'react'
import { MDBContainer, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
import { updatePassengerAncillary } from '../../axios/PassengerAPI'
export class AncillaryServices extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal13: false
        }
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        if(this.state[modalNumber]){
            console.log("Called")
             this.props.updateToPreviousAncillaryServices()
        }
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    updateAndClose = () => {
        this.setState({
            modal13: !this.state.modal13
        });
        const { selectedPassengerId, passengerAncillaryService, flight } = this.props.state;
        let paxAncillary = []
        for (let i = 0; i < passengerAncillaryService.length; i++) {
            if (passengerAncillaryService[i]) {
                paxAncillary.push(flight.ancillary[i])
            }
        }
        let data = {
            ancillary: paxAncillary
        }
        let passengerPromises = updatePassengerAncillary(selectedPassengerId, data)
        passengerPromises.then(response => console.log("updated Ancillary : " + paxAncillary))
    }

    render() {
        const { selectedPassengerId, flight } = this.props.state;
        return (
            <MDBContainer>
                <MDBBtn outline size='sm' color="primary" gradient="blue" onClick={this.toggle(13)} disabled={selectedPassengerId === "#"}>
                   Ancillary
                </MDBBtn>
                <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} size="md" >
                    <MDBModalHeader className="text-center text-white blue-gradient darken-3" titleClass="w-100" tag="h5">
                        <MDBIcon icon="users" className="text-white mr-2" />
                        Ancillary Service
                </MDBModalHeader>
                    <MDBModalBody>

                        <MDBRow>
                            {flight.ancillary && flight.ancillary.map((item, index) => {
                                return (<span key={index} >
                                    <MDBCol md="1"><input type="checkbox" id={index} value={item} checked={this.props.state.passengerAncillaryService[index]} onChange={this.props.updatePassengerAncillaryService} /> </MDBCol>
                                    <MDBCol md="3"><b>{item}</b></MDBCol>
                                </span>
                                )
                            })}
                        </MDBRow>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(13)}>
                                CANCEL
                                </MDBBtn>
                            <MDBBtn color="primary" onClick={this.updateAndClose}  >
                                UPDATE
                                </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        )
    }
}

export default AncillaryServices
