import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { sortByDate, sortByAmount, setStartDate ,setEndDate } from '../actions/filters';

class DateFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null,
        };
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onChangeSortBy = (event) => {
        if (event.target.value === 'date') {
             this.props.dispatch(sortByDate());
        } else if (event.target.value === 'amount') {
            this.props.dispatch(sortByAmount());
        }
    }

    render() {
        return (
            <div className='input-group'>
                { this.props.showSortBy === true
                    ? <div className='input-group__item'>
                        <select
                        className='select'
                        value={this.props.filters.sortBy}
                        onChange={this.onChangeSortBy}>
                        <option value='date'>Sortuj po dacie</option>
                        <option value='amount'>Sortuj po wartości</option>
                        </select>
                        </div>
                    : <div></div>
                }
                <div className='input-group__item'>
                    <DateRangePicker
                    startDateId='incSD'
                    endDateId='incED'
                    startDatePlaceholderText='Początek'
                    endDatePlaceholderText='Koniec'
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
                </div>
            </div>
        );
    };

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(DateFilter);
