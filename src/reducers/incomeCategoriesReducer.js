export default (state = [], action) => {
    switch(action.type) {

        case 'ADD_INCOME_CATEGORY':
            return [ ...state, action.incomeCategory ]

        case 'GET_INCOME_CATEGORIES':
            return action.incomeCategories

        case 'GET_ONE_INCOME_CATEGORY':
            return [ ...state, action.incomeCategory ]

        case 'EDIT_INCOME_CATEGORY':
            return state.map((incomeCategory) =>
                incomeCategory.categoryId === action.categoryId
                ? { ...incomeCategory, ...action.updates }
                : incomeCategory
            )

        case 'REMOVE_INCOME_CATEGORY':
            return state.filter(({categoryId}) => categoryId !== action.categoryId)

        default:
            return state
    }
};
