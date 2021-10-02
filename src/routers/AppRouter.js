import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import AddExpensePage from '../components/expenses/AddExpensePage';
import EditExpensePage from '../components/expenses/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/auth/LoginPage';
import AccountPage from '../components/accounts/AccountPage';
import CategoriesPage from '../components/categories/CategoriesPage';
import EditCategoriesPage from '../components/categories/EditCategoriesPage';
import AddIncomePage from '../components/incomes/AddIncomePage';
import EditIncomePage from '../components/incomes/EditIncomePage';
import SignupPage from '../components/auth/SignupPage';
import ProtectedRoute from './ProtectedRoute';
import RemoveProfilePage from '../components/profile/RemoveProfilePage';
import createHistory from 'history/createBrowserHistory';
import DashbordPage from '../components/DashboardPage';
import ChartsPage from '../components/charts/ChartsPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' exact><Redirect to='/dashboard' /></Route>
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignupPage} />

                <ProtectedRoute path='/dashboard' component={DashbordPage} exact />
                <ProtectedRoute path='/dashboard/incomes/create' component={AddIncomePage} />
                <ProtectedRoute path='/dashboard/incomes/:incomeId/edit' component={EditIncomePage} />
                <ProtectedRoute path='/dashboard/expenses/create' component={AddExpensePage} />
                <ProtectedRoute path='/dashboard/expenses/:expenseId/edit' component={EditExpensePage} />

                <ProtectedRoute path='/charts' component={ChartsPage} exact />

                <ProtectedRoute path='/accounts' component={AccountPage} exact />

                <ProtectedRoute path='/categories' component={CategoriesPage} exact />
                <ProtectedRoute path='/categories/:mode/:categoryId/edit' component={EditCategoriesPage} />

                <ProtectedRoute path='/profile' component={RemoveProfilePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
