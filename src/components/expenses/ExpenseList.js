import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectCategory from '../../selectors/selectCategory';
import selectExpenses from '../../selectors/expenses';

const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div>Wydatki</div>
            <div>Wartość</div>
        </div>
        <div className='list-body'>
        {
            props.expenses.length === 0 ? (
                <div className='list-item list-item--message'>
                    <span>Brak wydatków</span>
                </div>
            ) : (
                props.expenses.map((expense) => {
                    const category = selectCategory(props.expenseCategories, expense.categoryId)
                    return <ExpenseListItem key={expense.expenseId} {...expense} category={category}/>
                })
            )
        }
        </div>
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters, state.activeAccount),
        expenseCategories: state.expenseCategories,
    }
}

export default connect(mapStateToProps)(ExpenseList);
