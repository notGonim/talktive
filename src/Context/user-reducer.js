export const initialState = {
    user: null
}


export const userAction = {
    SET_USER: 'SET_USER',
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case userAction.SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return { ...state }
    }
}



export default UserReducer