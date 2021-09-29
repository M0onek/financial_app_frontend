import React from 'react';
import CategoriesForm from './CategoriesForm';
import CategoriesList from './CategoriesList';
import { addIncomeCategory } from '../../actions/incomeCategories';
import ExpenseCategoriesForm from '../expenseCategories/ExpenseCategoriesForm';
import ExpenseCategoriesList from '../expenseCategories/ExpenseCategoriesList';
import { addExpenseCategory } from '../../actions/expenseCategories';
import { connect } from 'react-redux';

const CategoriesPage = (props) => (
    <div className="flex-columns">
        <div>
            <CategoriesList mode="income" />
            <CategoriesForm mode="income"
                onSubmit={(category) => {
                    props.dispatch(addIncomeCategory({id: props.activeAccountId}, category));
                }}
            />
        </div>
        <div>
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
