import React from 'react';
import ExpenseList from './expenses/ExpenseList';
import ExpensesSummary from './expenses/ExpensesSummary';
import IncomeList from './incomes/IncomeList';
import IncomesSummary from './incomes/IncomesSummary';
import DateFilter from './DateFilter';

const DashboardPage = () => (
    <div>
        <div className="desktop-only">
            <div className='flex-columns'>
                <IncomesSummary />
                <ExpensesSummary />
            </div>

            <div className="summary--center" style={{paddingTop: '0.5rem', paddingBottom: '2rem'}}>
                <DateFilter showSortBy />
            </div>

            <div className='flex-columns'>
                <IncomeList />
                <ExpenseList />
            </div>
        </div>

        <div className="mobile-only">
            <IncomesSummary />
            <div className="summary--center" style={{paddingBottom: '2rem'}}>
                <DateFilter showSortBy />
            </div>
            <div className="flex-columns">
                <IncomeList />
            </div>
            <div className="flex-columns">
                <ExpensesSummary />
                <ExpenseList />
            </div>
        </div>
    </div>
);

export default DashboardPage;
