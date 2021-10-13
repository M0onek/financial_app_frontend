import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const RaportListItem = ({ amount, comment, date, category }, props) => (
    <div className='list-item'>
        <div>
            <h3 className='list-item__title'>{category ? category.name : ''}</h3>
            <span className='list-item__sub-title'>{moment(date).format('MMMM D, YYYY')}</span>
        </div>
        <h3 className='list-item__data'>{numeral(amount).format('0,0.00')} zł</h3>
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(RaportListItem);
