import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <div className='summary'>
                <div className='content-container'>
                    <h1 className='summary__title'>Edit Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense({ id: props.expense.accountId }, { id: props.expense.expenseId }, expense));
                    props.history.push(`/home`);
                }} />
                <button className='button button--secondary' onClick={() => {
                    props.dispatch(removeExpense({ id: props.expense.accountId }, { id: props.expense.expenseId }))
                    props.history.push(`/home`);
                }}>Remove Expense</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)  => expense.expenseId === props.match.params.expenseId),
        activeAccountId: state.activeAccount.activeAccountId
    };
};

export default connect(mapStateToProps)(EditExpensePage);