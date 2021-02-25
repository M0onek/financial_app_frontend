import axios from '../axios/axios';
import authHeader from './auth-header';
import { store } from '../app';
import { fillAccounts } from '../actions/accounts';
import { history } from '../routers/AppRouter';
import { setActiveAccountId } from '../actions/activeAccount';
import { getExpenseCategories } from '../actions/expenseCategories';
import { getIncomeCategories } from '../actions/incomeCategories';
import { getExpenses } from '../actions/expenses';
import { getIncomes } from '../actions/incomes';

class Auth {
  signup(userData) {
    axios.post('/signup', userData).then(res => {
      const userData = res.data;
      localStorage.setItem('user', JSON.stringify(userData));
      history.push('/home');
  }).catch((error) => {
      console.log('error', error);
  });
  }

  login(userData) {
    axios.post('/login', userData).then(res => {
      const userData = res.data;
      localStorage.setItem('user', JSON.stringify(userData));
      const user = JSON.parse(localStorage.getItem('user'));
      store.dispatch(fillAccounts(user.accounts));
      if (user.accounts.length !== 0) {
        const activeAccountId = user.accounts[0].accountId;
        store.dispatch(setActiveAccountId({accountId: activeAccountId}))
        store.dispatch(getExpenseCategories({ id: activeAccountId }));
        store.dispatch(getIncomeCategories({ id: activeAccountId }));
        store.dispatch(getExpenses({ id: activeAccountId }));
        store.dispatch(getIncomes({ id: activeAccountId }));
        history.push('/home');
      } else {
        history.push('/accounts');
      }
      
    }).catch((error) => {
      console.log('error', error);
    });
  }

  logout() {
    axios.post('logout', null, { headers: authHeader() })
    .then(() => {
      localStorage.clear();
      history.push('/login')
    }).catch((error) => {
      console.log('error', error);
    });
  }

  removeUser() {
    axios.delete(`/me`, 
        { headers: authHeader() })
        .then(() => {
          localStorage.clear();
          history.push('/login')
        }).catch((error) => {
            console.log('error', error);
        });
  }
}

export default new Auth();
