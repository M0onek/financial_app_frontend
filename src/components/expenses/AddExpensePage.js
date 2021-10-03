import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Dodaj wydatek</h1>
            </div>
        </div>
        <div className='content-container'>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense({id: props.activeAccountId }, expense));
                    props.history.push(`/dashboard`);
                }}
            />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(AddExpensePage);
