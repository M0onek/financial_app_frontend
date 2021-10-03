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
import moment from 'moment';

export const store = configureStore();

// export const persistor = persistor();

// store.subscribe(() => {{
//     const state = store.getState();
//     console.log(state);
// }})

moment.locale('pl')

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const isAuthenticated = localStorage.getItem('user');
if (isAuthenticated) {
    const activeAccountId = localStorage.getItem('activeAccountId');
    store.dispatch(getAccounts());
    
    if (activeAccountId) {
        store.dispatch(setActiveAccountId({accountId: activeAccountId}))
        store.dispatch(getExpenseCategories({ id: activeAccountId }));
        store.dispatch(getIncomeCategories({ id: activeAccountId }));
        store.dispatch(getExpenses({ id: activeAccountId }));
        store.dispatch(getIncomes({ id: activeAccountId }));
    }
    
}  
    

ReactDOM.render(jsx , document.getElementById('app'));
