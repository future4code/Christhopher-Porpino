const initialState = {
    videos: [],
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

export default function videos(state = initialState, action) {
    switch (action.type) {
        case "STORE_VIDEOS":
            return {
                ...state, videos: action.payload.videos
            }
        case "STORE_VIDEO_DETAILS":
            console.log(action.payload)
            return {
                ...state, videoDetails: action.payload.videoDetails
            }
        default:
            return state
    }
}