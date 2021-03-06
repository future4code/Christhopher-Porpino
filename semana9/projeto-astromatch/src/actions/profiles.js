import axios from 'axios'

const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
		profile: profile,
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christhopher/clear')
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christhopher/person')

	dispatch(setProfileToSwipe(response.data.profile))
}