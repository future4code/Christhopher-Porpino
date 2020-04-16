const initialState = {
    user: [] //id, name, photo
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case "STORE_USER":
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}