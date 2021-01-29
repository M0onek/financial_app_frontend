const incomeCategoriesReducerDefaultState = [];

export default (state = incomeCategoriesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_INCOME_CATEGORY' :
            console.log(action.type);
            return [
                ...state,
                action.incomeCategory,
            ];
        case 'GET_INCOME_CATEGORIES' :
            console.log(action.type);
            return state = action.incomeCategories;
        case 'GET_ONE_INCOME_CATEGORY' :
            console.log(action.type);
            return [
                ...state,
                action.incomeCategory
            ];
        case 'EDIT_INCOME_CATEGORY' :
            console.log(action.type)
            return state.map((incomeCategory) => {
                if (incomeCategory.categoryId === action.categoryId) {
                    return {
                        ...incomeCategory,
                        ...action.updates
                    };
                } else {
                    return incomeCategory;
                }
            })
        case 'REMOVE_INCOME_CATEGORY' :
            console.log(action.type);
            return state.filter(({categoryId}) => categoryId !== action.categoryId);
        default:
            return state;
    }
};
