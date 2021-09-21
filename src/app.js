import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { fillAccounts, getAccounts } from './actions/accounts';
import { setActiveAccountId } from './actions/activeAccount';
import { getExpenseCategories } from './actions/expenseCategories';
import { getIncomeCategories } from './actions/incomeCategories';
import { getExpenses } from './actions/expenses';
import { getIncomes } from './actions/incomes';

export const store = configureStore();

// export const persistor = persistor();

const state = store.getState();

store.subscribe(()=> {{
    console.log(state);
}})


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const isAuthenticated = localStorage.getItem('user');
    if (isAuthenticated) {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        store.dispatch(fillAccounts(user.accounts));
        store.dispatch(getAccounts);
        if(user.accounts) {
            if (user.accounts.length !== 0/* || state.accounts.length !== 0*/) {
                // let activeAccountId = '';
                // if(state.accounts.length !== 0) {
                    // activeAccountId = state.accounts[0].accountId;
                // } else {
                    let activeAccountId = user.accounts[0].accountId;
                // }
                console.log(activeAccountId);
                store.dispatch(setActiveAccountId({accountId: activeAccountId}))
                store.dispatch(getExpenseCategories({ id: activeAccountId }));
                store.dispatch(getIncomeCategories({ id: activeAccountId }));
                store.dispatch(getExpenses({ id: activeAccountId }));
                store.dispatch(getIncomes({ id: activeAccountId }));
            }
        }
        
    }  
    

ReactDOM.render(jsx , document.getElementById('app'));
