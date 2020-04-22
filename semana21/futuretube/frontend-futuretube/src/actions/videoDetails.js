import axios from 'axios';

const storeVideoDetails = (videoDetails) => ({
    type: "STORE_VIDEO_DETAILS",
    payload: { videoDetails }
})

export const getVideoDetails = (id) => (dispatch) => {
    try {
        axios.get(`https://6x743h0uh8.execute-api.us-east-1.amazonaws.com/v1/video-details?id=${id}`).then(
            (response) => {
                dispatch(storeVideoDetails((response.data.details)))
            }
        )
    } catch (err) {
        console.log(err)
    }
}