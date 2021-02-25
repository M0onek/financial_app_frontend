import React from 'react';
import { connect } from 'react-redux';
import IncomeCategoriesForm from './IncomeCategoriesForm';
import { editIncomeCategory, removeIncomeCategory } from '../../actions/incomeCategories';

const EditIncomeCategoriesPage = (props) => {
    return (
        <div>
            <IncomeCategoriesForm
            category={props.incomeCategories.find((category)  => {
                category.categoryId === this.props.activeAccountId
            })}
            onSubmit={(category) => {
                props.dispatch(editIncomeCategory({ id: props.activeAccountId }, category));
                props.history.push(`/income_categories`);
            }} />
            <button onClick={() => {
                props.dispatch(removeIncomeCategory({ id: props.activeAccountId }))
                props.history.push(`/income_categories`);
            }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        incomeCategories: state.incomeCategories,
        // .find((category)  => {
        //     category.categoryId === props.match.params.categoryId
        // }),
        activeAccountId: state.activeAccount.activeAccountId
    };
};

export default connect(mapStateToProps)(EditIncomeCategoriesPage);