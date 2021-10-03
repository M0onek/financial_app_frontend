import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

const getWord = (count) => {
    const words = ['wydatek', 'wydatki', 'wydatków']
    const last = count % 10

    if (count === 1) return words[0]
    if (count > 10 && count < 20) return words[2]
    if (last >= 2 && last <= 4) return words[1]
    return words[2]
}

const ExpensesSummary = ({ expenseCount, expensesTotal }, props) => {
    const formattedExpensesTotal = numeral(expensesTotal).format('0,0.00');
    return (
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Wyświetlono <span>{expenseCount}</span> {getWord(expenseCount)} o&nbsp;łącznej wartości <span>{formattedExpensesTotal}&nbsp;zł</span></h1>
                <div className='summary__actions'>
                    <Link className='button' to={`/dashboard/expenses/create`}>Dodaj wydatek</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters, state.activeAccount);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        activeAccountId: state.activeAccount.activeAccountId
    }
}

export default connect(mapStateToProps)(ExpensesSummary)