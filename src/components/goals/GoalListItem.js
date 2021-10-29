import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';
import goalTypes from '../../selectors/goal-types';

const done = (value, amount) => parseFloat(value) >= parseFloat(amount)

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

const goalMode = (goalType, mode) => {
    const val = goalTypes[goalType].mode
    return val === mode || val === 'none'
}

const GoalListItem = ({ goalId, amount, name, goalType, value, categoryId, incomeCategories, expenseCategories }) => (
    <Link className='list-item' to={`/goals/${goalId}/edit`}>
        <div style={{ minWidth: '3rem', textAlign: 'center' }}>
            { done(value, amount) && <span className="material-icons" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>
                {goalTypes[goalType].mode !== 'expense' ? 'done' : 'close'}
            </span> }
        </div>
        <div>
            <h3 className='list-item__title'>{name}</h3>
            <span className='list-item__sub-title'>{goalName({goalType, categoryId, incomeCategories, expenseCategories})}</span>
        </div>
        <h3 className='list-item__data'>{numeral(value).format('0,0.00')} / {numeral(amount).format('0,0.00')} zł</h3>
    </Link>
);

const mapStateToProps = (state) => {
    return {
        incomeCategories: state.incomeCategories,
        expenseCategories: state.expenseCategories,
    }
}

export default connect(mapStateToProps)(GoalListItem);
