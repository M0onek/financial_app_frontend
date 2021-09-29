import React from 'react';
import { connect } from 'react-redux';
import CategoriesListItem from './CategoriesListItem';
import categories from '../../selectors/categories';

const CategoriesList = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>{props.mode === "income" ? 'Income' : 'Expense'} Categories List</h1>            
            </div>       
        </div>
        <div>
            <div className='content-container'>
            <div className='list-header'>{props.mode === "income" ? 'Income' : 'Expense'} categories</div>
            {props.categories.map((category) => {
            return <CategoriesListItem key={category.categoryId} mode={props.mode} {...category} />
        })}
        </div>
        </div>
    </div>
    
);

const mapStateToProps = (state, props) => {
    return {
        categories: props.mode === "income"
            ? categories(state.incomeCategories, state.activeAccount)
            : categories(state.expenseCategories, state.activeAccount)
    }
}

export default connect(mapStateToProps)(CategoriesList);
