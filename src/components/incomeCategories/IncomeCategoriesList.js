import React from 'react';
import { connect } from 'react-redux';
import IncomeCategoriesListItem from './IncomeCategoriesListItem';
import visibleCategories from '../../selectors/categories';

const IncomeCategoriesList = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Income Categories List</h1>            
            </div>       
        </div>
        <div>
            <div className='content-container'>
            <div className='list-header'>Income categories</div>        
            {props.incomeCategories.map((category) => {
            return <IncomeCategoriesListItem key={category.categoryId} {...category} />
        })}
        </div>
        </div>
    </div>
    
);

const mapStateToProps = (state) => {
    return {
        incomeCategories: visibleCategories(state.incomeCategories, state.activeAccount)
    }
}

export default connect(mapStateToProps)(IncomeCategoriesList);
