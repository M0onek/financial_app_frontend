import React from "react";
import { connect } from 'react-redux';
import NotificationItem from "./NotificationItem";

const done = (value, amount) => parseFloat(value) >= parseFloat(amount)

const NotificationBox = (props) => {
    const goals = props.goals.filter(goal => done(goal.value, goal.amount))

    return (
        <div className="notification-box">
            <div className="notification-box__content">
                { goals.length === 0
                    ? <div className='list-item list-item--message'>Brak powiadomień</div>
                    : goals.map(goal => (
                        <NotificationItem key={goal.goalId} {...goal} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals,
    }
}

export default connect(mapStateToProps)(NotificationBox);
