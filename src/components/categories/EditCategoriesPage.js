import React from 'react';
import { connect } from 'react-redux';
import CategoriesForm from './CategoriesForm';
import { editExpenseCategory, removeExpenseCategory } from '../../actions/expenseCategories';
import { editIncomeCategory, removeIncomeCategory } from '../../actions/incomeCategories';

const EditCategoriesPage = (props) => {
    return (
        <div>
            <CategoriesForm
            category={props.category}
            onSubmit={(name) => {
                props.dispatch((props.mode === "income" ? editIncomeCategory : editExpenseCategory)({ id: props.activeAccountId }, { id: props.category.categoryId}, { name }));
                props.history.push(`/categories`);
            }} />
            <button onClick={() => {
                props.dispatch((props.mode === "income" ? removeIncomeCategory : removeExpenseCategory)({ id: props.activeAccountId }))
                props.history.push(`/categories`);
            }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        mode: props.match.params.mode,
        category: (props.match.params.mode === "income" ? state.incomeCategories : state.expenseCategories).find((category) => {
            return category.categoryId === props.match.params.categoryId
        }),
        activeAccountId: state.activeAccount.activeAccountId,
    };
};

export default connect(mapStateToProps)(EditCategoriesPage);