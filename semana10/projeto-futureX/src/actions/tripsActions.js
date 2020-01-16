import axios from "axios";

const setListTrips = (trips) => ({
    type: "SET_LIST_TRIPS",
    payload: {
        trips: trips
    }
});

export const getTrips = () => async (dispatch) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/christhopher/trips");
    // console.log(response.data.trips)
    dispatch(setListTrips(response.data.trips))
}