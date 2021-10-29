import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import { editGoal, removeGoal } from '../../actions/goals';

const EditGoalPage = (props) => {
    if (props.goal === undefined) return <Redirect to="/goals"/>

    return (
        <div>
            <div className='summary'>
                <div className='content-container'>
                    <h1 className='summary__title'>Edytuj cel</h1>
                </div>
            </div>
            <div className='content-container'>
                <GoalForm
                goal={props.goal}
                onSubmit={(goal) => {
                    props.dispatch(editGoal({ id: props.goal.accountId }, { id: props.goal.goalId }, goal));
                    props.history.push(`/goals`);
                }} />
                <button className='button button--red' onClick={() => {
                    props.dispatch(removeGoal({ id: props.goal.accountId }, { id: props.goal.goalId }))
                    props.history.push(`/goals`);
                }}>Usuń</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        goal: state.goals.find((goal)  => goal.goalId === props.match.params.goalId),
        activeAccountId: state.activeAccount.activeAccountId
    };
};

export default connect(mapStateToProps)(EditGoalPage);