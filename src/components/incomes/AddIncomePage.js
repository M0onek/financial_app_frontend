import React from 'react';
import { connect } from 'react-redux';
import IncomeForm from './IncomeForm';
import { addIncome } from '../../actions/incomes';
import { getGoals } from '../../actions/goals';

const AddTransactionPage = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Dodaj przychód</h1>
            </div>
        </div>
        <div className='content-container'>
            <IncomeForm
                onSubmit={(income) => {
                    props.dispatch(addIncome({id: props.activeAccountId }, income));
                    props.dispatch(getGoals({id: props.activeAccountId}))
                    props.history.push(`/dashboard`);
                }}
            />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(AddTransactionPage);
