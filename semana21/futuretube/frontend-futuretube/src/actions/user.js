import axios from 'axios';
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';

const storeUser = (user) => ({
    type: "STORE_USERS",
    payload: { user }
})

export const login = (email, password) => (dispatch) => {
    try {
        const data = {
            "email": email,
            "password": password
        }

        axios.post(
            `https://6x743h0uh8.execute-api.us-east-1.amazonaws.com/v1/login`,
            data
        ).then(
            response => {
                window.localStorage.setItem('token', response.data.token)
                dispatch(storeUser(response.data.user))
                dispatch(push(routes.home))
            }
        )
    } catch (err) {
        console.log(err)
    }
}

export const signUp = user => dispatch => {
    try {
        const data = {
            'name': user.name,
            'email': user.email,
            'password': user.password,
            'birthdate': user.birthdate,
            'photo': user.photo
        }

        axios.post(
            `https://6x743h0uh8.execute-api.us-east-1.amazonaws.com/v1/user/signup`,
            data
        ).then(
            response => {
                window.localStorage.setItem('token', response.data.token)
                dispatch(storeUser(response.data.user))
                dispatch(push(routes.home))
            }
        )
    } catch (err) {
        console.log(err)
    }
}