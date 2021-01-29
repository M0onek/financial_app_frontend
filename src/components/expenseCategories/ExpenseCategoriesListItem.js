import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ExpenseCategoriesListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name ? props.name : '',
            categoryId: props.categoryId ? props.categoryId : '',
        }
    }

    getCategoryAmount = (expenses=[]) => {
        let categoryAmount = 0;
        expenses.forEach(expense => {
            if (expense.categoryId === this.state.categoryId) {
                let expenseAmount = parseFloat(expense.amount)
                categoryAmount += expenseAmount;
            }
        });
        return categoryAmount;
    }

    render() {
        return (
            <div>
                <Link className='list-item' to={`/accounts/${this.props.activeAccountId}/expense_categories/${this.state.categoryId}`}>
                    <h3 className='list-item__title'>{this.state.name}</h3>
                    <h3 className='list-item__data'>Total amount spend: {this.getCategoryAmount(this.props.expenses)}</h3>
                </Link>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        expenses: state.expenses,
        activeAccountId: state.activeAccount.activeAccountId 
    }
}

export default connect(mapStateToProps)(ExpenseCategoriesListItem);
