import React from 'react';
import IncomeCategoriesForm from './IncomeCategoriesForm';
import IncomeCategoriesList from './IncomeCategoriesList';
import { addIncomeCategory } from '../../actions/incomeCategories';
import { connect } from 'react-redux';

const IncomeCategoriesPage = (props) => (
    <div>
        <IncomeCategoriesList />
        <IncomeCategoriesForm
            onSubmit={(category) => {
                props.dispatch(addIncomeCategory({id: props.activeAccountId}, category));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(IncomeCategoriesPage);
