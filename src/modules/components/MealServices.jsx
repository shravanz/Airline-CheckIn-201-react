// Material Design for BootStrap
// THIS MODULE WILL TRY TO UPDATE THE MEAL SERVICES FOR THE EACH PASSENGER WHEN CLICKED
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
import { updatePassengerMealItem } from "../../axios/PassengerAPI";
export class MealServices extends Component {
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
      console.log("Called");
      this.props.updateToPreviousMealItem();
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
    const { selectedPassengerId, passengerMealItem, flight } = this.props.state;
    let MealItems = [];
    for (let i = 0; i < passengerMealItem.length; i++) {
      if (passengerMealItem[i]) {
        MealItems.push(flight.special_meals[i]);
      }
    }
    let data = {
      special_meals: MealItems
    };
    let passengerPromises = updatePassengerMealItem(selectedPassengerId, data);
    passengerPromises.then(response =>
      console.log("updated Meal : " + MealItems)
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
          Meal
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
            <MDBIcon icon='utensils' className='text-white mr-2 ' />
            Meal Service
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              {flight.special_meals &&
                flight.special_meals.map((item, index) => {
                  return (
                    <span key={index}>
                      <MDBCol md='1'>
                        <input
                          type='checkbox'
                          id={index}
                          value={item}
                          checked={this.props.state.passengerMealItem[index]}
                          onChange={this.props.updatePassengerMealItem}
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

export default MealServices;
