import axios from 'axios';
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

const storeUser = (user) => ({
    type: "STORE_USERS",
    payload: { user }
})

export const login = (email, password) => (dispatch) => {
    try {
        // axios.post(
        //     `http://localhost:3000/login`,
        //     { email, password })
        // console.log(response.data.token)
        // window.localStorage.setItem('token', response.data)
        // dispatch(storeUser(response.data.user))
        // dispatch(push(routes.home))

            const data = {
                "email": email,
                "password": password
            }

        axios.post(
            `http://localhost:3000/login`,
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

// export const login = (email, password) => dispatch => {
//     const data = {
//         "email": email,
//         "password": password
//     }
//     const headers = {
//         headers: { 'Content-Type': 'application/json'  }
//     }
// 
//     axios.post(
//         `${baseUrl}/login`,
//         data, 
//         headers
//     ).then(
//         response => {
//             window.localStorage.setItem('token', response.data.token)
//             dispatch(storeProfile(response.data.user))
//             if (response.data.user.hasAddress) {
//                 dispatch(push(routes.home))
//             } else {
//                 dispatch(push(routes.address))
//             }
//         }
//     ).catch(
//         error => alert(error)
//     )
// }