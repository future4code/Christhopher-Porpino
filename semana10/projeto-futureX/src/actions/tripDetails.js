import axios from "axios";

const setTripId = (details) => ({
    type: "SET_TRIP_ID",
    payload: {
        selectedID
    }
})

const setCandidatesAction = (candidates) => ({
    type: "SET_CANDIDATES_ACTION",
    payload: {
        candidates
    }
});

export const getTripsDetails = () => async (dispatch) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/christhopher/trip/:id?=");
    // console.log(response.data.trip)
    dispatch(setListCandidates(response.data.trip))
}