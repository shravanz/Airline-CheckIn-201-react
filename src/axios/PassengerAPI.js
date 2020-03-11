import axios from 'axios';
import { PASSENGER_DETAILS_URL } from '../config/urls'

export const fetchFlightPassengers = async (flightId) => {
    return await axios.get(PASSENGER_DETAILS_URL, { params: {flight_id: flightId }})
        .then(response => response.data);
}

export const createNewPassenger = async (data) => {
    return axios.post(PASSENGER_DETAILS_URL, data).then(response => response)
}

export const updatePassengerSeatAndStatus = async (paxId, data) => {
    return axios.patch(`${PASSENGER_DETAILS_URL}/${paxId}`, data).then(response => response)
}

export const updatePassengerDetail = async (paxId, data) => {
    return axios.patch(`${PASSENGER_DETAILS_URL}/${paxId}`, data).then(response => response)
}

export const updatePassengerMealItem = async (paxId, data) => {
    return axios.patch(`${PASSENGER_DETAILS_URL}/${paxId}`, data).then(response => response)
}

export const updatePassengerAncillary = async (paxId, data) => {
    return axios.patch(`${PASSENGER_DETAILS_URL}/${paxId}`, data).then(response => response)
}