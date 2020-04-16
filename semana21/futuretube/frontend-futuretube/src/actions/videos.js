import axios from 'axios';

const storeVideos = (videos) => ({
    type: "STORE_VIDEOS",
    payload: { videos }
})

export const getAllVideos = (page) => (dispatch) => {
    try {
        axios.get(`http://localhost:3000/videos?page=${page}`).then(
            (response) => {
                dispatch(storeVideos((response.data.videos)))
            }
        )
    } catch (err) {
        console.log(err)
    }
}