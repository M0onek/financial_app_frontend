import numeral from "numeral";
import React from "react";
import { connect } from 'react-redux';
import goalTypes from '../../selectors/goal-types';

const goalName = ({goalType, categoryId, incomeCategories, expenseCategories}) => {
    const name = goalTypes[goalType].name
    if (categoryId === null) return name
    const mode = goalTypes[goalType].mode
    let category = '';

    if (mode === 'income' || mode === 'none') incomeCategories.forEach(cat => {
        if (cat.categoryId === categoryId) category = cat.name
    })

    if (mode === 'expense' || mode === 'none') expenseCategories.forEach(cat => {
        if (cat.categoryId === categoryId) category = cat.name
    })

    return `${name} (${category})`
}

const NotificationItem = (props) => (
    <div className='list-item'>
        <div>
            <h3 className='list-item__title'>{props.name}</h3>
            <span className='list-item__sub-title'>{goalName(props)}</span>
        </div>
        <div className='list-item__data'>{numeral(props.value).format('0,0.00')} / {numeral(props.amount).format('0,0.00')} zł</div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        goals: state.goals,
        incomeCategories: state.incomeCategories,
        expenseCategories: state.expenseCategories,
    }
}

export default connect(mapStateToProps)(NotificationItem);
