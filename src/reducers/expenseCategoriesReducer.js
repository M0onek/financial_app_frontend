export default (state = [], action) => {
    switch(action.type) {

        case 'ADD_EXPENSE_CATEGORY':
            return [ ...state, action.expenseCategory ]

        case 'GET_EXPENSE_CATEGORIES':
            return action.expenseCategories

        case 'GET_ONE_EXPENSE_CATEGORY':
            return [ ...state, action.expenseCategory ]

        case 'EDIT_EXPENSE_CATEGORY':
            return state.map((expenseCategory) => 
                expenseCategory.categoryId === action.categoryId
                ? { ...expenseCategory, ...action.updates }
                : expenseCategory
            )

        case 'REMOVE_EXPENSE_CATEGORY':
            return state.filter(({categoryId}) => categoryId !== action.categoryId)

        default:
            return state
    }
};
