const activeAccountReducerDefaultState = {
    activeAccountId: ''
};

export default (state = activeAccountReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_ACCOUNT_ID' :
            console.log(action.type);
            return {
                ...state,
                activeAccountId: action.activeAccountId
            }
        default :
            return state;
    }
}
