export default (state = [], action) => {
    switch(action.type) {

        case 'ADD_INCOME':
            return [ ...state, action.income ]

        case 'GET_INCOMES':
            return action.incomes

        case 'GET_ONE_INCOME':
            return [ ...state, action.income ]

        case 'EDIT_INCOME':
            return state.map((income) =>
                income.incomeId === action.incomeId
                ? { ...income, ...action.updates }
                : income
            )

        case 'REMOVE_INCOME':
            return state.filter(({incomeId}) => incomeId !== action.incomeId)

        default:
            return state
    }
};
