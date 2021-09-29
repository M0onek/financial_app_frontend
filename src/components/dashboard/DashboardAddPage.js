import React from 'react';
import { connect } from 'react-redux';
import DashboardForm from './DashboardForm';
import { addIncome } from '../../actions/incomes';
import { addExpense } from '../../actions/expenses';

const DashboardAddPage = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Add { props.income ? 'Income' : 'Expense' }</h1>
            </div>
        </div>
        <div className='content-container'>
            <DashboardForm
                mode={props.mode}
                onSubmit={(data) => {
                    props.dispatch((props.income ? addIncome : addExpense)({id: props.activeAccountId }, data));
                    props.history.push(`/dashboard`);
                }}
            />
        </div>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        activeAccountId: state.activeAccount.activeAccountId,
        mode: props.mode,
        income: props.mode === 'income',
    }
}

export default connect(mapStateToProps)(DashboardAddPage);
