const initalState = {
    candidates: [],
    selectedTripIp: ""
}

const candidates = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_LIST_CANDIDATES':
            return {...state, allCandidates: action.payload.candidates }
        
            case 'SET_TRIP_ID':
                return {...state, selectedTripId: action.payload.tripID}

        default:
            return state
    }
}

export default trips