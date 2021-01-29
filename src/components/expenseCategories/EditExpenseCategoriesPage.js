import React from 'react';
import { connect } from 'react-redux';
import ExpenseCategoriesForm from './ExpenseCategoriesForm';
import { editExpenseCategory, removeExpenseCategory } from '../../actions/expenseCategories';

const EditExpenseCategoriesPage = (props) => {
    return (
        <div>
            <ExpenseCategoriesForm
            category={props.expenseCategory}
            onSubmit={(category) => {
                props.dispatch(editExpenseCategory({ id: props.activeAccountId }, category));
                props.history.push(`/accounts/${props.activeAccountId}/expense_categories`);
            }} />
            <button onClick={() => {
                props.dispatch(removeExpenseCategory({ id: props.activeAccountId }))
                props.history.push(`/accounts/${props.activeAccountId}/expense_categories`);
            }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expenseCategory: state.expenseCategories.find((category)  => {
            category.categoryId === props.match.params.categoryId
        }),
        activeAccountId: state.activeAccount.activeAccountId
    };
};

export default connect(mapStateToProps)(EditExpenseCategoriesPage);