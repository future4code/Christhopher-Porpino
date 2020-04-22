const initialState = {
    videoDetails: {
        "id": '',
        "title": '',
        "description": '',
        "url": '',
        "userId": '',
        "name": '',
        "photo": ''
    }
}

export default function videoDetails(state = initialState, action) {
    switch (action.type) {
        case "STORE_VIDEO_DETAILS":
            return {
                ...state, videoDetails: action.payload.videoDetails
            }
        default:
            return state
    }
}