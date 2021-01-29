import React from 'react';
import { connect } from 'react-redux';
import IncomeForm from './IncomeForm';
import { editIncome, removeIncome } from '../../actions/incomes';

const EditIncomePage = (props) => {
    return (
        <div>
            <div className='summary'>
                <div className='content-container'>
                    <h1 className='summary__title'>Edit Income</h1>
                </div>
            </div>
            <div className='content-container'>
                <IncomeForm
                income={props.income}
                onSubmit={(income) => {
                    props.dispatch(editIncome({ id: props.income.accountId }, { id: props.income.incomeId }, income));
                    props.history.push(`/home`);
                }} />
                <button className='button button--secondary' onClick={() => {
                    props.dispatch(removeIncome({ id: props.income.accountId }, { id: props.income.incomeId }))
                    props.history.push(`/home`);
                }}>Remove Income</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        income: state.incomes.find((income)  => income.incomeId === props.match.params.incomeId),
        activeAccountId: state.activeAccount.activeAccountId
    };
};

export default connect(mapStateToProps)(EditIncomePage);