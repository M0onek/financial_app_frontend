export default (state = [], action) => {
    switch(action.type) {

        case 'FILL_ACCOUNTS':
            return action.accounts

        case 'ADD_ACCOUNT':
            return [ ...state, action.account ]

        case 'GET_ACCOUNTS':
            return action.accounts
            
        case 'GET_ONE_ACCOUNT':
            return [ ...state, action.account ]

        case 'EDIT_ACCOUNT':
            return state.map((account) => 
                account.accountId === action.accountId
                ? { ...account, ...action.updates }
                : account
            )

        case 'REMOVE_ACCOUNT':
            return state.filter(({accountId}) => accountId !== action.accountId)

        default:
            return state
    }
};
