import React from 'react';
import ExpenseList from './expenses/ExpenseList';
import ExpensesSummary from './expenses/ExpensesSummary';
import IncomeList from './incomes/IncomeList';
import IncomesSummary from './incomes/IncomesSummary'
import DateFilter from './DateFilter';

const DashbordPage = () => (
    <div>
        <div className='flex-columns'>
            <div>
                <IncomesSummary />
                <DateFilter showSortBy />
                <IncomeList />
            </div>
            <div>
                <ExpensesSummary />
                <div className="SingleDatePicker--margin"></div>
                <ExpenseList />
            </div>
        </div>
    </div>
);

export default DashbordPage;
