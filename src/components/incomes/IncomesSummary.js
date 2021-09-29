import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectIncomes from '../../selectors/expenses';
import selectIncomesTotal from '../../selectors/expenses-total';

const IncomesSummary = ({ incomeCount, incomesTotal }, props) => {
    const incomeWord = incomeCount === 1 ? 'income' : 'incomes' ;
    const formattedincomesTotal = numeral(incomesTotal).format('$0,0.00');
    return (
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Viewing <span>{incomeCount}</span> {incomeWord} totalling <span>{formattedincomesTotal}</span></h1>
                <div className='summary__actions'>
                    <Link className='button' to={`/dashboard/incomes/create`}>Add Income</Link>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleIncomes = selectIncomes(state.incomes, state.filters, state.activeAccount);
    return {
        incomeCount: visibleIncomes.length,
        incomesTotal: selectIncomesTotal(visibleIncomes),
        activeAccountId: state.activeAccount.activeAccountId
    }
}

export default connect(mapStateToProps)(IncomesSummary)