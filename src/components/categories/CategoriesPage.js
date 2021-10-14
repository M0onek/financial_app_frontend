import React from 'react';
import CategoriesForm from './CategoriesForm';
import CategoriesList from './CategoriesList';
import { addIncomeCategory } from '../../actions/incomeCategories';
import { addExpenseCategory } from '../../actions/expenseCategories';
import { connect } from 'react-redux';

const CategoriesPage = (props) => (
    <div className="flex-columns">
        <div>
            <div className='summary'>
                <div className='content-container'>
                    <h1 className='summary__title'>Kategorie przychodów</h1>
                </div>
                <div className='content-container' style={{marginBottom: '0'}}>
                    <CategoriesForm mode="income"
                        onSubmit={(category) => {
                            props.dispatch(addIncomeCategory({id: props.activeAccountId}, category));
                        }}
                    />
                </div>
            </div>

            <CategoriesList mode="income" />
        </div>
        
        <div>
            <div className='summary'>
                <div className='content-container--right'>
                    <h1 className='summary__title'>Kategorie wydatków</h1>            
                </div>
                <div className='content-container--right' style={{marginBottom: '0'}}>
                    <CategoriesForm mode="expense"
                        onSubmit={(category) => {
                            props.dispatch(addExpenseCategory({id: props.activeAccountId}, category));
                        }}
                    />
                </div>
            </div>
            
            <CategoriesList mode="expense" />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(CategoriesPage);
