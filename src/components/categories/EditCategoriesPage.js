import React from 'react';
import { connect } from 'react-redux';
import CategoriesForm from './CategoriesForm';
import { editExpenseCategory, removeExpenseCategory } from '../../actions/expenseCategories';
import { editIncomeCategory, removeIncomeCategory } from '../../actions/incomeCategories';

const EditCategoriesPage = (props) => {
    return (
        <div>
            <CategoriesForm
            category={props.expenseCategories.find((category) => {
                category.categoryId === props.activeAccountId
            })}
            onSubmit={(category) => {
                if (props.mode === "income") { 
                    props.dispatch(editIncomeCategory({ id: props.activeAccountId }, category));
                    props.history.push(`/income_categories`);
                }
                else if (props.mode === "expense") {
                    props.dispatch(editExpenseCategory({ id: props.activeAccountId }, category));
                    props.history.push(`/expense_categories`);
                }
                else {
                    console.error(`[EditCategoriesPage] Unknown mode: '${props.mode}'`)
                }
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
        categories: state.mode == "income" ? state.incomeCategories : state.expenseCategories,
        // .find((category)  => {
        //     category.categoryId === props.match.params.categoryId
        // }),
        activeAccountId: state.activeAccount.activeAccountId,
        mode: state.mode
    };
};

export default connect(mapStateToProps)(EditCategoriesPage);