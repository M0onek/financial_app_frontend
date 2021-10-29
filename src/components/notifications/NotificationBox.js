import React from "react";
import { connect } from 'react-redux';
import NotificationItem from "./NotificationItem";

const done = (value, amount) => parseFloat(value) >= parseFloat(amount)

const NotificationBox = (props) => (
    <div className="notification-box">
        <div className="notification-box__content">
            { props.goals.filter(goal => done(goal.value, goal.amount)).map(goal => (
                <NotificationItem key={goal.goalId} {...goal} />
            )) }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        goals: state.goals,
    }
}

export default connect(mapStateToProps)(NotificationBox);
