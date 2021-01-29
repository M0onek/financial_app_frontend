export const setActiveAccountId = ({accountId}={}) => {
    return ({
        type: 'SET_ACTIVE_ACCOUNT_ID',
        activeAccountId: accountId
    })
}
