import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashbordPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
        <ExpensesSummary />
    </div>
);

export default ExpenseDashbordPage;