import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

const ExpensesSummary = ({ expenseCount, expensesTotal }, props) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className='summary__actions'>
                    <Link className='button' to={`/dashboard/expenses/create`}>Add Expense</Link>
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