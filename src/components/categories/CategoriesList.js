import React from 'react';
import { connect } from 'react-redux';
import CategoriesListItem from './CategoriesListItem';
import categories from '../../selectors/categories';

const CategoriesList = (props) => (
    <div>
        <div className={props.income ? 'content-container' : 'content-container--right'}>
            <div className='list-header'>
                Kategorie {props.income ? 'przychodów' : 'wydatków'}
            </div>
            {
                props.categories.length === 0
                ? <div className='list-item list-item--message'>
                    <span>Brak kategorii</span>
                  </div>
                : props.categories.map((category) => {
                    return <CategoriesListItem key={category.categoryId} mode={props.mode} {...category} />
                })
            }
        </div>
    </div>
    
);

const mapStateToProps = (state, props) => {
    return {
        income: props.mode === "income",
        categories: props.mode === "income"
            ? categories(state.incomeCategories, state.activeAccount)
            : categories(state.expenseCategories, state.activeAccount)
    }
}

export default connect(mapStateToProps)(CategoriesList);
