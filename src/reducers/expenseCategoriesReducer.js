const expenseCategoriesReducerDefaultState = [];

export default (state = expenseCategoriesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE_CATEGORY' :
            console.log(action.type);
            return [
                ...state,
                action.expenseCategory,
            ];
        case 'GET_EXPENSE_CATEGORIES' :
            console.log(action.type);
            return state = action.expenseCategories;
        case 'GET_ONE_EXPENSE_CATEGORY' :
            console.log(action.type);
            return [
                ...state,
                action.expenseCategory
            ];
        case 'EDIT_EXPENSE_CATEGORY' :
            console.log(action.type)
            return state.map((expenseCategory) => {
                if (expenseCategory.categoryId === action.categoryId) {
                    return {
                        ...expenseCategory,
                        ...action.updates
                    };
                } else {
                    return expenseCategory;
                }
            })
        case 'REMOVE_EXPENSE_CATEGORY' :
            console.log(action.type);
            return state.filter(({categoryId}) => categoryId !== action.categoryId);
        default:
            return state;
    }
};
