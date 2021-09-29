import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = ({ expenseId, amount, comment, date, category }, props) => (
    <Link className='list-item' to={`/dashboard/expenses/${expenseId}/edit`}>
        <div>
            <h3 className='list-item__title'>{category.name}</h3>
            <span className='list-item__sub-title'>{moment(date).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className='list-item__data'>{numeral(amount).format('$0,0.00')}</h3>
    </Link>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(ExpenseListItem);
