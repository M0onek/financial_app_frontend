import React from 'react';
import ExpenseList from './expenses/ExpenseList';
import ExpensesSummary from './expenses/ExpensesSummary';
import IncomeList from './incomes/IncomeList';
import IncomeListFilters from './incomes/IncomeListFilters';
import IncomesSummary from './incomes/IncomesSummary'

const DashbordPage = () => (
    <div>
        <div className='flex-columns'>
            <div>
                <IncomesSummary />
                <IncomeList />
            </div>
            <div>
                <ExpensesSummary />
                <ExpenseList />
            </div>
        </div>
        <IncomeListFilters />
    </div>
);

export default DashbordPage;
