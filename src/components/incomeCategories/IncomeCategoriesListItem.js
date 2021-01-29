import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class IncomeCategoriesListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name ? props.name : '',
            categoryId: props.categoryId ? props.categoryId : '',
        }
    }
    
    getCategoryAmount = (incomes=[]) => {
        let categoryAmount = 0;
        incomes.forEach(income => {
            if (income.categoryId === this.state.categoryId) {
                let incomeAmount = parseFloat(income.amount)
                categoryAmount += incomeAmount;
            }
        });
        return categoryAmount;
    }

    render() {
        return (
            <div>
                <Link className='list-item' to={`/accounts/${this.props.activeAccountId}/income_categories/${this.state.categoryId}`}>
                    <h3 className='list-item__title'>{this.state.name}</h3>
                    <h3 className='list-item__data'>Total amount earned: {this.getCategoryAmount(this.props.incomes)}</h3>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        incomes: state.incomes,
        activeAccountId: state.activeAccount.activeAccountId
    }
}

export default connect(mapStateToProps)(IncomeCategoriesListItem);
