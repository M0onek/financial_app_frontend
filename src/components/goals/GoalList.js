import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoalListItem from './GoalListItem';

const GoalsList = (props) => (
    <div className='content-container'>
        <div className='list-header'>Cele</div>
        {
            props.goals.length === 0 ? (
                <div className='list-item list-item--message'>
                    <span>Brak celi</span>
                </div>
            ) : (
                props.goals.map((goal) => {
                    return <GoalListItem key={goal.goalId} {...goal} />
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        goals: state.goals
    }
}

export default connect(mapStateToProps)(GoalsList);
