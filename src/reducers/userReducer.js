const authReducerDefaultState = [];

export default (state = authReducerDefaultState, action) => {
    switch(action.type) {
        case 'SIGNUP' :
            console.log(action.type);
            return [
                ...state,
                action.user
            ];
        case 'LOGIN':
            console.log(action.type);
            return [
                ...state,
                action.user
            ];
        case 'EDIT_USER' :
            console.log(action.type)
            return {
                ...state,
                ...action.updates
            };
        case 'LOGOUT_USER' :
            console.log(action.type)
            return state = [];
        case 'LOGOUT_ALL_USERS' :
            console.log(action.type)
            return state = [];
        case 'REMOVE_USER' :
            console.log(action.type)
            return state = [];
        default:
            return state;
    }
};
