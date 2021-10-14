import React from 'react';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import DateFilter from '../DateFilter';
import BarChart from './BarChart';

const ChartsPage = () => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Przychody / Wydatki</h1>
            </div>
            <div className="summary--center">
                <DateFilter />
            </div>
        </div>
        
        <AreaChart/>

        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Miesięczne saldo</h1>            
            </div>       
        </div>

        <BarChart/>

        <div className="flex-columns">
            <div>
                <div className='summary'>
                    <div className='content-container'>
                        <h1 className='summary__title'>Kategorie przychodów</h1>            
                    </div>       
                </div>
                <PieChart mode="income"/>
            </div>

            <div>
                <div className='summary'>
                    <div className='content-container'>
                        <h1 className='summary__title'>Kategorie wydatków</h1>            
                    </div>       
                </div>
                <PieChart mode="expense"/>
            </div>
        </div>
    </div>
);

export default ChartsPage;
