import React from 'react';
import { connect } from 'react-redux';
import ExpenseCategoriesListItem from './ExpenseCategoriesListItem';
import visibleCategories from '../../selectors/categories';

const ExpenseCategoriesList = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Expense Categories List</h1>            
            </div>       
        </div>
        <div>
            <div className='content-container'>
            <div className='list-header'>Expense categories</div>        
            {props.expenseCategories.map((category) => {
                return <ExpenseCategoriesListItem key={category.categoryId} {...category} />
            })}
        </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseCategories: visibleCategories(state.expenseCategories, state.activeAccount)
    }
}

export default connect(mapStateToProps)(ExpenseCategoriesList);
