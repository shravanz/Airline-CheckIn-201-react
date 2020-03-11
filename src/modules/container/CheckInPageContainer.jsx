import React, { Component } from 'react'
import Header from '../components/Header';
//import SeatMap from '../components/SeatMap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { fetchFlightPassengers, updatePassengerSeatAndStatus, updatePassengerDetail, createNewPassenger } from '../../axios/PassengerAPI';
import { assignedFlight, updateFlight } from '../../axios/FlightAPI';
import Passenger from '../components/Passenger';
import NewPassenger from '../components/NewPassenger';
import UpdatePassengerDetail from '../components/UpdatePassengerDetail';
import { connect } from 'react-redux'
import FlightDetail from '../components/FlightDetail';
import SeatContainer from './SeatContainer'
import MealItem from '../components/MealItem'
import MealServices from '../components/MealServices'
import AncillaryServices from '../components/AncillaryService'


export class CheckInPageContainer extends Component {

    constructor(props) {
        super(props)
        const role = this.props.role;
        let isAdmin = false;
        if (role === 'admin') {
            isAdmin = true;
        }

        this.state = {
            passengerList: '',
            flight: '',
            selectedPassengerId: '#',
            seatMap: [],
            isAdmin,
            gender: "Male",
            id: "",
            first_name: "",
            last_name: "",
            mobile_no: "",
            infant: "No",
            wheelChair: "No",
            date_of_birth: "",
            flight_id: this.props.match.params.id,
            allPassengerList: '',
            filterPassengerList: [],
            infantPax: false,
            wcPax: false,
            AcceptedPax: false,
            noPassportPax: false,
            noDOBPax: false,
            noAddressPax: false,
            passport: "",
            address: "",
            items: [],
            newItem: '',
            service: "Meal",
            passengerMealItem: [],
            passengerAncillaryService: [],
            passengerOldMealItem: [],
            passengerOldAncillaryService: [],



        }
    }

    getSeatNoFromSeatLocation = seatLocation => {
        let col = String(seatLocation).charAt(0);
        let row = String(seatLocation).substring(1);
        switch (col) {
            case "A": col = 0;
                break;
            case "B": col = 1;
                break;
            case "C": col = 2;
                break;
            case "D": col = 3;
                break;
            case "E": col = 4;
                break;
            case "F": col = 5;
                break;
            default:
        }
        return ((row - 1) * 6 + col)
    }

    componentDidMount() {
        let passengerListPromises = fetchFlightPassengers(this.props.match.params.id);
        passengerListPromises.then(passengerList => {
            this.setState({ passengerList: passengerList, allPassengerList: passengerList })
            return passengerList;
        })
            .then(passengerList => {
                let seatMap = [];
                for (let i = 0; i < passengerList.length; i++) {
                    if (passengerList[i].status === "AC") {
                        let paxId = String(passengerList[i].id);
                        let seatNo = this.getSeatNoFromSeatLocation(passengerList[i].seat_no)
                        let wheelChair = passengerList[i].wheelChair;
                        let infant = passengerList[i].infant;
                        seatMap = [...seatMap, { paxId, seatNo, wheelChair, infant }]
                    }
                }
                this.setState({ seatMap: seatMap });
            })
        let flightPromises = assignedFlight(this.state.flight_id);
        flightPromises.then(flight => this.setState({ flight: flight, items: flight.special_meals }));
    }

    filterPassenger = event => {
        let allPassengerList = this.state.allPassengerList;
        let filter_Pax_List = [];
        let infantPax = this.state.infantPax;
        let wcPax = this.state.wcPax;
        let AcceptedPax = this.state.AcceptedPax;
        let noPassportPax = this.state.noPassportPax;
        let noDOBPax = this.state.noDOBPax;
        let noAddressPax = this.state.noAddressPax;
        if (event.target.id === "AC_PAX") {
            if (event.target.checked) {
                AcceptedPax = true;
            } else {
                AcceptedPax = false
            }
            this.setState({ AcceptedPax: AcceptedPax })
        } else if (event.target.id === "INFANT_PAX") {
            if (event.target.checked) {
                infantPax = true
            } else {
                infantPax = false;
            }
            this.setState({ infantPax: infantPax })
        } else if (event.target.id === "WHEELCHAIR_PAX") {
            if (event.target.checked) {
                wcPax = true;
            } else {
                wcPax = false;
            }
            this.setState({ wcPax: wcPax })
        } else if (event.target.id === "NO_PASSPORT") {
            if (event.target.checked) {
                noPassportPax = true;
            } else {
                noPassportPax = false;
            }
            this.setState({ noPassportPax: noPassportPax })
        } else if (event.target.id === "NO_DOB") {
            if (event.target.checked) {
                noDOBPax = true;
            } else {
                noDOBPax = false;
            }
            this.setState({ noDOBPax: noDOBPax })
        } else if (event.target.id === "NO_ADDRESS") {
            if (event.target.checked) {
                noAddressPax = true;
            } else {
                noAddressPax = false;
            }
            this.setState({ noAddressPax: noAddressPax })
        }

        if (!wcPax && !infantPax && !AcceptedPax && !noPassportPax && !noDOBPax && !noAddressPax) {
            this.setState({ passengerList: allPassengerList })
        } else {
            if (AcceptedPax) {
                filter_Pax_List = allPassengerList.filter(passenger => passenger.status === "AC")
            }
            if (noPassportPax) {
                filter_Pax_List = allPassengerList.filter(passenger => passenger.passport === "")
            }
            if (infantPax) {
                if (filter_Pax_List.length !== 0) {
                    filter_Pax_List = filter_Pax_List.filter(passenger => passenger.infant === "Yes")
                } else {
                    filter_Pax_List = allPassengerList.filter(passenger => passenger.infant === "Yes")
                }
            }
            if (wcPax) {
                if (filter_Pax_List.length !== 0) {
                    filter_Pax_List = filter_Pax_List.filter(passenger => passenger.wheelChair === "Yes")
                } else {
                    filter_Pax_List = allPassengerList.filter(passenger => passenger.wheelChair === "Yes")
                }
            }
            if (noDOBPax) {
                if (filter_Pax_List.length !== 0) {
                    filter_Pax_List = filter_Pax_List.filter(passenger => passenger.date_of_birth === "")
                } else {
                    filter_Pax_List = allPassengerList.filter(passenger => passenger.date_of_birth === "")
                }
            }
            if (noAddressPax) {
                if (filter_Pax_List.length !== 0) {
                    filter_Pax_List = filter_Pax_List.filter(passenger => passenger.address === "")
                } else {
                    filter_Pax_List = allPassengerList.filter(passenger => passenger.address === "")
                }
            }
            this.setState({ passengerList: filter_Pax_List })
        }
    }

    selectGender = event => {
        console.log(event.target.value)
        this.setState({ gender: event.target.value })
    };

    hasInfant = event => {
        console.log(event.target.checked)
        let infant = '';
        event.target.checked ? infant = 'Yes' : infant = 'No';
        this.setState({ infant: infant })

    };

    wheelChairRequired = event => {
        console.log(event.target.checked)
        let wheelChairRequired = '';
        event.target.checked ? wheelChairRequired = 'Yes' : wheelChairRequired = 'No';
        this.setState({ wheelChair: wheelChairRequired })
    };


    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { first_name, last_name, mobile_no, date_of_birth, gender, infant, wheelChair, flight_id, passport, address } = this.state;
        const data = { first_name, last_name, mobile_no, gender, infant, wheelChair, flight_id, status: "NC", seat_no: "", date_of_birth, passport, address }
        let newPassengerPromises = createNewPassenger(data);
        newPassengerPromises.then(response => {
            console.log("Pax Created")
            let passengerListPromises = fetchFlightPassengers(flight_id);
            passengerListPromises.then(passengerList => this.setState({
                passengerList: passengerList, first_name: '', last_name: '',
                mobile_no: '', passport: '', date_of_birth: '', address: ''
            }));
        })
    }

    updateHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { selectedPassengerId, first_name, last_name, date_of_birth, passport, address } = this.state;
        let data = { first_name, last_name, date_of_birth, passport, address }
        let passengerDetailPromise = updatePassengerDetail(selectedPassengerId, data);
        passengerDetailPromise.then(response => {
            console.log("Pax Detail updated")
            let passengerList = this.state.passengerList.slice();
            let index = passengerList.findIndex(passenger => passenger.id === Number(selectedPassengerId))
            passengerList[index].first_name = first_name;
            passengerList[index].last_name = last_name;
            passengerList[index].date_of_birth = date_of_birth;
            passengerList[index].passport = passport;
            passengerList[index].address = address;
            this.setState({ passengerList: passengerList })
        })
    }

    changeHandler = event => {
        console.log('changed')
        this.setState({ [event.target.name]: event.target.value });
    };

    getPassengerId = (event) => {
        this.setState({ selectedPassengerId: event.target.value });
        let passenger = this.state.allPassengerList.find(passenger => passenger.id === Number(event.target.value));
        console.log(passenger)
        let first_name = passenger.first_name;
        let last_name = passenger.last_name;
        let mobile_no = passenger.mobile_no;
        let passport = passenger.passport;
        let address = passenger.address;
        let date_of_birth = passenger.date_of_birth;
        this.setState({ selectedPassengerId: event.target.value, first_name, last_name, mobile_no, passport, address, date_of_birth });
        console.log("Selected")
        if (!this.state.isAdmin) {
            let flightSpecialMeals = this.state.flight.special_meals;
            let itemCount = flightSpecialMeals.length
            let passengerMealItem = Array(itemCount).fill(false);
            for (let i = 0; i < passenger.special_meals.length; i++) {
                let index = flightSpecialMeals.findIndex(item => passenger.special_meals[i] === item)
                passengerMealItem[index] = true;
            }
            this.setState({ passengerMealItem: passengerMealItem, passengerOldMealItem: passengerMealItem })

            let flightAncillary = this.state.flight.ancillary;
            let ancillaryCount = flightAncillary.length
            let passengerAncillary = Array(ancillaryCount).fill(false);
            for (let i = 0; i < passenger.ancillary.length; i++) {
                let index = flightAncillary.findIndex(item => passenger.ancillary[i] === item)
                passengerAncillary[index] = true;
            }
            this.setState({ passengerAncillaryService: passengerAncillary, passengerOldAncillaryService: passengerAncillary })
        }

    }

    getSeatLocation(seatNo) {
        let seatLocation = '';
        const row = Math.floor(seatNo / 6) + 1;
        const col = seatNo % 6;
        switch (col) {
            case 0: seatLocation = 'A' + row;
                break;
            case 1: seatLocation = 'B' + row;
                break;
            case 2: seatLocation = 'C' + row;
                break;
            case 3: seatLocation = 'D' + row;
                break;
            case 4: seatLocation = 'E' + row;
                break;
            case 5: seatLocation = 'F' + row;
                break;
            default:
        }
        return seatLocation;
    }

    getMatchingPaxId = (passengerList, paxId) => {
        for (let i = 0; i < passengerList.length; i++) {
            if (passengerList[i].id === Number(paxId)) {
                return i;
            }
        }
    }


    updatePassengerList = (paxId, seatLocation, passengerList, seatMap) => {
        let i = this.getMatchingPaxId(passengerList, paxId);
        if (passengerList[i].seat_no === seatLocation) {
            passengerList[i].seat_no = '';
            passengerList[i].status = 'NC';
        } else {
            passengerList[i].seat_no = seatLocation;
            passengerList[i].status = 'AC';
        }
        let data = {
            status: passengerList[i].status,
            seat_no: passengerList[i].seat_no,
        }
        let updatedPaxDetailPromises = updatePassengerSeatAndStatus(passengerList[i].id, data);
        updatedPaxDetailPromises.then(response => console.log("updated passenger"))
        return passengerList;
    }


    handleClick = event => {
        let seatNo = Number(event.target.value);
        const seatLocation = this.getSeatLocation(seatNo)
        let seatMap = this.state.seatMap.slice();
        let paxId = this.state.selectedPassengerId;
        var flag = true;
        let passengerList = this.state.passengerList.slice();
        let index = this.getMatchingPaxId(passengerList, paxId);
        let wheelChair = passengerList[index].wheelChair;
        let infant = passengerList[index].infant;
        for (let i = 0; i < seatMap.length; i++) {
            if (seatNo === seatMap[i].seatNo && paxId === seatMap[i].paxId) {
                flag = false;
                seatMap.splice(i, 1);
                break;
            } else if (paxId === seatMap[i].paxId) {
                flag = false;
                seatMap.splice(i, 1);
                seatMap = [...seatMap, { paxId, seatNo, wheelChair, infant }]
                break;
            }
        }
        if (flag) {
            seatMap = [...seatMap, { paxId, seatNo, wheelChair, infant }]
        }
        let updatedPaxList = this.updatePassengerList(paxId, seatLocation, passengerList, seatMap);
        this.setState({ seatMap: seatMap, passengerList: updatedPaxList });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.newItem.length) {
            return;
        }
        let oldItems = this.state.items.slice();
        let newItemMenu = oldItems.concat(this.state.newItem)
        this.setState(state => ({
            items: state.items.concat(this.state.newItem),
            newItem: ''
        }));
        let data = {};
        if (this.state.service === "Meal") {
            data = {
                special_meals: newItemMenu
            }
        } else {
            data = {
                ancillary: newItemMenu
            }
        }
        let flightPromises = updateFlight(this.state.flight_id, data);
        flightPromises.then(response => console.log("Flight Meal or Ancillary Updated"))
    }

    handleChange = (event) => {
        this.setState({ newItem: event.target.value });
    }

    handleRemove = event => {
        console.log(event.target.value)
        let items = this.state.items.slice();
        let newItemMenu = items.filter(item => item !== event.target.value)
        this.setState({ items: newItemMenu })
        let data = {};
        if (this.state.service === "Meal") {
            data = {
                special_meals: newItemMenu
            }
        } else {
            data = {
                ancillary: newItemMenu
            }
        }
        let flightPromises = updateFlight(this.state.flight_id, data);
        flightPromises.then(response => console.log("Flight Meal or Ancillary Updated"))
    }

    onSelectMealItem = event => {
        console.log("Meal")

        this.setState({ service: 'Meal', items: this.state.flight.special_meals })
    }

    onSelectAncillary = event => {
        console.log("Ancillary")
        this.setState({ service: 'Ancillary', items: this.state.flight.ancillary })
    }

    updatePassengerMealItem = event => {
        let passengerMealItem = this.state.passengerMealItem.slice();
        console.log(passengerMealItem)
        let index = Number(event.target.id);
        passengerMealItem[index] = !passengerMealItem[index]
        console.log(passengerMealItem)
        this.setState({ passengerMealItem: passengerMealItem })
    }

    updatePassengerAncillaryService = event => {
        let passengerAncillaryService = this.state.passengerAncillaryService.slice();
        console.log(passengerAncillaryService)
        let index = Number(event.target.id);
        passengerAncillaryService[index] = !passengerAncillaryService[index]
        console.log(passengerAncillaryService)
        this.setState({ passengerAncillaryService: passengerAncillaryService })
    }

    updateToPreviousMealItem = () => {
        console.log("UNDO Meal")
        this.setState({ passengerMealItem: this.state.passengerOldMealItem })
    }
    updateToPreviousAncillaryServices = () => {
        console.log("UNDO Ancillary")
        this.setState({ passengerAncillaryService: this.state.passengerOldAncillaryService })
    }

    render() {
        const flightId = this.flight_id;
        return (
            <>
                <Header />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="8">
                            <Passenger flightId={flightId} onChange={(event) => this.getPassengerId(event)}
                                passengerList={this.state.passengerList} flight={this.state.flight} isAdmin={this.state.isAdmin}
                                passengerId={this.state.selectedPassengerId} filterPassenger={event => this.filterPassenger(event)} />
                            <MDBRow style={{ borderTopStyle: "solid", marginTop: "36px", paddingTop: "5px" }}>
                                <MDBCol>
                                    {this.state.isAdmin ? <NewPassenger flightId={flightId} selectGender={event => this.selectGender(event)}
                                        hasInfant={event => this.hasInfant(event)} wheelChairRequired={event => this.wheelChairRequired(event)}
                                        submitHandler={event => this.submitHandler(event)} changeHandler={event => this.changeHandler(event)}
                                        passengerDetail={this.state} /> : <></>}
                                </MDBCol>
                                <MDBCol>
                                    {this.state.isAdmin ? <UpdatePassengerDetail flightId={flightId} selectGender={event => this.selectGender(event)}
                                        hasInfant={event => this.hasInfant(event)} wheelChairRequired={event => this.wheelChairRequired(event)}
                                        submitHandler={event => this.updateHandler(event)} changeHandler={event => this.changeHandler(event)}
                                        passengerDetail={this.state} /> : <></>}
                                </MDBCol>
                                <MDBCol>
                                    {!this.state.isAdmin ? <MealServices state={this.state}
                                        updatePassengerMealItem={event => this.updatePassengerMealItem(event)}
                                        updateToPreviousMealItem={() => this.updateToPreviousMealItem()}
                                    /> : <></>}
                                </MDBCol>
                                <MDBCol>
                                    {!this.state.isAdmin ? <AncillaryServices state={this.state}
                                        updatePassengerAncillaryService={event => this.updatePassengerAncillaryService(event)}
                                        updateToPreviousAncillaryServices={() => this.updateToPreviousAncillaryServices()}
                                    /> : <></>}
                                </MDBCol>

                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="4">
                            {!this.state.isAdmin ? <SeatContainer passengerId={this.state.selectedPassengerId}
                                passengerList={this.state.passengerList} flight={this.state.flight} isAdmin={this.state.isAdmin}
                                onClick={(event) => this.handleClick(event)} bookedSeatMap={this.state.seatMap} /> : <>
                                    <FlightDetail flight={this.state.flight} />

                                    <MealItem
                                        items={this.state.items}
                                        handleRemove={(event) => this.handleRemove(event)}
                                        handleSubmit={event => this.handleSubmit(event)}
                                        handleChange={event => this.handleChange(event)}
                                        selectMealItem={event => this.onSelectMealItem(event)}
                                        selectAncillary={event => this.onSelectAncillary(event)}
                                        state={this.state}
                                    /></>
                            }
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        role: state.role
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFlightDetail: () => dispatch()
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckInPageContainer)
