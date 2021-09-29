import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class IncomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: props.income ? props.income.amount.toString() : '',
            categoryId: props.income ? props.income.categoryId : 'default',
            comment: props.income ? props.income.comment : '',
            date: props.income ? moment(props.income.date) : moment(),
            calendarFocused: false,
            error: ''
        };
    };
    
    onCommentChange = (event) => {
        const comment = event.target.value;
        this.setState(() => ({ comment }));
    }

    onIncomeCategoryChange = (event) => {
        const categoryId = event.target.value;
        this.setState(() => ({ categoryId }))
    }

    onAmountChange = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (date) => {
        if (date) {
            this.setState(() => ({ date }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = ((event) => {
        event.preventDefault();
        if (!this.state.amount || this.state.categoryId === 'default') {
            this.setState(() => ({ error: 'Please provide amount and pick a category.' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                amount: parseFloat(this.state.amount),
                comment: this.state.comment,
                date: this.state.date.valueOf(),
                categoryId: this.state.categoryId
            })
        }
    })

    onAddCategory = (event) => {
        event.preventDefault();
        // TODO: show modal
    }

    categoryOptions = (categories) => {
        let options = [];
        categories.forEach((category) => {
            options.push(<option key={category.categoryId} value={category.categoryId}>{category.name}</option>)
        })
        return options;
    }

    render() {
        return (
                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input
                        className='text-input'
                        type='text'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        autoFocus
                    />
                    <div className="SingleDatePicker--no-margin">
                        <SingleDatePicker
                            date={this.state.date}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                        />
                    </div>
                    <div className="flex">
                        <select
                            className='select flex__grow radius-left'
                            value={this.state.categoryId} 
                            onChange={this.onIncomeCategoryChange}>
                            <option disabled value='default'>Choose category</option>
                            {this.categoryOptions(this.props.incomeCategories)}
                        </select>
                        <button
                            className="button button--no-margin radius-right"
                            onClick={this.onAddCategory}>
                            New
                        </button>
                    </div>
                    <textarea
                        className='textarea'
                        placeholder='Add a comment (optional)'
                        value={this.state.comment}
                        onChange={this.onCommentChange}
                    >
                    </textarea>
                    <div>
                        <button className='button'>Save Income</button>
                    </div>
                </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.activeAccount.activeAccountId)
    return {
        incomeCategories: state.incomeCategories
        // .filter((category) => {
        //     category.accountId !== state.activeAccount.activeAccountId
        // })
    }
}

export default connect(mapStateToProps)(IncomeForm)
