import React from 'react';
import { connect } from 'react-redux';
import ExpenseCategoriesForm from './ExpenseCategoriesForm';
import { editExpenseCategory, removeExpenseCategory } from '../../actions/expenseCategories';

const EditExpenseCategoriesPage = (props) => {
    return (
        <div>
            <ExpenseCategoriesForm
            category={props.expenseCategories.find((category) => {
                category.categoryId === props.activeAccountId
            })}
            onSubmit={(category) => {
                props.dispatch(editExpenseCategory({ id: props.activeAccountId }, category));
                props.history.push(`/expense_categories`);
            }} />
            <button onClick={() => {
                props.dispatch(removeExpenseCategory({ id: props.activeAccountId }))
                props.history.push(`/expense_categories`);
            }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expenseCategories: state.expenseCategories,
        // .find((category)  => {
        //     category.categoryId === props.match.params.categoryId
        // }),
        activeAccountId: state.activeAccount.activeAccountId
    };
};

export default connect(mapStateToProps)(EditExpenseCategoriesPage);