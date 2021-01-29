const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
    switch(action.type) {
        case 'FILL_ACCOUNTS':
            console.log(action.type)
            return state = action.accounts;
        case 'ADD_ACCOUNT' :
            console.log(action.type);
            return [
                ...state,
                action.account,
            ];
        case 'GET_ACCOUNTS' :
            console.log(action.type);
            return state = action.accounts;
        case 'GET_ONE_ACCOUNT' :
            console.log(action.type);
            return [
                ...state,
                action.account
            ];
        case 'EDIT_ACCOUNT' :
            console.log(action.type)
            return state.map((account) => {
                if (account.accountId === action.accountId) {
                    return {
                        ...account,
                        ...action.updates
                    };
                } else {
                    return account;
                }
            })
        case 'REMOVE_ACCOUNT' :
            console.log(action.type);
            return state.filter(({accountId}) => accountId !== action.accountId);
        default:
            return state;
    }
};
