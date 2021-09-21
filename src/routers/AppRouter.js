import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import ExpenseDashbordPage from '../components/expenses/ExpenseDashboardPage';
import AddExpensePage from '../components/expenses/AddExpensePage';
import EditExpensePage from '../components/expenses/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/auth/LoginPage';
import AccountPage from '../components/accounts/AccountPage';
import EditAccountPage from '../components/accounts/EditAccountPage';
import CategoriesPage from '../components/categories/CategoriesPage';
import IncomeCategoriesPage from '../components/incomeCategories/IncomeCategoriesPage';
import EditIncomeCategoriesPage from '../components/incomeCategories/EditIncomeCategoriesPage';
import ExpenseCategoriesPage from '../components/expenseCategories/ExpenseCategoriesPage';
import EditExpenseCategoriesPage from '../components/expenseCategories/EditExpenseCategoriesPage';
import IncomeDashbordPage from '../components/incomes/IncomeDashboardPage';
import AddIncomePage from '../components/incomes/AddIncomePage';
import EditIncomePage from '../components/incomes/EditIncomePage';
import SignupPage from '../components/auth/SignupPage';
import ProtectedRoute from './ProtectedRoute';
import RemoveProfilePage from '../components/profile/RemoveProfilePage';
import createHistory from 'history/createBrowserHistory';
import DashbordPage from '../components/DashboardPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>                
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignupPage} />

                <ProtectedRoute path='/home' component={DashbordPage} />

                <ProtectedRoute path='/accounts' component={AccountPage} exact={true} />
                <ProtectedRoute path='/accounts/:accountId/edit' component={EditAccountPage} />

                <ProtectedRoute path='/categories' component={CategoriesPage} exact={true} />

                <ProtectedRoute path='/income_categories' component={IncomeCategoriesPage} exact={true} />
                {/* <Route path='/income_categories/create' component={EditIncomeCategoriesPage} /> */}
                <ProtectedRoute path='/income_categories/:categoryId/edit' component={EditIncomeCategoriesPage} />

                <ProtectedRoute path='/expense_categories' component={ExpenseCategoriesPage} exact={true} />
                {/* <Route path='/expense_categories/create' component={EditExpenseCategoriesPage} /> */}
                <ProtectedRoute path='/expense_categories/:categoryId/edit' component={EditExpenseCategoriesPage} />

                <ProtectedRoute path='/accounts/:accountId/incomes' component={IncomeDashbordPage} exact={true} />
                <ProtectedRoute path='/accounts/:accountId/incomes/create' component={AddIncomePage} />
                <ProtectedRoute path='/accounts/:accountId/incomes/:incomeId/edit' component={EditIncomePage} />

                <ProtectedRoute path='/accounts/:accountId/expenses' component={ExpenseDashbordPage} exact={true}/>
                <ProtectedRoute path='/accounts/:accountId/expenses/create' component={AddExpensePage} />
                <ProtectedRoute path='/accounts/:accountId/expenses/:expenseId/edit' component={EditExpensePage} />

                <ProtectedRoute path='/profile' component={RemoveProfilePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
