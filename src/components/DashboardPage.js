import React from 'react';
import ExpenseList from './expenses/ExpenseList';
import ExpenseListFilters from './expenses/ExpenseListFilters';
import ExpensesSummary from './expenses/ExpensesSummary';
import IncomeList from './incomes/IncomeList';
import IncomeListFilters from './incomes/IncomeListFilters';
import IncomesSummary from './incomes/IncomesSummary'

const DashbordPage = () => (
    <div>
        <IncomeListFilters />
        <IncomesSummary />
        <IncomeList />
        <ExpensesSummary />
        {/* <ExpenseListFilters /> */}
        <ExpenseList />
    </div>
);

export default DashbordPage;
