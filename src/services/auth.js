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
    return axios.post('/signup', userData).then(res => {
      const user = res.data
      store.dispatch(fillAccounts([user.account]))

      const activeAccountId = user.account.accountId
      user.account = undefined

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('activeAccountId', activeAccountId)

      store.dispatch(setActiveAccountId({accountId: activeAccountId}))
      history.push('/dashboard')
    }).catch((error) => {
      if (error.response.status === 400) {
        throw new Error("Email address is already in use.");
      } else {
        console.log('error', error);
      }
    });
  }

  login(userData) {
    return axios.post('/login', userData).then(res => {
      const user = res.data
      store.dispatch(fillAccounts(user.accounts))

      const activeAccountId = (user.accounts.length !== 0) ? user.accounts[0].accountId : null
      user.accounts = undefined
      
      localStorage.setItem('user', JSON.stringify(user));

      if (activeAccountId !== null) {
        localStorage.setItem('activeAccountId', activeAccountId)
        store.dispatch(setActiveAccountId({accountId: activeAccountId}))
        store.dispatch(getExpenseCategories({ id: activeAccountId }));
        store.dispatch(getIncomeCategories({ id: activeAccountId }));
        store.dispatch(getExpenses({ id: activeAccountId }));
        store.dispatch(getIncomes({ id: activeAccountId }));
        history.push('/dashboard');
      } else {
        history.push('/accounts');
      }
      
    }).catch((error) => {
      if (error.response.status === 400) {
        throw new Error(error.response.data);
      } else {
        console.log('error', error);
      }
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
