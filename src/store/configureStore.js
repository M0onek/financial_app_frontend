import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from '../reducers/userReducer';
import accountsReducer from '../reducers/accountsReducer';
import thunk from 'redux-thunk';
import expenseCategoriesReducer from '../reducers/expenseCategoriesReducer';
import incomeCategoriesReducer from '../reducers/incomeCategoriesReducer';
import expensesReducer from '../reducers/expensesReducer';
import incomesReducer from '../reducers/incomesReducer';
import filtersReducer from '../reducers/filtersReducer';
import activeAccountReducer from '../reducers/activeAccountReducer';
 
export default () => {    
    const store = createStore(
        combineReducers({
            users: userReducer,
            accounts: accountsReducer,
            expenseCategories: expenseCategoriesReducer,
            incomeCategories: incomeCategoriesReducer,
            expenses: expensesReducer,
            incomes: incomesReducer,
            filters: filtersReducer,
            activeAccount: activeAccountReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};
