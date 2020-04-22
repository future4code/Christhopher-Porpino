import axios from 'axios';

const storeVideos = (videos) => ({
    type: "STORE_VIDEOS",
    payload: { videos }
})

const selectVideoDetails = (videoDetails) => ({
    type: "STORE_VIDEO_DETAILS",
    payload: { videoDetails }
})

export const getAllVideos = (page) => (dispatch) => {
    try {
        axios.get(`https://6x743h0uh8.execute-api.us-east-1.amazonaws.com/v1/videos?page=${page}`).then(
            (response) => {
                dispatch(storeVideos((response.data.videos)))
            }
        )
    } catch (err) {
        console.log(err)
    }
}

export const getVideoDetails = (id) => (dispatch) => {
    try {
        axios.get(`https://6x743h0uh8.execute-api.us-east-1.amazonaws.com/v1/video-details?id=${id}`).then(
            (response) => {
                dispatch(selectVideoDetails((response.data.details)))
            }
        )
    } catch (err) {
        console.log(err)
    }
}