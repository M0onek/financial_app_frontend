import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { setGoalsDate } from "../../actions/filters";
import { getGoals } from "../../actions/goals";

class MonthSelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            goalsDate: this.props.goalsDate
        }
    }

    prev = () => {
        const goalsDate = this.state.goalsDate.subtract(1, 'months').startOf('month')
        this.props.dispatch(setGoalsDate(goalsDate))
        this.props.dispatch(getGoals({id: this.props.activeAccountId}, { year: goalsDate.year(), month: goalsDate.month()+1 }))
        this.setState({goalsDate})
    }

    next = () => {
        if (this.currentMonth()) return
        const goalsDate = this.state.goalsDate.add(1, 'months').startOf('month')
        this.props.dispatch(setGoalsDate(goalsDate))
        this.props.dispatch(getGoals({id: this.props.activeAccountId}, { year: goalsDate.year(), month: goalsDate.month()+1 }))
        this.setState({goalsDate})
    }

    currentMonth = () => {
        return this.state.goalsDate.year() === moment().year() && this.state.goalsDate.month() === moment().month()
    }
    
    render() {
        const date = this.state.goalsDate.format('MMMM YYYY')
        return (
            <div className='month-selector'>
                <button className='button radius-left' onClick={this.prev}>
                    <span className="material-icons">navigate_before</span>
                </button>
                <div className="month-selector__text">{date}</div>
                <button className='button radius-right' disabled={this.currentMonth()} onClick={this.next}>
                    <span className="material-icons">navigate_next</span>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goalsDate: state.filters.goalsDate,
        activeAccountId: state.activeAccount.activeAccountId
    }
}

export default connect(mapStateToProps)(MonthSelector);