import React from 'react';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import DateFilter from '../DateFilter';

const ChartsPage = () => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Incomes / Expenses</h1>
            </div>       
        </div>
        <DateFilter />
        <AreaChart mode="income" />

        <div className="flex-columns">
            <div>
                <div className='summary'>
                    <div className='content-container'>
                        <h1 className='summary__title'>Income Categories</h1>            
                    </div>       
                </div>
                <PieChart mode="income"/>
                {/* TODO: filtering */}
            </div>

            <div>
                <div className='summary'>
                    <div className='content-container'>
                        <h1 className='summary__title'>Expense Categories</h1>            
                    </div>       
                </div>
                <PieChart mode="expense"/>
            </div>
        </div>
    </div>
);

export default ChartsPage;
