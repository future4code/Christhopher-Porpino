const initalState = {
    allTrips: [],
}

const trips = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_LIST_TRIPS':
            return { ...state, allTrips: action.payload.trips }
        default:
            return state
    }
}

export default trips