import React from 'react';
import IncomeList from './IncomeList';
import IncomeListFilters from './IncomeListFilters';

const IncomeDashbordPage = () => (
    <div>
        <IncomeListFilters />
        <IncomeList />
    </div>
);

export default IncomeDashbordPage;
