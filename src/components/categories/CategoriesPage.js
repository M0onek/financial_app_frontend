import React from 'react';
import CategoriesForm from './CategoriesForm';
import CategoriesList from './CategoriesList';
import { addIncomeCategory } from '../../actions/incomeCategories';
import { addExpenseCategory } from '../../actions/expenseCategories';
import { connect } from 'react-redux';
import PieChart from '../charts/PieChart';

const CategoriesPage = (props) => (
    <div className="flex-columns">
        <div>
            <div className='summary'>
                <div className='content-container'>
                    <h1 className='summary__title'>Income Categories List</h1>            
                </div>       
            </div>

            <CategoriesList mode="income" />
            <CategoriesForm mode="income"
                onSubmit={(category) => {
                    props.dispatch(addIncomeCategory({id: props.activeAccountId}, category));
                }}
            />
        </div>
        <div>
            <div className='summary'>
                <div className='content-container'>
                    <h1 className='summary__title'>Expense Categories List</h1>            
                </div>       
            </div>
            
            <CategoriesList mode="expense" />
            <CategoriesForm mode="expense"
                onSubmit={(category) => {
                    props.dispatch(addExpenseCategory({id: props.activeAccountId}, category));
                }}
            />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(CategoriesPage);
