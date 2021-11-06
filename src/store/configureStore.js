import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from '../reducers/userReducer';
import accountsReducer from '../reducers/accountsReducer';
import thunk from 'redux-thunk';
import expenseCategoriesReducer from '../reducers/expenseCategoriesReducer';
import incomeCategoriesReducer from '../reducers/incomeCategoriesReducer';
import expensesReducer from '../reducers/expensesReducer';
import incomesReducer from '../reducers/incomesReducer';
import goalsReducer from '../reducers/goalsReducer';
import selectedGoalsReducer from '../reducers/selectedGoalsReducer';
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
            goals: goalsReducer,
            selectedGoals: selectedGoalsReducer,
            filters: filtersReducer,
            activeAccount: activeAccountReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__(),
          )
        : applyMiddleware(thunk),
    );
    return store;
};
