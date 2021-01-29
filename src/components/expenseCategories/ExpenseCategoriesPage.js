import React from 'react';
import ExpenseCategoriesForm from './ExpenseCategoriesForm';
import ExpenseCategoriesList from './ExpenseCategoriesList';
import { addExpenseCategory } from '../../actions/expenseCategories';
import { connect } from 'react-redux';

const ExpenseCategoriesPage = (props) => (
    <div>
        <ExpenseCategoriesList />
        <ExpenseCategoriesForm
            onSubmit={(category) => {
                props.dispatch(addExpenseCategory({id: props.activeAccountId}, category));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(ExpenseCategoriesPage);
