import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import ExpenseDashbordPage from '../components/expenses/ExpenseDashboardPage';
import AddExpensePage from '../components/expenses/AddExpensePage';
import EditExpensePage from '../components/expenses/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/auth/LoginPage';
import AccountPage from '../components/accounts/AccountPage';
import EditAccountPage from '../components/accounts/EditAccountPage';
import CategoriesPage from '../components/categories/CategoriesPage';
import IncomeCategoriesPage from '../components/incomeCategories/IncomeCategoriesPage';
import EditCategoriesPage from '../components/categories/EditCategoriesPage';
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
                <Route path='/' exact><Redirect to='/dashboard' /></Route>

                <ProtectedRoute path='/dashboard' component={DashbordPage} exact/>

                <ProtectedRoute path='/accounts' component={AccountPage} exact />
                {/* <ProtectedRoute path='/accounts/:accountId/edit' component={EditAccountPage} /> */}

                <ProtectedRoute path='/categories' component={CategoriesPage} exact />

                {/* <ProtectedRoute path='/income_categories' component={IncomeCategoriesPage} exact /> */}
                {/* <Route path='/income_categories/create' component={EditIncomeCategoriesPage} /> */}
                <ProtectedRoute path='/categories/:mode/:categoryId/edit' component={EditCategoriesPage} />

                {/* <ProtectedRoute path='/expense_categories' component={ExpenseCategoriesPage} exact /> */}
                {/* <Route path='/expense_categories/create' component={EditExpenseCategoriesPage} /> */}
                {/* <ProtectedRoute path='/expense_categories/:categoryId/edit' component={EditCategoriesPage} /> */}

                {/* <ProtectedRoute path='/dashboard/incomes' component={IncomeDashbordPage} exact /> */}
                <ProtectedRoute path='/dashboard/incomes/create' component={AddIncomePage} />
                <ProtectedRoute path='/dashboard/incomes/:incomeId/edit' component={EditIncomePage} />

                {/* <ProtectedRoute path='/dashboard/expenses' component={ExpenseDashbordPage} exact/> */}
                <ProtectedRoute path='/dashboard/expenses/create' component={AddExpensePage} />
                <ProtectedRoute path='/dashboard/expenses/:expenseId/edit' component={EditExpensePage} />

                <ProtectedRoute path='/profile' component={RemoveProfilePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
