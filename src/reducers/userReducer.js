export default (state = [], action) => {
    switch(action.type) {

        case 'SIGNUP' :
            return [ ...state, action.user ]

        case 'LOGIN':
            return [ ...state, action.user ]

        case 'EDIT_USER':
            return { ...state, ...action.updates }

        case 'LOGOUT_USER':
            return []

        case 'LOGOUT_ALL_USERS':
            return []

        case 'REMOVE_USER':
            return []
            
        default:
            return state;
    }
};
