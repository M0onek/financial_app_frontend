export default (state = [], action) => {
    switch(action.type) {

        case 'ADD_EXPENSE':
            return [ ...state, action.expense ]

        case 'GET_EXPENSES':
            return action.expenses

        case 'GET_ONE_EXPENSE':
            return [ ...state, action.expense ]

        case 'EDIT_EXPENSE':
            return state.map((expense) => 
                expense.expenseId === action.expenseId
                ? { ...expense, ...action.updates }
                : expense
            )

        case 'REMOVE_EXPENSE':
            return state.filter(({expenseId}) => expenseId !== action.expenseId)

        default:
            return state
    }
};
