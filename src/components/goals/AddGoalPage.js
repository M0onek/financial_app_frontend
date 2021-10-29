import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import { addGoal } from '../../actions/goals';

const AddGoalPage = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Dodaj cel</h1>
            </div>
        </div>
        <div className='content-container'>
            <GoalForm
                onSubmit={(goal) => {
                    props.dispatch(addGoal({id: props.activeAccountId }, goal));
                    props.history.push(`/goals`);
                }}
            />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return { activeAccountId: state.activeAccount.activeAccountId }
}

export default connect(mapStateToProps)(AddGoalPage);
