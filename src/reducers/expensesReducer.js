const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE' :
            console.log(action.type);
            return [
                ...state,
                action.expense,
            ];
        case 'GET_EXPENSES' :
            console.log(action.type);
            return state = action.expenses
        case 'GET_ONE_EXPENSE' :
            console.log(action.type);
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE' :
            console.log(action.type)
            return state.map((expense) => {
                if (expense.expenseId === action.expenseId) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        case 'REMOVE_EXPENSE' :
            console.log(action.type);
            return state.filter(({expenseId}) => expenseId !== action.expenseId);
        default:
            return state;
    }
};
