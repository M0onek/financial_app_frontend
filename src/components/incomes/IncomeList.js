import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import selectCategory from '../../selectors/selectCategory';
import selectIncomes from '../../selectors/expenses';

const IncomeList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div>Income</div>
            <div>Amount</div>
        </div>
        {
            props.incomes.length === 0 ? (
                <div className='list-item list-item--message'>
                    <span>No incomes</span>
                </div>
            ) : (
                props.incomes.map((income) => {
                    const category = selectCategory(props.incomeCategories, income.categoryId)
                    return category ? <IncomeListItem key={income.incomeId} {...income} category={category}/> : ''
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        incomes: selectIncomes(state.incomes, state.filters, state.activeAccount),
        incomeCategories: state.incomeCategories,
    }
}

export default connect(mapStateToProps)(IncomeList);
