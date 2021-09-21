import React from 'react';
import CategoriesForm from './CategoriesForm';
import IncomeCategoriesList from '../incomeCategories/IncomeCategoriesList';
import { addIncomeCategory } from '../../actions/incomeCategories';
import ExpenseCategoriesForm from '../expenseCategories/ExpenseCategoriesForm';
import ExpenseCategoriesList from '../expenseCategories/ExpenseCategoriesList';
import { addExpenseCategory } from '../../actions/expenseCategories';
import { connect } from 'react-redux';

const CategoriesPage = (props) => (
    <div className="flex-columns">
        <div>
            <IncomeCategoriesList />
            <CategoriesForm
                onSubmit={(category) => {
                    props.dispatch(addIncomeCategory({id: props.activeAccountId}, category));
                }}
            />
        </div>
        <div>
            <ExpenseCategoriesList />
            <CategoriesForm
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
