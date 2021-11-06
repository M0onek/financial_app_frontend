import React from "react";
import { connect } from 'react-redux';
import NotificationBox from "./NotificationBox";

const countDone = (goals) => goals.reduce((count, goal) => {
    if (parseFloat(goal.value) >= parseFloat(goal.amount)) count++
    return count
}, 0)

class NotificationIcon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: true,
        }
    }

    onClick = (e) => {
        e.preventDefault()
        const collapsed = !this.state.collapsed
        this.setState({ collapsed })
    }

    render() {
        const count = countDone(this.props.goals)

        return (
            <div>
                <div className="menu__header-item">
                    <div className="notification-icon" onClick={this.onClick}>
                        <span className="material-icons menu__icon">{ count === 0 ? 'notifications_none' : 'notifications'}</span>
                        { count !== 0 && <div className="notification-icon__count">{count}</div>}
                        <div className={this.state.collapsed ? 'notification--collapsed' : ''}>
                            <NotificationBox/>
                        </div>
                    </div>
                    <div className={this.state.collapsed ? 'notification__overlay notification--collapsed' : 'notification__overlay'} onClick={this.onClick}></div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        goals: state.goals,
    }
}

export default connect(mapStateToProps)(NotificationIcon);
