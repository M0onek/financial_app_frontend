const incomesReducerDefaultState = [];

export default (state = incomesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_INCOME' :
            console.log(action.type);
            return [
                ...state,
                action.income,
            ];
        case 'GET_INCOMES' :
            console.log(action.type);
            return state = action.incomes
        case 'GET_ONE_INCOME' :
            console.log(action.type);
            return [
                ...state,
                action.income
            ];
        case 'EDIT_INCOME' :
            console.log(action.type)
            return state.map((income) => {
                if (income.incomeId === action.incomeId) {
                    return {
                        ...income,
                        ...action.updates
                    };
                } else {
                    return income;
                }
            })
        case 'REMOVE_INCOME' :
            console.log(action.type);
            return state.filter(({incomeId}) => incomeId !== action.incomeId);
        default:
            return state;
    }
};
