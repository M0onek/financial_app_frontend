import React from 'react';
import DashboardList from './DashboardList';
import DashboardListFilters from './DashboardListFilters';
import DashboardsSummary from './DashboardsSummary'

const DashbordPage = () => (
    <div>
        <div className='flex-columns'>
            <div>
                <DashboardsSummary mode="income" />
                <DashboardList mode="income" />
            </div>
            <div>
                <DashboardsSummary mode="expense" />
                <DashboardList mode="expense" />
            </div>
        </div>
        <DashboardListFilters />
    </div>
);

export default DashbordPage;
