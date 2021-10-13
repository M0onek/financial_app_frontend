import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectIncomes from '../../selectors/expenses';
import selectIncomesTotal from '../../selectors/expenses-total';

const getWord = (count) => {
    const words = ['przychód', 'przychody', 'przychodów']
    const last = count % 10

    if (count === 1) return words[0]
    if (count > 10 && count < 20) return words[2]
    if (last >= 2 && last <= 4) return words[1]
    return words[2]
}

const IncomesSummary = ({ incomeCount, incomesTotal }, props) => {
    const incomeWord = incomeCount === 1 ? 'przychód' : 'przychodów' ;
    const formattedincomesTotal = numeral(incomesTotal).format('0,0.00');
    return (
        <div className='summary--top'>
            <div className='content-container'>
                <h1 className='summary__title'>Wyświetlono <span>{incomeCount}</span> {getWord(incomeCount)} o&nbsp;łącznej wartości <span>{formattedincomesTotal}&nbsp;zł</span></h1>
                <div className='summary__actions'>
                    <Link className='button' to={`/dashboard/incomes/create`}>Dodaj przychód</Link>
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