import React from 'react';
import { connect } from 'react-redux';
import IncomeCategoriesForm from './IncomeCategoriesForm';
import { editIncomeCategory, removeIncomeCategory } from '../../actions/incomeCategories';

const EditIncomeCategoriesPage = (props) => {
    return (
        <div>
            <IncomeCategoriesForm
            category={props.incomeCategory}
            onSubmit={(category) => {
                props.dispatch(editIncomeCategory({ id: props.activeAccountId }, category));
                props.history.push(`/accounts/${props.activeAccountId}/income_categories`);
            }} />
            <button onClick={() => {
                props.dispatch(removeIncomeCategory({ id: props.activeAccountId }))
                props.history.push(`/accounts/${props.activeAccountId}/income_categories`);
            }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        incomeCategory: state.incomeCategories.find((category)  => {
            category.categoryId === props.match.params.categoryId
        }),
        activeAccountId: state.activeAccount.activeAccountId
    };
};

export default connect(mapStateToProps)(EditIncomeCategoriesPage);