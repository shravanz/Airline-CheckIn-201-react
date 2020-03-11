import axios from 'axios';
import { FLIGHT_LIST_URL } from '../config/urls';

export const getFlightList = async () => {
   return await axios.get(FLIGHT_LIST_URL).then(
        response => response);
}

export const assignedFlight = async (flightId) => {
    return await axios.get(FLIGHT_LIST_URL, {
        params: {
            id: flightId
        }
    }).then(response => response.data[0]);
}

export const updateFlight = async (flightId , data) => {
    return await axios.patch(`${FLIGHT_LIST_URL}/${flightId}`, data)
    .then(response => response);
}


