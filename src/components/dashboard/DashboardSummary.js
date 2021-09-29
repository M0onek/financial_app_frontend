import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectVisible from '../../selectors/expenses';
import selectTotal from '../../selectors/expenses-total';

const DashboardSummary = ({ count, total, activeAccountId }, props) => {
    const income = props.mode === "income"
    const word = incomeCount === income ? (1 ? 'income' : 'incomes') : (1 ? 'expense' : 'expenses')
    const formattedTotal = numeral(total).format('$0,0.00')

    return (
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Viewing <span>{count}</span> {word} totalling <span>{formattedTotal}</span></h1>
                <div className='summary__actions'>
                    <Link className='button' to={`/dashboard/${income ? 'incomes' : 'expenses'}/create`}>
                        Add {income ? 'Income' : 'Expense'}
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    // console.log(state.activeAccount.activeAccountId)
    const income = props.mode === "income";
    const visible = selectVisible(income ? state.incomes : state.expenses, state.filters, state.activeAccount);
    return {
        count: visible.length,
        total: selectTotal(visible),
        activeAccountId: state.activeAccount.activeAccountId
    }
}

export default connect(mapStateToProps)(DashboardSummary)