import React from 'react';
import { connect } from 'react-redux';
import DashboardListItem from './DashboardListItem';
import selectCategory from '../../selectors/selectCategory';
import selectVisible from '../../selectors/expenses';

const DashboardList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div>{props.income ? 'Income' : 'Expense'}</div>
            <div>Amount</div>
        </div>
        {
            props.data.length === 0 ? (
                <div className='list-item list-item--message'>
                    <span>No {props.income ? 'incomes' : 'expenses' }</span>
                </div>
            ) : (
                props.data.map((item) => {
                    const category = selectCategory(props.categories, item.categoryId)
                    const id = props.income ? item.incomeId : item.expenseId
                    return category ? <DashboardListItem key={id} {...item} category={category}/> : ''
                })
            )
        }
    </div>
);

const mapStateToProps = (state, props) => {
    const income = props.mode === 'income'
    return {
        data: selectVisible(income ? state.incomes : state.expenses, state.filters, state.activeAccount),
        categories: income ? state.incomeCategories : state.expenseCategories,
        mode: props.mode,
        income
    }
}

export default connect(mapStateToProps)(DashboardList);
