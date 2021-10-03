import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: props.expense ? props.expense.amount.toString() : '',
            categoryId: props.expense ? props.expense.categoryId : 'default',
            comment: props.expense ? props.expense.comment : '',
            date: props.expense ? moment(props.expense.date) : moment(),
            calendarFocused: false,
            error: ''
        };
    };
    
    onCommentChange = (event) => {
        const comment = event.target.value;
        this.setState(() => ({ comment }));
    }

    onExpenseCategoryChange = (event) => {
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
                amount: this.state.amount,
                comment: this.state.comment,
                date: this.state.date.valueOf(),
                categoryId: this.state.categoryId
            })
        }
    })

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
                        placeholder='Wartość'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        autoFocus
                    />
                    <SingleDatePicker
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <select
                        className='select'
                        value={this.state.categoryId}
                        onChange={this.onExpenseCategoryChange}>
                        <option disabled value='default'>Wybierz kategorie</option>
                        {this.categoryOptions(this.props.expenseCategories)}
                    </select>
                    <textarea
                        className='textarea'
                        placeholder='Dodaj komentarz (opcionalne)'
                        value={this.state.comment}
                        onChange={this.onCommentChange}
                    >
                    </textarea>
                    <div>
                        <button className='button'>Zapisz</button>
                    </div>
                </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenseCategories: state.expenseCategories
    }
}

export default connect(mapStateToProps)(ExpenseForm)
