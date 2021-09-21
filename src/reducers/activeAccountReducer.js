export default (state = { activeAccountId: '' }, action) => {
    switch (action.type) {

        case 'SET_ACTIVE_ACCOUNT_ID':
            return { ...state, activeAccountId: action.activeAccountId }

        default:
            return state
    }
}
