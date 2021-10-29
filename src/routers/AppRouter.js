import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import AddExpensePage from '../components/expenses/AddExpensePage';
import EditExpensePage from '../components/expenses/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/auth/LoginPage';
import AccountPage from '../components/accounts/AccountPage';
import CategoriesPage from '../components/categories/CategoriesPage';
import AddIncomePage from '../components/incomes/AddIncomePage';
import EditIncomePage from '../components/incomes/EditIncomePage';
import SignupPage from '../components/auth/SignupPage';
import ProtectedRoute from './ProtectedRoute';
import SettingsPage from '../components/settings/SettingsPage';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ChartsPage from '../components/charts/ChartsPage';
import RaportPage from '../components/raports/RaportPage';
import RaportPreview from '../components/raports/RaportPreview';
import GoalsPage from '../components/goals/GoalsPage';
import AddGoalPage from '../components/goals/AddGoalPage';
import EditGoalPage from '../components/goals/EditGoalPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' exact><Redirect to='/dashboard' /></Route>
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignupPage} />

                <ProtectedRoute path='/dashboard' component={DashboardPage} exact />
                <ProtectedRoute path='/dashboard/incomes/create' component={AddIncomePage} />
                <ProtectedRoute path='/dashboard/incomes/:incomeId/edit' component={EditIncomePage} />
                <ProtectedRoute path='/dashboard/expenses/create' component={AddExpensePage} />
                <ProtectedRoute path='/dashboard/expenses/:expenseId/edit' component={EditExpensePage} />

                <ProtectedRoute path='/charts' component={ChartsPage} exact />
                <ProtectedRoute path='/categories' component={CategoriesPage} exact />
                <ProtectedRoute path='/profiles' component={AccountPage} exact />

                <ProtectedRoute path='/goals' component={GoalsPage} exact />
                <ProtectedRoute path='/goals/create' component={AddGoalPage} />
                <ProtectedRoute path='/goals/:goalId/edit' component={EditGoalPage} />

                <ProtectedRoute path='/raports' component={RaportPage} exact />
                <ProtectedRoute path='/raports/preview' component={RaportPreview} exact />

                <ProtectedRoute path='/settings' component={SettingsPage} exact />
                
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
